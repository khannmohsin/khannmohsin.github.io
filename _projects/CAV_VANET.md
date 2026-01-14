---
layout: page
title: CAV- and VANET-Enabled Traffic Congestion Reduction and Accident Circumvention
description: Integrating Connected Autonomous Vehicles and VANETs for safe-distance maintenance, overtaking, and lane-shifting to reduce congestion and accidents.
img: assets/img/projects/CAV_VANET/cover.png
importance: 3
category: Research Projects
tags: [Connected Autonomous Vehicles, VANET, Traffic Flow Optimization, Safety-Critical Systems, MATLAB-Based Simulation]
related_publications: true
---

## 4. Simulation Snapshots

<!-- Single image for Flowchart -->
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/CAV_VANET/traffic_scenarios_flowchart.png" title="Flowchart of Different Traffic Scenarios" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Flowchart showing safe-distance enforcement, overtaking logic, and lane-switching decisions under varying traffic and accident conditions.
</div>

---

<!-- Two images side by side: GUI (left) and MATLAB simulation (right) -->
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/CAV_VANET/gui_4vehicles.png" title="GUI for Variables of Four Vehicles" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/CAV_VANET/matlab_simulation.png" title="MATLAB Simulation Snapshot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Left: GUI panel for configuring speed, acceleration, and lane position of four different vehicles.  
Right: MATLAB simulation showing live roadway model applying CAV and VANET-based congestion and accident avoidance rules.
</div>

---

## 1. Motivation

<div class="justify-text">
- Traffic jams — both recurring (bottlenecks) and non-recurring (accidents, weather) — cause economic and safety impacts worldwide.  
- "Phantom jams" emerge when drivers brake abruptly due to unsafe spacing, propagating backward as congestion waves.  
- Many developing countries rely on Level 2 automation, where drivers control the vehicle but can benefit from assisted decision-making.  
- This work integrates IoT-based real-time inter-vehicle communication to reduce accident risks from overtaking and lane changes, while smoothing traffic flow.
</div>

---

## 2. Methodology

<div class="justify-text">
Technologies & Platforms:
- CAV + VANET Communication for local vicinity data sharing (speed, location, distance).
- MATLAB Driving Scenario Toolbox for simulation and algorithm validation.
- Google Maps API for realistic roadway mapping in test cases.
- IoT Hardware (proposed): Raspberry Pi integration for real-world deployment.

**Core Algorithms:**
1. **Safe Distance Maintenance** – Continuous monitoring and adjustment to avoid phantom jams.
2. **Controlled Overtaking** – Decision-making based on available space and traffic in adjacent lanes.
3. **Lane Shift Protocol** – Permission-based lane change execution to minimize disruptions.

**Performance Testing:**
- Simulated with increasing complexity of road layouts.
- Evaluated on response time, congestion reduction, and safety event prevention.
</div>

---

## 3. System Architecture

{% include figure.liquid path="assets/img/projects/cav-vanet-architecture.png" title="CAV-VANET Communication and Decision System" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Vehicles exchange local telemetry via VANET; MATLAB algorithms process inputs to issue cooperative maneuver permissions.
</div>

---

## 4. Simulation Snapshots

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/traffic_flow.png" title="Traffic Algorithm Flowchart" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/GUI_CAV.png" title="Controlled Overtaking Logic" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Left: Simulated roadway applying safe-distance, overtaking, and lane-shift rules.  
Right: Decision flow for overtaking in multi-lane traffic.
</div>

---

## 5. Key Results

<div class="justify-text">
- **Reduced Congestion:** Significant decrease in stop-and-go waves during simulations.
- **Improved Safety:** Lower frequency of simulated collisions in overtaking/lane shift scenarios.
- **Scalability:** Framework adaptable to varying road types and traffic densities.
</div>

---

## 6. Applications

<div class="justify-text">
- Smart transportation systems in urban and highway environments.
- Augmentation of Level 2 automation in developing countries.
- Integration into intelligent traffic management centers for real-time control.
</div>

---

## 7. Publications

<div class="justify-text">
- <strong>Khan, M.</strong>, & Arora, B. (2021). <em>Traffic Jam Minimization and Accident Avoidance System Using IoT.</em> In *Evolving Technologies for Computing, Communication and Smart World* (Springer).  
- <strong>Khan, M.</strong>, & Arora, B. (2021). <em>Traffic Congestion Reduction and Accident Circumvention System via Incorporation of CAV and VANET.</em> In *Lecture Notes in Networks and Systems* (Springer).
</div>

---