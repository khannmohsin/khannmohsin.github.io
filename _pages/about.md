---
layout: about
title: About
permalink: /
subtitle: Cybersecurity Professional
profile:
  align: right
  image: mohsin_khan.png
  image_circular: false
selected_papers: false
social: true
---

<style>
/* =========================================================
   ABOUT — Academic Cards (matches Publications + Story style)
   - Keep intro text from overlapping the theme profile image by
     reserving right-side space on wide screens.
   - Everything after the intro becomes full-width.
   ========================================================= */

:root{
  --abt-text: #0b1220;
  --abt-muted: rgba(11,18,32,0.65);

  --abt-card: #ffffff;
  --abt-border: rgba(0,0,0,0.12);
  --abt-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --abt-accent: #3685f3;
  --abt-radius: 14px;
}

[data-theme="dark"]{
  --abt-text: rgba(255,255,255,0.92);
  --abt-muted: rgba(255,255,255,0.70);

  --abt-card: rgba(18,18,18,0.65);
  --abt-border: rgba(255,255,255,0.16);
  --abt-shadow: 0 14px 30px rgba(0,0,0,0.35);
}

/* Page wrapper */
.about-wrap{ margin-top: 10px; }

/* Intro block: avoid profile image overlap (right aligned profile) */
.abt-intro{
  border: 1px solid var(--abt-border);
  border-radius: var(--abt-radius);
  background: var(--abt-card);
  box-shadow: var(--abt-shadow);
  padding: 16px 18px;
  margin: 14px 0 18px;
  max-width: 635px;
  color: var(--abt-muted);
  line-height: 1.6;
}

/* Reserve space for the profile image on desktop.
   If your theme changes image width, adjust 320px. */
@media (min-width: 980px){
  .abt-intro{
    margin-right: 280px;
  }
}

/* Full-width sections after intro */
.abt-clear{ clear: both; }

/* Shared card */
.abt-card{
  border: 1px solid var(--abt-border);
  border-radius: var(--abt-radius);
  background: var(--abt-card);
  box-shadow: var(--abt-shadow);
  padding: 16px 18px;
  margin: 0 0 18px;

  transition: transform 140ms ease,
              border-color 140ms ease,
              box-shadow 140ms ease;
}

/* Hover effect (same behavior as story cards) */
.abt-card:hover{
  transform: translateY(-2px);
  border-color: rgba(54,133,243,0.35);
}

/* Titles */
.abt-card h2,
.abt-card h3{
  margin: 0 0 8px;
  color: var(--abt-text);
  letter-spacing: -0.01em;
}
.abt-card h2{ font-size: 1.15rem; }
.abt-card h3{ font-size: 1.05rem; }

/* Body */
.abt-card p{
  margin: 0 0 10px;
  color: var(--abt-muted);
}
.abt-card p:last-child{ margin-bottom: 0; }

.abt-card strong{ color: var(--abt-text); }

/* Small tag/pill style */
.abt-pills{
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.abt-pill{
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--abt-text);
  text-decoration: none;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
}
.abt-pill:hover{ text-decoration: underline; }
.abt-pill:focus-visible{
  outline: 2px solid var(--abt-accent);
  outline-offset: 2px;
  border-radius: 999px;
}

/* =========================
   Projects rail (horizontal scroll)
   ========================= */
.abt-head h3{
  margin: 0;
  font-size: 1.05rem;
}
.abt-mutedline{
  margin: 6px 0 0;
  color: var(--abt-muted);
}

.abt-rail{
  margin-top: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding-bottom: 6px;
  outline: none;
}
.abt-rail-track{
  display: flex;
  gap: 14px;
  align-items: stretch;
}
.abt-rail-item{
  flex: 0 0 360px;
  max-width: 360px;
  scroll-snap-align: start;
}

/* Ensure included cards fill rail cell */
.abt-rail-item .col,
.abt-rail-item .project,
.abt-rail-item .card{
  width: 100% !important;
}

/* Optional nicer scrollbar */
.abt-rail::-webkit-scrollbar{ height: 10px; }
.abt-rail::-webkit-scrollbar-thumb{
  border-radius: 999px;
  background: rgba(0,0,0,0.18);
}
[data-theme="dark"] .abt-rail::-webkit-scrollbar-thumb{
  background: rgba(255,255,255,0.18);
}

.abt-rail-foot{
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 720px){
  .abt-rail-item{
    flex-basis: 82vw;
    max-width: 82vw;
  }
}

/* About page: hide project descriptions inside the horizontal rail */
.abt-rail .card-text{
  display: none !important;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .abt-card{ transition: none; }
  .abt-card:hover{ transform: none; }
}

/* CV inside About: visually align bootstrap .card with abt-card theme */
.abt-cv .card{
  border: 1px solid var(--abt-border) !important;
  border-radius: var(--abt-radius) !important;
  background: var(--abt-card) !important;
  box-shadow: var(--abt-shadow) !important;
}

/* Reduce vertical spacing when CV is embedded */
.abt-cv .card.mt-3{ margin-top: 12px !important; }

</style>

<div class="about-wrap">

  <!-- INTRO (keeps clear of the profile photo on desktop) -->
  <div class="abt-intro">
    I am a <strong>PhD research fellow</strong> in cybersecurity.
      My research project was focused on building
      <strong>secure, autonomous, and resilient distributed systems</strong> for
      safety-critical <strong>IoT</strong> and <strong>operational technology (OT)</strong>.
      I explored how trust, access control, and cryptographic guarantees can be enforced across distributed nodes under resource constraints and adversarial conditions.
      I am transitioning from academic security research to industry practice by acquiring hands-on Blue Team and Red Team skills, including detection, response, governance, and penetration testing.
      <div class="abt-pills">
        <span class="abt-pill">IoT Security</span>
        <span class="abt-pill">Access Control</span>
        <span class="abt-pill">Cryptography</span>
        <span class="abt-pill">Read Team</span>
        <span class="abt-pill">Blue Team</span>
      </div>
  </div>

  <!-- Everything below becomes full-width -->
  <div class="abt-clear"></div>

  <section class="abt-card abt-cv">
  <details>
    <summary><strong>Curriculum Vitae</strong> (click to expand)</summary>

    <div class="abt-cv-body">
      <!-- Optional: show the same CV PDF buttons as /cv/ -->
      <div class="abt-pills" style="margin-bottom: 12px;">
        {% if page.cv_academic_pdf %}
          <a class="abt-pill" href="{{ page.cv_academic_pdf | prepend: 'assets/pdf/' | relative_url }}" target="_blank" rel="noopener noreferrer">
            Academic CV
          </a>
        {% endif %}
        {% if page.cv_industry_pdf %}
          <a class="abt-pill" href="{{ page.cv_industry_pdf | prepend: 'assets/pdf/' | relative_url }}" target="_blank" rel="noopener noreferrer">
            Industry CV
          </a>
        {% endif %}
      </div>

      <!-- Render the same CV content as /cv/ -->
      {% include cv/inline_full.liquid %}
    </div>
  </details>
  <div class="abt-pills">
   Download the CV as a PDF
  <a class="abt-pill" href="{{ '/assets/pdf/My_Industrial_CV.pdf' | relative_url }}" target="_blank">
    Industry CV
  </a>
  <a class="abt-pill" href="{{ '/assets/pdf/My_academic_CV.pdf' | relative_url }}" target="_blank">
    Academic CV
  </a>
</div>
</section>

  <section class="abt-card">
    <h2>Research Foundations</h2>
    <p>
      Through my research, I investigated how trust, access control, and cryptographic guarantees can be enforced across distributed architectures—such as Edge, Fog, and Cloud—under adversarial and resource-constrained conditions.
    </p>
    <p>
      A significant part of my work focused on resource-constrained devices, where conventional security assumptions often break down. To support both practitioners and researchers, I developed a structured cryptographic taxonomy and reference document that analyzes the software and hardware performance of approximately 130 lightweight cryptographic primitives, including symmetric ciphers, asymmetric schemes, and hash functions.
      This work combines empirical performance evaluation with cryptanalytic insights, enabling informed security and implementation choices for real-world embedded and IoT systems.
    </p>

  </section>

  <section class="abt-card">
    <h2>Systems & Engineering Practice</h2>
    <p>
      I have designed, implemented, and evaluated end-to-end security mechanisms, 
      from protocol logic and smart contracts to implementation and empirical measurement.
      This experience has provided me with knowledge in attacker thinking, failure modeling,
      and system-level reasoning.
    </p>
  </section>

  <!-- PROJECTS reinforce credibility immediately after systems work -->
  <section class="abt-card">
    <div class="abt-head">
      <h3>Projects (Scroll for more)</h3>
    </div>

    {% assign selected_projects = site.projects | sort: "importance" | slice: 0, 10 %}

    <div class="abt-rail abt-rail--compact"
         role="region"
         aria-label="Selected projects (horizontal scroll)"
         tabindex="0">
      <div class="abt-rail-track">
        {% for project in selected_projects %}
          <div class="abt-rail-item">
            {% include projects_horizontal.liquid %}
          </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="abt-card">
    <h2>From Research to Industry Security</h2>
    <p>
      Alongside my academic work, I am transitioning toward
      industry-based cybersecurity roles,
      driven by curiosity about how security operates
      in practice, within SOCs, vulnerability management pipelines,
      audits, compliance frameworks, and detection workflows.
    </p>
    <p>
      I am actively building hands-on, industry-relevant experience in areas such as
      <strong>vulnerability management</strong>, <strong>log analysis</strong>,
      <strong>web application security</strong>,
      <strong>governance, risk, and compliance</strong>,
      and <strong>ISO&nbsp;27001–aligned security controls</strong>.
      This is reinforced through practical labs and simulations on platforms such as
      <strong>TryHackMe</strong>, exposing me to blue-team, red-team,
      and GRC-oriented workflows.
    </p>
  </section>

  <section class="abt-card">
    <h2>Career Direction & Growth</h2>
    <p>
      My long-term aspiration is to grow into a
      <strong>security engineer, detection engineer, or security architect</strong>
      role—contributing both to day-to-day operational security
      and to long-term architectural decisions.
    </p>
    <p>
      To support this path, I am working toward advanced certifications such as
      <strong>CISSP</strong>, <strong>CompTIA CySA+</strong>,
      and <strong>offensive security tracks (OSCP-style)</strong>,
      complementing my academic background with industry-recognized validation.
    </p>
    <p>
      For hiring teams, this means I bring analytical rigor and strong fundamentals,
      while also offering long-term value through deep system understanding
      and forward-looking security insight.
    </p>
  </section>

<section class="abt-card">
  <h2>Questions I’m Actively Exploring</h2>
  <ul>
    <li>
      <strong>Trust and Access Control in Distributed Systems</strong><br>
      How do attackers exploit weak trust assumptions in distributed and IoT systems,
      and how can access control and authorization remain reliable when devices are
      constrained, intermittently connected, or partially compromised?
    </li>

    <li>
      <strong>Detection and Response Beyond Traditional Perimeters</strong><br>
      How can blue teams detect, investigate, and respond to attacks in decentralized,
      edge-heavy environments where visibility is limited and classic network
      boundaries no longer apply?
    </li>

    <li>
      <strong>Bridging Security Research and Real-World Operations</strong><br>
      How can insights from academic security research and red-team techniques be
      transformed into practical detection, monitoring, and response workflows that
      genuinely support SOCs and security engineering teams?
    </li>
  </ul>
</section>

<section class="abt-card">
  <h2>Industry & Academic Collaboration</h2>
  <p>
    I am open to opportunities across <strong>blue-team, red-team, and security engineering roles</strong>, particularly where IoT/OT security, distributed systems, and real-world threat models intersect. From an industry perspective, I am especially interested in <strong>detection and response, vulnerability assessment, penetration testing, and security architecture</strong>, where strong systems understanding and adversarial thinking matter. I am also interested in academic and applied research collaborations in areas such as <strong>distributed systems, access control, lightweight and post-quantum cryptography</strong>, including joint publications, research-driven prototypes, and industry–academia partnerships.
  </p>
</section>

</div>