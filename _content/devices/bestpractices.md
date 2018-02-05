---
title: Best practices
zindex: -100
---

# Best practices for device development

If you've been using development devices, you might want at some point to transition to production-grade device development. Here are best practices for you to build devices that will last in the long-term, and that will help you achieve [LoRaWAN compliancy](https://www.lora-alliance.org/lorawan-for-developers).

## Device activation

### OTAA and ABP

LoRaWAN offers two methods of device activation: **OTAA** (Over The Air) and **ABP** (Activation by Personalization). OTAA is the **preferred method** to join any LoRaWAN network, including the Things Network: it offers more security, more flexibility, as well as scalability.

+ **Security**: OTAA is more reliable because the activation will be confirmed, and more secure because the session keys will be negotiated with every activation.

+ **Flexibility**: Configuring your device with OTAA gives you the liberty of changing the network server by re-registering a device on a different network server, and by performing a re-join. The new network server will then attribute to this device a `DevAddr` that will be part of its [address space](https://www.thethingsnetwork.org/wiki/LoRaWAN/Address-Space), and the device will be interacting with the new network server without reprogramming.

    ABP devices need the `DevAddr` to be hardcoded in the device - which means a device is tightly coupled to a network server, and even more to the specific activation. Although network servers are designed to keep activations in permanent storage, there can be situations where a device needs to rejoin - in those cases, ABP devices need to be reprogrammed.

+ **Scalability**: On select regional bands, when a device performs activation, the network server answers with a list of additional frequencies the device can use to exchange messages. This means the device doesn't have to use only the default regional bands, but also the ones defined by the network server operators.

### OTAA best practices

When a device performs a network join, a `DevAddr` is attributed and sent to the device. `DevAddr` are designed to be kept in the long-term, from days to years - The Things Network is designed to keep activations in memory for years, even in the event of an outage.

For this reason, the LoRaWAN documentation specifies clearly that **devices should perform join operations the less possible in their lifetime**. The LoRaWAN specifications warn especially against systematic rejoin in case of network failure. A device should keep the result of an activation in permanent storage if the device is expected to be turned off during its lifetime.

A device not receiving messages from the network can be due to many reasons: if the network server is suffering from an outage, if gateways are suffering a system or network outage, if there's no coverage in the area... Whenever a device rejoins, it consumes the closest gateway's airtime to emit the downlink - and if many devices in an area are rejoining at the same time (e.g. in case of a temporary gateway outage), this leads to a network bloating in the area.

#### Examples

A device equipped with a temperature sensor sends data upstream every hour. To ensure that the data is received upstream, the device has a confirmation system - if no confirmation is received, the data is re-sent.

+ A **bad practice** would be to have the device re-join after several consecutive unconfirmed uplinks. This would lead to the network bloat situation above.

+ A **good practice** would be to continue sending uplinks - while respecting local duty cycle reglementation and TTN's [Fair Access Policy](https://www.thethingsnetwork.org/forum/t/limitations-data-rate-packet-size-30-seconds-uplink-and-10-messages-downlink-per-day-fair-access-policy/1300). Other mecanisms can be used to ensure connectivity (gateway monitoring, network server monitoring...)

A device equipped with a button is designed for hikers to be enabled in case of emergency.

+ A **bad practice** would be to have the device join whenever the button is pressed. This means data transmission is delayed until the activation process is complete, and makes message transmission conditional to the activation process (which could be unsuccessful, for example in the case of bad gateway coverage).

+ A **good practice** would be to have the device join as part of the manufacturing process, and have the device use the same session for its whole lifetime.
