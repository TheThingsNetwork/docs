---
title: Limitations
section: Fundamental
---

LoRaWAN is not suitable for every use-case, so it is important that you understand the limitations. Here's a quick overview:

#### Suitable use-cases for LoRaWAN:

* **Long range** - multiple kilometers
* **Low power** - can last years on a battery
* **Low cost** - less than 20€ CAPEX per node, almost no OPEX
* **Low bandwidth** - between 250bit/s and 11kbit/s in Europe using LoRa modulation (depending on the spreading factor)
* **Coverage everywhere** - you are the network! Just install your own gateways
* **Secure** - 128bit end-to-end encrypted

#### Not Suitable for LoRaWAN:

* **Realtime data** - you can only send small packets every couple of minutes
* **Phone calls** - you can do that with GPRS/3G/LTE
* **Controlling lights in your house** - check out ZigBee or BlueTooth
* **Sending photos, watching Netflix** - check out WiFi

## Sending data from a Node to your Application (uplink)

We want you to create products that are as efficient as possible. This will get the most out of your battery, and doesn't require you to buy many gateways. If you follow these recommendations, you'll definitely build an amazing product!

* **Payload** should be as small as possible. This means that you **should not send JSON or plain (ASCII) text**, but instead encode your data as binary data. This is made really easy with the [Cayenne Low Power Payload]({{< relref "../../devices/arduino/api/cayennelpp" >}}) format which is fully supported by The Things Network.
* **Interval** between messages should be in the range of **several minutes**, so be smart with your data. You could for example transmit a `min|avg|max` every 5 minutes, or you could only transmit when you sensor value changed more than a certain threshold or have it triggered by motion or another event.
* **Data Rate** should be as fast as possible to minimize your airtime. `SF7BW125` is usually a good place to start, as it consumes the least power and airtime. If you need more range, you can slowly increase until you have enough. You can also enable adaptive data rate (ADR), the network will then be able to automatically optimize your data rate.

## Sending responses from your Application to your Node (downlink)

We want to be able to handle as many Nodes as possible per Gateway. But as full-duplex radios are not widely available yet, a Gateway is not able to receive transmissions from Nodes while it is transmitting. This means that if a gateway is transmitting 10% of the time, it's not able to receive anything for that 10% of the time. This is even worse when you realize that a gateway can receive at 8 channels simultaneously. Except when it's transmitting. So while an idle gateway can receive transmissions from 8 devices, those 8 devices are worthless when the gateway is transmitting.

We want to build a network that offers high reliability. If your device transmits, the gateway should receive it. In order to keep the gateway availability as high as we can, we ask you to follow these recommendations.

* **Data Rate** should be, just as with uplink, as efficient as possible. The downlink data rate is based on the uplink data rate, so if you send efficient uplinks, the network will respond with efficient downlinks.
* **Downlink** messages should be avoided if possible, and if you send downlink, keep the payload small.
* **Confirmed Uplink** is often not necessary. Try to make your application work without confirmations.
