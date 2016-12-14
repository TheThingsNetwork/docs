---
title: Applications
description: Exchange data with Devices on The Things Network.
sections:
 - APIs
 - SDKs & Libaries
links:
 - title: Migrate form Staging to Production
   href: ../network/migrate.html
image: /applications/icon.png
zindex: 700
---

# Applications

By *Applications*, we mean whatever it is your devices communicate with on the internet. This could be as simple as an [IFTTT Maker Applet](https://ifttt.com/maker) or a visual flow using [Node-RED](nodered/) to custom code on some server.

Before you can communicate with devices, you will need to add the application to the network and [register devices](../devices/registration.md) to it.

## APIs

The Things Network has two flavors of APIs to exchange data with devices, as well as APIs to [manage devices](manager/). The data APIs use MQTT and AMQP standards, with [client libraries](https://github.com/mqtt/mqtt.github.io/wiki/libraries) for pretty much any platform.

## SDKs

We plan to provide SDKs for popular platforms to make make it easier to use the APIs.

> If you'd like to help us build an SDK for another platform, [contact us](mailto:johan@thethingsnetwork.org) for our Ambassador & Partner programs.

## Platforms

For applications on platforms like IFTTT, Node-RED, Azure and Amazon we provide simple integrations.

> If you'd like to build an integration for your platform, please see [Platforms](../platforms).

