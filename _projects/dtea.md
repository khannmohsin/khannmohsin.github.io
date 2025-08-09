---
layout: page
title: "PAXOS Consensus Algorithm Implementation"
category: research
img: assets/img/paxos_project.png
description: "Python-based simulation of the PAXOS consensus protocol with fault tolerance testing and performance evaluation."
importance: 1
tags: ["distributed systems", "consensus", "paxos", "fault tolerance", "python"]
related_publications: false
---

<div class="justify-text">
The <strong>Distributed Trust Enforcement Architecture (DTEA)</strong> is a layered, resource-aware security framework for securing heterogeneous, distributed IoT infrastructures.  
It addresses the limitations of centralized access control and heavy blockchain frameworks by introducing a smart-contract–based capability access model that enforces bidirectional, least-privilege permissions between subject and object nodes across cloud, fog, edge, and endpoint layers.  

DTEA integrates:
- Flow-based CapBAC tokens with full lifecycle management (issuance, expiry, revocation).
- Resource-aware policy enforcement for constrained nodes, offloading consensus and blockchain-heavy operations to validator-capable fog/cloud nodes.
- PoA-QBFT consensus for scalable validator governance and secure on-chain traceability.
- Layered architecture (Device, Blockchain, Trust Enforcement, Communication, Application) aligned with NIST SP 800-183 and the OpenFog Reference Architecture.

The architecture has been implemented and deployed on a real-world heterogeneous IoT testbed (Mac M1, NVIDIA Jetson Xavier NX, Raspberry Pi 4B), evaluated for latency, CPU/memory usage, RPC performance, and blockchain synchronization, with security guarantees formally verified using the STRIDE threat model.
</div>

---

## System Architecture
{% include figure.liquid path="assets/img/dtea-architecture.png" title="Smart contract and blockchain-assisted distributed trust enforcement architecture" class="img-fluid rounded z-depth-1" %}
<div class="caption">
DTEA architecture spanning cloud, fog, edge, and endpoint layers, with capability-based token enforcement via smart contracts and PoA-QBFT consensus.
</div>

---

## Layered Trust Enforcement
{% include figure.liquid path="assets/img/dtea-layers.png" title="Layered Trust-Enforcement Architecture of DTEA" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Functional layering of DTEA: Application, Communication, Trust Enforcement, Blockchain, and Device layers with modular services for registration, access control, validator governance, and capability token management.
</div>

---

## Key Features
- **Dynamic Role-Based Registration** — Secure node onboarding with validator proposal and voting.
- **Capability-Based Access Control** — Fine-grained, bidirectional, flow-based token permissions.
- **On-Chain Governance & Traceability** — Immutable logs for all trust enforcement events.
- **Resource-Aware Design** — Offloading blockchain operations from constrained devices.
- **Formal Security Validation** — STRIDE threat model mapping and mitigation.


