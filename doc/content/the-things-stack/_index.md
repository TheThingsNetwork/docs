---
title: The Things Stack
description: The Things Network is upgrading to The Things Stack V3
aliases:
 - /the-things-stack-v3/
weight: 700
image: "network/icon.png"
menu:
  main
---

As announced during The Things Conference held in January 2021, The Things Network software is upgrading to The Things Stack V3. This upgrade comes with a set of brand new features, out-of-the-box integrations, extended coverage and improved user experience. 

## What is The Things Stack V3?

The Things Stack V3 is a user-friendly, enterprise-grade LoRaWAN network server built on top of an open-source stack. Comparing to The Things Network Stack V2, The Things Stack V3 is not just an update but a completely new solution built from scratch. 

The Things Stack V3 <a href="https://www.thethingsindustries.com/docs/reference/components/" target="_blank">architecture</a> shown below follows the LoRaWAN Network Reference Model. 

![Network Architecture](architecture.png)

> For detailed information on The Things Stack V3, visit <a href="https://www.thethingsindustries.com/docs/" target="_blank">The Things Stack official documentation page</a>.

> **To learn more about migration to The Things Stack V3, [click here]({{< relref "migrate-to-v3" >}})**.


## How can I access V3?

The (free) community edition of The Things Stack V3 can be accessed via the <a href="https://console.cloud.thethings.network/" target="_blank">**Console**</a>. Make sure to select the cluster which is closest to you geographically.

[![The Things Network Console](TTN-V3-console.png "The Things Network Console")](https://console.cloud.thethings.network/)

## Why should I migrate from V2 to V3?

> Here, we assume you have experience using The Things Network running The Things Network Stack V2. If you have not been using The Things Network yet, you can visit the [The Things Stack Quick Start]({{< ref "quick-start" >}}).

The Things Stack (V3) is more scalable, more secure and supports all the latest LoRaWAN developments like the latest LoRaWAN versions 1.1 and 1.0.4. Near the end of 2021, The Things Network V2 clusters will be shut down. 

The Things Stack Architecture is based on microservices which allows for better distribution of services, better scaling and interoperability with other LoRaWAN networks. 

The Things Stack V3 supports all LoRaWAN classes (A, B, C) and multicast device groups, all existing LoRaWAN versions (including v1.0.4 and v1.1) and all regional parameters by defined by the LoRa Alliance. By being standards compliant, The Things Stack V3 allows passive roaming and will allow handover roaming in the future. Firmware updates over the air, advanced clustering and load balancing techniques also come along with this upgrade.

You will be able to reuse your username and password from The Things Network Stack V2 to log in, thanks to The Things ID feature. Users can use the <a href="https://www.thethingsindustries.com/docs/getting-started/console/" target="_blank">Console</a> with an improved user interface, or <a href="https://www.thethingsindustries.com/docs/getting-started/cli/" target="_blank">CLI</a> to manage <a href="https://www.thethingsindustries.com/docs/gateways/" target="_blank">gateways</a>, <a href="https://www.thethingsindustries.com/docs/devices/" target="_blank">devices</a>, <a href="https://www.thethingsindustries.com/docs/integrations/adding-applications/" target="_blank">applications</a>, <a href="https://www.thethingsindustries.com/docs/getting-started/user-management/" target="_blank">users and organizations</a>, as well as to interact with uplink and downlink events in real-time. 

The advanced APIs offer gRPC, HTTP and MQTT <a href="https://www.thethingsindustries.com/docs/integrations/" target="_blank">integrations</a>. For debugging purposes, there are API-based event streams that can help you trace issues, monitor device behaviour and get useful alerts. <a href="https://www.thethingsindustries.com/docs/reference/data-formats/" target="_blank">Data Formats</a> used by The Things Stack V3 have a different schema and have a much richer metadata support. For storing data, a <a href="https://www.thethingsindustries.com/docs/integrations/storage/" target="_blank">Storage Integration</a> is also available.

Users of The Things Stack V3 will now have an opportunity to use the Global Join Server for storing and issuing security keys, and in that way, highly improve the security of their network. Since this network architecture is standards-compliant, developers can even use a join server operated by a trusted third party.

One of the most important features is the connection to <a href="https://www.thethingsindustries.com/docs/reference/peering/" target="_blank">Packet Broker</a>, allowing the exchange of traffic between The Things Network and private LoRaWAN networks which increases LoRaWAN network coverage, performance and capacity, and prolongs the end device battery life. 

> **For a more detailed comparison between V2 and V3, check out the <a href="https://www.thethingsindustries.com/docs/getting-started/migrating/major-changes/" target="_blank">Major Changes in The Things Stack</a> page.**

> **Continue reading to learn about [migrating your devices to The Things Stack V3]({{< relref "migrate-to-v3" >}})**.

