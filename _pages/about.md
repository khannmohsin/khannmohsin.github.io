---
layout: about
title: About
permalink: /
selected_papers: false
---

{% include flagship_home.liquid %}

{% assign flagship = site.data.flagship %}
{% assign featured_projects = site.projects | where: "related_publications", true | sort: "importance" %}

<section class="publications" aria-label="Featured research projects">
  <h2 class="bibliography">Featured Projects</h2>

  <div class="flag-featured-grid">
    {% for project in featured_projects limit: 3 %}
      {% if project.redirect %}
        {% assign project_url = project.redirect %}
      {% else %}
        {% assign project_url = project.url | relative_url %}
      {% endif %}
      <a class="flag-featured-item" href="{{ project_url }}">
        {% if project.img %}
          <div class="flag-featured-thumb">
            {% include figure.liquid loading="lazy" path=project.img sizes="(min-width: 768px) 260px, 90vw" class="flag-featured-img" alt=project.title cache_bust=true %}
          </div>
        {% endif %}
        <span class="flag-featured-title">{{ project.title }}</span>
      </a>
    {% endfor %}
  </div>

  <div class="flag-featured-more">
    <a class="flag-btn flag-btn--primary" href="{{ '/projects/' | relative_url }}">All Projects</a>
  </div>
</section>

<section class="publications" aria-label="Featured publications">
  <h2 class="bibliography">Featured Publications</h2>

  <div class="flag-pub-featured">
    {% bibliography --query @*[featured=true] --group_by none --template bib_minimal %}
  </div>

  <div class="flag-featured-more">
    <a class="flag-btn flag-btn--primary" href="{{ '/publications/' | relative_url }}">All Publications</a>
  </div>

  <hr>
</section>

<section class="flag-cta" aria-label="Collaboration and hiring call-to-action">
  <h3>{{ flagship.conversion.title }}</h3>
  <p>{{ flagship.conversion.body }}</p>
</section>
