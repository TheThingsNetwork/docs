---
title: Gateway Registration
---

# Gateway Registration

We will transitioning to a new way to register and manage your gateways. Please read this guide carefully to understand how it currently works and what will change.

## Future: With Connector

> This is a work in process. The Things Gateway will be the first gateway to use this new procedure. Firmware and guides for other gateways will need to be updated.

### Start with Registration
You start by [registering your gateway](https://console.thethingsnetwork.org/gateways/register) in the Console. You will chose your own **Gateway ID**, similar to an Application or Device ID e.g. `my-gateway`. A **Gateway Key** will be generated for you.

### Configure with new Gateway Connector
Your gateway needs to have [The Things Network Gateway Connector](https://github.com/TheThingsNetwork/ttn-gateway-connector) installed. You then configure the gateway with the ID and Key from the registration. This allows you to manage most of the gateway's configuration from the Console.

> If your gateway does not have a GPS module we advise you not to configure a manual location in the gateway. Do this in the Console instead so that you can change it without accessing the gateway.

### Untrusted & Unmanaged Gateways
If you don't register your gateway or use the key to activate it, The Things Network will still accept the packages, but mark them as **untrusted**. The gateway will appear on the [map](https://www.thethingsnetwork.org/map) as **Unregistered** or **Unactivated**. If it is unregistered you will not be able to manage its configuration (e.g. location) form the Console.

## Current: Without Connector

### Start with Configuration
Following your gateway's guide, you start by configuring your gateway to forward packages to The Things Network, likely using [our fork of the Semtech Lora network packet forwarder](https://github.com/TheThingsNetwork/packet_forwarder). The guide should also help you set or retrieve the gateway's EUI, likely the Mac address of the LoRa module which looks like `B827EBFFFE87BD11`.

> If your gateway does not have a GPS module we advise you not to configure a manual location in the gateway. Do this in the Console instead so that you can change it without accessing the gateway.

### Bridge
We have a special bridge in place that will continue to accept packages from gateways that don't use the new Gateway Connector. It will lowercase the EUI and prefix it with `eui-`. So a gateway with EUI `B827EBFFFE87BD11` will appear in meta data and APIs as `eui-b827ebfffe87bd11`.

### Register 
[Register your gateway](https://console.thethingsnetwork.org/gateways/register) via the console. This will link it to your account so that you can give it a name. Uncheck **The Things Network Gateway Connector** and paste the EUI. We will lowercase and prefix it for you.

### Unclaimed Gateways
If you don't register your gateway or use the key to activate it, The Things Network will still accept the packages, but mark them as **untrusted**. The gateway will appear on the [map](https://www.thethingsnetwork.org/map) as **Unregistered**. You will not be able to manage its configuration (e.g. location) form the Console.

## Troubleshooting & FAQ

### Error: Gateway doesn't exist
If you get an error saying **Gateway doesn't exist** when you register it, then the backend hasn't seen a gateway with this EUI yet. Please check the EUI and make sure your gateway is on, connected and [visible](http://noc.thethingsnetwork.org:2020/api/v1/gateways).

### Error: This gateway has been claimed already
If you get **This gateway has been claimed already** when you register it, then another gateway has already used this EUI. Please configure your gateway with [a different one](https://www.randomlists.com/string?length=16).

### How will I transition my gateway to use the connector?
Once the Gateway Connector is available for your gateway, you will need to reconfigure it as a new gateway and delete the old gateway registration.
