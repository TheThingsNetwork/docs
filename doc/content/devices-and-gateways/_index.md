---
title: Devices & Gateways
description: Learn to connect your devices and gateways to The Things Network
image: /gateways/icon.png
sections:
 - Devices
 - Gateways
menu:
  main:
    weight: 3
    params:
      hideOnHome: true
---

A LoRaWAN-enabled end device is a sensor or an actuator which can be connected to a LoRaWAN network through a LoRaWAN-enabled gateway. The Things Network supports **any LoRaWAN compliant device**. We highly recommend using **certified** LoRaWAN devices.

Start by [adding your device]({{< relref "adding-devices" >}}) to The Things Network! When operating these end devices, make sure you are following the [best practices]({{< relref "best-practices" >}}) recommended by The Things Network.

If you would like to enhance the security in your LoRaWAN network, one way is to use Hardware Secured Elements. Learn more about the [ATECC608A security solution](https://www.thethingsindustries.com/docs/devices/claim-atecc608a/) developed by [Microchip](https://www.microchip.com/) and The Things Industries.

# Gateways

A LoRaWAN gateway is an intermediary that allows LoRaWAN end devices to transmit data to The Things Network. The communication between devices and gateways is done via LoRaWAN protocol, while gateways use high bandwidth (WiFi, Ethernet, cellular, satellite) backhauls to connect to The Things Network.

A single gateway is capable of serving thousands of devices. When an end device transmits a message, all gateways in the range will recieve that message and forward it to The Things Network. The network is in charge of deduplicating those messages and selecting the best gateway for downlink communication. 

Gateways can connect to The Things Network in two ways:

- Using the [**Semtech UDP Packet Forwarder**](https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/)
- Using [**LoRa Basics Station**](https://www.thethingsindustries.com/docs/gateways/lora-basics-station/)

Start by [adding your gateway]({{< relref "adding-gateways" >}}) to The Things Network! Check [how to configure the most popular gateways to connect to The Things Network](https://www.thethingsindustries.com/docs/gateways/).

### Connecting Gateways and Devices
<iframe width="560" height="315" src="https://www.youtube.com/embed/rK8oJHZ9Q7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
