---
layout: page
title: "AIG Shields Up: Cybersecurity Job Simulation"
description: Zero-day advisory writing (Log4Shell), stakeholder communication, and a Python-based ZIP ransomware decryption brute-forcer using a wordlist.
img: assets/img/projects/forage/aig_shields_up.webp
category: Cybersecurity Job Simulations
importance: 2
tags: ["Vulnerability Management", "Log4Shell", "Incident Response", "Ransomware"]
related_publications: false
---

## Overview

This project is based on **AIG’s “Shields Up: Cybersecurity” Job Simulation** delivered through **Forage**.  
The simulation mirrors the role of an **Information Security Analyst** responsible for quickly operationalizing public threat intelligence, advising internal stakeholders, and supporting recovery actions during a ransomware event.

---

## Task 1 — Responding to a Zero-Day Vulnerability (Log4Shell)

**Objective:** Review CISA advisories, identify affected internal infrastructure, and draft an actionable security advisory to the owning technical team.

**Work performed:**

- Researched the Apache Log4j zero-day vulnerability (**CVE-2021-44228 / Log4Shell**) using CISA guidance and broader community reporting.
- Mapped the vulnerability to an internal infrastructure inventory to identify exposure (e.g., environments running **Log4j**).
- Drafted a concise advisory email for technical owners, covering:
  - Vulnerability mechanism (remote code execution via crafted logged input / JNDI lookup abuse)
  - Practical impact (server compromise, lateral movement, data theft, ransomware delivery)
  - Remediation priorities (upgrade to fixed Log4j versions; mitigation steps when upgrade not immediately possible)
  - Validation actions (log review, IOC checks, outbound traffic restrictions, confirmation of patch completion)

**Skills demonstrated:** vulnerability triage, threat intel translation, technical advisory writing, stakeholder targeting.

---

## Task 2 — (Technical) Bypassing Ransomware via Python Bruteforce

**Objective:** Recover an encrypted ZIP file without paying ransom by brute-forcing the decryption password using a provided wordlist subset.

**Work performed:**

- Implemented a **Python 3** brute-force workflow to test candidate passwords against an encrypted ZIP payload.
- Applied secure extraction principles to prevent unsafe archive paths (Zip Slip/path traversal) during recovery.
- Automated progress reporting and stop conditions to make the process operationally usable.

**Skills demonstrated:** Python scripting, basic cryptographic recovery logic, defensive programming, incident recovery support.

---

## Skills Applied

- Vulnerability management and rapid response to emerging threats
- Threat intelligence consumption (CISA/FBI/NSA-style alerting context)
- Security consulting style communication to technical owners
- Ransomware response mindset (containment, recovery, and decision support)
- Python scripting for security automation and recovery tooling

---

## Practical Relevance

This project is directly relevant to entry-level roles in:

- **SOC / Blue Team operations** (alerting-to-action translation)
- **Vulnerability management** (advisory, remediation tracking, verification)
- **Incident response** (containment and recovery support)
- **Security engineering** (safe automation and tooling fundamentals)
