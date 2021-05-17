---
title: Frequently Asked Questions
weight: 400
---

## Q: What is The Things Stack?
The Things Stack (also referred to as V3) is a LoRaWAN® Network Server, developed by <a href="https://www.thethingsindustries.com/" target="_blank">The Things Industries</a>. It replaced the former network server, known as The Things Network V2. The Things Stack is more scalable, more secure and supports all the latest LoRaWAN developments.

The Things Stack comes in different flavors, designed for different purposes. **The Things Stack Community Edition** is our free-to-use service for The Things Network community members, designed for testing and evaluating LoRaWAN. To access the console visit: https://console.cloud.thethings.network/

For commercial deployments The Things Industries offers **The Things Stack Cloud**, a SLA-backed hosted service from The Things Industries with 24/7 professional support. For more information, see: https://www.thethingsindustries.com/deployment/

## Q: How can I start using The Things Stack?
For non-commercial use, you can use **The Things Stack Community Edition**, free of charge. To start with the Community Edition, visit: https://console.cloud.thethings.network/. 

For commercial use we recommend The Things Stack Cloud. <a href="https://accounts.thethingsindustries.com/fee-calculator" target="_blank">Click here</a> to start using The Things Stack Cloud:

## Q: Why should I migrate my devices and gateways?
The Things Stack (also known as V3) is more scalable, more secure and supports all the latest LoRaWAN developments like Class C and the latest LoRaWAN versions 1.1 and 1.0.4. The V2 environment will be shut down near the end of 2021.

## Q: When can I start using my TTIG (The Things Indoor Gateway) with The Things Stack?
The Things Industries is are currently working on enabling the TTIGs on The Things Stack and expects to have this ready by the end of Q2 2021.

## Q: When to migrate my devices?
Start migrating your devices as soon as possible. Documentation and migration tooling is available to support you in the process. [Click here](/the-things-stack/migrate-to-v3/) to read more.

## Q: When to migrate my gateways?
We recommend The Things Network community members to keep their gateways registered on The Things Network V2 until the end of Q3, or to agree on performing coordinated migration to The Things Stack with your local community. Without a coordinated migration, you might break active LoRaWAN devices which are not migrated yet and still rely on V2 network coverage.

## Q: Can I migrate my devices with sessions?
Yes, devices can be migrated to The Things Stack with their existing sessions. Please be aware that you are not able to make use of Packet Broker in this case (with the exception of using The Things Industries V2 (SaaS). Meaning that you need to migrate your gateways at the same time as you are migrating your devices.

<a href="https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/" target="_blank">Click here for more information
</a>

{{< note >}}
It is highly recommended to initiate a new session when migrating your devices.
{{</ note >}}

## Q: What is Packet Broker?
Packet Broker is a neutral and open LoRaWAN packet broker, developed by The Things Industries allowing IoT operators to interoperate according to the open principles of the internet. Packet Broker adopts the Passive Roaming specifications, as defined by the LoRa Alliance. 

## Q: How to make use of Packet Broker?
**The Things Stack Community Edition** is already connected to Packet Broker. **The Things Stack Cloud** is partly connected to Packet Broker and receives uplinks from **The Things Network V2** and **The Things Stack Community Edition**. To make full access to Packet Broker, <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">see documentation</a>.

When using a different The Things Stack deployment (like Open Source or Enterprise), or a third party network server, <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/" target="_blank">see documentation</a> to learn how to connect your network to Packet Broker.

## Q: Is Packet Broker enabled by default?
When using **The Things Stack Community Edition** or **The Things Stack Cloud**, Packet Broker is enabled by default.

Packet Broker can be used to route uplinks, downlinks and device joins.

|From network | To network | Packet Broker details|
|--|--|--|
| TTN V2 | TTS Community Edition | Uplinks only|
| TTN V2 | TTS Cloud | Uplinks only|
| TTS Community Edition | TTS Cloud | Uplinks only. Downlinks & joins can be enabled by TTS Cloud users. <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">More info</a> |
| TTS Cloud | TTS Community Edition | Disabled by default, can be enabled manually. <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">More info</a>
| TTS Community Edition | TTN V2 | Not available
| TTS Cloud | TTN V2 | Not available


{{< warning >}}
When moving gateways from TTN V2 to The Things Stack Community Edition, data will NOT be forwarded back to TTN V2. Move your applications to V3 and only when all applications (including those of the community members in your region) are on V3 move the gateway(s) as well.
{{</ warning >}}

## Q: When is The Things Network V2 going down?
1. **June 1** - The Things Network V2 becomes read only, meaning that no applications, devices and gateway can be added.
2. **September 30** - Deadline for migrating gateways and devices
3. **December 31** - End of Life The Things Network V2

## Q: What to do when I cannot remotely update my gateways?
End devices connected to The Things Network V2 can be migrated to **The Things Stack Community Edition** and **The Things Stack Cloud**   without the need for migrating a gateway, thanks to the default connection with Packet Broker. The traffic will be routed to The Things Stack after migrating your device(s). Important note: devices need to initiate a new session for this to work (meaning, get a new devices address and session keys).

Unfortunately, it is important to find a way for gateway owners to update their gateways before the end of 2021 as the V2 environment will go down. 

## Q: What to do when I cannot let my devices rejoin?
It is possible to migrate your devices with their existing sessions (however not recommended). For this to work, the gateways the devices make use of need to be connected to the same network (such as The Things Stack Community Edition or The Things Stack Cloud) as the network the devices are connected to.