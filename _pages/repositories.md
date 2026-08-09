---
layout: page
permalink: /repositories/
title: Repositories
nav: true
nav_order: 3
---

<div class="aux-flagship aux-repositories aux-publications" data-repo-root>
  <section class="repo-prime" aria-label="Repository overview">
    <div class="repo-toolbar">
      <input
        id="repo-search"
        type="search"
        placeholder="Search repositories by name, purpose, or language"
        autocomplete="off"
        aria-label="Search repositories"
      >
      <button id="repo-search-btn" class="aux-btn aux-btn--primary" type="button" aria-label="Search repositories">Search</button>
      <a class="aux-btn aux-btn--primary" href="https://github.com/khannmohsin" target="_blank" rel="noopener noreferrer">
        Open GitHub
      </a>
    </div>
  </section>

  <section class="publications" data-repo-section>
    <ol class="bibliography">
      {% for repo in site.data.repositories.github_repos %}
        {% include repository/repo.liquid repository=repo %}
      {% endfor %}
    </ol>

    <p class="text-muted" id="repo-empty" hidden>No repositories matched your search.</p>
  </section>
</div>

<script defer src="{{ '/assets/js/repo-pinned.js' | relative_url }}"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-repo-root]");
    if (!root) return;

    var searchInput = root.querySelector("#repo-search");
    var searchButton = root.querySelector("#repo-search-btn");
    var emptyNode = root.querySelector("#repo-empty");
    var repoItems = Array.prototype.slice.call(root.querySelectorAll("[data-repo-item]"));

    function applySearch() {
      if (!searchInput || !repoItems.length) return;
      var query = (searchInput.value || "").trim().toLowerCase();
      var visible = 0;

      repoItems.forEach(function (item) {
        var card = item.querySelector(".ghpinned-card");
        if (!card) return;

        var searchable = ((card.dataset.repoSearch || "") + " " + (card.dataset.repo || "")).toLowerCase();
        var show = query.length === 0 || searchable.indexOf(query) !== -1;
        item.hidden = !show;
        if (show) visible += 1;
      });

      if (emptyNode) emptyNode.hidden = visible !== 0;
    }

    if (searchInput) {
      searchInput.addEventListener("input", applySearch);
      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          applySearch();
        }
      });
    }

    if (searchButton) {
      searchButton.addEventListener("click", function () {
        applySearch();
        if (searchInput) searchInput.focus();
      });
    }

    document.addEventListener("repo-pinned:updated", applySearch);
    document.addEventListener("repo-pinned:ready", applySearch);
    applySearch();
  });
</script>
