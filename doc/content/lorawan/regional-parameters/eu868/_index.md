---
title: "EU863-870 MHz Band"
section: The Things Fundamentals
description: ""
weight:
---

The EU863-870 band can be applied to any region where the radio spectrum use is defined by the [ETSI [EN300.220]](https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.02.01_60/en_30022002v030201p.pdf) standard. The EU863-870 band is used in all the European countries, and some countries _outside Europe_, for example, Kenya (KE), located in the Africa. The EU863-870 band implies the frequency band ranges from 863 MHz – 870 MHz but some countries use slightly different frequency ranges, for example, Albania (AL) uses 863-873 MHz.

# Default Channels

The following three default channels **must** be implemented in every end device that supports the EU863-870 MHz band. These channels are used by the end devices to broadcast the **Join-Request** messages. The end device **randomly** selects one of the default channels to send the **Join-Request** message. The gateways should also listen to these channels.

<table>
  <tr>
   <td><strong>Channel Frequency (MHz)</strong>
   </td>
   <td><strong>Bandwidth (kHz)</strong>
   </td>
   <td><strong>LoRa Data Rate (DR)</strong>
   </td>
   <td><strong>Bitrate</strong>
   </td>
  </tr>
  <tr>
   <td>868.10
   </td>
   <td>125
   </td>
   <td>DR0 – DR5
   </td>
   <td>0.3 – 5 kbps
   </td>
  </tr>
  <tr>
   <td>868.30
   </td>
   <td>125
   </td>
   <td>DR0 – DR5
   </td>
   <td>0.3 – 5 kbps
   </td>
  </tr>
  <tr>
   <td>868.50
   </td>
   <td>125
   </td>
   <td>DR0 – DR5
   </td>
   <td>0.3 – 5 kbps
   </td>
  </tr>
</table>

For devices compliant with LoRaWAN version 1.0.x, these three default channels **shall not** be modified using the **NewChannelReq** command. However, for devices compliant with LoRaWAN version 1.1 and above, these channels **may be** modified using the NewChannelReq command.

The EU863-870 MHz band supports a minimum of 24 channels and a maximum of 80 channels.

# Data Rates

Data rate is the number of bits that are transmitted per unit of time. With LoRa modulation, the data rate depends on a few factors like **spreading factor**, **bandwidth**, and the **coding rate**.

The table below presents configurations and bit rates for each Data Rate (DR0 - DR15).

<table>
  <tr>
   <td><strong>Data Rate</strong>
   </td>
   <td><strong>Configuration</strong>
   </td>
   <td><strong>Bit Rate (bit/s)</strong>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>LoRa: SF12 / 125 kHz
   </td>
   <td><p style="text-align: right">
250</p>

   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>LoRa: SF11 / 125 kHz
   </td>
   <td><p style="text-align: right">
440</p>

   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>LoRa: SF10 / 125 kHz
   </td>
   <td><p style="text-align: right">
980</p>

   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>LoRa: SF9 / 125 kHz
   </td>
   <td><p style="text-align: right">
1760</p>

   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>LoRa: SF8 / 125 kHz
   </td>
   <td><p style="text-align: right">
3125</p>

   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>LoRa: SF7 / 125 kHz
   </td>
   <td><p style="text-align: right">
5470</p>

   </td>
  </tr>

  <tr>
   <td>6</td>
   <td>LoRa: SF7 / 250 kHz</td>
   <td><p style="text-align: right">11000</p></td>
  </tr>

 <tr>
   <td>7</td>
   <td>FSK: 50 kbps</td>
   <td><p style="text-align: right">50000</p></td>
  </tr>

 <tr>
   <td>8</td>
   <td>LR-FHSS CR1/3: 137 kHz BW</td>
   <td><p style="text-align: right">162</p></td>
  </tr>

<tr>
   <td>9</td>
   <td>LR-FHSS CR2/3: 137 kHz BW</td>
   <td><p style="text-align: right">325</p></td>
  </tr>

<tr>
   <td>10</td>
   <td>LR-FHSS CR1/3: 336 kHz BW</td>
   <td><p style="text-align: right">162</p></td>
  </tr>

<tr>
   <td>11</td>
   <td>LR-FHSS CR2/3: 336 kHz BW</td>
   <td><p style="text-align: right">325</p></td>
  </tr>

<tr>
   <td>12..14</td>
   <td>RFU</td>
   <td><p style="text-align: right">-</p></td>
  </tr>

<tr>
   <td>15</td>
   <td>* Defined in [TS001]
</td>
   <td><p style="text-align: right">-</p></td>
  </tr>

</table>

{{< note "The DR15 is defined in the LinkADRReq MAC command of the LoRaWAN1.0.4 and subsequent specifications and were previously RFU." />}}

As you can see, higher spreading factors cause lower bit rates and lower spreading factors cause higher bit rates. However for the same spreading factor, if the **bandwidth doubles** the **data rate** also gets **doubled**. You will learn more about this in the [Spreading Factors chapter]({{< relref "spreading-factors" >}}).

All EU868-870 end devices **must** support one of the following three data rate options.

*   DR0 – DR5 – the minimal data rate set supported to obtain the LoRaWAN certification.
*   DR0 – DR7
*   DR0 – DR11 – all data rates are implemented in the end device

# Maximum EIRP / ERP

The Effective Isotropic Radiated Power (EIRP) is the total power radiated by an isotropic antenna in a single direction. The antenna gain is expressed in dBi for isotropic antennas.

The table below displays the list of EIRP values that can be used for data transmission.

<table>
  <tr>
   <td><strong>TX Power</strong>
   </td>
   <td><strong>EIRP</strong>
   </td>
   <td><strong>Calculated value</strong>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>Max EIRP
   </td>
   <td>+16 dBm
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Max EIRP - 2 dB 
   </td>
   <td>+16 dBm - 2 dB = +14 dBm
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Max EIRP - 4 dB
   </td>
   <td>+16 dBm - 4 dB = +12 dBm
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Max EIRP - 6 dB
   </td>
   <td>+16 dBm - 6 dB = +10 dBm
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>Max EIRP - 8 dB
   </td>
   <td>+16 dBm - 8 dB = +8 dBm
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>Max EIRP - 10 dB
   </td>
   <td>+16 dBm - 10 dB = +6 dBm
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>Max EIRP - 12 dB
   </td>
   <td>+16 dBm - 12 dB = +4 dBm
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>Max EIRP - 14 dB
   </td>
   <td>+16 dBm - 14 dB = +2 dBm
   </td>
  </tr>
  <tr>
   <td>8..14
   </td>
   <td>RFU
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>15
   </td>
   <td> * Defined in [TS001]
   </td>
   <td>-
   </td>
  </tr>
</table>

{{< note "The TXPower15 is defined in the LinkADRReq MAC command of the LoRaWAN1.0.4 and subsequent specifications and were previously RFU." />}}

The Max EIRP for EU863-870 is +16dBm.

The above mentioned EIRP and ERP values can also be expressed in milliwatts (mW). For example,

*   +16 dBm = 40 mW
*   +14 dBm = 25 mW
*   +27 dBm = 500 mW

# Maximum Payload Size

The maximum MACPayload size (M) and application payload size (N) vary by Data Rate. The maximum application payload size is calculated using **M-8** if the **FOpts** field is absent.

The table below shows both the maximum MACPayload size and the application payload size for each Data Rate, and it is compatible with repeaters.

<table>
  <tr>
   <td><strong>Data Rate</strong>
   </td>
   <td><strong>Maximum MAC payload size M (bytes)</strong>
   </td>
   <td><strong>Maximum application payload size N (bytes)</strong>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>59
   </td>
   <td><p>
51</p>

   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>59
   </td>
   <td><p>
51</p>

   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>59
   </td>
   <td><p>
51</p>

   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>123
   </td>
   <td><p>
115</p>

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
   <td>230
   </td>
   <td><p>
222</p>

   </td>
  </tr>

  <tr>
   <td>6
   </td>
   <td>230
   </td>
   <td><p>
222</p>
   </td>
  </tr>
  
 <tr>
   <td>7
   </td>
   <td>230
   </td>
   <td><p>
222</p>
   </td>
  </tr>

 <tr>
   <td>8
   </td>
   <td>58
   </td>
   <td><p>
50</p>
   </td>
  </tr>

 <tr>
   <td>9
   </td>
   <td>123
   </td>
   <td><p>
115</p>
   </td>
  </tr>

 <tr>
   <td>10
   </td>
   <td>58
   </td>
   <td><p>
50</p>
   </td>
  </tr>

 <tr>
   <td>11
   </td>
   <td>123
   </td>
   <td><p>
115</p>
   </td>
  </tr>


 <tr>
   <td>12..15
   </td>
   <td>Not defined
   </td>
   <td><p>
Not defined</p>
   </td>
  </tr>

</table>

# Duty Cycle

The [LoRa Alliance®](https://lora-alliance.org/) recommends a duty cycle limitation of 1% in the European band which means that a device can transmit for no more than 1% of the time while ensuring the maximum EIRP (Effective Isotropic Radiated Power) of +16 dBm. The purpose of the duty cycle limitation is to ensure that devices operating in the ISM band do not cause harmful interference to other devices operating in the same band.

However, [ETSI](https://www.etsi.org/) (European Telecommunications Standards Institute) has segmented the European ISM frequency band into 6 sub-bands (K, L, M, N, P, Q) and imposes additional restrictions on the duty cycle and maximum ERP for some sub-bands (see pages 21-22 of the [ETSI EN300.220 V3.2.1 (2018-06) document](https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.02.01_60/en_30022002v030201p.pdf)).

- K (863 MHz - 865 MHz): 0.1%, 25 mW ERP
- L (865 MHz - 868 MHz): 1%, 25 mW ERP
- M (868 MHz - 868.6 MHz): 1%, 25 mW ERP
- N (868.7 MHz - 869.2 MHz): 0.1%, 25 mW ERP
- P (869.4 MHz - 869.65 MHz): 10%, 500 mW ERP
- Q (869.7 MHz - 870 MHz): 1%, 25 mW ERP

Let’s have a look at how to calculate the time-on-air allowed per day (24 hours), per end device for some common duty cycles.


<table>
  <tr>
   <td><strong>Duty cycle (take the maximum)</strong>
   </td>
   <td><strong>Equation: Time-On-Air = number of seconds per day </strong>X<strong> duty cycle</strong>
   </td>
   <td><strong>Maximum allowed Time-On-Air per day, per device</strong>
   </td>
  </tr>
    <tr>
   <td>0.1%
   </td>
   <td>86400 x 0.1%
   </td>
   <td>86 seconds per day
   </td>
  </tr>
  <tr>
  <tr>
   <td>1%
   </td>
   <td>86400 x 1%
   </td>
   <td>864 seconds per day
   </td>
  </tr>
   <td>10%
   </td>
   <td>86400 x 10%
   </td>
   <td>8640 seconds per day
   </td>
  </tr>
</table>

{{< note >}}

Some network operators (like The Things Network) reduce the duty cycle further than ESTI recommends. These types of restrictions are called ‘Fair Access Policy’. For example, The Things Network’s fair access policy limits the uplink airtime to 30 seconds per day per node and the downlink messages to 10 messages per day per node.

{{</ note >}}

# Summary

The following table summarizes all the important parameters we have discussed in this section for EU863-870 MHz band.

<table>
  <tr>
   <td>Default frequency band
   </td>
   <td>863-870 MHz
   </td>
  </tr>
  <tr>
   <td>Mandatory channel frequencies (for Join-Request)
   </td>
   <td>
<p>868.10 MHz</p>
<p>868.30 MHz</p>
<p>868.50 MHz</p>
   </td>
  </tr>
  <tr>
   <td>Mandatory data rates
   </td>
   <td>0, 1, 2, 3, 4, 5
   </td>
  </tr>
  <tr>
   <td>Optional data rates
   </td>
   <td>[6, 7] or [6, 7, 8, 9, 10, 11]
   </td>
  </tr>
  <tr>
   <td>Number of channels
   </td>
   <td>
<p>Minimum: 24</p>
<p>Maximum: 80</p>
   </td>
  </tr>
  <tr>
   <td>Default channels
   </td>
   <td>0, 1, 2
   </td>
  </tr>
  <tr>
   <td>Duty cycle
   </td>
   <td>&lt; 1%
   </td>
  </tr>
  <tr>
   <td>Dwell time limitation
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Max EIRP / ERP
   </td>
   <td>
   <p>EIRP = +16 dBm  (40 mW) - This is the power radiated by an isotropic antenna</p>
   <p>ERP = +14 dBm (25 mW) - This is the power radiated by a half-wave dipole antenna</p>
   </td>
  </tr>
  <tr>
   <td>Max antenna gain
   </td>
   <td>2.15 dBi or 0 dBd
   </td>
  </tr>
  <tr>
   <td>Default RX2 data rate
   </td>
   <td>DR0 (SF12 / 125 kHz)
   </td>
  </tr>
  <tr>
   <td>Default RX2 frequency
   </td>
   <td>869.525 MHz
   </td>
  </tr>
</table>
