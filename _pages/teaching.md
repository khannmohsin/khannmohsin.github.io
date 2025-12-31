---
layout: page
permalink: /teaching/
title: Teaching
description: My teaching approach, instructional experience, and contribution to learning quality in cybersecurity and distributed systems.
nav: true
nav_order: 6
toc: false
---

<style>
/* =========================================================
   TEACHING — Clean Academic Cards (Aligned with Publications)
   ========================================================= */

:root{
  --t-text: #0b1220;
  --t-muted: rgba(11,18,32,0.65);

  --t-card: #ffffff;
  --t-border: rgba(0,0,0,0.12);
  --t-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --t-accent: #3685f3;
  --t-radius: 14px;
}

[data-theme="dark"]{
  --t-text: rgba(255,255,255,0.92);
  --t-muted: rgba(255,255,255,0.70);

  --t-card: rgba(18,18,18,0.65);
  --t-border: rgba(255,255,255,0.16);
  --t-shadow: 0 14px 30px rgba(0,0,0,0.35);
}

/* Intro block */
.teach-intro{
  border: 1px solid var(--t-border);
  border-radius: var(--t-radius);
  background: var(--t-card);
  box-shadow: var(--t-shadow);
  padding: 16px 18px;
  margin: 14px 0 20px;
}
.teach-intro p{ margin: 0; color: var(--t-muted); }

/* Card sections */
.teach-card{
  border: 1px solid var(--t-border);
  border-radius: var(--t-radius);
  background: var(--t-card);
  box-shadow: var(--t-shadow);
  padding: 16px 18px;
  margin: 0 0 16px;
  transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
}
.teach-card:hover{
  transform: translateY(-2px);
  border-color: rgba(54,133,243,0.35);
}

.teach-title{
  margin: 0 0 10px;
  font-weight: 650;
  font-size: 1.05rem;
  line-height: 1.35;
  color: var(--t-text);
  letter-spacing: -0.01em;
}

.teach-muted{ color: var(--t-muted); }

.teach-tags{
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.teach-tag{
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--t-text);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
}

.teach-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 980px){
  .teach-grid{
    grid-template-columns: 1fr 1fr;
  }
}

/* Clean table for course summary */
.teach-table{
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--t-border);
}
.teach-table th, .teach-table td{
  padding: 10px 12px;
  border-bottom: 1px solid var(--t-border);
  vertical-align: top;
}
.teach-table th{
  text-align: left;
  color: var(--t-text);
  font-weight: 650;
  background: rgba(0,0,0,0.03);
}
[data-theme="dark"] .teach-table th{
  background: rgba(255,255,255,0.06);
}
.teach-table td{ color: var(--t-muted); }
.teach-table tr:last-child td{ border-bottom: 0; }

.teach-card strong{ color: var(--t-text); }

/* --------------------------
   MOBILE: prevent overflow
   -------------------------- */
.teach-table-wrap{
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 12px; /* preserve rounded feel */
}

/* Allow horizontal scroll when needed */
.teach-table{
  min-width: 900px; /* adjust (800–1100px) as you prefer */
}

/* Optional: sticky first column on small screens */
@media (max-width: 720px){
  .teach-table th:first-child,
  .teach-table td:first-child{
    position: sticky;
    left: 0;
    background: var(--t-card);
    box-shadow: 6px 0 10px rgba(0,0,0,0.06);
  }
  [data-theme="dark"] .teach-table th:first-child,
  [data-theme="dark"] .teach-table td:first-child{
    box-shadow: 6px 0 10px rgba(0,0,0,0.35);
  }
}

@media (prefers-reduced-motion: reduce){
  .teach-card{ transition: none; }
  .teach-card:hover{ transform: none; }
}
</style>

<div>
  <p>
    Alongside my research,
    I have contributed to teaching, lab instruction, assessment, and student support across networking,
    security, distributed systems, and privacy-preserving computing.
  </p>
</div>

<div class="teach-card">
  <h3 class="teach-title">Teaching approach</h3>

  <p class="teach-muted">
    My teaching is built around three practical commitments:
    <ul style="margin-top: 8px;">
      <li><strong>Active learning</strong> through hands-on labs and iterative debugging</li>
      <li><strong>Enquiry-based reasoning</strong>—helping students think like security professionals by analysing how systems fail</li>
      <li><strong>Clear learning-outcome alignment</strong> with structured feedback that supports student autonomy</li>
    </ul>
  </p>

  <div class="teach-tags">
    <span class="teach-tag">Active learning</span>
    <span class="teach-tag">Adversarial reasoning</span>
    <span class="teach-tag">Constructive alignment</span>
    <span class="teach-tag">Iterative feedback</span>
  </div>
</div>

<div class="teach-grid">

  <div class="teach-card">
    <h3 class="teach-title">Focus on student learning</h3>
    <p class="teach-muted">
      Across the courses I support, students often have very different backgrounds—from experienced programmers to beginners.
      I adapt explanations accordingly, using short “explain → demonstrate → guide” cycles and encouraging students to
      articulate concepts in their own words before implementation.
    </p>
    <div class="teach-tags">
      <span class="teach-tag">Explain–demonstrate–guide</span>
      <span class="teach-tag">Inclusive instruction</span>
      <span class="teach-tag">Foundations + challenge</span>
    </div>
  </div>

  <div class="teach-card">
    <h3 class="teach-title">Enquiry-based instruction (Feynman-style clarity)</h3>
    <p class="teach-muted">
      A core influence on my teaching is a Feynman-style approach: simplifying complex mechanisms into intuitive components,
      then asking students to explain the idea back clearly. In security and distributed systems, I use enquiry questions such as: <br>
      <em>“If you were an adversary with these capabilities, how would you break this protocol?”</em>
    </p>
    <div class="teach-tags">
      <span class="teach-tag">Feynman technique</span>
      <span class="teach-tag">Threat modelling mindset</span>
      <span class="teach-tag">Research-to-classroom</span>
    </div>
  </div>

</div>

<div class="teach-card">
  <h3 class="teach-title">Course experience summary</h3>

  <!-- WRAP TABLE to avoid mobile overflow -->
  <div class="teach-table-wrap" aria-label="Scrollable course table">
    <table class="teach-table">
      <thead>
        <tr>
          <th>Course</th>
          <th>Level</th>
          <th>Terms</th>
          <th>Typical responsibilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>INF-2300</strong> Computer Communication</td>
          <td>Bachelor (10 ECTS)</td>
          <td>Fall 2022, 2023, 2024</td>
          <td>Exercise groups/labs; guidance on networking labs (HTTP, DNS, sockets); feedback on mandatory assignments; support for grading.</td>
        </tr>
        <tr>
          <td><strong>INF-2310</strong> Computer Security</td>
          <td>Bachelor (10 ECTS)</td>
          <td>Spring 2022, Spring 2023</td>
          <td>Weekly exercise groups; support/evaluation of mandatory assignments; student presentations on attacks (e.g., XSS/DDoS); linking technical + human factors.</td>
        </tr>
        <tr>
          <td><strong>INF-3203</strong> Advanced Distributed Systems</td>
          <td>Master</td>
          <td>Spring 2024, Spring 2025</td>
          <td>Paper discussion support; presentation coaching; supervision of programming assignments; reasoning about consistency, fault tolerance, and performance.</td>
        </tr>
        <tr>
          <td><strong>INF-3315</strong> Privacy-Preserving Computing</td>
          <td>Master</td>
          <td>Fall 2025</td>
          <td>Support lectures and group work; supervision of assignments on GDPR and privacy-preserving techniques (e.g., OT, differential privacy); bridging law ↔ technical design.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="teach-muted" style="margin-top:12px;">
    These courses reflect my teaching breadth across networking, security foundations, distributed systems, and privacy, and how I
    connect theory with implementation and analysis.
  </p>
</div>

<div class="teach-card">
  <h3 class="teach-title">Collegial practice and contribution to teaching quality</h3>
  <p class="teach-muted">
    Collaboration is a central part of my teaching practice. I work closely with course coordinators and teaching teams to ensure consistency
    across lab groups, contribute to lab/assignment materials, and align grading practices for fairness. I also participate in internal teaching seminars,
    using feedback and reflection to refine instructional design and student engagement.
  </p>
</div>

<div class="teach-card">
  <h3 class="teach-title">Examination and academic assessment</h3>
  <p class="teach-muted">
    I have served as an examiner for three master’s theses (UiT), independently assessing research quality, methodology, and scientific writing,
    and contributing to grading with co-examiners when applicable.
  </p>
  <ul class="teach-muted" style="margin-top:10px;">
    <li><strong>Henrik Monsen</strong> — Spring 2024</li>
    <li><strong>Hauk Storjord</strong> — Spring 2025</li>
    <li><strong>Jørgen Kristensen</strong> — Spring 2025</li>
  </ul>
</div>

<div class="teach-card">
  <h3 class="teach-title">Supervision and mentoring</h3>
  <p class="teach-muted">
    My supervision focuses on methodological rigour, reproducibility, and clear communication of results. I mentor students during labs,
    projects, and research-oriented activities—especially where security concepts require careful reasoning and disciplined experimentation.
  </p>
</div>

<div class="teach-card">
  <h3 class="teach-title">Contact & Teaching Portfolio</h3>
  <p class="teach-muted">
    I welcome inquiries related to <strong>thesis supervision</strong>, <strong>teaching collaboration</strong>, and
    joint work in cybersecurity, distributed systems,
    privacy technologies, and applied cryptography.
    You may reach me at
    <a href="mailto:khann.mohsin@icloud.com">khann.mohsin@icloud.com</a>.
  </p>

  <p class="teach-muted">
    A detailed overview of my teaching philosophy, instructional experience, and academic contributions is available here:
    <span class="teach-tag" style="display: inline-block; margin-left: 4px;">
      <a href="{{ '/assets/pdf/My_Teaching_Portfolio.pdf' | relative_url }}"
         target="_blank"
         rel="noopener"
         style="color: var(--t-text); text-decoration: none;">
        Teaching Portfolio (PDF)
      </a>
    </span>
  </p>
</div>