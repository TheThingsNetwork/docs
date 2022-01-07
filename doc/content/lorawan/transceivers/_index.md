---
title: "LoRaWAN® Transceivers"
section: "Additional Information"
description: ""
weight:
---

Besides gateway chips described in the [LoRaWAN Concentrators]({{< ref "/lorawan/concentrators" >}}) section, an important part of the LoRa portfolio are transceiver chips.

Semtech has produced a few series of LoRa Core™ sub-GHz transceiver chips, like SX127x, SX126x and LLCC68. Recently, Semtech has also produced the LR1110 solution that includes a LoRa transceiver as part of the LoRa Edge™ platform.

This page provides a quick description of the most commonly used LoRa transceivers.

## SX127x

{{< figure src="SX1272.jpg" class="float plain" >}}

The SX127x series transceivers were one of the first LoRa transceivers on the market, providing ultra-long range spread spectrum communication and high interference immunity, while minimizing current consumption. All chips from this series have similar characteristics. The main difference is that the SX1272/73 transceivers operate in the 860-1000MHz, while the SX1276/77/78/79 operate in the 137-1020MHz frequency band. 

- LoRa Modem
- 157dB maximum link budget for SX1272/73, 168dB for SX1276/77/78/79
- +20dBm at 100mW constant RF output vs V supply
- Up to +14dBm TX power using high efficiency power amplifier (PA)
- Programmable bit rate up to 300kbps for FSK
- High sensitivity, down to -137dBm for SX1272/73, -148dBm for SX1276/77/78/79
- Bullet-proof front end, with IIP3 = -12.5dBm for SX1272/73, IIP3= -11dBm for SX1276/77/78/79
- Excellent blocking immunity
- Low RX current of 10mA and 100nA register retention for SX1272/73, 9.9mA and 200nA register retention for for SX1276/77/78/79
- Fully integrated synthesizer with a resolution of 61Hz
- FSK, GFSK, MSK, GMSK, LoRa and OOK modulation
- Built-in bit synchronizer for clock recovery
- Preamble detection
- 127dB Dynamic Range RSSI
- Automatic RF Sense and Channel Activity Detection (CAD) with ultra-fast Automatic Frequency Control (AFC)
- Packet engine up to 256 bytes with CRC
- Built-in temperature sensor and low battery indicator

Read more about the SX127x transceiver series on Semtech's [product page](https://www.semtech.com/products/wireless-rf/lora-core/).

## SX126x

{{< figure src="SX1261.jpg" class="float plain" >}}

The successor of the SX127x is the SX126x series. All chips from the SX126x series are very similar, half-duplex transceivers for long range wireless applications. Their main features are low consumption for long battery life, and high TX power thanks to the highly efficient integrated PAs. Besides LoRa modulation, they support (G)FSK modulation for legacy use cases. The main difference between these devices is in the last stage of the transmit chain, where the difference in the maximum TX power arises. The SX1261 and SX1262 have a global frequency coverage, while the SX1268 operates in China frequency bands.

- LoRa and FSK Modem
- 170 dB maximum link budget for SX1262 and SX1268
- Maximum TX power +15 dBm for SX1261 (using DC-DC converter or LDO), +22 dBm for SX1261 and SX1268 (under the battery supply)
- Low RX current of 4.2 mA
- Integrated DC-DC converter and LDO
- Programmable bit rate up to 62.5 kbps for LoRa and 300 kbps for FSK
- High sensitivity, down to -148 dBm for LoRa
- 88 dB blocking immunity at 1 MHz offset for LoRa
- Co-channel GMSK rejection of up to 19 dB for LoRa
- FSK, GFSK, MSK, GMSK and LoRa modulation, plus Long Range FHSS modulations for SX1262
- Automatic CAD with ultra-fast AFC

Read more about the SX126x transceiver series on Semtech's [product page](https://www.semtech.com/products/wireless-rf/lora-core/).

## LLCC68

Semtech's LLCC68 is a sub-GHz LoRa RF transceiver, intended for medium range indoor, and indoor to outdoor smart home wireless applications. It is pin-to-pin compatible with SX1262 and their features are very similar. The main difference is that the LLCC68 can transmit up to +22 dBm using highly integrated PAs, the maximum link budget it provides is 151 dB and its sensitivity can go down to -129 dBm. Also, it does not support all LoRaWAN rates - the supported ones include SF7 to SF9 at 125kHz, SF7 to SF10 at 250kHz, and SF7 to SF11 at 500kHz.

Read more about the LLCC68 transceiver on Semtech's [product page](https://www.semtech.com/products/wireless-rf/lora-core/llcc68).

## LR1110

{{< figure src="LR1110.jpg" class="float plain" >}}

The LR1110 is a solution that integrates a high sensitivity half-duplex LoRa transceiver, long range FHSS modulator, multi-constellation scanner and passive Wi-Fi AP MAC address scanner. 

The main features of the transceiver:

- LoRa and (G)FSK modulation support
- Worldwide ISM frequency bands support in the range 150-960MHz
- Low Noise Figure RX front-end for enhanced LoRa/(G)FSK sensitivity
- High power PA path +22dBm
- High efficiency PA path +15dBm
- Long Range FHSS modulator
- Integrated PA regulator supply selector to simplify dual power +15/+22dBm with one board implementation
- Able to support worldwide multi-region bill of materials, the circuit adapts to matching network to satisfy regulatory limits
- Fully compatible with SX126x devices and the LoRaWAN® standard defined by the LoRa Alliance®

The main features of the multi-purpose radio front-end that targets geolocation capabilities:

- GNSS (GPS, BeiDou, geostationary) low-power scanning
- 802.11b/g/n Wi-Fi ultra-low-power passive scanning
- 150-2700MHz continuous frequency synthesizer range
- High bandwidth RX ADC (up to 24MHz Double Side Band)
- Digital baseband processing
