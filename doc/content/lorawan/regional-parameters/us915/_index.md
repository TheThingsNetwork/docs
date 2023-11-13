---
title: "US902-928 MHz Band"
section: The Things Fundamentals
description: ""
weight:
---

In this section, the regional parameters for the **USA**, **Canada**, and all other countries falling within **ITU Region 2**, which adopt the complete **FCC 47 CFR Part 15** regulations within the **902-928 MHz ISM band**, are outlined.

# Frequency/Channel Plans

The US902-928 MHz band is divided into the following frequency/channel plans as shown in the table below.

| Uplink/Downlink | Channels | Range | Frequency range | BW	| Data Rate |
| --------------- | -------- | ----- | --------------- | -- | --------- |
| Uplink | 64 | 0 - 63 | 902.3 – 914.9 MHz in 200 kHz increments | 125 kHz | DR0 – DR3 |
| Uplink	| 8  | 64 - 71	| 903.0 – 914.2 MHz in 1.6 MHz increments	| 500 kHz | DR4 |
| Downlink | 8	| 0 - 7 | 923.3 – 927.5 MHz in 600 kHz increments | 500 kHz	| DR8 - DR13 |

# Data Rates

The following table shows the **Bit Rate (bit/sec)** for each data rate configured with the spreading factor and the bandwidth. 

*   DR0 - DR4 and DR8 - DR13 are used for LoRa modulation. 
*   DR4 is identical to DR12. 
*   DR8 - DR13 are only used for downlink messages.

| Data Rate	| Configuration | Bit Rate (bit/s) | Uplink/Downlink? |
| --------- | ------------- | ---------------- | ---------------- |
| 0	      | LoRa: SF10 / 125 kHz | 980 | Uplink |
| 1         | LoRa: SF9 / 125 kHz |	1760 | Uplink |
| 2	      | LoRa: SF8 / 125 kHz | 3125 | Uplink |
| 3	      | LoRa: SF7 / 125 kHz | 5470 | Uplink |
| 4	      | LoRa: SF8 / 500 kHz | 12500 | Uplink |
| 5	      | LR-FHSS CR1/3: 1.523 MHz BW	| 162 | - |
| 6	      | LR-FHSS CR2/3: 1.523 MHz BW	| 325 | - |
| 7	      | RFU	| - | - |
| 8	      | LoRa: SF12 / 500 kHz | 980 | Downlink |
| 9	      | LoRa: SF11 / 500 kHz | 1760 | Downlink |
| 10	      | LoRa: SF10 / 500 kHz | 3900 | Downlink |
| 11	      | LoRa: SF9 / 500 kHz | 7000 | Downlink |
| 12      	| LoRa: SF8 / 500 kHz | 12500 | Downlink |
| 13	      | LoRa: SF7 / 500 kHz | 21900 | Downlink |
| 14        | RFU	| - | - |
| 15	      | * Defined in [TS001] | - | - |

{{< note "The DR15 is defined in the LinkADRReq MAC command of the LoRaWAN1.0.4 and subsequent specifications and were previously RFU." />}}

All US902-928 end devices shall support one of the following data rate options.

*   DR0 – DR4 and DR8 – DR13 – the minimal data rate set required to obtain LoRaWAN certification.
*   DR0 – DR13 - all data rates are implemented in the end device

When using Over-The-Air-Activation (OTAA), the end device shall transmit the **Join-Request** message on a randomly selected channel as follows.

*   64 channels (each have 125kHz bandwith) defined using DR0
*   8 channels (each have 500kHz bandwidth) defined using DR4

The end device shall change channels for every transmission.

The maximum radiated output power allowed in the USA is **EIRP = +30 dBm** but for most devices **+20 dBm** is sufficient. Under the Federal Communications Commission (FCC) there are no duty cycle limitations but there is a **400 ms maximum dwell time** per channel. Dwell time is the amount of time needed for a transmission.

# Maximum Payload Size

The maximum MACPayload size (M) and application payload size (N) vary by Data Rate. The maximum application payload size is calculated using M-8 if the FOpts field is absent.

The table below shows both the maximum MACPayload size and the application payload size for each Data Rate, and it is compatible with repeaters.

| Data rate	| Maximum MAC payload size M (bytes) |	Maximum application payload size N (bytes) |
| --------- | ---------------------------------- | ------------------------------------------ |
| 0 | 19	| 11 |
| 1 |	61	| 53 |
| 2 | 133 | 125 |
| 3 |	230 | 222 |
| 4 |	230 | 222 |
| 5 | 58	 | 50 |
| 6 | 133 | 125 |
| 7 | Not defined	| Not defined |
| 8 |	61	| 53 |
| 9 | 137 | 129 |
| 10 | 230 | 222 |
| 11 | 230 | 222 |
| 12 | 230 | 222 |
| 13 | 230 | 222 |
| 14..15	| Not defined | Not defined |

# Summary

The following table summarizes all the important parameters we have discussed in this section for US902-928 band.

|                                   |                                         |
| --------------------------------- | --------------------------------------- |
| Default frequency band | 902-928 MHz | 
| Mandatory channel frequencies for join-request| Upstream: 64 channels - 902.3 – 914.9 MHz in 200 kHz increments<br> Upstream: 8 channels - 903.0 – 914.2 MHz in 1.6 MHz increments<br>Downstream: 8 channels - 923.3 – 927.5 MHz in 600 kHz increment |
| Mandatory data rates for join-request |	64 (125 kHz channels) using DR0 and 8 (500 kHz channels) using DR4 |
| Optional data rates | 5-6 |
| Number of channels	| Upstream: 64 (125 kHz) + 8 (500 kHz)<br>Downstream: 8 (500 kHz) |
| Default channels |	Ch0 - Ch71 |
| Duty cycle |	No limit |
| Dwell time limitation	| Ch0-Ch63: 400 ms<br>Ch64-Ch71: No |
| Max EIRP (default) - TXPower 0	| +30 dBm |
| Default RX2 data rate	| DR8 |
| Default RX2 frequency	| 923.3 MHz |
