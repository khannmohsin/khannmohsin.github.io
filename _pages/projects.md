---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 1
display_categories:
  [Research Projects, Cybersecurity Hands-On Labs, IBM Capstone Projects, Management Project]
toc: false
---

{% assign all_projects = site.projects | sort: "importance" %}

<div class="projects projects-flagship aux-flagship aux-publications" data-projects-root>
  <section class="prj-controls" aria-label="Project filters">
    <div class="prj-controls-grid">
      <div class="prj-control-field prj-control-search">
        <input
          id="prj-search"
          type="search"
          placeholder="Search projects by title, domain, or tags"
          autocomplete="off"
          aria-label="Search projects"
        />
      </div>

      <div class="prj-control-field prj-control-action">
        <button id="prj-search-btn" class="prj-btn prj-btn-primary prj-search-btn" type="button" aria-label="Search projects">
          Search
        </button>
      </div>

    </div>

  </section>

{% if site.projects %}
{% if site.enable_project_categories and page.display_categories %}
{% for category in page.display_categories %}
{% assign sorted_projects = site.projects | where: "category", category | sort: "importance" %}

        <section id="{{ category | slugify }}" class="publications" data-project-section>
          <h2 class="bibliography">{{ category }}</h2>

          {% if sorted_projects.size == 0 %}
            <p class="text-muted">No projects listed under this category yet.</p>
          {% else %}
            <ol class="bibliography">
              {% for project in sorted_projects %}
                {% include projects_list_item.liquid %}
              {% endfor %}
            </ol>
          {% endif %}
        </section>
      {% endfor %}
    {% else %}
      <section class="publications" data-project-section>
        <h2 class="bibliography">All Projects</h2>

        <ol class="bibliography">
          {% for project in all_projects %}
            {% include projects_list_item.liquid %}
          {% endfor %}
        </ol>
      </section>
    {% endif %}

{% else %}

<p class="text-muted">No projects found. Add Markdown files to <code>\_projects/</code>.</p>
{% endif %}

  <section class="prj-empty" id="prj-empty" hidden>
    <h3>No projects matched your current filters.</h3>
    <p>Try broadening your search terms.</p>
  </section>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-projects-root]");
    if (!root) return;

    var searchInput = root.querySelector("#prj-search");
    var searchButton = root.querySelector("#prj-search-btn");
    var emptyNode = root.querySelector("#prj-empty");
    var cards = Array.prototype.slice.call(root.querySelectorAll("[data-project-card]"));
    var sections = Array.prototype.slice.call(root.querySelectorAll("[data-project-section]"));

    function applyFilters() {
      var query = (searchInput.value || "").trim().toLowerCase();
      var visibleCards = 0;

      cards.forEach(function (card) {
        var searchable = card.dataset.search || "";

        var shouldShow = query.length === 0 || searchable.indexOf(query) !== -1;
        card.hidden = !shouldShow;

        if (shouldShow) {
          visibleCards += 1;
        }
      });

      sections.forEach(function (section) {
        var sectionCards = Array.prototype.slice.call(section.querySelectorAll("[data-project-card]"));
        if (!sectionCards.length) return;

        var hasVisibleCard = sectionCards.some(function (card) {
          return !card.hidden;
        });

        section.hidden = !hasVisibleCard;
      });

      emptyNode.hidden = visibleCards !== 0;
    }

    searchInput.addEventListener("input", applyFilters);
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        applyFilters();
      }
    });
    if (searchButton) {
      searchButton.addEventListener("click", applyFilters);
    }

    applyFilters();
  });
</script>
