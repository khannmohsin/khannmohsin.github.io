---
layout: page
permalink: /repositories/
title: Repositories
description: A collection of my open-source projects, research code, and collaborative development work hosted on GitHub.
nav: true
nav_order: 4
---

## GitHub Repositories

<div class="repo-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

<script defer src="{{ '/assets/js/repo-pinned.js' | relative_url }}"></script>