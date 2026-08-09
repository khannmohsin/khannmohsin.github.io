---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
toc: false
---

<div class="aux-flagship aux-publications">
  {% include bib_search.liquid placeholder="Filter publications by title, author, venue, or year" %}
  <div class="aux-publications-intro" aria-label="Publication search context">
    <div class="aux-chip-row" aria-label="Research domains">
      <span class="aux-chip">IoT/OT Security</span>
      <span class="aux-chip">Lightweight Cryptography</span>
      <span class="aux-chip">Security Engineering</span>
      <span class="aux-chip">Distributed Trust</span>
    </div>
  </div>

  <div class="publications">
    {% bibliography %}
  </div>
</div>
