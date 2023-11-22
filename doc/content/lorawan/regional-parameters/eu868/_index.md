---
title: "EU863-870 MHz Band"
section: The Things Fundamentals
description: ""
weight:
---

The EU863-870 band can be applied to any region where the radio spectrum use is defined by the [ETSI [EN300.220]](https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.02.01_60/en_30022002v030201p.pdf) standard. The EU863-870 band is used in all the European countries, and some countries _outside Europe_, for example, Kenya (KE), located in the Africa. The EU863-870 band implies the frequency band ranges from 863 MHz – 870 MHz but some countries use slightly different frequency ranges, for example, Albania (AL) uses 863-873 MHz.

# Default Channels

The following three default channels **must** be implemented in every end device that supports the EU863-870 MHz band. These channels are used by the end devices to broadcast the **Join-Request** messages. The end device **randomly** selects one of the default channels to send the **Join-Request** message. The gateways should also listen to these channels.

| Channel frequency (MHz) | Bandwidth (kHz) | LoRa data rate (DR) | Bit rate |
| ----------------------- | --------------- | ------------------- | ------- |
| 868.10 | 125 | DR0 – DR5 | 0.3 – 5 kbps |
| 868.30	| 125	| DR0 – DR5	| 0.3 – 5 kbps |
| 868.50	| 125	| DR0 – DR5	| 0.3 – 5 kbps |

For devices compliant with LoRaWAN version 1.0.x, these three default channels **shall not** be modified using the **NewChannelReq** command. However, for devices compliant with LoRaWAN version 1.1 and above, these channels **may be** modified using the NewChannelReq command.

The EU863-870 MHz band supports a minimum of 24 channels and a maximum of 80 channels.

# Data Rates

Data rate is the number of bits that are transmitted per unit of time. With LoRa modulation, the data rate depends on a few factors like **spreading factor**, **bandwidth**, and the **coding rate**.

The table below presents configurations and bit rates for each Data Rate (DR0 - DR15).

| Data rate | Configuration |	Bit rate (bit/s) |
| --------- | ------------- | ---------------- |
| 0 |	LoRa: SF12 / 125 kHz | 250 |
| 1 | LoRa: SF11 / 125 kHz	| 440 |
| 2 |	LoRa: SF10 / 125 kHz	| 980 |
| 3 | LoRa: SF9 / 125 kHz	| 1760 |
| 4 |	LoRa: SF8 / 125 kHz	| 3125 |
| 5 | LoRa: SF7 / 125 kHz	| 5470 |
| 6 | LoRa: SF7 / 250 kHz	| 11000 |
| 7 | FSK: 50 kbps | 50000 |
| 8 | LR-FHSS CR1/3: 137 kHz BW | 162 |
| 9 | LR-FHSS CR2/3: 137 kHz BW | 325 |
| 10 | LR-FHSS CR1/3: 336 kHz BW	| 162 |
| 11 | LR-FHSS CR2/3: 336 kHz BW	| 325 |
| 12..14	| RFU | - |
| 15 | *Defined in [TS001] | - |

{{< note "*The DR15 is defined in the LinkADRReq MAC command of the LoRaWAN1.0.4 and subsequent specifications and were previously RFU." />}}

As you can see, higher spreading factors cause lower bit rates and lower spreading factors cause higher bit rates. However for the same spreading factor, if the **bandwidth doubles** the **data rate** also gets **doubled**. You will learn more about this in the [Spreading Factors chapter]({{< relref "spreading-factors" >}}).

All EU868-870 end devices **must** support one of the following three data rate options.

*   DR0 – DR5 – the minimal data rate set supported to obtain the LoRaWAN certification.
*   DR0 – DR7
*   DR0 – DR11 – all data rates are implemented in the end device

# Maximum EIRP / ERP

The Effective Isotropic Radiated Power (EIRP) is the total power radiated by an isotropic antenna in a single direction. The antenna gain is expressed in dBi for isotropic antennas.

The table below displays the list of EIRP values that can be used for data transmission.

| TXPower | EIRP |
| -------- | ---- |
| 0 | +16 dBm |
| 1 | +14 dBm |
| 2 | +12 dBm |
| 3 | +10 dBm |
| 4 |  +8 dBm |
| 5 |  +6 dBm |
| 6 |  +4 dBm |
| 7 |  +2 dBm |
| 8..14 | RFU | - |
| 15 | *Defined in [TS001] |	- |


{{< note "*The TXPower 15 is defined in the LinkADRReq MAC command of the LoRaWAN1.0.4 and subsequent specifications and were previously RFU." />}}

The Max EIRP for EU863-870 is +16dBm.

The above mentioned EIRP and ERP values can also be expressed in milliwatts (mW). For example,

*   +16 dBm = 40 mW
*   +14 dBm = 25 mW
*   +27 dBm = 500 mW

# Maximum Payload Size

The maximum MACPayload size (M) and application payload size (N) vary by Data Rate. The maximum application payload size is calculated using **M-8** if the **FOpts** field is absent.

The table below shows both the maximum MACPayload size and the application payload size for each Data Rate, and it is compatible with repeaters.

| Data Rate	| Maximum MAC payload size M (bytes) |	Maximum application payload size N (bytes) |
| --------- | ---------------------------------- | ------------------------------------------ |
| 0 | 59 | 51 |
| 1 | 59 | 51 |
| 2 | 59 | 51 |
| 3 | 123 |	115 |
| 4 | 230 | 222 |
| 5 | 230 | 222 |
| 6 | 230 | 222 |
| 7 | 230 | 222 |
| 8 | 58 | 50 |
| 9 | 123 | 115 |
| 10 | 58 | 50 |
| 11 | 123 | 115 |
| 12..15 | Not defined | Not defined |

# Duty Cycle

The [LoRa Alliance®](https://lora-alliance.org/) recommends a duty cycle limitation of 1% in the European band which means that a device can transmit for no more than 1% of the time while ensuring the maximum EIRP (Effective Isotropic Radiated Power) of +16 dBm. The purpose of the duty cycle limitation is to ensure that devices operating in the ISM band do not cause harmful interference to other devices operating in the same band.

However, [ETSI](https://www.etsi.org/) (European Telecommunications Standards Institute) has segmented the European ISM frequency band into 6 sub-bands (K, L, M, N, P, Q) and imposes additional restrictions on the duty cycle and maximum ERP for some sub-bands (see pages 21-22 of the [ETSI EN300.220 V3.2.1 (2018-06) document](https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.02.01_60/en_30022002v030201p.pdf)).

- K (863 MHz - 865 MHz): 0.1%, 25 mW ERP
- L (865 MHz - 868 MHz): 1%, 25 mW ERP
- M (868 MHz - 868.6 MHz): 1%, 25 mW ERP
- N (868.7 MHz - 869.2 MHz): 0.1%, 25 mW ERP
- P (869.4 MHz - 869.65 MHz): 10%, 500 mW ERP
- Q (869.7 MHz - 870 MHz): 1%, 25 mW ERP

Let’s have a look at how to calculate the Time on Air allowed per day (24 hours), per end device for some common duty cycles.

| Max duty cycle | *Time on Air |
| -------------- | ----------- |
| 0.1% | 86 seconds |
| 1% | 864 seconds |
| 10% | 8640 seconds |

*Time on Air = Number of seconds per day X Duty cycle %

{{< note >}}

Some network operators (like The Things Network) reduce the duty cycle further than ESTI recommends. These types of restrictions are called ‘Fair Access Policy’. For example, The Things Network’s fair access policy limits the uplink airtime to 30 seconds per day per node and the downlink messages to 10 messages per day per node.

{{</ note >}}

# Summary

The following table summarizes all the important parameters we have discussed in this section for EU863-870 MHz band.

|                                   |                                         |
| --------------------------------- | --------------------------------------- |
| Default frequency band            | 863-870 MHz                             |
| Mandatory channel frequencies     | 868.10 MHz<br>868.30 MHz<br>868.50 MHz  |
| Mandatory data rates              | 0, 1, 2, 3, 4, 5                        |
| Optional data rates               | [6, 7] or [6, 7, 8, 9, 10, 11]          |
| Number of channels                | Minimum: 24<br>Maximum: 80              |
| Default channels                  | 0, 1, 2                                 |
| Duty cycle                        | < 1%                                    |
| Dwell time limitation             | No                                      |
| Max EIRP / ERP                    | EIRP = +16 dBm (40 mW)<br>ERP = +14 dBm (25 mW) |
| Max antenna gain                  | 2.15 dBi or 0 dBd                       |
| Default RX2 data rate             | DR0 (SF12 / 125 kHz)                    |
| Default RX2 frequency             | 869.525 MHz         
