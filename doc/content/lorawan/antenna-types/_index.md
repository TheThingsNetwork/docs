---
title: "Antenna Types"
section: Additional Information
description: ""
weight:
---

In this tutorial, you will learn about some of the popular antenna types used with LoRaWAN end devices and gateways.

## Wire Antenna

Wire antennas are low-cost and easy to build and work well in indoor environments. They are usually quarter-wave antennas. Different frequencies need different wire lengths (calculated for quarter-wave), for example, 3.25 inches or 8.2 cm for 868 MHz and 3 inches or 7.8 cm for 915 MHz. Suitable for DIY projects. You must keep the antenna wire as vertical as possible for better performance.

{{< figure src="wire-antenna-example.jpg" class="plain" >}}
image credits: [SparkFun Electronics](https://learn.sparkfun.com/)

## PCB Antenna

These antennas are made from a copper trace drawn directly onto a PCB. Great for high volume production and suitable for indoor use. 

{{< figure src="pcb-antenna-example.png" class="plain" >}}
image credits: [DesignSpark](https://www.rs-online.com/designspark/things-network-hardware-makes-lorawan-easy)

## Spring Antenna

Spring antennas (also known as Coil/Helical antennas) are made from coiled wires (usually copper or aluminium) that reduce the antenna’s length. These antennas are suitable for use with LoRa modules with low transmission power (up to 100mW) and are also perfect for end devices with space constraints.

{{< figure src="spring-antenna-example.png" class="plain" >}}

## Rubber Duck Antenna

These antennas are made from rubber/plastic (housing) and copper/aluminium (actual antenna). Rubber duck antennas are usually half wave or quarter wave. They terminated with SMA or RP-SMA connector for directly connecting with the gateway/end device or for connecting through a pigtail. Ideal for LoRa nodes and indoor gateways.

{{< figure src="rubber-duck-antenna-example.jpg" class="plain" >}}
image credits: [SparkFun Electronics](https://learn.sparkfun.com/)

## Collinear Antenna

These high-performance antennas are made from copper (actual antenna) and fiberglass (protective enclosure). A Collinear antenna is an array of dipoles made from copper wires in a straight line (some collinear antennas are made from coaxial cables). The radiating dipoles sum up all radiation intensities for providing higher performance and gain. These antennas are ideal for use with heavy-duty, high-power LoRaWAN outdoor gateways. However, they can be used with LoRaWAN nodes as well. They have Type N termination for connecting with gateways directly or through an interface cable. Collinear antennas can be vertically pole mounted. Suitable for harsh outdoor conditions because most of them are IP67 rated.

{{< figure src="collinear-antenna-example.png" class="plain" >}}
image credits: [HB Radiofrequency](https://halberdbastion.com/)

The following figure shows a LoRaWAN collinear antenna wire with loops. The straight end of the antenna is connected to a Type N connector for termination. Then the looped copper wire is enclosed in high-density fiberglass.

{{< figure src="collinear-antenna-wire.jpg" class="plain" >}}
image credits: [IRNAS](https://github.com/IRNAS/ttn-irnas-gw)