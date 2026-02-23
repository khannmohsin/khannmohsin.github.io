---
layout: page
title: Projects
permalink: /projects/
description: Selected research, industry, and cybersecurity projects organized for fast technical review.
nav: true
nav_order: 1
display_categories: [Training Projects, Cybersecurity Job Simulations, Capstone Industry Projects, Research Projects, Coursework Projects, Management Project]
horizontal: false
toc: false
---

{% assign all_projects = site.projects | sort: "importance" %}
{% assign featured_projects = site.projects | where: "related_publications", true | sort: "importance" %}
{% assign publication_count = featured_projects | size %}
{% assign simulation_count = site.projects | where: "category", "Cybersecurity Job Simulations" | size %}
{% assign capstone_count = site.projects | where: "category", "Capstone Industry Projects" | size %}

<div class="projects projects-flagship" data-projects-root>
  <section class="prj-hero">
    <div class="prj-hero-compact">
      <p>
        {{ all_projects.size }} total · {{ publication_count }} peer-reviewed · {{ simulation_count }} simulations · {{ capstone_count }} capstones
      </p>
    </div>
  </section>

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

  {% if site.enable_project_categories and page.display_categories %}
    <nav class="prj-nav" aria-label="Project categories">
      {% for category in page.display_categories %}
        {% assign category_count = site.projects | where: "category", category | size %}
        <a class="prj-nav-link" href="#{{ category | slugify }}" data-target="{{ category | slugify }}">
          <span class="prj-nav-text">{{ category }}</span>
          <span class="prj-nav-count">{{ category_count }}</span>
        </a>
      {% endfor %}
    </nav>
  {% endif %}

  {% if featured_projects.size > 0 %}
    <section class="prj-section prj-section-featured" id="featured-research">
      <div class="prj-section-head">
        <h2 class="prj-section-title">Featured Research Cases</h2>
        <p class="prj-caption">Peer-reviewed projects with explicit security architecture and empirical validation.</p>
      </div>

      <div class="prj-featured-scroll" aria-label="Featured projects carousel">
        {% for project in featured_projects limit: 4 %}
          {% include projects.liquid variant="featured" %}
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% if site.projects %}
    {% if site.enable_project_categories and page.display_categories %}
      {% for category in page.display_categories %}
        {% assign sorted_projects = site.projects | where: "category", category | sort: "importance" %}

        <section class="prj-section" id="{{ category | slugify }}" data-project-section>
          <div class="prj-section-head">
            <h2 class="prj-section-title">{{ category }}</h2>
            <span class="prj-section-count">{{ sorted_projects.size }} projects</span>
          </div>

          {% case category %}
            {% when "Research Projects" %}
              <p class="prj-caption">Security architecture, cryptographic benchmarking, and IoT trust-system design.</p>
            {% when "Cybersecurity Job Simulations" %}
              <p class="prj-caption">Scenario-based operational work aligned with SOC, IAM, and risk workflows.</p>
            {% when "Capstone Industry Projects" %}
              <p class="prj-caption">Applied enterprise projects on forensics, cloud, vulnerability operations, and architecture hardening.</p>
            {% when "Training Projects" %}
              <p class="prj-caption">Structured practical labs for defensive and offensive security readiness.</p>
            {% when "Coursework Projects" %}
              <p class="prj-caption">Distributed systems and algorithmic implementations with systems-level reasoning.</p>
            {% when "Management Project" %}
              <p class="prj-caption">Technology-management case research with operational and governance implications.</p>
          {% endcase %}

          {% if sorted_projects.size == 0 %}
            <p class="text-muted">No projects listed under this category yet.</p>
          {% else %}
            {% if page.horizontal %}
              <div class="container px-0">
                <div class="row row-cols-1 row-cols-md-2 g-3 mx-0">
                  {% for project in sorted_projects %}
                    {% include projects_horizontal.liquid %}
                  {% endfor %}
                </div>
              </div>
            {% else %}
              <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-0">
                {% for project in sorted_projects %}
                  {% include projects.liquid variant="catalog" %}
                {% endfor %}
              </div>
            {% endif %}
          {% endif %}
        </section>
      {% endfor %}
    {% else %}
      <section class="prj-section" data-project-section>
        <div class="prj-section-head">
          <h2 class="prj-section-title">All Projects</h2>
          <span class="prj-section-count">{{ all_projects.size }} projects</span>
        </div>

        <p class="prj-caption">Complete list sorted by importance.</p>

        {% if page.horizontal %}
          <div class="container px-0">
            <div class="row row-cols-1 row-cols-md-2 g-3 mx-0">
              {% for project in all_projects %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-0">
            {% for project in all_projects %}
              {% include projects.liquid variant="catalog" %}
            {% endfor %}
          </div>
        {% endif %}
      </section>
    {% endif %}
  {% else %}
    <p class="text-muted">No projects found. Add Markdown files to <code>_projects/</code>.</p>
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
    var navLinks = Array.prototype.slice.call(root.querySelectorAll(".prj-nav-link"));

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

      var firstVisibleSection = sections.find(function (section) {
        return !section.hidden;
      });

      if (firstVisibleSection) {
        setActiveNav(firstVisibleSection.id);
      }

      emptyNode.hidden = visibleCards !== 0;
    }

    function setActiveNav(targetId) {
      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.dataset.target === targetId);
      });
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

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setActiveNav(link.dataset.target);
      });
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.hidden) {
              setActiveNav(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0.1
        }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    applyFilters();
  });
</script>
