---
title: Migrating to The Things Stack Community Edition
description: The Things Network V2 is upgrading to The Things Stack Community Edition
aliases:
 - /the-things-stack-v3/
weight: 700
image: "network/icon.png"
menu:
  main:
    weight: 20
---


As mentioned in the [Quick Start](../quick-start), **The Things Network V2 software has been upgraded to The Things Stack Community Edition (also known as V3)**. The existing users of The Things Network V2 will need to migrate their gateways and devices to The Things Stack Community Edition as **The Things Network V2 clusters will be shut down near the end of 2021**.

> <a href="https://console.cloud.thethings.network/" target="_blank">Click here to visit The Things Stack Community Edition Console</a>

{{< note >}} 
The Things Stack Community Edition is a LoRaWAN Network Server which is free to use for The Things Network community members. The Community Edition is designed for testing and evaluating LoRaWAN projects and is managed by <a href="https://www.thethingsindustries.com/" target="_blank">The Things Industries</a>. The Community Edition comes without guarantees and only includes community support, hence is not suitable for commercial usage. Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or <a href="https://thethingsnetwork.slack.com/" target="_blank">Slack</a> for community support.

For commercial LoRaWAN projects, it is recommended to use an SLA-backed version of The Things Stack, as it includes professional support. <a href="https://www.thethingsindustries.com/deployment/" target="_blank">Click here to learn more</a>
{{</ note >}} 

## Why should I migrate my devices and gateways from The Things Network V2 to The Things Stack Community Edition?

> Here, we assume you have experience using The Things Network V2, and you have your gateways and devices connected there. If you have not been using The Things Network V2 yet, you can just follow the [Quick Start]({{< ref "quick-start" >}}) guide.

#### Features of The Things Stack

The Things Stack, compared to The Things Network V2, is **more scalable, more secure and supports all the latest LoRaWAN developments** like the latest LoRaWAN versions 1.1 and 1.0.4.

The Things Stack architecture is based on microservices which allows for **better distribution of services, better scaling and interoperability with other LoRaWAN networks**.

The Things Stack **supports all LoRaWAN classes (A, B, C) and multicast device groups, all existing LoRaWAN versions (including v1.0.4 and v1.1) and all regional parameters as defined by the LoRa Alliance**. By being standards compliant, The Things Stack **supports passive roaming and will support handover roaming** in the future. **Firmware updates over the air, advanced clustering and load balancing techniques** also come along with this upgrade.

The advanced APIs offer **gRPC, HTTP and MQTT <a href="https://www.thethingsindustries.com/docs/integrations/" target="_blank">integrations</a>**. For debugging purposes, there are **API-based event streams** that can help you trace issues, monitor device behaviour and get useful alerts. <a href="https://www.thethingsindustries.com/docs/reference/data-formats/" target="_blank">Data Formats</a> used by The Things Stack have a different schema and have a much **richer metadata support**. For storing data, a **<a href="https://www.thethingsindustries.com/docs/integrations/storage/" target="_blank">Storage Integration</a>** is also available.

Users of The Things Stack have the opportunity to use the **Global Join Server** for storing and issuing security keys, and in that way, improve the security of their sensor deployment. Since this network architecture is standards-compliant, developers can even use a join server operated by a trusted third party.

One of the most important features is the connection to **<a href="https://www.thethingsindustries.com/docs/reference/peering/" target="_blank">Packet Broker</a>**, allowing the exchange of traffic between The Things Stack Community Edition and private LoRaWAN networks which increases LoRaWAN network coverage, performance and capacity, and prolongs the end device battery life. 

You will be able to reuse your username and password from The Things Network V2 to log in, thanks to **The Things ID feature**. Users can use the <a href="https://www.thethingsindustries.com/docs/getting-started/console/" target="_blank">Console</a> with an **improved user interface** or <a href="https://www.thethingsindustries.com/docs/getting-started/cli/" target="_blank">CLI</a>, to manage <a href="https://www.thethingsindustries.com/docs/gateways/" target="_blank">gateways</a>, <a href="https://www.thethingsindustries.com/docs/devices/" target="_blank">devices</a>, <a href="https://www.thethingsindustries.com/docs/integrations/adding-applications/" target="_blank">applications</a>, <a href="https://www.thethingsindustries.com/docs/getting-started/user-management/" target="_blank">users and organizations</a>, as well as to interact with uplink and downlink events in real-time. 

> For a more detailed comparison between The Things Network V2 and The Things Stack Community Edition, check out the <a href="https://www.thethingsindustries.com/docs/getting-started/migrating/major-changes/" target="_blank">Major Changes in The Things Stack</a> page.

Continue reading to learn how to [migrate your gateways and devices to The Things Stack Community Edition]({{< relref "migrate-to-v3" >}}).
