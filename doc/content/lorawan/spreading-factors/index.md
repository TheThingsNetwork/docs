---
title: Spreading Factors
section: The Things Fundamentals
weight: 70
---

LoRa is based on Chirp Spread Spectrum (CSS) technology, where chirps (also known as symbols) are the carrier of data.

The spreading factor controls the chirp rate, and thus controls the speed of data transmission. **Lower spreading factors** mean **faster chirps** and therefore a **higher data transmission rate**. For every increase in spreading factor, the chirp sweep rate is halved, and so the data transmission rate is halved.

For a visual explanation, see [this video](https://www.youtube.com/watch?v=dxYY097QNs0) on LoRa chirps.

Lower spreading factors reduce the range of LoRa transmissions, because they reduce the processing gain and increase the bit rate. Changing spreading factor allows the network to increase or decrease data rate for each end device at the cost of range.

The network also uses spreading factors to control congestion. Spreading factors are orthogonal, so signals modulated with different spreading factors and transmitted on the same frequency channel at the same time do not interfere with each other.

### Influence of Spreading Factors

LoRa modulation has a total of 6 spreading factors from SF7 to SF12. Spreading factors influence data rate, time-on-air, battery life, and receiver sensitivity, as described here.

#### Data rate

Compared to a higher spreading factor, a lower spreading factor provides a higher bit rate for a fixed bandwidth and coding rate. For example, SF7 provides a higher bit rate than SF12.

Doubling the bandwidth also doubles the bit rate for a fixed spreading factor and coding rate.

The following table presents bit rates calculated with the SF7 and Coding Rate (CR) = 1 for bandwidths, 125, 250, and 500 kHz.


<table>
  <tr>
   <td>
<strong>Spreading Factor</strong>
   </td>
   <td><strong>Bandwidth</strong>
   </td>
   <td><strong>Bit rate (kbits/s)</strong>
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>125
   </td>
   <td>5.5
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>250
   </td>
   <td>10.9
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>500
   </td>
   <td>21.9
   </td>
  </tr>
</table>

#### Distance

Larger spreading factors mean larger processing gain, and so a signal modulated with a larger spreading factor can be received with less errors compared to a signal with a lower spreading factor, and therefore travel a longer distance. For example, a signal modulated with the SF12 can travel a longer distance than a signal modulated with the SF7.

#### Time-On-Air

Compared to a lower spreading factor, sending a fixed amount of data (payload) with a higher Spreading Factor and a fixed bandwidth needs longer time-on-air.

The Things Network’s LoRaWAN airtime calculator can be used to calculate the time-on-air using input bytes (payload size), bandwidth, and spreading factor. TTN’s LoRaWAN airtime calculator can be accessed here:

<span style="text-decoration:underline;">https://www.thethingsnetwork.org/airtime-calculator</span>

#### Receiver Sensitivity

Higher spreading factors provide higher receiver sensitivity. Usually, LoRa uses higher spreading factors when the signal is weak.

The following table shows how spreading factors impact the receiver sensitivity. 

<table>
  <tr>
   <td>
<strong>Spreading factor</strong>
   </td>
   <td><strong>Receiver sensitivity for bandwidth fixed at 125 kHz</strong>
   </td>
  </tr>
  <tr>
   <td>SF7
   </td>
   <td>-123 dBm
   </td>
  </tr>
  <tr>
   <td>SF8
   </td>
   <td>-126 dBm
   </td>
  </tr>
  <tr>
   <td>SF9
   </td>
   <td>-129 dBm
   </td>
  </tr>
  <tr>
   <td>SF10
   </td>
   <td>-132 dBm
   </td>
  </tr>
  <tr>
   <td>SF11
   </td>
   <td>-134.5 dBm
   </td>
  </tr>
  <tr>
   <td>SF12
   </td>
   <td>-137 dBm
   </td>
  </tr>
</table>

#### Battery Life

The battery life of an end device is highly dependent on the spreading factor used. Higher spreading factors result in longer active times for the radio transceivers and shorter battery life.

## Questions

1. Which spreading factor provides the highest receiver sensitivity?

- SF9

- SF10

- SF11

- <span style="text-decoration:underline;">SF12</span>

2. Which spreading factor provides the highest bit rate?

- <span style="text-decoration:underline;">SF7</span>

- SF8

- SF9

- SF10

3. Which spreading factor provides the longest battery life for an end device?

- <span style="text-decoration:underline;">SF7</span>

- SF8

- SF9

- SF10

_Lower spreading factors provide higher bit rates resulting in shorter TOA. Shorter TOA results in longer battery life because the radio transceiver is active for a shorter period._

4. For the same amount of data and bandwidth, which spreading factor results in the longest time-on-air?

- SF7

- SF8

- SF9

- <span style="text-decoration:underline;">SF10</span>
