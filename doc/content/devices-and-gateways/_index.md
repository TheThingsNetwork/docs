---
title: Devices & Gateways
description: Learn to connect your devices and gateways to The Things Stack Community Edition
image: /gateways/icon.png
sections:
 - Devices
 - Gateways
 - SDKs & Libraries
menu:
  main:
    weight: 20
    params:
      hideOnHome: true
---

The Things Network runs The Things Stack Community Edition, which is a crowdsourced, open and decentralized LoRaWAN network. This network is a great way to get started testing devices, applications, and integrations, and get familiar with LoRaWAN.

The Things Stack Community Edition is free for fair use. Learn how to connect your Things in the documentation for [Adding Devices]({{< relref "adding-devices" >}}) and [Adding Gateways]({{< relref "adding-gateways" >}})!

## What is a LoRaWAN device?

A LoRaWAN-enabled end device is a sensor or an actuator that can be connected to a LoRaWAN network through a LoRaWAN-enabled gateway.

{{< figure src="TheThingsUno.png" class="plain" >}}

End-devices are often battery-operated. However, some end devices operate with mains power. These end-devices transmit small data packets (e.g. sensor data) over very long distances and consume low power. They often use compact antennas (e.g. wire antennas, coil antennas, etc).

{{< note >}}
The Things Stack Community Edition supports **any LoRaWAN compliant device**. We highly recommend using **certified** LoRaWAN devices.
{{</ note >}}

## Adding Devices

Start by [adding your device]({{< relref "adding-devices" >}}) to The Things Stack Community Edition! When operating these end devices, make sure you are following the [best practices]({{< relref "best-practices" >}}) recommended by The Things Network community.

## Gateways

A LoRaWAN gateway is an intermediary that allows LoRaWAN end devices to transmit data to The Things Stack Community Edition.

{{< figure src="TTIG.jpg" class="plain" >}}

Gateways are often mains-powered and some can have backup batteries or solar panels. A gateway can be indoor or outdoor, and they have various antenna options.

The communication between devices and gateways is done via LoRaWAN protocol, while gateways use high bandwidth (WiFi, Ethernet, cellular, satellite) backhauls to connect to The Things Stack Community Edition.

A single gateway is capable of serving thousands of devices. When an end device transmits a message, all gateways in the range will receive that message and forward it to The Things Stack Community Edition. The network is in charge of deduplicating those messages and selecting the best gateway for downlink communication. 

Gateways can connect to The Things Stack Community Edition in two ways:

- Using the <a href="https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/" target="_blank">**Semtech UDP Packet Forwarder**</a>
- Using <a href="https://www.thethingsindustries.com/docs/gateways/lora-basics-station/" target="_blank">**LoRa Basics Station**</a>

Start by [adding your gateway]({{< relref "adding-gateways" >}}) to The Things Stack Community Edition! Instructions for popular gateways are available at [The Things Stack - Gateways](https://www.thethingsindustries.com/docs/gateways/)

## Connecting Gateways and Devices

For a video introduction about adding gateways and devices, see this video by Bogdans Afonins, one of the developers of The Things Stack.

{{< youtube "rK8oJHZ9Q7U" >}}
