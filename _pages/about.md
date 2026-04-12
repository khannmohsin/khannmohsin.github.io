---
layout: about
title: About
permalink: /
subtitle: Security Architectures for IoT and Distributed Systems
selected_papers: false
social: true
---

{% include flagship_home.liquid %}

<section class="flag-support flag-support--flow" aria-label="How I work">
  <div class="flag-support-grid flag-support-flow">
    <article class="flag-support-item">
      <p class="flag-support-step-title">Model Threats</p>
      <p>Define assets, adversaries, and trust boundaries.</p>
    </article>
    <article class="flag-support-item">
      <p class="flag-support-step-title">Prioritize Risks</p>
      <p>Rank attack paths by likelihood and impact.</p>
    </article>
    <article class="flag-support-item">
      <p class="flag-support-step-title">Design Controls</p>
      <p>Map risks to least-privilege and segmented architecture.</p>
    </article>
    <article class="flag-support-item">
      <p class="flag-support-step-title">Implement + Detect</p>
      <p>Deploy controls with telemetry, detections, and runbooks.</p>
    </article>
    <article class="flag-support-item">
      <p class="flag-support-step-title">Validate + Improve</p>
      <p>Test outcomes, tune decisions, and iterate continuously.</p>
    </article>
  </div>
</section>

{% assign flagship = site.data.flagship %}

<section class="flag-cta" aria-label="Collaboration and hiring call-to-action">
  <h3>{{ flagship.conversion.title }}</h3>
  <p>{{ flagship.conversion.body }}</p>
  <div class="flag-cta-row">
    {% for cta in flagship.conversion.ctas %}
      {% assign cta_url = cta.url %}
      {% unless cta.url contains '://' or cta.url contains 'mailto:' %}
        {% assign cta_url = cta.url | relative_url %}
      {% endunless %}
      <a
        class="flag-btn {% if cta.style == 'primary' %}flag-btn--primary{% endif %}"
        href="{{ cta_url }}"
        {% if cta.url contains '.pdf' %}target="_blank" rel="noopener noreferrer"{% endif %}
      >
        {{ cta.label }}
      </a>
    {% endfor %}
  </div>
</section>

<section class="flag-support flag-support--compact" aria-label="Featured research">
  <h3>Featured Research</h3>
  <p class="flag-support-intro">
    Performance Evaluation of Lightweight Cryptographic Ciphers on ARM Processor for IoT Deployments (SciSec, Springer LNCS 15441, 2024).
  </p>
  <div class="flag-cta-row">
    <a class="flag-btn flag-btn--primary" href="https://link.springer.com/chapter/10.1007/978-981-96-2417-1_14" target="_blank" rel="noopener noreferrer">Read Publication</a>
    <a class="flag-btn" href="{{ '/publications/' | relative_url }}">All Publications</a>
    <a class="flag-btn" href="{{ '/assets/pdf/My_Industrial_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Industry CV</a>
  </div>
</section>
