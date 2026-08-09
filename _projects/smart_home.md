---
layout: page
title: IoT-Based Automation and Security
description: An IoT-enabled home automation and security system integrating Arduino Mega & UNO, RFID access, multiple sensors, and Cayenne Cloud for real-time monitoring and remote control.
img: assets/img/projects/smart_home/cover.png
importance: 4
category: Research Projects
tags: ["Smart Home IoT", Arduino, RFID, Sensor Networks, MQTT, Cloud Monitoring]
related_publications: false
---

## 1. System Architecture

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/smart_home_block_diagram.png" title="System Block Diagram" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Architecture showing Arduino UNO handling RFID-based access control and Arduino Mega interfaced with multiple sensors, relays, and actuators, all connected to Cayenne Cloud via Ethernet Shield for IoT-based monitoring and automation.
</div>

---

## 2. Motivation

<div class="justify-text">
- Increasing demand for secure and energy-efficient home environments that can be controlled remotely.
- Integration of IoT to provide real-time data collection and device automation.
- Addressing the absence of low-cost, modular systems that combine security mechanisms such as RFID door locks with environmental monitoring.
- Enhancing safety through automatic responses to events like gas leaks, intrusions, and abnormal environmental conditions.
</div>

---

## 3. Methodology

<div class="justify-text">
Technologies & Platforms:
- Arduino Mega 2560 – Main controller for sensors and actuators.
- Arduino UNO + MFRC522 RFID – Local door access control.
- Ethernet Shield (W5100) – Provides Internet connectivity to Arduino Mega.
- Cayenne Cloud + MQTT – IoT platform for dashboard monitoring and control.
- Android App – Remote access to system controls and sensor data.

Core Functionalities:

1. RFID-Based Door Lock – Unlock/lock doors with keycards or remotely via the Cayenne dashboard.
2. Intrusion Detection – PIR motion sensors trigger alarms or automatic lighting.
3. Gas/Smoke Detection – Automatic valve shutdown via servo motor upon leak detection.
4. Environmental Monitoring – Temperature, humidity, and soil moisture sensing.
5. Appliance Control – Relay modules switch lights, fans, and high-voltage devices.

Integration Approach:

- Arduino UNO handles RFID logic and relay for door locking.
- Arduino Mega handles sensor monitoring, appliance control, and cloud communication.
- Cayenne Cloud stores data, triggers automation, and provides a dashboard interface.
</div>

---

## 4. Hardware Components

### Microcontrollers & Communication Modules

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home//arduino_mega.webp" title="Arduino Mega 2560 with Ethernet Shield" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/arduino_uno.png" title="Arduino UNO" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/ethernet_shield.jpg" title="W5100 Ethernet Shield" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Arduino Mega 2560 serves as the main controller for sensors and actuators, connected to the internet via W5100 Ethernet Shield.  
Arduino UNO is dedicated to handling RFID authentication and controlling the door relay.
</div>

---

### Sensors

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/rfid_module.png" title="MFRC522 RFID Module with Keycards and Fobs" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/pir_sensor.png" title="PIR Motion Sensor" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/dht11_sensor.png" title="DHT11 Temperature & Humidity Sensor" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/soil_moisture_sensor.png" title="Soil Moisture Sensor" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/mq2_sensor.png" title="MQ-2 Gas/Smoke Sensor" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Sensors include MFRC522 RFID for access control, PIR for motion detection, DHT11 for temperature/humidity monitoring, soil moisture sensor for garden irrigation alerts, and MQ-2 for gas/smoke detection.
</div>

---

### Actuators

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/relay_module.png" title="Relay Module" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/servo_motor.png" title="Servo Motor" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Actuators include a multi-channel relay module for switching high-voltage home appliances, and a servo motor for automatic gas valve control.
</div>

---

{% comment %}

## 5. Implementation Snapshots

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/dashboard.png" title="Cayenne Cloud Dashboard" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart_home/android_app.png" title="Android Control App" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Left: Cayenne IoT dashboard displaying real-time sensor readings and allowing appliance control.  
Right: Android mobile app for remote control and monitoring of Smart-n-Secure Home devices.
</div>
{% endcomment %}

---

## 6. Key Features & Results

<div class="justify-text">
- Remote Access: Control appliances, lighting, and door locks via smartphone or web dashboard.
- Real-Time Alerts: Push notifications for gas leaks, motion detection, and abnormal environmental readings.
- Automated Safety: Servo-controlled gas valve automatically closes during leak detection.
- Smart Garden Feature: Soil moisture sensor informs the user when garden watering is needed.
- Energy Efficiency: Relays enable appliances only when necessary, reducing waste.
</div>

---

## 7. Future Scope

<div class="justify-text">
- Integrating HD IP cameras for 24/7 video surveillance.
- Adding voice assistant compatibility (Alexa, Google Assistant).
- Including water-level and vibration sensors for flood and earthquake alerts.
- Implementing hybrid local + cloud control to maintain functionality during internet outages.
</div>

---
