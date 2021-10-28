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


As mentioned in the [Quick Start](../quick-start), **The Things Network V2 software has been upgraded to The Things Stack Community Edition (also known as V3)**.

{{< warning >}} On **July 1, 2021** V2 deployments are becoming **read-only**, which means users will no longer be able to add new applications, end devices and gateways. Since V2 deployments are planned to be completely shut down on **December 1, 2021**, we recommend users to migrate their gateways and devices to The Things Stack as soon as possible. {{</ warning >}}

This guide can help you with the process of migrating your gateways and devices.

> [Click here to visit The Things Stack Community Edition Console](https://console.cloud.thethings.network/)

{{< note >}} 
The Things Stack Community Edition is a LoRaWAN Network Server which is free to use for The Things Network community members. The Community Edition is designed for testing and evaluating LoRaWAN projects and is managed by [The Things Industries](https://www.thethingsindustries.com/). The Community Edition comes without guarantees and only includes community support, hence is not suitable for commercial usage. Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or [Slack](https://thethingsnetwork.slack.com/) for community support.

For commercial LoRaWAN projects, it is recommended to use an SLA-backed version of The Things Stack, as it includes professional support. [Click here to learn more](https://www.thethingsindustries.com/deployment/)
{{</ note >}} 

## Why should I migrate my devices and gateways from The Things Network V2 to The Things Stack Community Edition?

> Here, we assume you have experience using The Things Network V2, and you have your gateways and devices connected there. If you have not been using The Things Network V2 yet, you can just follow the [Quick Start]({{< ref "quick-start" >}}) guide.

#### Features of The Things Stack

The Things Stack, compared to The Things Network V2, is **more scalable, more secure and supports all the latest LoRaWAN developments** like the latest LoRaWAN versions 1.1 and 1.0.4.

The Things Stack architecture is based on microservices which allows for **better distribution of services, better scaling and interoperability with other LoRaWAN networks**.

The Things Stack **supports all LoRaWAN classes (A, B, C) and multicast device groups, all existing LoRaWAN versions (including v1.0.4 and v1.1) and all regional parameters as defined by the LoRa Alliance**. By being standards compliant, The Things Stack **supports passive roaming and will support handover roaming** in the future. **Firmware updates over the air, advanced clustering and load balancing techniques** also come along with this upgrade.

The advanced APIs offer **gRPC, HTTP and MQTT [integrations](https://www.thethingsindustries.com/docs/integrations/)**. For debugging purposes, there are **API-based event streams** that can help you trace issues, monitor device behaviour and get useful alerts. [Data Formats](https://www.thethingsindustries.com/docs/reference/data-formats/) used by The Things Stack have a different schema and have a much **richer metadata support**. For storing data, a **[Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/)** is also available.

Users of The Things Stack have the opportunity to use the **Global Join Server** for storing and issuing security keys, and in that way, improve the security of their sensor deployment. Since this network architecture is standards-compliant, developers can even use a join server operated by a trusted third party.

One of the most important features is the connection to **[Packet Broker](https://www.thethingsindustries.com/docs/reference/peering/)**, allowing the exchange of traffic between The Things Stack Community Edition and private LoRaWAN networks which increases LoRaWAN network coverage, performance and capacity, and prolongs the end device battery life. 

You will be able to reuse your username and password from The Things Network V2 to log in, thanks to **The Things ID feature**. Users can use the [Console](https://www.thethingsindustries.com/docs/getting-started/console/) with an **improved user interface** or [CLI](https://www.thethingsindustries.com/docs/getting-started/cli/), to manage [gateways](https://www.thethingsindustries.com/docs/gateways/), [devices](https://www.thethingsindustries.com/docs/devices/), [applications](https://www.thethingsindustries.com/docs/integrations/adding-applications/), [users and organizations](https://www.thethingsindustries.com/docs/getting-started/user-management/), as well as to interact with uplink and downlink events in real-time. 

> For a more detailed comparison between The Things Network V2 and The Things Stack Community Edition, check out the [Major Changes in The Things Stack](https://www.thethingsindustries.com/docs/getting-started/migrating/major-changes/) page.

Continue reading to learn how to [migrate your gateways and devices to The Things Stack Community Edition]({{< relref "migrate-to-v3" >}}).
