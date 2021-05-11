---
title: Migrate Gateways
weight: 300
---

This section shortly describes steps to be taken to migrate your gateway from The Things Network V2 to The Things Stack Community Edition.

{{< warning >}} We strongly recommend The Things Network community members to keep their gateways registered on The Things Network V2 for as long as possible, or to agree on performing coordinated migration to The Things Stack, as this will ensure the community does not loose their LoRaWAN coverage. {{</ warning >}}

<a href="https://www.thethingsindustries.com/docs/getting-started/migrating/gateway-migration/" target="_blank">Migrating your gateway</a> from The Things Network V2 to The Things Stack Community Edition cluster is a really easy process. 

First, you need to <a href="https://www.thethingsindustries.com/docs/gateways/adding-gateways/" target="_blank">add a gateway to The Things Stack Community Edition</a>.

Then, you need to change the address of The Things Stack Community Edition cluster you are using - this will depend on which type of gateway you are using, <a href="https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/" target="_blank">Semtech UDP Packet Forwarder</a> or <a href="https://www.thethingsindustries.com/docs/gateways/lora-basics-station/" target="_blank">LoRa Basics Station</a>. Let us assume you are using `eu1.cloud.thethings.network`.

- If you are using a Semtech UDP Packet Forwarder, change the `server_address` in your `global_conf.json` to `eu1.cloud.thethings.network`
- If you are using LoRa Basics Station with LNS subprotocol, change the LNS server address to `wss://eu1.cloud.thethings.network:8887` 
- If you are using LoRa Basics Station with CUPS subprotocol, change the CUPS server address to `https://eu1.cloud.thethings.network:443`

Once you update the cluster address, the data that reaches your gateway will be routed to your The Things Stack V3 cluster.
