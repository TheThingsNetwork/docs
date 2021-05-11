---
title: Migrate your Gateways and Devices
weight: 100
aliases:
 - /the-things-stack-v3/migrate-to-v3
---

This guide was written to explain the overall migration process of migrating from The Things Network V2 to The Things Stack Community Edition in a several easy-to-follow steps.

{{< info >}} 
The Things Stack Community Edition is a LoRaWAN Network Server which is free to use for The Things Network community members. The Community Edition is designed for testing and evaluating LoRaWAN projects and is managed by <a href="https://www.thethingsindustries.com/" target="_blank">The Things Industries</a>. The Community Edition comes without guarantees and only includes community support, hence is not suitable for commercial usage. Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or <a href="https://thethingsnetwork.slack.com/" target="_blank">Slack</a> for community support.

For commercial LoRaWAN projects, it is recommended to use an SLA-backed version of The Things Stack, as it includes professional support. <a href="https://www.thethingsindustries.com/deployment/" target="_blank">Click here to learn more.</a>
{{</ info >}} 

Generally, the process of migrating from The Things Network V2 to The Things Stack Community Edition depends on few things:

- Type of devices you are using - ABP or OTAA
- If you are able to migrate your gateway at the moment, or you want to use <a href="https://www.thethingsindustries.com/docs/reference/packet-broker/" target="_blank">Packet Broker</a> to route your traffic (and migrate your gateway later)
- How many devices you wish to migrate, i.e. if you want to migrate them one by one or in bulk
- If you wish to migrate your devices with or without an active session from V2

Let us assume that your gateway and device are connected to The Things Network V2. 

> <a href="https://console.thethingsnetwork.org/" target="_blank">Link to The Things Network V2 Console</a>

In this section, we will first consider migrating your end device, then your gateway to The Things Stack Community Edition. Along the way, we will highlight differences between the aforementioned use cases and recommend some best practices. You will also need to add your applications, integrations and payload formatters in The Things Stack Community Edition. 

> <a href="https://www.thethingsindustries.com/deployment/" target="_blank">Link to The Things Stack Community Edition Console</a>

#### Video Migrate from The Things Network V2 to The Things Stack
<iframe width="560" height="315" src="https://www.youtube.com/embed/JUEJ_9LdnuI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Log in to The Things Stack Community Edition

To be able to continue following steps below, you first need to log in to The Things Stack Community Edition Console by first <a href="https://console.cloud.thethings.network/" target="_blank">selecting a cluster</a> that is closest to you geographically. You can then log in with your The Things Network credentials via The Things ID.

## Add an application in The Things Stack Community Edition

To migrate your end device, you first need to <a href="https://www.thethingsindustries.com/docs/integrations/adding-applications/" target="_blank">add an application</a> on the The Things Stack Community Edition. The `Application ID` does not neccessarily have to be the same as the one in The Things Network V2.

## Add your payload formatters and integrations

After adding an application in The Things Stack Community Edition, you also need to re-add the associated elements, like payload formatters (known as coders and decoders in The Things Network V2) and integrations. The concept remained the same as in The Things Network V2, with slight improvements. 

> The format of payload coders and decoders from the The Things Network V2 is still supported in The Things Stack Community Edition.

See more info on how to <a href="https://www.thethingsindustries.com/docs/integrations/payload-formatters/" target="_blank">write payload formatters</a> and <a href="https://www.thethingsindustries.com/docs/integrations/adding-integrations/" target="_blank">add integrations</a> in The Things Stack Community Edition. 

## Ready for Migration

Next, you need to migrate your end device(s) to The Things Stack Community Edition. Depending on the number of devices you want to migrate, choose the right method for the migration.

{{< info >}} This guide refers only to The Things Network V2 and The Things Stack Community Edition deployments. The full migration process that covers all V2 and The Things Stack deployments is described <a href="https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/" target="_blank">here</a>. {{</ info >}}

Migrating a single end device can be easily done through The Things Stack Community Edition <a href="https://www.thethingsindustries.com/docs/getting-started/console/" target="_blank">Console</a>. This is convenient if you have a small number of devices, so you can migrate them one by one. See [Migrate End Devices using The Things Stack Community Edition Console]({{< ref "/the-things-stack/migrate-to-v3/migrate-using-console">}}) guide for details.

Migrating end devices in bulk can only be performed with the `ttn-lw-migrate` tool. See [Migrate End Devices using the Migration Tool]({{< ref "/the-things-stack/migrate-to-v3/migrate-using-migration-tool">}}) guide for details.

{{< note >}} We highly recommend to test the migration on a single end device or a small batch of end devices first, just to make sure the migration process is succesful and that you are getting an expected result. {{</ note >}}

Depending on your use case, you might want to:

- Keep your gateway connected to The Things Network V2 and route your traffic via Packet Broker to The Things Stack Community Edition - if this is the case, we recommend to read the <a href="https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/packet-broker-requirements/" target="_blank">Packet Broker Requirements</a>
- Migrate your gateway to The Things Stack Community Edition - see [Migrate Gateways]({{< ref "/the-things-stack/migrate-to-v3/migrate-gateways" >}})

{{< warning >}} We strongly recommend The Things Network community members to keep their gateways registered on The Things Network V2 for as long as possible, or to coordinate with the local community members to perform a migration to The Things Stack, as this will ensure that the community members who are still using The Things Network V2 do not lose their LoRaWAN coverage. {{</ warning >}}
