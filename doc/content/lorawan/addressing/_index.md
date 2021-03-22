---
title: Addressing & Activation
section: Specifications
weight: 9
aliases:
 - /lorawan/address-space
---

## Addressing

LoRaWAN knows a number of identifiers for devices, applications and gateways.

* `DevEUI` - 64 bit end-device identifier, EUI-64 (unique)
* `DevAddr` - 32 bit device address (non-unique)
* `AppEUI` - 64 bit application identifier, EUI-64 (unique)
* `GatewayEUI` - 64 bit gateway identifier, EUI-64 (unique)

### Devices

The Things Network Foundation has received a 7-bit device address prefix from the LoRa Alliance. This means that all TTN device addresses will start with `0x26` or `0x27` (although addresses that start with these might also belong to other networks with the same prefix). Within TTN, we assign device [address prefixes]({{< relref ".././prefix-assignments" >}}) to "regions" (for example, device addresses in the `eu` region start with `0x2601`). Within a region, the NetworkServer is responsible for assigning device addresses. We are using prefixes here too for different device classes (for example, [ABP]({{< relref "../#activation-by-personalization-abp" >}}) devices in the `eu` region start with `0x26011`) or to shard devices over different servers, see .  

The NetworkServer assigns device addresses to devices (based on configuration). For [ABP]({{< relref "../#activation-by-personalization-abp" >}}) devices you have to request an address from the NetworkServer (the console or `ttnctl` will do this for you). For [OTAA]({{< relref "../#over-the-air-activation-otaa" >}}) devices, the NetworkServer will assign an address when the device joins.

When a device joins the network, it receives a dynamic (non-unique) 32-bit address (`DevAddr`). It's good to keep in mind that device addresses are not unique. We can (and probably will) give hundreds of devices the same address. Finding the actual device that belongs to that address is done by matching the cryptographic signature (MIC) of the message to a device in the database.

### Applications

Applications in LoRaWAN and The Things Network have a 64 bit unique identifier (`AppEUI`). When you create an application, The Things Network's account server allocates an `AppEUI` from the address block of The Things Network Foundation. This means that every application has at least an `AppEUI` that starts with `70B3D57ED`. If you have your own `AppEUI`s, you can also add those to your application.

### Gateways

Gateways are manufactured with an embedded EUI, which can then be used to register the gateway on The Things Network. Although the configuration files of some gateways suggest that you can just choose an EUI for the gateway, this is **not true**. If your gateway did not come with an embedded EUI, you can use another EUI that you own, or configure an `AppEUI` that is registered to your account. You may also use an MQTT-based forwarder, which only needs a `GatewayID` (that you can choose yourself) instead of a `GatewayEUI`.

## Activation

LoRaWAN devices have a 64 bit unique identifier (`DevEUI`) that is assigned to the device by the chip manufacturer. However, all communication is done with a dynamic 32 bit device address (`DevAddr`) of which 7 bits are fixed for The Things Network, leaving 25 bits that can be assigned to individual devices, a procedure called **Activation**.

### Over-the-Air Activation (OTAA)

Over-the-Air Activation (OTAA) is the preferred and most secure way to connect with The Things Network. Devices perform a join-procedure with the network, during which a dynamic `DevAddr` is assigned and [security keys]({{< relref ".././security/#security-keys" >}}) are negotiated with the device.

### Activation by Personalization (ABP)

In some cases you might need to hardcode the `DevAddr` as well as the [security keys]({{< relref ".././security/#security-keys" >}}) in the device. This means activating a device by personalization (ABP). This strategy might seem simpler, because you skip the join procedure, but it has some downsides related to security.
