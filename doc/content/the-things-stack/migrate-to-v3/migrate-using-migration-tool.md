---
title: Migrate End Devices using the Migration Tool
weight: 200
---

This section explains steps for using [`ttn-lw-migrate` tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate) to migrate your end devices from The Things Network V2 to The Things Stack Community Edition.

`ttn-lw-migrate` is used to export end devices and applications from The Things Network V2 cluster to a [JSON file](https://www.thethingsindustries.com/docs/getting-started/migrating/device-json/). This JSON file can later be [imported](https://www.thethingsindustries.com/docs/getting-started/migrating/import-devices/) in The Things Stack Community Edition via Console or via CLI.

> Follow the instructions for [installing `ttn-lw-migrate` tool](https://www.thethingsindustries.com/docs/getting-started/migrating/migration-tool/).

## About migrating active sessions to The Things Stack Community Edition

Before you start migrating your devices, it is good to know a few things about migrating active sessions. 

Starting from The Things Stack version `v3.12.0`, for certain deployments it is possible to migrate end devices with active sessions. Migrating an active session means that OTAA device will not have to perform a new join on the The Things Stack network, and ABP devices will not have to be re-programmed. For both OTAA and ABP devices this means they will keep their **DevAddr**, **RX1 Delay** and other settings from V2 network.

{{< warning >}} **It is not possible to migrate active sessions from The Things Network V2 to The Things Stack Community Edition via Packet Broker**. This means that, if you are migrating via Packet Broker, your device will have to perform a new join on The Things Stack Community Edition network, i.e. start a new session. The reason is that The Things Stack Community Edition is using a different `DevAddr` block than The Things Network V2.

Theoretically, it is possible to migrate active sessions from The Things Network V2 to The Things Stack Community Edition only if the gateway that provides coverage for the end device is migrated to The Things Stack Community Edition. Note that this is **not recommended**, and that we recommend keeping your gateways connected to The Things Network V2 until a coordinated migration of gateways is agreed within your The Things Network community branch.

Migrating active sessions via Packet Broker is available only for The Things Industries V2 (V2 SaaS) customers migrating to The Things Stack Cloud, and exclusively on a customer request. {{</ warning >}}

{{< note >}} Since migrating active sessions from The Things Network V2 to The Things Stack Community Edition is not a recommended practice in general, and not achievable via Packet Broker, we continue this guide with the steps for migrating your end devices without active sessions using `ttn-lw-migrate` tool. For more information on migration with existing session, [click here](https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/).{{</ note >}}

For OTAA devices, migrating without an active session simply means that the device will establish a new session with The Things Stack Community Edition Network Server. The device will be assigned with a new **DevAddr** and an **RX1 Delay** of 5 seconds, which will ensure that the traffic can be properly routed via Packet Broker and that it will reach The Things Stack Community Edition in time.

For ABP devices, migrating without an active session implies two scenarios:

- Keeping the **DevAddr** and **RX1 Delay** end device settings from The Things Network V2 (without keeping the security keys) and migrating the gateway to The Things Stack Community Edition
- Re-programming the device to force the use of new **DevAddr** and **RX1 Delay** issued by The Things Stack Community Edition upon device registration and exchanging traffic via Packet Broker

{{< note >}} Since `ttn-lw-migrate` tool works in a way that it exports the device description (**DevAddr**, **RX1 Delay**, etc.) from The Things Network V2, only the first scenario can be achieved with this tool.

The second scenario can only be achieved via The Things Stack Community Edition Console. See [Migrate End Devices using The Things Stack Community Edition Console]({{< ref "/the-things-stack/migrate-to-v3/migrate-using-console" >}}) section above for details. {{</ note >}} 

## Configure the environment

After installing the migration tool, you need to configure the environmental variables:

```bash
$ export TTNV2_APP_ID="ttn-v2-application-ID"
$ export TTNV2_APP_ACCESS_KEY="access-key-of-your-ttn-v2-application" 
$ export FREQUENCY_PLAN_ID="EU_863_870_TTN"
```

> When configuring the environmental variables on Windows OS, replace `export` with `set` and remove the double-quotes in the commands above.

> See [supported frequency plans](https://www.thethingsindustries.com/docs/reference/frequency-plans/) list, and adjust the `FREQUENCY_PLAN_ID` according to your setup.

If you own a private The Things Industries V2 cluster, you can still use the migration tool, but with an extra variable configured:

```bash
$ export TTNV2_DISCOVERY_SERVER_ADDRESS="<instance-id>.thethings.industries:1900"
```

> If the Discovery Server of your private The Things Industries V2 cluster does not use TLS, you will need to use the `ttnv2.discovery-server-insecure` flag when running the `ttn-lw-migrate` tool.

## Export a single end device from The Things Network V2 

Before exporting an end device from The Things Network V2, test the export with:

```bash
$ ttn-lw-migrate devices --dry-run --verbose --source ttnv2 "v2-end-device-ID" --ttnv2.with-session=false > devices.json
```

{{< note >}} We append the `--ttnv2.with-session=false` flag since this guide implies the migration without active sessions. When migrating active sessions, this flag is removed. {{</ note >}} 

If this goes without errors, use the following command in order to export the end device for real and clear the security keys:

```bash
$ ttn-lw-migrate device --source ttnv2 "v2-end-device-ID" --ttnv2.with-session=false > devices.json
```

## Export more than one end device from The Things Network V2

To export more than one device, create a file named `device_ids.txt` that will contain one `Device ID` per line:

```
dev1
dev2
dev3
```

Then, test the export with:

```bash
$ ttn-lw-migrate devices --dry-run --verbose --source ttnv2 --ttnv2.with-session=false < device_ids.txt > devices.json
```

If this goes without errors, use the following command in order to export end devices:

```bash
$ ttn-lw-migrate device --source ttnv2 --ttnv2.with-session=false < device_ids.txt > devices.json
```

## Export all end devices associated with your The Things Network V2 application

To export all devices that your The Things Network V2 application contains to a file named `all-devices.json`, use the following commands:

```bash 
$ ttn-lw-migrate application --verbose --dry-run --source ttnv2 "ttn-v2-application-ID" --ttnv2.with-session=false > devices.json # testing export - make sure it goes without errors
$ ttn-lw-migrate application --source ttnv2 "ttn-v2-application-ID" --ttnv2.with-session=false > devices.json
```

## Prevent your end device from performing a join to The Things Network V2

When you have exported your device from The Things Network V2, you should prevent your device from re-joining this network again. 

For OTAA device, you can simply do it by deleting your device from The Things Network V2, however, this is **not recommended**. The **recommended** practice is to change the `AppKey` in The Things Network V2. This way, your existing session would not be terminated yet, but new Join requests sent by your end device would not be accepted by The Things Network V2 cluster. 

> If the migration process does not go as expected, you can return the old value of your `AppKey` and reconnect it to The Things Network V2.

For ABP device, you will have to completely delete it from The Things Network V2. Since this section assumes you have not re-programmed it with a new **DevAddr**, leaving it registered there could cause some serious conflicts.

## Import end device(s) in the The Things Stack Community Edition application

Since you have exported your end devices to a JSON file (`devices.json`) in the previous steps, you can import those devices in The Things Stack Community Edition application via Console or via CLI. 

If you want to import via Console, just head over to your The Things Stack Community Edition application and click the **Import end devices** button available under **End devices**. Choose **The Things Stack JSON** format and upload the `devices.json` under **File**. Hit the **Create end devices** button, et voilà! 

If you want to use the CLI to import end devices, just run the following command:

```bash
$ ttn-lw-cli end-devices create --application-id "v3-application-id" < devices.json
```

> Which ever method you are using for importing end devices, in case of any failure you will see a relevant error message.

## Force your OTAA end device to perform a new join to The Things Stack Community Edition network

Your OTAA end device will now need to perform a new join to The Things Stack Community Edition network. 

How to do this largely depends on your device's firmware:

- If your end device does a new join occasionally (every week, month or so), you can only wait for it to happen
- If your end device supports triggering new joins by sending a downlink message - you can send the command from The Things Network V2 Console (this is possible only if you changed the **AppKey** to prevent your device from re-joining The Things Network V2 network, so the existing session has not ended yet)
- If your end device does a new join when it loses the connection - delete that device from The Things Network V2 Console
- If your end device does a new join when it is power cycled - power cycle it 

Since you have not migrated your gateway from The Things Network V2 yet, the new Join request sent by your end device will be received by The Things Network V2 cluster. However, this request will not be accepted if you changed your end device's `AppKey` (as recommended above) or if you have deleted it.

An interesting thing is that your OTAA end device's new Join request will be received by The Things Stack Community Edition cluster too! You can verify this by observing the uplinks metadata in The Things Stack Community Edition Console. You can thank for this to [Packet Broker](https://www.thethingsindustries.com/docs/reference/peering/#packet-broker), which routes your device's traffic from The Things Network V2 to The Things Stack Community Edition. Now, The Things Stack Community Edition cluster will accept this Join request, so your end device will get a new `DevAddr`, channel settings and other MAC parameters. Based on a newly assigned `DevAddr`, Packet Broker will from now on route the traffic to The Things Stack Community Edition network.

## What to do with ABP end device?

If you are following this guide, your ABP device is using the **DevAddr** and the **RX1 Delay** from The Things Network V2, so you will have to migrate your gateway to The Things Stack Community Edition too, because Packet Broker will not be able to route your device's traffic properly. 

> See [Migrate Gateways]({{< ref "/the-things-stack/migrate-to-v3/migrate-gateways" >}}) for more info.

## Adjust MAC settings for imported devices in The Things Stack Community Edition

If you have migrated an OTAA end device and your device performed a new join to the The Things Stack Community Edition, the MAC settings will be automatically configured correctly by the Network Server. 

Hovewer, if you have migrated an ABP device, you will have to configure the MAC settings manually. 

This is needed because some recommended settings used by The Things Network V2 and The Things Stack Community Edition Network Server are different, and if you followed this guide, your ABP device kept the ones from The Things Network V2. For example, `Rx1Delay` parameter used by the The Things Network V2 is 1 second by default, while the recommended value for The Things Stack Community Edition is 5 seconds. If you keep using the `RX1 Delay` of 1 second, you could be experiencing latency issues on The Things Stack Community Edition.

> See the official The Things Stack documentation to learn how to [configure MAC settings](https://www.thethingsindustries.com/docs/devices/mac-settings/).
