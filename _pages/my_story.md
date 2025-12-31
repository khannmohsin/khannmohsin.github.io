---
layout: page
permalink: /story/
title: My Story
description: A timeline of my academic, professional, and personal journey.
nav: true
nav_order: 2
toc: false
---

<style>
/* =========================================================
   STORY TIMELINE (LEFT SPINE, MODULAR, DARK-MODE FRIENDLY)
   - Add a new entry by copying ONE <article class="st-entry"> block.
   - To insert between timepoints: paste the new block anywhere in order.
   ========================================================= */

:root{
  --st-text: #0b1220;
  --st-muted: rgba(11,18,32,0.65);

  --st-card: #ffffff;
  --st-border: rgba(0,0,0,0.12);
  --st-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --st-accent: #0d418aff;
  --st-line: rgba(27, 53, 147, 0.28);
  --st-dot: #3685f3;

  --st-radius: 14px;
}

[data-theme="dark"]{
  --st-text: rgba(255,255,255,0.92);
  --st-muted: rgba(255,255,255,0.70);

  --st-card: rgba(18,18,18,0.65);
  --st-border: rgba(255,255,255,0.16);
  --st-shadow: 0 14px 30px rgba(0,0,0,0.35);

  --st-line: rgba(17, 111, 243, 0.38);
}

/* Wrapper */
.story{ margin-top: 16px; }

/* Intro box */
.story-intro{
  border: 1px solid var(--st-border);
  border-radius: var(--st-radius);
  background: var(--st-card);
  box-shadow: var(--st-shadow);
  padding: 16px 18px;
  margin-bottom: 16px;
}
.story-intro p{ margin: 0; color: var(--st-muted); }

/* Timeline grid: left spine + content */
.story-tl{
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr;
  column-gap: 18px;
  row-gap: 16px;
}

/* Timeline vertical line (left) */
.story-tl::before{
  content:"";
  position:absolute;
  left: 21px; /* half of 42px spine column */
  top: 0; bottom: 0;
  width: 3px;
  /* background: var(--st-line); */
  background: linear-gradient(to bottom, transparent, var(--st-line), transparent);
}

/* One entry = spine + card */
.st-entry{
  display: contents; /* keeps markup modular while still using grid */
}

/* Spine cell */
.st-spine{
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 18px; /* aligns dot roughly with card title */
  position: relative;
  z-index: 1;
}

.st-dot{
  width: 14px; height: 14px;
  border-radius: 999px;
  background: var(--st-dot);
  box-shadow: 0 0 0 6px rgba(54,133,243,0.18);
  position: relative;
  z-index: 2; /* sit above the line */
}

.st-date{
  font-size: 0.78rem;
  color: var(--st-muted);
  text-align: center;
  line-height: 1.1;
  max-width: 34px;
}

/* Card cell */
.st-item{
  grid-column: 2;
}

.st-card{
  border: 1px solid var(--st-border);
  border-radius: var(--st-radius);
  background: var(--st-card);
  box-shadow: var(--st-shadow);
  padding: 16px 16px;
  transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
}

.st-card:hover{
  transform: translateY(-2px);
  border-color: rgba(54,133,243,0.35);
}

/* Title + body */
.st-title{
  margin: 0;
  color: var(--st-text);
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.st-body{
  margin: 8px 0 0;
  color: var(--st-muted);
  line-height: 1.55;
}

.st-body p{ margin: 0 0 10px; }
.st-body p:last-child{ margin-bottom: 0; }

/* Collage grid (optional) */
.st-collage{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 12px 0 8px;
}
@media (max-width: 720px){
  .story-tl{ grid-template-columns: 34px 1fr; }
  .story-tl::before{ left: 17px; }
  .st-collage{ grid-template-columns: repeat(2, 1fr); }
}
.st-collage img{
  width:100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--st-border);
  background: rgba(0,0,0,0.04);
}
.st-caption{
  margin: 0;
  font-size: 0.82rem;
  color: var(--st-muted);
}

/* Tags (optional) */
.st-tags{
  display:flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.st-tag{
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--st-text);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
}

/* Small helper: make strong look good */
.st-card strong{ color: var(--st-text); }

/* Optional: reduce motion for accessibility */
@media (prefers-reduced-motion: reduce){
  .st-card{ transition: none; }
  .st-card:hover{ transform: none; }
}
</style>

<div class="story">

  <div>
    <p>
      I work at the intersection of cybersecurity research and real-world systems. Below is a structured timeline of the milestones that shaped my academic, professional, and personal trajectory.
    </p>
  </div>

  <div class="story-tl">

    <!-- =====================================================
         ENTRY TEMPLATE (copy this whole <article> block)
         =====================================================
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">YYYY–YYYY</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">Title — Location</h3>

          <div class="st-body">
            <p>Short paragraph.</p>
            <p>Optional second paragraph.</p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/example_1.jpg' | relative_url }}" alt="Example 1">
            <img src="{{ '/assets/img/story/example_2.jpg' | relative_url }}" alt="Example 2">
            <img src="{{ '/assets/img/story/example_3.jpg' | relative_url }}" alt="Example 3">
          </div>
          <p class="st-caption">Optional caption.</p>

          <div class="st-tags">
            <span class="st-tag">Tag 1</span>
            <span class="st-tag">Tag 2</span>
          </div>
        </div>
      </section>
    </article>
    -->

    <!-- 1) Early Years – Kashmir -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">Early Years</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">Early Years — Kashmir</h3>

          <div class="st-body">
            <p>
              I grew up in <strong>Kashmir</strong>, a region known for its natural beauty. I completed school and high school in the science stream, focusing on mathematics and biology.
            </p>
            <p>
              From early on, I was drawn to <strong>computers and technology</strong>, assembling PCs, experimenting with hardware, and exploring languages such as <strong>C</strong> and <strong>C#</strong>.
            </p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/kashmir_1.jpg' | relative_url }}" alt="Kashmir">
            <img src="{{ '/assets/img/story/kashmir_2.jpg' | relative_url }}" alt="Early interest in computing">
          </div>

          <div class="st-tags">
            <span class="st-tag">Curiosity-driven learning</span>
            <span class="st-tag">Hardware tinkering</span>
            <span class="st-tag">Early programming</span>
          </div>
        </div>
      </section>
    </article>

    <!-- 2) 2014–2018 – Bachelor’s Degree -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">2014 -- 2018</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">Bachelor’s in Engineering</h3>

          <div class="st-body">
            <p>
              I completed a <strong>Bachelor’s in Information Technology and Telecommunication Engineering</strong>, writing my thesis under <strong>Mr. Malik Mubashir Hassan</strong>.
            </p>
            <p>
              His emphasis on research culture and intellectual independence helped me publish my <strong>first research paper</strong> during my undergraduate years and shaped how I approach collaboration and learning.
            </p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/bsc_1.jpeg' | relative_url }}" alt="Bachelor's graduation">
            <img src="{{ '/assets/img/story/bsc_3.jpg' | relative_url }}" alt="Lab or campus">
          </div>

          <div class="st-tags">
            <span class="st-tag">First publication</span>
            <span class="st-tag">Research foundation</span>
          </div>
        </div>
      </section>
    </article>

    <!-- 3) 2018–2020 – Master’s in Computer Science -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">2018 -- 2020</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">2018–2020 — Master’s in Computer Science</h3>

          <div class="st-body">
            <p>
              After a short role in <strong>web development</strong>, I began my Master’s under <strong>Dr. Bhavna Arora</strong>. During this period, I published <strong>two research papers</strong> and attended a conference.
            </p>
            <p>
              The COVID-19 disruption extended my timeline, but it also created space to finalize my second paper and defend my thesis in <strong>October 2020</strong>. In parallel, I started an <strong>MBA (IGNOU, distance learning)</strong> to strengthen my understanding of <strong>IT project management</strong>.
            </p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/msc_1.jpeg' | relative_url }}" alt="Conference or presentation">
            <img src="{{ '/assets/img/story/msc_3.jpg' | relative_url }}" alt="Pandemic-era work">
          </div>

          <div class="st-tags">
            <span class="st-tag">2 publications</span>
            <span class="st-tag">Conference</span>
            <span class="st-tag">MBA (PM focus)</span>
          </div>
        </div>
      </section>
    </article>

    <!-- 4) 2020–2021 – Industry Experience -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">2020 -- 2021</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">2020–2021 — Industry Experience</h3>

          <div class="st-body">
            <p>
              I joined <strong>BBI Insights</strong> as a <strong>Data Engineer</strong>, contributing to data pipeline development for <strong>TransUnion (USA)</strong>.
            </p>
            <p>
              The work centered on cloud migration and production pipelines using <strong>AWS</strong> and <strong>Databricks (Python)</strong>, offering hands-on exposure to large-scale systems and international collaboration.
            </p>
          </div>

          <div class="st-tags">
            <span class="st-tag">AWS</span>
            <span class="st-tag">Databricks</span>
            <span class="st-tag">Data engineering</span>
          </div>
        </div>
      </section>
    </article>

    <!-- 5) 2021–Present – PhD at UiT -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">2021 -- 2025</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">2021–Present — PhD at UiT (Norway)</h3>

          <div class="st-body">
            <p>
              I applied for PhD positions in Europe to broaden my research perspective and work in international environments. I joined <strong>UiT The Arctic University of Norway</strong> as a <strong>Cybersecurity Fellow</strong>, supervised by <strong>Prof. Håvard Johansen</strong>, <strong>Dag Johansen</strong>, and <strong>Elisavet Kozyri</strong>.
            </p>
            <p>
              This period has involved sustained research output, mentorship, and collaborations—including partnerships with UiT teams and external institutions such as the <strong>University of Málaga</strong>.
            </p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/UiT_campus.jpg' | relative_url }}" alt="UiT campus">
            <img src="{{ '/assets/img/story/testbed.jpeg' | relative_url }}" alt="Research group">
            <img src="{{ '/assets/img/story/conference.jpeg' | relative_url }}" alt="Conference / workshop">
          </div>

          <div class="st-tags">
            <span class="st-tag">Cybersecurity</span>
            <span class="st-tag">Research + Publications</span>
            <span class="st-tag">International collaboration</span>
          </div>
        </div>
      </section>
    </article>

    <!-- 6) Travel and Exploration -->
    <article class="st-entry">
      <div class="st-spine">
        <div class="st-dot" aria-hidden="true"></div>
        <div class="st-date">Travel</div>
      </div>

      <section class="st-item">
        <div class="st-card">
          <h3 class="st-title">Travel and Exploration</h3>

          <div class="st-body">
            <p>
              Beyond academics, I enjoy traveling and exploring local cultures. <br>
              I have visited 🇫🇮 Finland, 🇩🇰 Denmark, 🇳🇱 Netherlands, 🇪🇸 Spain, 🇫🇷 France, 🇱🇻 Latvia, 🇪🇪 Estonia, 🇭🇺 Hungary, 🇦🇹 Austria, 🇨🇿 Czechia, and 🇮🇹 Italy.
            </p>
            <p>
              I hope to complete my travels across <strong>Europe</strong> before exploring the rest of the world.
            </p>
          </div>

          <div class="st-collage">
            <img src="{{ '/assets/img/story/travel_1.jpeg' | relative_url }}" alt="Travel photo 1">
            <img src="{{ '/assets/img/story/travel_2.jpeg' | relative_url }}" alt="Travel photo 2">
            <img src="{{ '/assets/img/story/travel_3.gif' | relative_url }}" alt="Travel photo 3">
            <img src="{{ '/assets/img/story/travel_4.jpeg' | relative_url }}" alt="Travel photo 1">
            <img src="{{ '/assets/img/story/travel_5.jpeg' | relative_url }}" alt="Travel photo 2">
            <img src="{{ '/assets/img/story/travel_6.jpeg' | relative_url }}" alt="Travel photo 3">
          </div>

          <div class="st-tags">
            <span class="st-tag">Culture</span>
            <span class="st-tag">Cuisine</span>
            <span class="st-tag">Exploration</span>
          </div>
        </div>
      </section>
    </article>

  </div>
</div>