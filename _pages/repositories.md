---
layout: page
permalink: /repositories/
title: Repositories
description: A collection of my open-source projects, research code, and collaborative development work hosted on GitHub.
nav: true
nav_order: 4
---

{% assign repo_count = site.data.repositories.github_repos | size %}

<div class="aux-flagship aux-repositories" data-repo-root>
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

{% if repo_count > 2 %}

<section class="repo-featured-block" id="repo-featured-block" aria-label="Featured repositories">
<div class="repo-section-head">
<h2 class="repo-section-title">Featured Repositories</h2>
<p class="repo-section-caption">High-signal repositories for fastest technical review.</p>
</div>
<div class="repo-featured-grid">
{% for repo in site.data.repositories.github_repos limit: 2 %}
{% include repository/repo.liquid repository=repo variant="featured" %}
{% endfor %}
</div>
</section>
{% endif %}

  <section class="repo-catalog-block" aria-label="Repository catalog">
    <div class="repo-section-head">
      <h2 class="repo-section-title">Repository Catalog</h2>
      <p class="repo-section-caption">Complete open-source list with live repository metadata.</p>
    </div>

    <div class="repo-grid" id="repo-grid">
      {% if repo_count > 2 %}
        {% for repo in site.data.repositories.github_repos offset: 2 %}
          {% include repository/repo.liquid repository=repo variant="catalog" %}
        {% endfor %}
      {% else %}
        {% for repo in site.data.repositories.github_repos %}
          {% include repository/repo.liquid repository=repo variant="catalog" %}
        {% endfor %}
      {% endif %}
    </div>

  </section>
</div>

<script defer src="{{ '/assets/js/repo-pinned.js' | relative_url }}"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-repo-root]");
    if (!root) return;

    var searchInput = root.querySelector("#repo-search");
    var searchButton = root.querySelector("#repo-search-btn");
    var featuredBlock = root.querySelector("#repo-featured-block");
    var repoItems = Array.prototype.slice.call(root.querySelectorAll("[data-repo-item]"));

    function applySearch() {
      if (!searchInput || !repoItems.length) return;
      var query = (searchInput.value || "").trim().toLowerCase();
      var hideFeatured = query.length > 0;

      repoItems.forEach(function (item) {
        var card = item.querySelector(".ghpinned-card");
        if (!card) return;
        var isFeaturedItem = !!item.closest("#repo-featured-block");

        if (isFeaturedItem && hideFeatured) {
          item.hidden = true;
          return;
        }

        var searchable = ((card.dataset.repoSearch || "") + " " + (card.dataset.repo || "")).toLowerCase();
        var show = query.length === 0 || searchable.indexOf(query) !== -1;
        item.hidden = !show;
      });

      if (featuredBlock) {
        featuredBlock.hidden = hideFeatured;
      }
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
