---
title: Adding Devices
section: Devices
---

To receive uplinks and send downlinks to your end device, you first need to add your device in The Things Stack Community Edition. Follow instructions at [The Things Stack - Adding Devices](https://www.thethingsindustries.com/docs/devices/adding-devices/)!

Devices are added within [applications]({{< ref "applications-and-integrations" >}}). Applications are useful for grouping devices by purpose or location, for example.

Registering your device can be done in two ways, via [The Things Stack Console](www.thethingsindustries.com/docs/getting-started/console/) or via the [CLI](https://www.thethingsindustries.com/docs/getting-started/cli/).

Before adding your end device, make sure you know of which type your device is - **ABP** (Activation By Personalization) or **OTAA** (Over-The-Air-Activation). Depending on the type, some steps differ during the registration procedure. [Learn why using OTAA devices is highly recommended](https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/).

## Adding a Device Using the Console

If using the Console, you can add a device manually or using the [LoRaWAN Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/tree/master).

Manual registration is just a matter of providing some end device information like **MAC Version**, **PHY Version**, **Frequency Plan**, **DevEUI**, **JoinEUI**, etc. The required infomation depends on whether your end device is ABP or OTAA type. <a href="https://www.thethingsindustries.com/docs/devices/adding-devices" target="_blank">See details about adding devices manually using the Console</a>.

If your end device is a part of the <a href="https://github.com/TheThingsNetwork/lorawan-devices/tree/master" target="_blank">LoRaWAN Device Repository</a>, registration of it will be semi-automated. This means that some features of the device are pre-defined, which helps you with the process of onboarding the device. If your end device is not present in this repository, you will have to add it manually.

> See <a href="https://github.com/TheThingsNetwork/lorawan-devices/tree/master/vendor" target="_blank">examples</a> of end devices added to the LoRaWAN Device Repository. Learn how to <a href="https://www.youtube.com/watch?v=pnwtEgw4f-c" target="_blank">add devices to the LoRaWAN Device Repository</a>.

## Adding a device using CLI

To add a device using CLI, you need to have the CLI installed on your system. <a href="https://www.thethingsindustries.com/docs/getting-started/cli/" target="_blank">Learn how to install and login with the CLI</a>.

You can add both ABP and OTAA devices by manually providing the end device information through commands in your terminal. <a href="https://www.thethingsindustries.com/docs/devices/adding-devices" target="_blank">See details about adding devices using the CLI</a>.

> If you are experiencing issues while adding devices to The Things Network, see <a href="https://www.thethingsindustries.com/docs/devices/adding-devices/troubleshooting/" target="_blank">Troubleshooting</a>.
