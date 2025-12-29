(function () {
  async function main() {
    // 1) Confirm script is running
    console.log("[repo-pinned] script loaded");

    // 2) Ensure DOM is ready (important if script isn't deferred)
    if (document.readyState === "loading") {
      await new Promise((r) =>
        document.addEventListener("DOMContentLoaded", r, { once: true })
      );
    }

    const cards = document.querySelectorAll("[data-repo]");
    console.log("[repo-pinned] cards found:", cards.length);

    if (!cards.length) {
      console.warn(
        "[repo-pinned] No elements found with [data-repo]. Check your HTML."
      );
      return;
    }

    const cacheKey = "repoPinnedCache_v1";
    let cache = {};
    try {
      cache = JSON.parse(sessionStorage.getItem(cacheKey) || "{}");
    } catch (_) {
      cache = {};
    }

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

    async function fetchRepo(fullName) {
      if (cache[fullName]) return cache[fullName];

      const url = `https://api.github.com/repos/${fullName}`;
      console.log("[repo-pinned] fetching:", url);

      const res = await fetch(url, {
        headers: { Accept: "application/vnd.github+json" },
      });

      // Rate limit detection
      if (res.status === 403) {
        const remaining = res.headers.get("X-RateLimit-Remaining");
        const reset = res.headers.get("X-RateLimit-Reset");
        if (remaining === "0") {
          const resetTime = reset
            ? new Date(Number(reset) * 1000).toLocaleString()
            : "later";
          throw new Error(`GitHub API rate limit exceeded. Resets: ${resetTime}`);
        }
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`GitHub API ${res.status}. ${text.slice(0, 200)}`);
      }

      const data = await res.json();
      cache[fullName] = data;

      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(cache));
      } catch (_) {}

      return data;
    }

    async function fetchLanguages(fullName) {
      const key = `${fullName}__langs`;
      if (cache[key]) return cache[key];

      const url = `https://api.github.com/repos/${fullName}/languages`;
      console.log("[repo-pinned] fetching languages:", url);

      const res = await fetch(url, {
        headers: { Accept: "application/vnd.github+json" },
      });

      // Rate limit detection
      if (res.status === 403) {
        const remaining = res.headers.get("X-RateLimit-Remaining");
        const reset = res.headers.get("X-RateLimit-Reset");
        if (remaining === "0") {
          const resetTime = reset
            ? new Date(Number(reset) * 1000).toLocaleString()
            : "later";
          throw new Error(
            `GitHub API rate limit exceeded (languages). Resets: ${resetTime}`
          );
        }
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          `GitHub languages API ${res.status} for ${fullName}. ${text.slice(
            0,
            200
          )}`
        );
      }

      const data = await res.json(); // { Python: 12345, JavaScript: 234, ... }
      cache[key] = data;

      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(cache));
      } catch (_) {}

      return data;
    }

    function topLanguages(langsObj, topN = 3) {
      const entries = Object.entries(langsObj || {});
      if (!entries.length) return [];
      return entries.sort((a, b) => b[1] - a[1]).slice(0, topN);
    }

    for (const card of cards) {
      const fullName = card.getAttribute("data-repo");
      console.log("[repo-pinned] processing:", fullName);

      if (!fullName) continue;

      const descEl = card.querySelector(".ghpinned-desc");

      // For single-language fallback (if you still keep these in HTML)
      const langWrap = card.querySelector(".ghpinned-lang");
      const langName = card.querySelector(".ghpinned-lang-name");
      const langDot = card.querySelector(".ghpinned-lang-dot");

      // For multi-language container (recommended)
      const langsEl = card.querySelector(".ghpinned-langs");

      const starsCount = card.querySelector(".ghpinned-stars-count");
      const forksCount = card.querySelector(".ghpinned-forks-count");
      const forksWrap = card.querySelector(".ghpinned-forks");

      // If descEl missing, show a visible warning inside card
      if (!descEl) {
        console.warn("[repo-pinned] Missing .ghpinned-desc inside card:", fullName, card);
        const warn = document.createElement("p");
        warn.style.margin = "10px 0 0";
        warn.style.fontSize = "12px";
        warn.style.color = "crimson";
        warn.textContent =
          "Card template missing .ghpinned-desc (JS cannot inject repo data).";
        card.appendChild(warn);
        continue;
      }

      try {
        const repo = await fetchRepo(fullName);

        // Description
        descEl.textContent = repo.description || "No description provided.";

        // Languages (multi)
        if (langsEl) {
          const langsObj = await fetchLanguages(fullName);
          const top = topLanguages(langsObj, 3);

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

          // Hide the old single-language block if it exists
          if (langWrap) langWrap.style.display = "none";
        } else {
          // Fallback: single language (repo.language)
          if (repo.language && langName) {
            langName.textContent = repo.language;

            if (langDot) {
              langDot.style.backgroundColor = langColor[repo.language] || "#999";
              langDot.style.display = "inline-block";
            }

            if (langWrap) langWrap.style.display = "";
          } else if (langWrap) {
            langWrap.style.display = "none";
          }
        }

        // Stars
        if (starsCount) starsCount.textContent = String(repo.stargazers_count ?? 0);

        // Forks
        const forks = repo.forks_count ?? 0;
        if (forksCount) forksCount.textContent = String(forks);
        if (forksWrap) forksWrap.style.display = forks === 0 ? "none" : "";
      } catch (e) {
        console.error("[repo-pinned] failed for:", fullName, e);

        descEl.textContent = e?.message
          ? `Unable to load: ${e.message}`
          : "Unable to load repository details right now.";

        const meta = card.querySelector(".ghpinned-meta");
        if (meta) meta.style.display = "none";
      }
    }
  }

  main().catch((e) => console.error("[repo-pinned] fatal:", e));
})();