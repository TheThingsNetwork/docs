---
title: Migrate End Devices using The Things Stack Community Edition Console
weight: 100
---

This section explains steps for migrating end devices from The Things Network V2 to The Things Stack Community Edition using <a href="https://www.thethingsindustries.com/docs/getting-started/console/" target="_blank">The Things Stack Community Edition Console</a>.

{{< note >}} Migrating active sessions using The Things Stack Community Edition Console is available since the latest update to V3.12. <a href="https://www.thethingsindustries.com/docs/getting-started/migrating/migrating-from-v2/" target="_blank">click here</a>.{{</ note >}}

{{< note >}} Since version 3.13 (released in May, 2021), The Things Network V2 routes traffic back and forth to The Things Stack Community Edition. When migrating your gateways to The Things Stack Community Edition, the coverage of the public community network won't be impacted. {{</ note >}}

## Add an end device in The Things Stack Community Edition

First, <a href="https://www.thethingsindustries.com/docs/devices/adding-devices/" target="_blank">add a device</a> in The Things Stack Community Edition. This can be done manually, but also by submitting the type of your device if it is available in the <a href="https://thethingsindustries.com/docs/integrations/payload-formatters/device-repo/" target="_blank">Device Repository</a>.

The process of adding your device in the Console depends on the type of your device - OTAA or ABP.

{{< note >}} We highly recommend using OTAA over ABP devices. See <a href="https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/" target="_blank">why OTAA is better than ABP</a>. {{</ note >}}

When manually adding an OTAA device to The Things Stack Community Edition, make sure you follow these steps correctly:

- Select **Over the air actiovation (OTAA)**
- Choose **LoRaWAN version** `MAC V1.0.2` (the version used in The Things Network V2)
- Create an **End device ID** (does not have to match the `Device ID` in The Things Network V2)
- Enter your end device's **AppEUI** and **DevEUI** (these have to be the same as the ones in The Things Network V2, as this info is provided by the device manufacturer)
- Select your frequency plan
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (the version used in The Things Network V2)
- **Do not** check the boxes **Supports class B/C**
- Keep the default **Advanced settings** as OTAA devices commonly negotiate about these with The Things Stack Community Edition Network Server
- Enter your end device's **AppKey** (has to match the one in The Things Network V2, as this info is provided by the device manufacturer)

If you have a **really good reason** to use ABP, you can add an ABP device to The Things Stack Community Edition by following next steps:

- Select **Activation by personalization (ABP)**
- Choose **LoRaWAN version** `MAC V1.0.2` (the version used in The Things Network V2)
- Create an **End device ID** (does not have to match the `Device ID` in The Things Network V2)
- The **DevEUI** field is optional
- Select your frequency plan
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (the version used in The Things Network V2)
- **Do not** check the boxes **Supports class B/C**
- **DevAddr** and **NwkSKey** values depend on your use case (see the note below)
- **Advanced settings** must be set on registration (beware that changing these settings might not work later)
    - Set **Frame counter width** to `32 bit` (the value used in The Things Network V2)
    - **RX1 Delay** value depends on your use case (see the note below)
    - Set **RX1 Data Rate Offset** to `0`
    - Your device probably resets frame counters, so check the **Resets Frame Counters** box
    - Set **RX2 Data Rate Index** to `3` if your frequency plan is EU868 
    - Set **RX2 Frequency** to `869525000` if your frequency plan is EU868
    - Set **Factory Preset Frequencies** for EU868 devices to `868100000, 868300000, 868500000` for all devices, or to `867100000, 867300000, 867500000, 867700000, 867900000, 868100000, 868300000, 868500000` for 8-channel devices

{{< note >}} The **DevAddr** and **RX1 Delay** values depend on your specific use case. 

**Case 1: You want your ABP device's traffic to be routed to The Things Stack Community Edition by Packet Broker, i.e. you do not want to migrate your gateway to The Things Stack Community Edition at this time.**

In this case, you need to auto-generate a new **DevAddr** and a new **NwkSKey** when adding the ABP device on The Things Stack Community Edition. After that, you will have to re-program your ABP device with new **DevAddr** and **NwkSKey** values, and an **RX1 Delay** of 5 seconds. This will make sure that your device's **DevAddr** can be properly routed by Packet Broker, and that its traffic will reach The Things Stack Community Edition in time.

Keep in mind that even if you are planning to migrate your gateway right after, it is **recommended** to re-program your device to use the newly generated **DevAddr**, and the **RX1 Delay** of 5 seconds which is a default for The Things Stack Community Edition.

**Tip:** Re-programming your ABP device could be a good time to switch it to OTAA and adopt some <a href="https://www.thethingsindustries.com/docs/devices/best-practices/" target="_blank">Best Practices</a>.

**Case 2: You want to migrate your gateway to The Things Stack Community Edition right after you migrate your device.** 

If this is the case, you do not have to re-program your ABP device. You can add the ABP device in The Things Stack Community Edition using the same **DevAddr** and **RX1 Delay** of 1 second as it was on The Things Network V2. 

However, be aware that we recommend to re-program the device. Even if you migrate your gateway to The Things Stack Community Edition, you could be experiencing issues when using the **RX1 Delay** of 1 second if your gateway has a high-latency backhaul. {{</ note >}}

## Prevent your end device from performing a join to The Things Network V2

When you have registered your device in The Things Stack Community Edition, you should prevent your device from joining The Things Network V2. 

For OTAA device, you can simply do it by deleting your device from The Things Network V2, however, this is **not recommended** - you might lose some data. The **recommended** practice is to change the `AppKey` in The Things Network V2. This way, your existing session would not be terminated yet, but new Join requests sent by your end device would not be accepted by The Things Network V2 cluster. 

> If the migration process does not go as expected, you can return the old value of your `AppKey` and reconnect it to The Things Network V2.

For ABP device, you will have to completely delete it from The Things Network V2, especially if you have not re-programmed it with a new **DevAddr**, as leaving it registered there could cause some serious conflicts.

## Force your OTAA end device to perform a new join to The Things Stack Community Edition network

Your OTAA end device will now need to perform a new join to The Things Stack Community Edition network. 

How to do this largely depends on your device's firmware:

- If your end device does a new join occasionally (every week, month or so), you can only wait for it to happen
- If your end device supports triggering new joins by sending a downlink message - you can send the command from The Things Network V2 Console (this is possible only if you changed the **AppKey** to prevent your device from re-joining The Things Network V2 network, so the existing session has not ended yet)
- If your end device does a new join when it loses the connection - delete that device from The Things Network V2 Console
- If your end device does a new join when it is power cycled - power cycle it 

Since you have not migrated your gateway from The Things Network V2 yet, the new Join request sent by your end device will be received by The Things Network V2 cluster. However, this request will not be accepted if you changed your end device's `AppKey` (as recommended above) or if you have deleted it.

An interesting thing is that your OTAA end device's new Join request will be received by The Things Stack Community Edition cluster too! You can verify this by observing the uplinks metadata in The Things Stack Community Edition Console. You can thank for this to <a href="https://www.thethingsindustries.com/docs/reference/peering/#packet-broker" target="_blank">Packet Broker</a>, which routes your device's traffic from The Things Network V2 to The Things Stack Community Edition. Now, The Things Stack Community Edition cluster will accept this Join request, so your end device will get a new `DevAddr`, channel settings and other MAC parameters. Based on a newly assigned `DevAddr`, Packet Broker will from now on route the traffic to The Things Stack Community Edition network.

## What to do with ABP end device?

The next step for ABP devices depends on your use case, which was previously discussed in the [Add an end device in The Things Stack Community Edition]({{< ref "/the-things-stack/migrate-to-v3/migrate-using-console#add-an-end-device-in-the-things-stack-community-edition" >}}) section. 

If you re-programmed your ABP end device with a **DevAddr** issued by The Things Stack Community Edition and an **RX1 Delay** of 5 seconds, Packet Broker will be able to route your device's traffic to The Things Stack Community Edition, i.e. you will not have to migrate your gateway to receive the traffic in The Things Stack Community Edition. If this is the case, at this point you should already start seeing your device's traffic in The Things Stack Community Edition Console. 

If you have not re-programmed your device, i.e. it is using the **DevAddr** and the **RX1 Delay** from The Things Network V2, you will have to migrate your gateway to The Things Stack Community Edition, because Packet Broker will not be able to route its traffic properly. 

> See [Migrate Gateways]({{< ref "/the-things-stack/migrate-to-v3/migrate-gateways" >}}) for more info.
