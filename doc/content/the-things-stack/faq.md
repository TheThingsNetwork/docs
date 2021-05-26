---
title: Frequently Asked Questions
weight: 400
---

## Q: What is The Things Stack?
The Things Stack (also referred to as V3) is a LoRaWAN® Network Server, developed by <a href="https://www.thethingsindustries.com/" target="_blank">The Things Industries</a>. It replaced the former network server, known as **V2**. The Things Stack is more scalable, more secure and supports all the latest LoRaWAN developments.

The Things Stack comes in different flavors, designed for different purposes. **The Things Stack Community Edition** is our free-to-use service for The Things Network community members, designed for testing and evaluating LoRaWAN. <a href="https://console.cloud.thethings.network/" target="_blank">Click here to visit The Things Stack Community Edition Console</a>

For commercial deployments, The Things Industries offers **The Things Stack Cloud** (among others), an SLA-backed hosted service with 24/7 professional support. For more information, see <a href="https://www.thethingsindustries.com/deployment/" target="_blank">The Things Stack deployment options page</a>

## Q: How can I start using The Things Stack?
For non-commercial use, you can use **The Things Stack Community Edition**, free of charge. To start with the Community Edition, visit <a href="https://console.cloud.thethings.network/" target="_blank">The Things Stack Community Edition Console</a>.

For commercial use, we recommend **The Things Stack Cloud**. <a href="https://accounts.thethingsindustries.com/fee-calculator" target="_blank">Click here</a> to start using The Things Stack Cloud.

## Q: Why should I migrate my devices and gateways?
The Things Stack (also known as V3) is more scalable, more secure and supports all the latest LoRaWAN developments like Class C and the latest LoRaWAN versions 1.1 and 1.0.4. The V2 environment will be shut down near the end of 2021.

## Q: When can I start using my TTIG (The Things Indoor Gateway) with The Things Stack?
The Things Industries team is currently working on enabling the TTIGs on The Things Stack and expects to have this ready by the end of Q2 2021.

## Q: When to migrate my devices?
Start migrating your devices as soon as possible. Documentation and migration tooling is available to support you in the process. [Click here](/the-things-stack/migrate-to-v3/) to read more.

## Q: When to migrate my gateways?
Start migrating your gateways as soon as possible. Documentation is available to support you in the process. [Click here](/the-things-stack/migrate-to-v3/) to read more. 

{{< note >}}
Since version 3.13 (released in May, 2021), The Things Network V2 routes traffic back and forth to The Things Stack Community Edition. When migrating your gateways to The Things Stack Community Edition, the coverage of the public community network won't be impacted.
{{</ note >}}

## Q: Can I migrate my devices with sessions?
Yes, devices can be migrated to The Things Stack with their existing sessions. However, for community members migrating from **The Things Network V2** to **The Things Stack Community Edition**, migrating active sessions via Packet Broker is not available, i.e. **migrating gateways at the same time as migrating devices is a necessity**.

For The Things Industries V2 (SaaS) users, migrating active device sessions to The Things Stack Cloud via Packet Broker is available on a customer request. 

<a href="https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/migrate-using-migration-tool/migrate-active-session/" target="_blank">Read the full The Things Stack documentation on migrating active sessions</a>

{{< note >}}
It is highly recommended to avoid active session migration, i.e. to initiate a new session when migrating your devices.
{{</ note >}}

## Q: What is Packet Broker?
Packet Broker is a neutral and open LoRaWAN packet broker developed by The Things Industries. Packet Broker can be used to exchange traffic with other LoRaWAN networks to share coverage and improve the overall network performance. Packet Broker adopts the Passive Roaming specifications, as defined by the LoRa Alliance. 

## Q: How to make use of Packet Broker?
**The Things Network V2**, **The Things Stack Community Edition** and **The Things Stack Cloud** are already connected to Packet Broker. Click <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">here</a> to see the documentation on configuring Packet Broker.

**The Things Stack Open Source** and **The Things Stack Enterprise** deployments can also be connected to Packet Broker. Click <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/" target="_blank">here</a> to learn how to connect your network to Packet Broker.

For other deployments, please contact [The Things Industries support](mailto:support@thethingsindustries.com).

## Q: Is Packet Broker enabled by default?
When using **The Things Stack Community Edition** or **The Things Stack Cloud**, Packet Broker is enabled by default.

Packet Broker can be used to route uplinks, downlinks and device joins.

|From network | To network | Packet Broker details|
|--|--|--|
| TTN V2 | TTS Community Edition | Uplinks, downlink & joins|
| TTN V2 | TTS Cloud | Uplinks only by default. Downlinks & joins can be enabled by TTS Cloud users. <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">More info</a> |
| TTS Community Edition | TTS Cloud | Uplinks only by default. Downlinks & joins can be enabled by TTS Cloud users. <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">More info</a> |
| TTS Cloud | TTS Community Edition | Disabled by default, can be enabled manually. <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/configure/" target="_blank">More info</a>|
| TTS Community Edition | TTN V2 | Uplinks, downlink & joins|
| TTS Cloud | TTN V2 | Not available|


## Q: When is The Things Network V2 going down?
1. **July 1** - The Things Network V2 becomes read only, meaning that no applications, devices and gateway can be added. Users will still be able to access the resources created prior to this deadline.
2. **September 30** - Deadline for migrating gateways and devices
3. **December 31** - The Things Network V2 End of Life 

## Q: What to do when I cannot update my gateways remotely?
End devices connected to The Things Network V2 can be migrated to The Things Stack without the need for migrating a gateway, if The Things Stack deployment is connected to Packet Broker. **The Things Stack Community Edition** is already connected to Packet Broker, so you can migrate your device(s) from **The Things Network V2** to **The Things Stack Community Edition** without migrating your gateway.

Unfortunately, it is important to find a way for gateway owners to update their gateways before the end of 2021 as the V2 environment will go down. 

## Q: What to do when I cannot let my devices rejoin?
It is possible to migrate your devices with their existing sessions (however, this is **not recommended**). Migrating an active device session via Packet Broker is not available for users migrating from **The Things Network V2** to **The Things Stack Community Edition**. For these users, the only way to migrate active device sessions is if the gateway that devices use is migrated to **The Things Stack Community Edition** as well.
