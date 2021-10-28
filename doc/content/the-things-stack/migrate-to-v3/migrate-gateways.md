---
title: Migrate Gateways
weight: 300
---

This section shortly describes steps to be taken to migrate your gateway from The Things Network V2 to The Things Stack Community Edition.

{{< note >}} Migrating **The Things Indoor Gateway (TTIG)** from V2 to The Things Stack via CLI and Console is now fully supported! [Read more](https://www.thethingsindustries.com/docs/gateways/thethingsindoorgateway/) {{</ note >}}

[Migrating your gateway](https://www.thethingsindustries.com/docs/getting-started/migrating/gateway-migration/) from The Things Network V2 to The Things Stack Community Edition cluster is a really easy process. 

First, you need to [add a gateway to The Things Stack Community Edition](https://www.thethingsindustries.com/docs/gateways/adding-gateways/).

Then, you need to change the address of The Things Stack Community Edition cluster you are using - this will depend on which type of gateway you are using, [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/) or [LoRa Basics Station](https://www.thethingsindustries.com/docs/gateways/lora-basics-station/). Let us assume you are using `eu1.cloud.thethings.network`.

- If you are using a Semtech UDP Packet Forwarder, change the `server_address` in your `global_conf.json` to `eu1.cloud.thethings.network`
- If you are using LoRa Basics Station with LNS subprotocol, change the LNS server address to `wss://eu1.cloud.thethings.network:8887` 
- If you are using LoRa Basics Station with CUPS subprotocol, change the CUPS server address to `https://eu1.cloud.thethings.network:443`

Once you update the cluster address, the data that reaches your gateway will be routed to your The Things Stack V3 cluster.
