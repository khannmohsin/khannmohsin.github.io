---
layout: page
title: "PAXOS Consensus Algorithm Implementation"
category: Coursework Projects
img: assets/img/projects/paxos/cover.png
description: "Python-based simulation of the PAXOS consensus protocol with fault tolerance testing and performance evaluation."
importance: 3
tags: ["distributed systems", "consensus", "paxos", "fault tolerance", "python"]
related_publications: false
---

<div class="justify-text">
The <strong>PAXOS Consensus Algorithm Implementation</strong> project demonstrates a Python-based simulation of the classic PAXOS fault-tolerant consensus protocol.  
PAXOS ensures that distributed nodes reach agreement on a single value, even in the presence of failures, and is fundamental to distributed systems such as databases, blockchain, and cloud coordination frameworks.

This implementation models the three core PAXOS roles — <em>Proposers</em>, <em>Acceptors</em>, and <em>Learners</em> — as independent Python <code>multiprocessing</code> processes, communicating through manager-backed shared lists and values.

The algorithm is executed in three phases:
<br>

1. <strong>Prepare Phase</strong> — Proposers generate unique proposal numbers (tuple of sequence number and process ID) and send them to all acceptors. Acceptors promise not to accept lower-numbered proposals.
   <br>
2. <strong>Accept Phase</strong> — Upon receiving majority promises, proposers send their proposed value to acceptors, which accept and store it if conditions are met.
   <br>
3. <strong>Commit Phase</strong> — Accepted values are propagated to learners, which confirm majority agreement and commit the decision.
<br>
The program includes fault simulation, where acceptor processes can be intentionally crashed to test PAXOS’s resilience. Performance is evaluated over multiple iterations with and without crashes, recording the time required for each proposer and learner to reach consensus.
</div>

---

<!-- ## PAXOS Algorithm Flowchart
{% include figure.liquid path="assets/img/Paxos_flowchart.jpg" title="Flowchart of the PAXOS Algorithm" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Flowchart representation of the PAXOS consensus process, illustrating the interactions between proposers, acceptors, and learners during the prepare, accept, and commit phases.
</div>
--- -->

## Experimentation Results

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/paxos/paxos_result_1.png" title="Consensus Time – No Acceptor Crashes" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/paxos/paxos_result_2.png" title="Consensus Time – Two Acceptor Crashes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Left: Time taken by proposers to achieve consensus with 5 acceptors and 5 learners (no crashes).  
Right: Time taken when 2 acceptors are crashed (3 acceptors and 5 learners).
</div>

---

## Key Insights

- **Initialization Overhead** — Proposer 1 takes longer due to acceptor/learner initialization, while Proposer 2 benefits from already-running components.
- **Crash Tolerance** — Crashing 2 acceptors slightly increases consensus time for Proposer 1 but has negligible effect for Proposer 2.
- **Scalability Observations** — Increasing acceptors and learners generally increases consensus time, consistent with PAXOS’s majority-based guarantees.

---

## Technologies Used

- **Python multiprocessing** for role-based process isolation.
- **Shared memory objects** for inter-process communication.
- **Matplotlib** for visualizing consensus performance metrics.
