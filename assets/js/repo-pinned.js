(function () {
  const CONCURRENCY = 6;          // 4–8 recommended
  const TTL_MS = 24 * 60 * 60e3;  // 24 hours
  const ENABLE_LANGUAGES = true;  // show top languages like your old script

  const langColor = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Go: "#00ADD8",
    Rust: "#dea584",
    Shell: "#89e051",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Solidity: "#AA6746",
  };

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  const now = () => Date.now();

  function loadCache() {
    try { return JSON.parse(localStorage.getItem("repoPinnedCache_v2") || "{}"); }
    catch { return {}; }
  }
  function saveCache(cache) {
    try { localStorage.setItem("repoPinnedCache_v2", JSON.stringify(cache)); }
    catch {}
  }
  function getCached(cache, key) {
    const item = cache[key];
    if (!item) return null;
    if (item.expiresAt && item.expiresAt < now()) return null;
    return item.value ?? null;
  }
  function setCached(cache, key, value) {
    cache[key] = { value, expiresAt: now() + TTL_MS };
  }

  async function fetchJSON(url) {
    const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });

    if (res.status === 403) {
      const remaining = res.headers.get("X-RateLimit-Remaining");
      if (remaining === "0") {
        const reset = res.headers.get("X-RateLimit-Reset");
        const resetTime = reset ? new Date(Number(reset) * 1000).toLocaleString() : "later";
        throw new Error(`GitHub API rate limit exceeded. Resets: ${resetTime}`);
      }
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`GitHub API ${res.status}. ${text.slice(0, 120)}`);
    }
    return res.json();
  }

  async function fetchRepo(cache, fullName) {
    const key = `repo:${fullName}`;
    const cached = getCached(cache, key);
    if (cached) return cached;

    const data = await fetchJSON(`https://api.github.com/repos/${fullName}`);
    setCached(cache, key, data);
    return data;
  }

  async function fetchLanguages(cache, fullName) {
    const key = `langs:${fullName}`;
    const cached = getCached(cache, key);
    if (cached) return cached;

    const data = await fetchJSON(`https://api.github.com/repos/${fullName}/languages`);
    setCached(cache, key, data);
    return data;
  }

  function topLanguages(langsObj, topN = 3) {
    const entries = Object.entries(langsObj || {});
    if (!entries.length) return [];
    return entries.sort((a, b) => b[1] - a[1]).slice(0, topN);
  }

  function renderSingleLanguage(card, language) {
    const langWrap = card.querySelector(".ghpinned-lang");
    const langName = card.querySelector(".ghpinned-lang-name");
    const langDot = card.querySelector(".ghpinned-lang-dot");

    if (!language || !langWrap || !langName) {
      if (langWrap) langWrap.style.display = "none";
      return;
    }

    langName.textContent = language;
    if (langDot) {
      langDot.style.backgroundColor = langColor[language] || "#999";
      langDot.style.display = "inline-block";
    }
    langWrap.style.display = "";
  }

  function renderMultiLanguages(card, top) {
    const langsEl = card.querySelector(".ghpinned-langs");
    const langWrap = card.querySelector(".ghpinned-lang");
    if (!langsEl) return false;

    if (!top.length) {
      langsEl.textContent = "";
      langsEl.style.display = "none";
    } else {
      langsEl.innerHTML = top
        .map(([name]) => {
          const color = langColor[name] || "#999";
          return `
            <span class="ghpinned-langchip">
              <span class="ghpinned-lang-dot" style="background:${color}"></span>
              <span class="ghpinned-lang-name">${name}</span>
            </span>
          `;
        })
        .join("");
      langsEl.style.display = "";
    }

    // Hide single-language container if multi exists
    if (langWrap) langWrap.style.display = "none";
    return true;
  }

  async function processCard(cache, card) {
    const fullName = card.getAttribute("data-repo");
    if (!fullName) return;

    const descEl = card.querySelector(".ghpinned-desc");
    const starsCount = card.querySelector(".ghpinned-stars-count");
    const forksCount = card.querySelector(".ghpinned-forks-count");
    const forksWrap = card.querySelector(".ghpinned-forks");

    if (descEl) descEl.textContent = "Loading…";

    try {
      const repo = await fetchRepo(cache, fullName);

      if (descEl) descEl.textContent = repo.description || "No description provided.";

      if (starsCount) starsCount.textContent = String(repo.stargazers_count ?? 0);
      const forks = repo.forks_count ?? 0;
      if (forksCount) forksCount.textContent = String(forks);
      if (forksWrap) forksWrap.style.display = forks === 0 ? "none" : "";

      // Prefer multi-language chips if the container exists.
      const hasMultiContainer = !!card.querySelector(".ghpinned-langs");

      if (ENABLE_LANGUAGES && hasMultiContainer) {
        const langsObj = await fetchLanguages(cache, fullName);
        const top = topLanguages(langsObj, 3);
        const usedMulti = renderMultiLanguages(card, top);
        if (!usedMulti) renderSingleLanguage(card, repo.language);
      } else {
        renderSingleLanguage(card, repo.language);
      }
    } catch (e) {
      if (descEl) descEl.textContent = e?.message ? `Unable to load: ${e.message}` : "Unable to load repository details.";
      const meta = card.querySelector(".ghpinned-meta");
      if (meta) meta.style.display = "none";
      console.error("[repo-pinned] failed:", fullName, e);
    }
  }

  async function runWithConcurrency(items, worker, limit) {
    let i = 0;
    const runners = new Array(limit).fill(0).map(async () => {
      while (i < items.length) {
        const idx = i++;
        await worker(items[idx]);
        await sleep(0);
      }
    });
    await Promise.all(runners);
  }

  async function main() {
    if (document.readyState === "loading") {
      await new Promise((r) => document.addEventListener("DOMContentLoaded", r, { once: true }));
    }

    const cards = Array.from(document.querySelectorAll("[data-repo]"));
    if (!cards.length) return;

    const cache = loadCache();
    await runWithConcurrency(cards, (card) => processCard(cache, card), CONCURRENCY);
    saveCache(cache);
  }

  main().catch((e) => console.error("[repo-pinned] fatal:", e));
})();