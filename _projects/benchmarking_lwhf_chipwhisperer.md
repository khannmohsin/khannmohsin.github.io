---
layout: page
title: Performance Benchmarking of Lightweight Hash Functions for Embedded IoT
description: Systematic evaluation of NIST-submitted, ISO-standardized, and other lightweight hash functions on AVR ATxmega128 microcontrollers using ChipWhisperer.
img: assets/img/projects/benchmarking_lwhf_chipwhisperer/chipwhisperer_setup.jpg
importance: 3
category: Research Projects
tags: ["IoT . Lightweight Hash Functions", Lightweight Crypto, Embedded Security, Performance Benchmarking, Cryptographic Engineering]
related_publications: true
---

<div class="justify-text">
This project presents a <strong>comprehensive performance benchmarking framework</strong> for evaluating <strong>lightweight hash functions (LWHFs)</strong> on <strong>resource-constrained embedded IoT platforms</strong>. 
Our work targets developers, researchers, and system architects seeking <strong>energy-efficient, secure, and deployable</strong> cryptographic primitives for real-world IoT deployments.
</div>

---

## 1. Research Motivation

<div class="justify-text">
- IoT devices often operate on <strong>low-power microcontrollers</strong> with limited RAM and flash storage.  
- Selecting the wrong cryptographic primitive can lead to <strong>higher latency, battery drain, or deployment failure</strong>.  
- We benchmark <strong>NIST finalists</strong>, <strong>ISO/IEC 29192-5 standards</strong>, and other prominent LWHFs like PHOTON, Lesamnta-LW, BLAKE2s, and BLAKE3 to provide <strong>data-driven selection guidance</strong>.
</div>

---

## 2. Methodology

<div class="justify-text">
<strong>Target Platform</strong>  
- Microcontroller: AVR ATxmega128  
- Measurement Tool: ChipWhisperer Lite (CW308 UFO Board)  
- Programming Language: C (compiled with AVR-GCC)  
- Triggering: GPIO-based measurement trigger for synchronous power analysis

<strong>Evaluated Algorithms</strong>

- NIST LWC Finalists (e.g., Ascon-Hash, PHOTON-Beetle, Xoodyak)
- ISO/IEC 29192-5 Standards (SPONGENT, PHOTON)
- Additional lightweight hash functions (Lesamnta-LW, BLAKE2s, BLAKE3)

<strong>Metrics</strong>

- Execution Time (ms)
- Cycles per Byte
- RAM / ROM Usage (bytes)
- Energy Consumption (mJ)
- Composite E-RANK Metric
</div>

---

## 3. System Architecture

{% include figure.liquid path="assets/img/projects/benchmarking_lwhf_chipwhisperer/benchmarking_architecture.png" title="Benchmarking Architecture" class="img-fluid rounded z-depth-1" %}

<div class="caption">
System workflow: Compilation → Flashing to ATxmega128 → Triggered Execution → Data Capture (ChipWhisperer) → Performance Analysis.
</div>

---

## 4. Experimental Setup

{% include figure.liquid path="assets/img/projects/benchmarking_lwhf_chipwhisperer/chipwhisperer_setup.png" title="ChipWhisperer Measurement Setup" class="img-fluid rounded z-depth-1" %}

<div class="caption">
ChipWhisperer Lite with ATxmega128 target microcontroller for synchronized power measurement and benchmarking.
</div>

---

## 5. Significance & Applications

<div class="justify-text">
- Enables <strong>evidence-based selection</strong> of LWHFs for specific IoT deployments.  
- Supports <strong>standardization efforts</strong> in lightweight cryptography.  
- Provides <strong>baseline security-performance trade-off data</strong> for integration into blockchain-enabled IoT security frameworks (like our <strong>DTEA architecture</strong>).  
</div>

---

## 6. Publications

<div class="justify-text">
- <strong>Khan, M.</strong>, Dagenborg, H., & Johansen, D. (2025). <em>Software Benchmarking of NIST Lightweight Hash Function Finalists on Resource-Constrained AVR Platform via ChipWhisperer.</em> <strong>SECRYPT 2025</strong>. [PDF](assets/pdf/secrypt2025.pdf)  
- <strong>Khan, M.</strong>, Dagenborg, H., & Johansen, D. (2025). <em>A Comparative Analysis of Lightweight Hash Functions Using AVR ATxmega128 and ChipWhisperer.</em> <strong>LightSec 2025</strong>. [PDF](assets/pdf/lightsec2025.pdf)  
</div>

---
