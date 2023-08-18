---
title: "US902-928 MHz Band"
section: The Things Fundamentals
description: ""
weight:
---

In this section, the regional parameters for the **USA**, **Canada**, and all other countries falling within **ITU Region 2**, which adopt the complete **FCC 47 CFR Part 15** regulations within the **902-928 MHz ISM band**, are outlined.

# Frequency/Channel Plans

The US902-928 MHz band is divided into the following frequency/channel plans as shown in the table below.

<table>
  <tr>
   <td><strong>Uplink/Downlink</strong>
   </td>
   <td><strong>Channels</strong>
   </td>
   <td><strong>Range</strong>
   </td>
   <td><strong>Frequency range</strong>
   </td>
   <td><strong>BW</strong>
   </td>
   <td><strong>Data Rate</strong>
   </td>
  </tr>
  <tr>
   <td>Uplink
   </td>
   <td>64
   </td>
   <td>0 - 63
   </td>
   <td>902.3 – 914.9 MHz in 200 kHz increments
   </td>
   <td>125 kHz
   </td>
   <td>DR0 – DR3
   </td>
  </tr>
  <tr>
   <td>Uplink
   </td>
   <td>8
   </td>
   <td>64 - 71
   </td>
   <td>903.0 – 914.2 MHz in 1.6 MHz increments
   </td>
   <td>500 kHz
   </td>
   <td>DR4
   </td>
  </tr>
  <tr>
   <td>Downlink
   </td>
   <td>8
   </td>
   <td>0 - 7
   </td>
   <td>923.3 – 927.5 MHz in 600 kHz increments
   </td>
   <td>500 kHz
   </td>
   <td>DR8 - DR13
   </td>
  </tr>
</table>

# Data Rates

The following table shows the **Bit Rate (bit/sec)** for each data rate configured with the spreading factor and the bandwidth. 

*   DR0 - DR4 and DR8 - DR13 are used for LoRa modulation. 
*   DR4 is identical to DR12. 
*   DR8 - DR13 are only used for downlink messages.

<table>
  <tr>
   <td><strong>Data Rate</strong>
   </td>
   <td><strong>Configuration</strong>
   </td>
   <td><strong>Bit Rate (bit/s)</strong>
   </td>
   <td><strong>Uplink/Downlink?</strong>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>LoRa: SF10 / 125 kHz
   </td>
   <td><p style="text-align: right">
980</p>

   </td>
   <td>Uplink
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>LoRa: SF9 / 125 kHz
   </td>
   <td><p style="text-align: right">
1760</p>

   </td>
   <td>Uplink
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>LoRa: SF8 / 125 kHz
   </td>
   <td><p style="text-align: right">
3125</p>

   </td>
   <td>Uplink
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>LoRa: SF7 / 125 kHz
   </td>
   <td><p style="text-align: right">
5470</p>

   </td>
   <td>Uplink
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>LoRa: SF8 / 500 kHz
   </td>
   <td><p style="text-align: right">
12500</p>

   </td>
   <td>Uplink
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>LR-FHSS CR1/3: 1.523 MHz BW 
   </td>
   <td><p style="text-align: right">
 162</p>

   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>LR-FHSS CR2/3: 1.523 MHz BW 
   </td>
   <td><p style="text-align: right">
 325</p>

   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>RFU 
   </td>
   <td><p style="text-align: right">
 -</p>

   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>LoRa: SF12 / 500 kHz
   </td>
   <td><p style="text-align: right">
980</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>9
   </td>
   <td>LoRa: SF11 / 500 kHz
   </td>
   <td><p style="text-align: right">
1760</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>10
   </td>
   <td>LoRa: SF10 / 500 kHz
   </td>
   <td><p style="text-align: right">
3900</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>11
   </td>
   <td>LoRa: SF9 / 500 kHz
   </td>
   <td><p style="text-align: right">
7000</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>12
   </td>
   <td>LoRa: SF8 / 500 kHz
   </td>
   <td><p style="text-align: right">
12500</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>13
   </td>
   <td>LoRa: SF7 / 500 kHz
   </td>
   <td><p style="text-align: right">
21900</p>

   </td>
   <td>Downlink
   </td>
  </tr>
  <tr>
   <td>14
   </td>
   <td>RFU 
   </td>
   <td><p style="text-align: right">
 -</p>

   </td>
   <td>
   -</td>
  </tr>
  <tr>
   <td>15
   </td>
   <td>* Defined in [TS001] 
   </td>
   <td><p style="text-align: right">
 -</p>

   </td>
   <td>
   -</td>
  </tr>
</table>

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

<table>
  <tr>
   <td><strong>Data rate</strong>
   </td>
   <td><strong>Maximum MAC payload size M (bytes)</strong>
   </td>
   <td><strong>Maximum application payload size N (bytes)</strong>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>19
   </td>
   <td><p>
11</p>

   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>61
   </td>
   <td><p>
53</p>

   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>133
   </td>
   <td><p>
125</p>

   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>58 
   </td>
   <td><p>
 50</p>

   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>133 
   </td>
   <td><p>
 125</p>

   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>Not defined 
   </td>
   <td><p>
 Not defined</p>

   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>61
   </td>
   <td><p>
53</p>

   </td>
  </tr>
  <tr>
   <td>9
   </td>
   <td>137
   </td>
   <td><p>
129</p>

   </td>
  </tr>
  <tr>
   <td>10
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>11
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>12
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>13
   </td>
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>
  <tr>
   <td>14..15
   </td>
   <td>Not defined 
   </td>
   <td><p>
 Not defined</p>

   </td>
  </tr>
</table>

# Summary

The following table summarizes all the important parameters we have discussed in this section for US902-928 band.

<table>
  <tr>
   <td>Default frequency band
   </td>
   <td>902-928 MHz
   </td>
  </tr>
  <tr>
   <td>Mandatory channel frequencies for join-request
   </td>
   <td>Upstream: 64 channels - 902.3 – 914.9 MHz in 200 kHz increments)
<p>
Upstream: 8 channels - 903.0 – 914.2 MHz in 1.6 MHz increments
<p>
Downstream: 8 channels - 923.3 – 927.5 MHz in 600 kHz increment
   </td>
  </tr>
  <tr>
   <td>Mandatory data rates for join-request
   </td>
   <td>64 (125kHz channels) using DR0 and 8 (500kHz channels) using DR4
   </td>
  </tr>
  <tr>
   <td>Optional data rates
   </td>
   <td>5-6
   </td>
  </tr>
  <tr>
   <td>Number of channels
   </td>
   <td>Upstream: 64 (125kHz) + 8 (500 kHz)
<p>
Downstream: 8 (500 kHz)
   </td>
  </tr>
  <tr>
   <td>Default channels
   </td>
   <td>Ch0 - Ch71
   </td>
  </tr>
  <tr>
   <td>Duty cycle
   </td>
   <td>No limit
   </td>
  </tr>
  <tr>
   <td>Dwell time limitation
   </td>
   <td>Ch0-Ch63: 400 ms
<p>
Ch64-Ch71: No
   </td>
  </tr>
  <tr>
   <td>Max EIRP (default) - TXPower 0
   </td>
   <td>+30 dBm
   </td>
  </tr>
  <tr>
   <td>Default RX2 data rate
   </td>
   <td>DR8
   </td>
  </tr>
  <tr>
   <td>Default RX2 frequency
   </td>
   <td>923.3 MHz
   </td>
  </tr>
</table>