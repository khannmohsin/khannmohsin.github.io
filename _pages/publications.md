---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed research publications and scholarly outputs.
nav: true
nav_order: 3
toc: false
---

<style>
/* =========================================================
   PUBLICATIONS — Clean Academic Cards (No Timeline)
   ========================================================= */

:root{
  --pub-text: #0b1220;
  --pub-muted: rgba(11,18,32,0.65);

  --pub-card: #ffffff;
  --pub-border: rgba(0,0,0,0.12);
  --pub-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --pub-accent: #3685f3;
  --pub-radius: 14px;
}

[data-theme="dark"]{
  --pub-text: rgba(255,255,255,0.92);
  --pub-muted: rgba(255,255,255,0.70);

  --pub-card: rgba(18,18,18,0.65);
  --pub-border: rgba(255,255,255,0.16);
  --pub-shadow: 0 14px 30px rgba(0,0,0,0.35);
}

/* Intro block */
.pub-intro{
  border: 1px solid var(--pub-border);
  border-radius: var(--pub-radius);
  background: var(--pub-card);
  box-shadow: var(--pub-shadow);
  padding: 16px 18px;
  margin: 14px 0 20px;
}
.pub-intro p{
  margin: 0;
  color: var(--pub-muted);
}

/* Bibliography list */
.publications ol.bibliography,
.publications ul.bibliography{
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Each publication card */
.publications .bibliography > li{
  border: 1px solid var(--pub-border);
  border-radius: var(--pub-radius);
  background: var(--pub-card);
  box-shadow: var(--pub-shadow);
  padding: 14px 16px;

  transition: transform 140ms ease,
              border-color 140ms ease,
              box-shadow 140ms ease;
}

.publications .bibliography > li:hover{
  transform: translateY(-2px);
  border-color: rgba(54,133,243,0.35);
}

/* Title */
.publications .bibliography .title,
.publications .bibliography .pub-title,
.publications .bibliography .bib-title{
  font-weight: 650;
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0 0 6px;
  color: var(--pub-text);
  letter-spacing: -0.01em;
}

/* Authors */
.publications .bibliography .author,
.publications .bibliography .authors,
.publications .bibliography .bib-authors{
  color: var(--pub-muted);
  margin: 0 0 6px;
}

/* Venue / journal */
.publications .bibliography .venue,
.publications .bibliography .journal,
.publications .bibliography .booktitle,
.publications .bibliography .bib-venue{
  color: var(--pub-muted);
  margin: 0 0 10px;
  font-style: italic;
}

/* Links (PDF / DOI / Code) */
.publications .bibliography a{
  color: var(--pub-accent);
  text-decoration: none;
}
.publications .bibliography a:hover{
  text-decoration: underline;
}

.publications .bibliography .links,
.publications .bibliography .bib-links{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

.publications .bibliography .links a,
.publications .bibliography .bib-links a{
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--pub-text);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .publications .bibliography > li{
    transition: none;
  }
  .publications .bibliography > li:hover{
    transform: none;
  }
}
</style>

<!-- Bibsearch -->
{% include bib_search.liquid %}

<div>
  <p>
    This page lists my peer-reviewed publications in cybersecurity, distributed systems,
    and applied cryptography. Publications are ordered in reverse chronological order.
    Use the search above to filter by title, author, venue, or year.
  </p>
</div>

<div class="publications">
  {% bibliography %}
</div>