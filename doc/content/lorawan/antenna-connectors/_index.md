---
title: "Antenna Connectors"
section: Additional Information
description: ""
weight:
---

LoRaWAN gateways and end devices use different types of connectors including U.FL, SMA, RP-SMA, Type-N, and Type-N PR for connecting antennas and interface cables.

## U.FL

U.FL ('U' stands for ultra-small and 'FL' is just a series name assigned by [Hirose](https://www.hirose.com/)) connectors are commonly used in gateways and end devices where space is of critical concern (similar: I-PEX, IPX, etc).

There are two types:

- U.FL Male - These connectors are surface-mounted and soldered directly to the printed circuit board.
- U.FL Female - These connectors come as part of a pigtail, usually an ultra-fine coaxial (fluorinated resin insulated) cable.

U.FL Male and U.FL Female connectors provide a very tight snap-in connection. They are lightweight, require a small mounting area, and feature a very small mated height. When mating, the tactile click sensation confirms the complete electrical and mechanical connection.

{{< figure src="UFL.jpg" alt="UFL Male and Female" >}}
_U.FL Male (right) and U.FL Female (left). Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_

The following table shows some of their applications:

| Application      | Description |
| ----------- | ----------- |
| {{< figure src="09145-01b.jpg" alt="SMA to U.FL" >}}      | Interface Cable: SMA to U.FL. _Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_       |
| {{< figure src="00662-1.jpg" alt="PR-SMA to U.FL" >}}    | Interface Cable: RP-SMA to U.FL. _Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_        |
| {{< figure src="half-wave-antenna-ufl.jpg" alt="PR-SMA to U.FL" >}}     | A half-wave antenna with U.FL termination. _Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_ |
| {{< figure src="generic-node.png" alt="U.FL Male on PCB" >}}  | U.FL Male connector is soldered onto a PCB |
| {{< figure src="ipex-to-ntype.webp" alt="I-PEX to N-Type" >}}    | Interface cable: I-PEX to N-Type cable. _Image courtesy of [RAKwireless Technology Limited](https://www.rakwireless.com/)_  |
| {{< figure src="wisgate-edge-max.webp" alt="I-PEX to N-Type" >}} | I-PEX to N-Type Cables are used to provide an interface for connecting external antennas such as LoRa, WiFi, GPS, and LTE. _Image courtesy of [RAKwireless Technology Limited](https://www.rakwireless.com/)_|

## SMA

SMA connectors use a screw-type coupling mechanism to create strong mechanical connections.

There are two types:

- SMA Male
- SMA Female

SMA Male connectors have a center pin and inner threads whereas SMA Female connectors have a center sleeve and outer threads.

{{< figure src="SMA.jpg" alt="SMA Male and Female" >}}
_SMA Male (right) and SMA Female (left). Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_

**Variations:** The Reverse Polarity (RP) SMA connectors use the same outer shell, but change the gender of the inner pin. However, the signal polarity is not reversed. These reverse polarity connectors do not mate with SMA connectors.


There are two types:

- RP-SMA Male
- RP-SMA Female

RP-SMA Male connectors have a center sleeve and inner threads whereas RP- SMA Female connectors have a center pin and outer threads.

{{< figure src="RPSMA.jpg" alt="RP-SMA Male and Female" >}}
_RP-SMA Male (right) and RP-SMA Female (left). Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_

The following table shows some of their applications.

| Application      | Description |
| ----------- | ----------- |
| {{< figure src="feather-5-SMA-finished.jpg" alt="SMA to U.FL" >}} | An SMA Female Edge-Mount connector is soldered onto a PCB. _Image courtesy of [Adafruit Industries](https://www.adafruit.com/)_ |
| {{< figure src="09145-01b.jpg" alt="SMA to U.FL" >}}      | Interface Cable: SMA to U.FL. _Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_       |
| {{< figure src="00662-1.jpg" alt="PR-SMA to U.FL" >}}    | Interface Cable: RP-SMA to U.FL. _Image courtesy of [SparkFun Electronics](https://www.sparkfun.com/)_        |
| {{< figure src="rubber-ducky-antenna-with-SMA-connector.png" alt="Rubber ducky antenna with SMA" >}}    | An omni-directional rubber ducky antenna with SMA connector. |

## N Type

N Type connectors are threaded, waterproof, medium-size RF connectors that can be used to connect antennas (LoRa, LTE, GPS, WiFi, etc) directly or using cables.

There are two types:

- **N Type Male** - these connectors have a center pin and inner threads. There is a ferrule between the center pin and the inner threads.

{{< figure src="N-male.png" alt="N Type Male" >}}

- **N Type Female** - these connectors have a center sleeve and outer threads.

{{< figure src="N-type-female.png" alt="N Type Female" >}}

**Variation:** Like SMA connectors, N Type connectors have reverse polarity variations known as RP-N Type connectors.

There are two types:

- **RP-N Male** -  these connectors have a center sleeve and inner threads. There is a ferrule between the center pin and the inner threads.

{{< figure src="RP-N-male.png" alt="RP-N Male" >}}

- **RP-N Female** - these connectors have a center pin and outer threads.

{{< figure src="RP-N-female.png" alt="RP-N Female" >}}

The following table shows some of their applications.

| Application      | Description |
| ----------- | ----------- |
| {{< figure src="N-type-female-to-N-type-male.webp" alt="N-type female to N-type male" >}}     | An antenna feeder line which consists of N Type Male (right) and N Type Female (left) connectors. _Image courtesy of [RAKwireless Technology Limited](https://www.rakwireless.com/)_ |
| {{< figure src="wisgate-edge-max.webp" alt="I-PEX to N-Type" >}} | RAK7249 WisGate Edge Max uses 4 N-Type connectors for connecting LoRa, LTE, GPS, and 2.4G WiFi antennas. _Image courtesy of [RAKwireless Technology Limited](https://www.rakwireless.com/)_ |
