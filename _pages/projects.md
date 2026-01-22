---
layout: page
title: Projects
permalink: /projects/
description: Selected research, course, and management projects—organized by category.
nav: true
nav_order: 1
display_categories: [Training Projects, Cybersecurity Job Simulations, Capstone Industry Projects, Research Projects, Coursework Projects, Management Project]
horizontal: false
toc: false
---

<style>
/* =========================================================
   PROJECTS — Academic Cards + Category Sections
   Keeps existing includes: projects.liquid / projects_horizontal.liquid
   ========================================================= */

:root{
  --prj-text: #0b1220;
  --prj-muted: rgba(11,18,32,0.65);

  --prj-card: #ffffff;
  --prj-border: rgba(0,0,0,0.12);
  --prj-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --prj-accent: #3685f3;
  --prj-radius: 14px;
}

[data-theme="dark"]{
  --prj-text: rgba(255,255,255,0.92);
  --prj-muted: rgba(255,255,255,0.70);

  --prj-card: rgba(18,18,18,0.65);
  --prj-border: rgba(255,255,255,0.16);
  --prj-shadow: 0 14px 30px rgba(0,0,0,0.35);
}

/* Intro block */
.prj-intro{
  border: 1px solid var(--prj-border);
  border-radius: var(--prj-radius);
  background: var(--prj-card);
  box-shadow: var(--prj-shadow);
  padding: 16px 18px;
  margin: 14px 0 18px;
}
.prj-intro p{
  margin: 0;
  color: var(--prj-muted);
}

/* Category nav pills */
.prj-nav{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 18px;
  padding: 0;
}
.prj-nav a{
  display: inline-flex;
  align-items: center;
  gap: 8px;

  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--prj-text);

  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
  text-decoration: none;
}
.prj-nav a:hover{ text-decoration: underline; }
.prj-nav a:focus-visible{
  outline: 2px solid var(--prj-accent);
  outline-offset: 2px;
  border-radius: 999px;
}

/* Category section wrapper */
.prj-section{
  border: 1px solid var(--prj-border);
  border-radius: var(--prj-radius);
  background: var(--prj-card);
  box-shadow: var(--prj-shadow);
  padding: 16px 16px 10px;
  margin: 0 0 18px;
}

/* Category heading */
.prj-section h2.category{
  margin: 0 0 10px;
  color: var(--prj-text);
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

/* Small muted caption under category (optional) */
.prj-section .prj-caption{
  margin: 0 0 14px;
  color: var(--prj-muted);
  font-size: 0.95rem;
}

/* Make the bootstrap grid breathe inside the section */
.prj-section .row{
  margin-top: 4px;
}

/* =========================
   Project tags (pills)
   Used by updated _includes/projects.liquid
   ========================= */
.prj-tags{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.prj-tag{
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--prj-text);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.75rem;
  line-height: 1.2;
  white-space: nowrap;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .prj-nav a{ transition: none; }
}
</style>

<div class="projects">

  <div>
    <p>
      An overview of my work across research coursework, and applied <strong>Red Team and Blue Team security skills</strong> for transition towards cybersecurity industry.
      Projects are grouped by category and ordered by importance within each category.
    </p>
  </div>

  {% if site.enable_project_categories and page.display_categories %}
    <nav class="prj-nav" aria-label="Project categories">
      {% for category in page.display_categories %}
        <a href="#{{ category | slugify }}">{{ category }}</a>
      {% endfor %}
    </nav>
  {% endif %}

  {% if site.projects %}

    {% if site.enable_project_categories and page.display_categories %}

      {% for category in page.display_categories %}
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}

        <section class="prj-section" id="{{ category | slugify }}">
          <h2 class="category">{{ category }}</h2>

          {% if category == "Research Projects" %}
            <p class="prj-caption"></p>
          {% elsif category == "Coursework Projects" %}
            <p class="prj-caption"></p>
          {% elsif category == "Management Project" %}
            <p class="prj-caption"></p>
          {% endif %}

          {% if sorted_projects.size == 0 %}
            <p class="text-muted">No projects listed under this category yet.</p>
          {% else %}

            {% if page.horizontal %}
              <div class="container">
                <div class="row row-cols-1 row-cols-md-2">
                  {% for project in sorted_projects %}
                    {% include projects_horizontal.liquid %}
                  {% endfor %}
                </div>
              </div>
            {% else %}
              <div class="row row-cols-1 row-cols-md-3">
                {% for project in sorted_projects %}
                  {% include projects.liquid %}
                {% endfor %}
              </div>
            {% endif %}

          {% endif %}
        </section>

      {% endfor %}

    {% else %}

      {% assign sorted_projects = site.projects | sort: "importance" %}

      <section class="prj-section">
        <h2 class="category">All Projects</h2>
        <p class="prj-caption">A complete list, ordered by importance.</p>

        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for project in sorted_projects %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-3">
            {% for project in sorted_projects %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        {% endif %}
      </section>

    {% endif %}

  {% else %}
    <p class="text-muted">No projects found. Please add Markdown files to <code>_projects/</code>.</p>
  {% endif %}

</div>