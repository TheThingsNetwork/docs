---
title: Devices & Gateways
description: Learn to connect your devices and gateways to The Things Network
sections:
 - Devices
 - Gateways
zindex: 900
---

# Devices

A LoRaWAN-enabled end device is a sensor or an actuator that can be connected to a LoRaWAN network through a LoRaWAN-enabled gateway.

End-devices are often battery-operated. However, some end devices operate with mains power. These end-devices transmit small data packets (e.g. sensor data) over very long distances and consume low power. They often use compact antennas (e.g. wire antennas, coil antennas, etc).

The Things Network supports **any LoRaWAN compliant device**. We highly recommend using **certified** LoRaWAN devices.

Start by [adding your device](adding-devices.md) to The Things Network! When operating these end devices, make sure you are following the [best practices](best-practices.md) recommended by The Things Network.

If you would like to enhance the security in your LoRaWAN network, one way is to use Hardware Secure Elements. Learn more about the <a href="https://www.thethingsindustries.com/docs/devices/claim-atecc608a/" target="_blank">ATECC608A security solution</a> developed by <a href="https://www.microchip.com/" target="_blank">Microchip</a> and The Things Industries.

# Gateways

A LoRaWAN gateway is an intermediary that allows LoRaWAN end devices to transmit data to The Things Network. 

Gateways are often mains-powered and some can have backup batteries or solar panels. A gateway can be indoor or outdoor, and they have various antenna options.

The communication between devices and gateways is done via LoRaWAN protocol, while gateways use high bandwidth (WiFi, Ethernet, cellular, satellite) backhauls to connect to The Things Network.

A single gateway is capable of serving thousands of devices. When an end device transmits a message, all gateways in the range will receive that message and forward it to The Things Network. The network is in charge of deduplicating those messages and selecting the best gateway for downlink communication. 

Gateways can connect to The Things Network in two ways:

- Using the <a href="https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/" target="_blank">**Semtech UDP Packet Forwarder**</a>
- Using <a href="https://www.thethingsindustries.com/docs/gateways/lora-basics-station/" target="_blank">**LoRa Basics Station**</a>

Start by [adding your gateway](adding-gateways.md) to The Things Network! Check <a href="https://www.thethingsindustries.com/docs/gateways/" target="_blank">how to configure the most popular gateways to connect to The Things Network</a>.

### Connecting Gateways and Devices
<iframe width="560" height="315" src="https://www.youtube.com/embed/rK8oJHZ9Q7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>