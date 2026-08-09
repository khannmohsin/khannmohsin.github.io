---
layout: page
title: "ARM-Based Benchmarking of Lightweight Cryptographic Ciphers for IoT"
category: Research Projects
img: assets/img/projects/benchmarking_rp_Arduino/lwcc-arm-setup_2.jpg
description: "Unified benchmarking framework for evaluating lightweight block and stream ciphers on ARM IoT devices with performance, energy, and resource metrics."
importance: 2
tags: ["IoT . Lightweight Block and Stream Ciphers", "Lightweight cryptography", "Benchmarking", "ARM", "Performance", "Energy"]
related_publications: true
---

<div class="justify-text">
This project implements a <strong>comprehensive benchmarking framework</strong> for evaluating the software performance of <strong>Lightweight Cryptographic Ciphers (LWCCs)</strong> — both block and stream — on constrained IoT-class ARM processors.  
The work is documented across two publications — in <em>MDPI Future Internet</em> and <em>Springer SciSec</em> — which share the same experimental methodology and platform but explore complementary analysis and presentation.

The project addresses a critical IoT security challenge: <strong>how to choose cryptographic primitives that balance security strength with minimal performance and energy overhead</strong> in devices with limited CPU, RAM, and power budgets.

</div>

---

## Objectives

- **Develop** a flexible and lightweight benchmarking tool that supports both block and stream cipher implementations.
- **Measure** multiple performance metrics: throughput, cycles per byte (CpB), memory footprint, ROM usage, and energy consumption.
- **Introduce** the E-Rank metric — a combined measure of efficiency that integrates performance, memory, and energy.
- **Identify** optimal cipher choices for different IoT deployment scenarios.

---

## Methodology

- **Hardware**: Raspberry Pi Zero W with single-core ARM1176JZF-S CPU (512 MB RAM).
- **Energy Measurement**: Arduino UNO + INA219 power sensor to isolate cipher execution power usage from background processes.
- **Software**:
  - Core cryptographic operations implemented in **C** for speed.
  - Orchestration, measurement, and data logging in **Python** using `ctypes` to interface with compiled cipher code.
- **Cipher Set**:
  - _Lightweight Block Ciphers_: PRESENT, XTEA, CLEFIA, SIMON, SPECK, AES (baseline).
  - _Lightweight Stream Ciphers_: Grain-v1, Grain-128a (optimized), Trivium, Mickey, Salsa, Sosemanuk.

{% include figure.liquid path="assets/img/projects/benchmarking_rp_Arduino/lwcc-arm-setup.png" title="Hardware setup with Raspberry Pi Zero W and Arduino UNO for benchmarking" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Custom benchmarking setup with GPIO-triggered power measurement to ensure precise per-cipher energy readings.
</div>

---

## Evaluation Metrics

1. **Throughput (Kbps)** – Speed of encryption/decryption.
2. **Cycles per Byte (CpB)** – CPU cycles required per byte processed.
3. **Memory Footprint (bytes)** – RAM usage during cipher execution.
4. **ROM Usage (bytes)** – Flash storage space used by cipher code.
5. **Energy Consumption (µJ/B)** – Energy required per byte processed.
6. **E-Rank** – Unified performance metric:  
   `E-Rank = Throughput / ((ROM + 2 × RAM) × Energy)`

---

## Key Findings

- **Best LWBC (Block Cipher)**: **XTEA** – Highest throughput, lowest CpB, lowest energy, but highest RAM usage.
- **Best LWSC (Stream Cipher)**: **Salsa** – Highest E-Rank due to exceptional throughput and efficient resource use.
- **Trade-offs**:
  - Hardware-oriented ciphers (e.g., SIMON, PRESENT) show lower software performance but smaller code size.
  - Software-optimized ciphers (e.g., SPECK, Salsa) excel in throughput but may require more memory.

<!-- {% include figure.liquid path="assets/img/projects/lwcc-results.jpg" title="Performance and E-Rank comparison" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Performance comparison showing throughput, CpB, energy, and E-Rank for all evaluated block and stream ciphers.
</div> -->

---

## Impact & Applications

- **IoT Security Design**: Offers a decision-making framework for selecting ciphers based on device constraints.
- **Benchmarking Methodology**: Can be reused for future cipher candidates or different microcontroller platforms.
- **Academic Contribution**: Demonstrates how multi-metric evaluation changes cipher rankings compared to throughput-only analysis.

---

## Publications

1. M. Khan, D. Johansen, H. Dagenborg, _Performance Evaluation of Lightweight Cryptographic Ciphers on ARM Processor for IoT Deployments_, SciSec 2024 (LNCS 15441).
2. M. Khan et al., _Comprehensive Benchmarking of Lightweight Cryptographic Primitives for IoT Devices_, _Future Internet_, MDPI, 2025.
