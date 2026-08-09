---
layout: page
title: "BlockCap: Blockchain-Based Capability Authorization for IoT"
category: Research Projects
img: assets/img/projects/dtea/hardware_setup.jpg
description: "A blockchain-backed capability-based authorization system for enforcing fine-grained, auditable access control in resource-constrained IoT environments."
importance: 2
tags: ["IAM . Safety-critical IoT . Blockchain Security", "capability-based access control", "IoT", "smart contracts", "QBFT", "STRIDE"]
related_publications: true
math: true
---

<div class="justify-text">
<strong>BlockCap</strong> is a <strong>capability-based authorization system</strong> designed to enforce fine-grained, auditable access control in <strong>resource-constrained IoT infrastructures</strong>.  
The system addresses the limitations of centralized identity- and role-based access control in IoT by combining <strong>capability tokens</strong> with <strong>blockchain-backed governance and traceability</strong>.
</div>

<div class="justify-text">
Rather than assuming that IoT endpoints can participate in consensus or store global policy state, BlockCap introduces a <strong>role-separated trust model</strong> in which authorization decisions are <em>locally enforced</em> while <em>globally governed</em> through smart contracts.  
The design explicitly targets heterogeneous deployments spanning <strong>cloud, fog, edge gateways, and constrained sensors/actuators</strong>.
</div>

---

## System Model and Trust Assumptions

{% include figure.liquid path="assets/img/projects/dtea/dtea-architecture.png" title="BlockCap system overview" class="img-fluid rounded z-depth-1" %}

<div class="caption">
BlockCap system model showing validators, non-validator gateways, and constrained endpoints. Blockchain participation is restricted to capable nodes, while enforcement occurs at the service boundary.
</div>

<div class="justify-text">
BlockCap defines a network of nodes \(N = \{n_1, \dots, n_k\}\), each assigned a role:
<ul>
  <li><strong>Validators</strong> (cloud/fog): maintain blockchain state, execute consensus, and approve policy-critical operations.</li>
  <li><strong>Non-validator gateways</strong> (edge/fog): enforce access decisions and query on-chain capability state.</li>
  <li><strong>Endpoints</strong> (sensors/actuators): expose services but remain blockchain-agnostic.</li>
</ul>
Authorization is expressed as <strong>directed capability grants</strong> between nodes and services, enabling least-privilege, flow-specific access control.
</div>

---

## Capability-Based Authorization Model

{% include figure.liquid path="assets/img/projects/dtea/dtea-layers.png" title="Directed capability graph in BlockCap" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Directed graph representation of BlockCap’s trust model. Capabilities are defined as subject → object → operation tuples and enforced at API boundaries.
</div>

<div class="justify-text">
BlockCap encodes authorization as <strong>capability tokens</strong> that specify:
<ul>
  <li>Subject node identity</li>
  <li>Target node and service</li>
  <li>Permitted operations (READ, WRITE, EXECUTE, TRANSMIT)</li>
  <li>Issuance time, validity window, and revocation state</li>
</ul>

Capabilities are:

<ul>
  <li><strong>Issued and revoked on-chain</strong> via smart contracts</li>
  <li><strong>Checked off-chain</strong> by gateways before request forwarding</li>
  <li><strong>Auditable</strong> through immutable blockchain logs</li>
</ul>
This design enables decentralized enforcement without pushing cryptographic or blockchain overhead onto constrained devices.
</div>

---

## Governance and Consensus

<div class="justify-text">
BlockCap is implemented on <strong>Hyperledger Besu</strong> using a <strong>Proof-of-Authority (PoA)</strong> network with <strong>QBFT</strong> for validator consensus.  
Governance-sensitive actions—such as node registration, validator admission, and capability issuance—are coordinated through smart contracts and validator voting.
</div>

<div class="justify-text">
This approach ensures:
<ul>
  <li>Low-latency block finality</li>
  <li>Resistance to single-point-of-failure</li>
  <li>Deterministic authorization state across validators</li>
</ul>
</div>

---

## Security Analysis

<div class="justify-text">
The system is analyzed using the <strong>STRIDE threat model</strong>, covering:
<ul>
  <li>Spoofing of node identities</li>
  <li>Tampering with authorization state</li>
  <li>Repudiation of access decisions</li>
  <li>Information disclosure</li>
  <li>Denial-of-service</li>
  <li>Elevation of privilege</li>
</ul>

BlockCap mitigates these threats through cryptographic identities, immutable logging, validator-governed policy changes, and strict capability validation at enforcement points.

</div>

---

## Experimental Evaluation

<div class="justify-text">
BlockCap is evaluated on a heterogeneous testbed comprising:
<ul>
  <li>Cloud and fog nodes (validator-capable)</li>
  <li>Edge gateways (non-validator enforcers)</li>
  <li>Resource-constrained IoT endpoints</li>
</ul>

Measured metrics include:

<ul>
  <li>Capability issuance and validation latency</li>
  <li>CPU and memory overhead on gateways</li>
  <li>RPC performance under concurrent requests</li>
  <li>Blockchain synchronization and throughput</li>
</ul>

Results demonstrate that BlockCap introduces <strong>minimal runtime overhead</strong> while providing strong security guarantees and full authorization traceability.

</div>

---

## Key Contributions

- **Blockchain-backed capability authorization** tailored for IoT constraints
- **Decoupled enforcement and governance** via role separation
- **Fine-grained, bidirectional access control**
- **Formal STRIDE-based security analysis**
- **Practical deployment and evaluation on real hardware**

---

<!-- ## Publication

<div class="justify-text">
<strong>Khan, M.</strong>, Dagenborg, H., Ferraris, D., Kozyri, E., & Johansen, D.
<em>BlockCap: Capability Tokens for Blockchain-Based Authorization in Resource-Constrained IoT Environments.</em>
<strong>IEEE Access</strong>, 2025.
</div> -->
