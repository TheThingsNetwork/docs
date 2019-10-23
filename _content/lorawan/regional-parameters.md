---
title: Regional Parameters
section: Fundamental
zindex: 3
redirect_from:
 - /lorawan/#frequency-bands
---

# Regional Parameters

LoRaWAN operates in unlicensed radio spectrum. This means that anyone can use the radio frequencies without having to pay million dollar fees for transmission rights. It is similar to WiFi, which uses the 2.4GHz and 5GHz ISM bands worldwide. Anyone is allowed to set up WiFi routers and transmit WiFi signals without the need for a license or permit.

LoRaWAN uses lower radio frequencies with a longer range. The fact that frequencies have a longer range also comes with more restrictions that are often country-specific. This poses a challenge for LoRaWAN, that tries to be as uniform as possible in all different regions of the world. As a result, LoRaWAN is specified for a number of bands for these regions. These bands are similar enough to support a region-agnostic protocol, but have a number of consequences for the implementation of the backend systems.

+ LoRaWAN has official regional specifications, called **Regional Parameters**, that you can download from the [LoRa Alliance website](https://lora-alliance.org/lorawan-for-developers).

+ These LoRaWAN regional specifications do not specify everything either. They only cover a region by specifying the common denominator. For example, the LoRaWAN regional parameters for Asia only specify a common subset of channels - but there are variations between regulations in Asian countries. Furthermore, each network server operator is free to select additional parameters, such as additional emission channels. We call these parameters **Other**. For The Things Network, they are defined in [this GitHub repository](https://github.com/TheThingsNetwork/gateway-conf).

More informations can be found here:

* [Frequency Plans](./frequency-plans.md)
* [Frequency Plan by Country](./frequencies-by-country.md)
