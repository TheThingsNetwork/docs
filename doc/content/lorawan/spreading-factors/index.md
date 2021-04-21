---
title: Spreading Factors
section: Fundamental
---

In this chapter, you will learn about Spreading Factors (SF) and their impact on LoRa communication.

LoRa is a Chirp Spread Spectrum communication protocol, where chirps are the carrier of data. The Spreading Factor controls how many chirps are sent per second, and thus controls the speed of data transmission. Lower spreading factors mean more chirps per second, and a higher data transmission rate. For every increase in spreading factor, the number of chirps per second is halved, and so the data transmission rate is halved.

Signals modulated with different spreading factors and transmitted on the same frequency channel at the same time do not interfere with each other.

To understand the behavior of the spreading factor, let’s have a look at a symbol and how the data is encoded by a symbol.

### Symbol

A symbol is a group of bits. One bit contains a single binary value — either a 0 or a 1. The Spreading Factor indicates the number of raw bits that can be encoded or transmitted by a symbol.  For example, with Spreading Factor 7, you can encode or transmit 7 bits over one symbol.

The Spreading Factor (SF) defines two fundamental values.

*   The number of raw bits that can be encoded or transmitted by a symbol.
*   The number of chirps in a symbol is 2<sup>SF</sup>.

The following figure shows 7 raw bits encoded by a symbol, thus the spreading factor is 7.


<table>
  <tr>
   <td>1
   </td>
   <td>1
   </td>
   <td>0
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>0
   </td>
  </tr>
</table>

A symbol can have one of the values ranging from 0 to 2<sup>SF  </sup>-1. For example, if the Spreading Factor is 7, a symbol can have one of the values ranging from 0 to 127.

To transmit, the symbol is encoded as a sweep signal, and is divided into 2<sup>SF</sup> steps called chirps. A higher Spreading Factor means more chirps per symbol, and more chirps per second.

For example, if the spreading factor is 7 the sweep signal is divided into 2<sup>7 </sup>= 128 chirps. The following figure shows an unmodulated sweep signal (up-chirp).

![alt_text](../unmodulated-sweep-signal.png "unmodulated sweep signal")

### Influence of Spreading Factors

LoRa modulation has a total of 6 spreading factors from SF7 to SF12. Spreading factors influence data rate, time-on-air (TOA), battery life, and receiver sensitivity, as described here.

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

A signal modulated with a larger spreading factor will be able to travel a longer distance. For example, a signal modulated with the SF12 can travel a longer distance than a signal modulated with the SF7.

#### Time-On-Air

Compared to a lower spreading factor, sending a fixed amount of data (payload) with a higher Spreading Factor and a fixed bandwidth needs longer time-on-air (TOA).

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

1. How many values can a symbol hold with SF7?

- 2<sup>6</sup>

- <span style="text-decoration:underline;">2<sup>7</sup></span>

- 2<sup>8</sup>

- 2<sup>9</sup>

_The number of values a symbol can hold can be calculated as, 2<sup>SF</sup> = 2<sup>7</sup>._



2. Which spreading factor provides the highest bit rate?

- <span style="text-decoration:underline;">SF7</span>

- SF8

- SF9

- SF10

_As the rule of thumb, lower spreading factors provide higher bit rates. By looking at the answer options spreading factor 7 is the lowest spreading factor._



3. Which spreading factor provides the longest battery life for an end device?

- <span style="text-decoration:underline;">SF7</span>

- SF8

- SF9

- SF10

_As a rule of thumb, lower spreading factors provide higher bit rates resulting in shorter time-on-air (TOA). Shorter TOA resulting in longer battery life because the radio transceiver is active for a shorter period._



4. For the same amount of data and bandwidth, which spreading factor results in the longest time-on-air?

- SF7

- SF8

- SF9

- <span style="text-decoration:underline;">SF10</span>

_The higher spreading factors resulting in a longer time-on-air._



5. Which spreading factor provides the highest receiver sensitivity?

- SF9

- SF10

- SF11

- <span style="text-decoration:underline;">SF12</span>

_A signal modulated with a larger spreading factor can be received with less errors by the RF receiver compared to a signal with a lower spreading factor. The higher the SF value is, the more chips used to represent a symbol, which means there will be more processing gain from the receiver side. Therefore, larger spreading factors provide higher receiver sensitivity._
