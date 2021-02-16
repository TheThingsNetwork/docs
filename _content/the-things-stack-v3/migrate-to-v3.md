---
title: How do I migrate to The Things Stack V3?
---

This guide was written to explain the overall migration process of migrating from The Things Network Stack V2 to The Things Stack V3 in a few easy-to-follow steps.

Let's assume that your gateway and device are still connected to The Things Network, operating on The Things Network Stack V2. We will first consider migrating your end device, then your gateway. You will also need to add your applications, integrations and payload formatters to The Things Stack V3.

**Note:** We highly recommend to test the migration on a single end device or a small batch of end devices, just to make sure the migration process is succesfull and that you are getting an expected result.

**Note:** Migrating a single end device can be easily done through The Things Stack V3 Console. Migrating end devices in bulk can be performed with the `ttn-lw-migrate` tool.

# V3 login

To be able to continue following steps below, you first need to log in to your The Things Stack V3 instance. You can do so by using your credentials after registering, or via The Things ID feature, by using your username and password from the V2.

# Add an application in V3

To migrate your end device, you first need to [add an application](https://www.thethingsindustries.com/docs/integrations/adding-applications/) in your V3 instance. The `Application ID` does not neccessarily have to be the same as the one in V2.

# Add your payload formatters and integrations

After adding an application in V3, you also need to re-add the associated elements, like payload formatters (known as coders and decoders in V2) and integrations. The concept remained the same as in V2, with slight improvements. 

**Note:** The format of payload coders and decoders from the V2 is still supported in V3.

See more info on how to [write payload formatters](https://www.thethingsindustries.com/docs/integrations/payload-formatters/) and [add integrations](https://www.thethingsindustries.com/docs/integrations/adding-integrations/) in The Things Stack V3. 

Next, you need to migrate your end device(s). Depending on if it is one or more devices, choose the right method for migration.

# Method 1: Migrate an end device using the V3 Console

## Add an end device in V3

First, [add a device](https://www.thethingsindustries.com/docs/devices/adding-devices/) in your V3 instance. You can do it manually for both ABP and OTAA devices. For OTAA devices, you can also do it by submitting the type of your device if it is available in the [Device Repository](https://thethingsindustries.com/docs/integrations/payload-formatters/device-repo/). 

When manually adding an OTAA device, make sure you follow these steps correctly:

- Select **Over the air actiovation (OTAA)**
- Choose **LoRaWAN version** `MAC V1.0.2` (this is probably your version, since this has been the most stable and most commonly used version for a long time)
- Create an **End device ID** (does not have to match the `Device ID` in V2)
- Enter your end device's **AppEUI** and **DevEUI** (these have to be the same as the ones in the V2)
- Select your frequency plan
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (this is most probably your version)
- **Do not** check the boxes **Supports class B/C**
- **Advanced settings** probably do not have to be set
- Enter your end device's **AppKey** (has to match the one in V2)

**Note:** We highly recommend using OTAA! See *[link to ABP vs OTAA doc when merged]* to learn why OTAA is better than ABP.

If you have a **really good reason** to use ABP, you can add an ABP device to V3 by following next steps:

- Select **Activation by personalization (ABP)**
- Choose **LoRaWAN version** `MAC V1.0.2` (this is probably your version, since this has been the most stable and most commonly used version for a long time)
- Create an **End device ID** (does not have to match the `Device ID` in V2)
- The **DevEUI** field is optional
- Select your frequency plan
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (this is most probably your version)
- **Do not** check the boxes **Supports class B/C**
- Enter your device's **DevAddr** and **NwkSKey** (these have to be the same as the ones in V2)
- **Advanced settings** must be set on registration (beware that changing these settings might not work later)
    - Set **Frame counter width** to `32 bit` (this is probably your value)
    - Set **RX1 Delay** to `1` (set in seconds)
    - Set **RX1 Data Rate Offset** to `0`
    - Your device probably resets frame counters, so check the **Resets Frame Counters** box
    - Set **RX2 Data Rate Index** to `3` if your frequency plan is EU868 
    - Set **RX2 Frequency** to `869525000` if your frequency plan is EU868
    - Set **Factory Preset Frequencies** for EU868 devices to `868100000, 868300000, 868500000` for all devices, or to `867100000, 867300000, 867500000, 867700000, 867900000, 868100000, 868300000, 868500000` for 8-channel devices

## Prevent your end device from performing a V2 join

When you have registered your device in your V3 instance, you should prevent your device from joining the V2 network. 

For OTAA device, you can simply do it by deleting your device from V2, however, this is **not recommended** - you might loose some data. The recommended practice is to change the `AppKey` in V2. This way, your existing session would not be terminated yet, but new Join requests sent by your end device would not be accepted by the V2 cluster. 

**Note:** If the migration process does not go as expected, you can return the old value of your `AppKey` and reconnect it to V2.

For ABP device, you will have to delete it from the V2 instance, since these devices can establish only one session during their lifetime. Having the same session in two places would introduce serious conflicts.

## Force your OTAA end device to perform a V3 join

Your OTAA end device will now need to perform a new join, to your V3 cluster. 

How to do this is largely depends on your device's firmware:

- If your end device does a new join occasionally (every week, month or so), you can only wait for it to happen
- If your end device lets you send a downlink message to trigger a new join - send the command from the V2 Console
- If your end device does a new join when it loses the connection - delete that device from the V2 Console
- If your end device does a new join when it is power cycled - power cycle it 

Since you have not migrated your gateway from V2 cluster yet, the new Join request sent by your end device will be received by the V2 cluster. This request will not be accepted if you changed your end device's `AppKey` (as recommended above) or if you have deleted it.

Interesting thing is that your end device's new Join request will be received by the V3 cluster too! You can thank for this to [Packet Broker](https://www.thethingsindustries.com/docs/reference/peering/#packet-broker) (you can verify this by observing the uplinks metadata in V3). Now, V3 cluster will accept this Join request, so your end device will get a new V3 `DevAddr`, channel settings and other MAC parameters. Based on a newly assigned `DevAddr`, Packet Broker will route the traffic to your V3 network.

## What to do with ABP end device?

If you are using an ABP device, that means your end device is still associated with the V2 `DevAddr`, so the Packet Broker will not be able to route its traffic to your V3 cluster if you have not connected your gateway to V3. In order to route this traffic correctly, follow the steps in **Migrate your gateway** section at the end of this page.

# Method 2: Migrate end devices using the migration tool

To complete the migration this way, you need to have  [`ttn-lw-migrate` tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate) installed. 

`ttn-lw-migrate` is used to export end devices and applications from The Things Network Stack V2 cluster to a [JSON file](https://www.thethingsindustries.com/docs/getting-started/migrating/device-json/). This JSON file can later be [imported](https://www.thethingsindustries.com/docs/getting-started/migrating/import-devices/) in The Things Stack V3 via Console or via CLI.

## Note about migrating an active session

If your The Things Stack instance version is `3.10` or higher, you may transfer the active device session as well. This means:

- Your device will continue working on The Things Stack V3 cluster. 
- Your OTAA device will not have to perform a new join on V3 network and you will not have to delete this device manually from V2 cluster. 
- You will not have to delete your ABP device manually from V2 cluster.

When migrating an active session, after exporting an end device from V2 cluster by using the migration tool, session and root keys will be cleared from The Things Network Stack V2 cluster by default. This means this device will no longer work in the V2 cluster. 

You can disable this behavior by using the `--ttnv2.with-session=false` flag when running `ttn-lw-migrate`. In that case, you have to prevent your end device from rejoining the V2 network - for OTAA device this means changing the `AppKey` in V2 and performing a new join on V3 network, and for ABP device this means deleting it from the V2 cluster completely.

## Configure the environment

After installing the migration tool, you need to configure the environmental variables:

```bash
$ export TTNV2_APP_ID="ttn-v2-application-ID"
$ export TTNV2_APP_ACCESS_KEY="access-key-of-your-ttn-v2-application" 
$ export FREQUENCY_PLAN_ID="EU_863_870_TTN"
```

**Note:** See [supported frequency plans](https://www.thethingsindustries.com/docs/reference/frequency-plans/) list, and adjust the `FREQUENCY_PLAN_ID` according to your setup.

If you own a private The Things Stack V2 cluster, you can still use the migration tool, but with an extra variable configured:

```bash
$ export TTNV2_DISCOVERY_SERVER_ADDRESS="<instance-id>.thethings.industries:1900"
```

**Note:** If the Discovery Server of your private V2 cluster does not use TLS, you will need to use the `ttnv2.discovery-server-insecure` flag when running the `ttn-lw-migrate` tool.

## Export a single end device from V2 

Before exporting an end device from The Things Network Stack V2, test the export with:

```bash
$ ttn-lw-migrate devices --dry-run --verbose --source ttnv2 "v2-end-device-ID" > devices.json
```

If this goes without errors, use the following command in order to export the end device for real and clear the security keys:

```bash
$ ttn-lw-migrate device --source ttnv2 "v2-end-device-ID" > devices.json
```

## Export more than one end device from V2

To export more than one device, create a file named `device_ids.txt` that will contain one `Device ID` per line:

```
dev1
dev2
dev3
```

Then, test the export with:

```bash
$ ttn-lw-migrate devices --dry-run --verbose --source ttnv2 < device_ids.txt > devices.json
```

If this goes without errors, use the following command in order to export end devices:

```bash
$ ttn-lw-migrate device --source ttnv2 < device_ids.txt > devices.json
```

## Export all end devices associated with your V2 application

To export all devices that your The Things Network Stack application contains to a file named `all-devices.json`, use the following commands:

```bash 
$ ttn-lw-migrate application --verbose --dry-run --source ttnv2 "ttn-v2-application-ID" > all-devices.json # testing export - make sure it goes without errors
$ ttn-lw-migrate application --source ttnv2 "ttn-v2-application-ID" > all-devices.json
```

## Import end device(s) in the V3 application

When you have exported your end devices to a JSON file (let's use `devices.json`), you can import those devices in The Things Stack V3 application via Console or via CLI. 

If you want to import via Console, just head over to your V3 application and click the **Import end devices** button available under **End devices**. Choose **The Things Stack JSON** format and upload the `devices.json` under **File**. Hit the **Create end devices** button, et voilà! 

If you want to use the CLI to import end devices, just run the following command:

```bash
$ ttn-lw-cli end-devices create --application-id "v3-application-id" < devices.json
```

**Note:** Which ever method you are using for importing end devices, in case of any failure you will see a relevant error message.

## Adjust MAC settings for imported devices in V3

If you have migrated an OTAA end device without preserving the existing session, i.e. your device performed a new join to the The Things Stack V3, the MAC settings will be automatically configured correctly by the Network Server. 

Hovewer, if you have migrated an ABP device, or if you have migrated an OTAA device with preserving the existing session (i.e. your device did not perform a new join), you might want to configure the MAC settings manually. 

This is needed because some recommended settings used by the V2 and V3 Network Server are different. For example, `RxDelay` parameter used by the V2 is 1 second by default, while the recommended value for the V3 is 5 seconds. The V3 Network Server will try to automatically change this for you, but it might take some time until the MAC command reaches the end device. 

See the official The Things Stack documentation to learn how to [configure MAC settings](https://www.thethingsindustries.com/docs/devices/mac-settings/).

# Migrate your gateway

[Migrating your gateway](https://www.thethingsindustries.com/docs/getting-started/migrating/gateway-migration/) from The Things Network Stack V2 to The Things Stack V3 cluster is a really easy process. 

First, you need to [add a gateway to the V3 instance](https://www.thethingsindustries.com/docs/gateways/adding-gateways/).

Then, you need change the address of the V3 cluster you are using - this will depend on which type of gateway you are using, [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/) or [LoRa Basics Station](https://www.thethingsindustries.com/docs/gateways/lora-basics-station/). Let's assume you are using `eu1.cloud.thethings.network`.

- If you are using a Semtech UDP Packet Forwarder, change the `server_address` in your `global_conf.json` to `eu1.cloud.thethings.network`
- If you are using LoRa Basics Station with LNS subprotocol, change the LNS server address to `wss://eu1.cloud.thethings.network:8887` 
- If you are using LoRa Basics Station with CUPS subprotocol, change the CUPS server address to `https://eu1.cloud.thethings.network:443`

Once you update the cluster address, the data that reaches your gateway will be routed to your The Things Stack V3 cluster.