---
title: Regional Parameters
section: The Things Fundamentals
weight: 40
---

LoRaWAN operates in unlicensed radio spectrum. This means that anyone can use the radio frequencies without having to pay million dollar fees for transmission rights. It is similar to WiFi, which uses the 2.4GHz and 5GHz ISM bands worldwide. Anyone is allowed to set up WiFi routers and transmit WiFi signals without the need for a license or permit.

LoRaWAN uses lower radio frequencies with a longer range. The fact that frequencies have a longer range also comes with more restrictions, that are often country-specific. This poses a challenge for LoRaWAN, as it strives to maintain uniformity across various regions of the world. As a result, LoRaWAN is specified for several bands within these regions. These bands are similar enough to support a region-agnostic protocol but entail various consequences for the implementation of backend systems.

+ LoRaWAN has official regional specifications, called **Regional Parameters**, that you can download from the [LoRa Alliance website](https://resources.lora-alliance.org/technical-specifications/rp002-1-0-4-regional-parameters).

+ These LoRaWAN regional specifications do not specify everything either. They only cover a region by specifying the common denominator. For example, the LoRaWAN regional parameters for Asia only specify a common subset of channels - but there are variations between regulations in Asian countries. Furthermore, each network server operator is free to select additional parameters, such as additional emission channels. We call these parameters **Other**. For The Things Network, they are defined in [this GitHub repository](https://github.com/TheThingsNetwork/gateway-conf).

+ In some countries, more than one frequency plan may be used. For example, in the **Netherlands (NL)**, both **EU868-870** and **EU433** can be used.

+ The regional parameters include physical layer parameters such as frequency plans (channel plans), mandatory channel frequencies and data rates for join-request messages. The Regional Parameters also include LoRaWAN layer parameters such as maximum payload size.

In this chapter you will learn in detail about the **EU863-870** band and **US902-928** ISM band. This chapter also presents some important parameters involved in other frequency plans.

# Frequency Plans

LoRaWAN operates in the unlicensed ISM (Industrial, Scientific, and Medical) bands. The table below lists all the frequency plans and their common names.

|   Plan ID  |   Frequency Plan |  Common Name   |
| ---------- | ---------------- | -------------- |
| 1  | EU863-870 | EU868   |
| 2  | US902-928 | US915   |
| 3  | CN779-787 | CN779   |
| 4  | EU433     | EU433   |
| 5  | AU915-928 | AU915   |
| 6  | CN470-510 | CN470   |
| 7  | AS923-1   | AS923   |
| 8  | AS923-2   | AS923-2 |
| 9  | AS923-3   | AS923-3 |
| 10 | KR920-923 | KR920   |
| 11 | IN865-867 | IN865   |
| 12 | RU864-870 | RU864   |
| 13 | AS923-4	 | AS923-4 |

Information about specific countries and frequency plans can be found here:

* [Frequency Plans]({{< relref ".././frequency-plans" >}})
* [Frequency Plan by Country]({{< relref ".././frequencies-by-country" >}})

{{< note "The Things Fundamentals certification exam expects detailed knowledge about the EU863-870 and US902-928 frequency plans. However, a basic understanding of other frequency plans is sufficient." />}}

# Default Settings for All Regions

There are a few recommended default settings available that can be applied to all the regions.

* RX1 Delay: **1s**
* RX2 Delay: **2s**   (RX1 Delay + 1s)
* Join Accept 1 Delay: **5s**
* Join Accept 2 Delay: **6s**

# Questions

1. Which frequency plan is used in Europe?
- <span style="text-decoration:underline;">EU863-870</span>
- US902-928
- IN865-867
- CN470-510

2. Which bit rate can be achieved with the configuration, SF12 / 125 kHz?
- <span style="text-decoration:underline;">250 bit/s</span>
- 440 bit/s
- 980 bit/s
- 1760 bit/s

3. Which country allows the choice of using Listen Before Talk Adaptive Frequency Agility (LBT AFA)?
- Japan
- <span style="text-decoration:underline;">South Korea</span>
- Australia
- United States of America

4. Which country uses Listen Before Talk (LBT) instead of using duty cycle limitations?
- <span style="text-decoration:underline;">Japan</span>
- South Korea
- China
- The Neatherlands

5. How many sub-bands are included in the EU863-870 frequency plan for LoRaWAN as defined by the ETSI?
- 3
- 4
- 5
- <span style="text-decoration:underline;">6</span>

6. What is the maximum application payload size allowed for LoRa: SF12 / 125 kHz in Europe?
- <span style="text-decoration:underline;">51 bytes</span>
- 115 bytes
- 242 bytes
