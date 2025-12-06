---
layout: post
title: "Post-Quantum Cryptography for IoT: Are We Ready?"
date: 2025-08-06 18:00:00
description: "A critical look at the intersection of quantum threats and lightweight cryptography for resource-constrained IoT devices."
tags:
  - research
categories:
  - research
thumbnail: assets/img/PQC_LWC.png
---

Quantum computers are no longer a distant threat. With significant advances by companies like IBM, Google, and others, the cryptographic foundations of current systems are under increasing scrutiny. While post-quantum cryptography (PQC) has been a hot topic in academia, its implications for Internet of Things (IoT) security are often misunderstood or underestimated.

## Why IoT Needs a Different Lens

IoT devices are resource-constrained — they lack the memory, processing power, and energy capacity of traditional computing platforms. This means standard PQC algorithms designed for laptops or cloud environments are often too heavy to deploy directly on microcontrollers like AVR, ARM Cortex-M, or RISC-V-based chips.

Yet, these are the devices most exposed to physical attacks, remote exploitation, and long deployment lifetimes — making them prime targets in a post-quantum future.

## Lightweight vs. Post-Quantum: A False Dichotomy?

In recent years, we’ve seen the emergence of lightweight cryptography, with initiatives like NIST’s Lightweight Cryptography project. Simultaneously, NIST has also selected candidates for post-quantum cryptographic standards. These developments have followed separate tracks, optimized for different assumptions.

The real challenge lies in merging the two: can we create cryptographic primitives that are both post-quantum secure and lightweight enough for microcontrollers?

## Promising Directions

Some areas of research and implementation showing promise include:

- **Lattice-based KEMs** like Kyber, though heavy, are being profiled for constrained devices  
- **Hash-based signatures** like SPHINCS+ offer strong quantum resilience but with large signature sizes  
- **Isogeny-based schemes** such as SIKE (though recently broken) show that novel constructions may offer small footprints in the future

Moreover, researchers are now benchmarking PQC candidates on embedded platforms using tools like **ChipWhisperer**, **EnergyTrace**, and **Cycle Accurate Profiling**.

## Practical Considerations

To bring PQC to IoT, we must balance:

- **Execution Time** – Can the crypto run under hard real-time constraints?  
- **Energy Use** – Will it deplete battery-powered devices too quickly?  
- **Memory Footprint** – Can the code and keys fit in flash and RAM?  
- **Side-Channel Resilience** – Are we introducing new attack surfaces?

## Call to Action

As a cybersecurity researcher working on secure IoT frameworks, I see PQC integration as the next major frontier. While some efforts are underway, we urgently need:

- More open-source benchmarking of PQC on real embedded devices  
- Standardized testbeds for comparing performance and resilience  
- Hybrid models combining classical and post-quantum security for transition periods

## Final Thoughts

The shift to post-quantum cryptography is inevitable — but IoT systems cannot be an afterthought. Security in these systems is foundational to our smart homes, cities, industries, and health infrastructure.

We must start asking not just “**Which algorithms are post-quantum secure?**”, but “**Which ones can survive in the wild, on 32 KB of RAM and a 3V battery?**”

---

**Author**: *Mohsin Khan* — Cybersecurity Researcher at UiT, working on secure, distributed systems for IoT and post-quantum cryptography.

*Comments or suggestions? Reach out here or connect on [GitHub](https://github.com/khannmohsin).*