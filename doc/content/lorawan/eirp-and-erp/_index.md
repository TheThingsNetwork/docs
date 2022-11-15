---
title: "EIRP and ERP"
section: Additional Information
description: ""
weight:
---

LoRaWAN gateways and end devices consist of radios (also called transceivers) that are capable of transmitting and receiving LoRa modulated radio signals. A radio needs an antenna to transmit or receive signals. The connection between the radio and the antenna is usually made by a piece of cable (for some devices it is a PCB trace). When transmitting, radio (transmitter) and antenna provide signal gain while antenna cable and connectors affect signal loss.

## EIRP

EIRP (Effective Isotropic Radiated Power) is the total power radiated by an isotropic antenna in a single direction. In this case, the antenna gain must be expressed in dBi.

{{< figure src="eirp.png" alt="EIRP" >}}

The EIRP of a unit that consists of a transmitter, an antenna, and a cable can be calculated using the formula,

**EIRP = Transmitter output power (dBm) + Antenna gain (dBi) - Cable loss (dB)**

where the transmitter power in dBm, antenna gain in dBi, and cable loss in dB.

**Question:** Calculate the EIRP value of the following unit that consists of a LoRaWAN gateway, an antenna cable, and an antenna.

{{< figure src="eirp-q1.png" alt="EIRP-q1" >}}

EIRP = Transmitter output power (dBm) + Antenna gain (dBi) - Cable loss (dB)

EIRP = 20 +3 -7 = 16 dBm

## ERP

Sometimes, the maximum output power is measured in ERP (Effective Radiated Power) instead of the EIRP.

ERP is the total power radiated by an actual antenna relative to a half-wave dipole antenna. In this case, the antenna gain must be expressed in dBd.

{{< figure src="erp.png" alt="ERP" >}}

The ERP of a unit that consists of a transmitter, an antenna, and a cable can be calculated using the formula,

**ERP = Transmitter output power (dBm) + Antenna gain (dBd) - Cable loss (dB)**

where the transmitter power in dBm, antenna gain in dBd, and cable loss in dB.

ERP is also expressed in dBm.

**Question:** Calculate the ERP value of the following unit that consists of an end device, an antenna cable, and an antenna.

{{< figure src="erp-q1.png" alt="ERP-q1" >}}

ERP = Transmitter output power (dBm) + Antenna gain (dBd) - Cable loss (dB)

ERP = 20 +0.85 -7 = 13.85 dBm

## Conversion between EIRP and ERP

You can easily convert EIRP to ERP and vice versa using the following equation:

EIRP (dBm) = ERP (dBm) + 2.15

Question: Convert the EIRP value 16 dBm to ERP.

ERP (dBm) = EIRP (dBm) - 2.15
ERP (dBm) = 16 -2.15 = 13.85 dBm

## dBm to watts conversion

EIRP or ERP values can be converted to watts (W) or milliwatts (mW), for example,  EIRP 16 dBm is equivalent to 40 mW.

Read the section **Rule of 10s and 3s** in our guide [dB, dBm, dBi and dBd](../db-dbm-dbi-dbd/) to learn how to convert dBm to watts or milliwatts.

If you want to quickly convert dBm to watts or milliwatts without calculating by hand, an online tool is available at [RapidTables](https://www.rapidtables.com/convert/power/dBm_to_Watt.html)

## Regulations

The maximum transmission power of a gateway or an end device is region specific and is regulated by the respective regulatory authorities. For example, in Europe, it is 25 mW ERP (+16 dBm EIRP) and is regulated by ETSI (European Telecommunications Standards Institute).

Read the [LoRaWAN® Regional Parameters 1.0.3](https://lora-alliance.org/wp-content/uploads/2021/05/RP002-1.0.3-FINAL-1.pdf) to find the maximum allowed EIRP in other regions. 

Adjust the following parameters to prevent EIRP/ERP/milliwatts thresholds from being exceeded.
- Transmitter output power
- Cable and connector attenuation
- Antenna gain