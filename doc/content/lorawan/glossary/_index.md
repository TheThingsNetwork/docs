---
title: "Glossary"
description: ""
section: Additional Information
weight: -1
---

LoRaWAN Glossary

## LoRa

### Definition:

LoRa (**Lo**ng **Ra**nge) is a proprietary radio frequency (RF) modulation technology based on the spread spectrum modulation technique derived from chirp spread spectrum (CSS) technology.


### The Opportunity:

LoRa provides for long-range communication for example it provides the transmission range up to 5 km in urban areas and 15 km or more in rural areas with the line-of-sight. LoRa end devices consume ultra-low power and provide longer battery life.


## LoRaWAN


### Definition:

LoRaWAN is an open specification that is a low-power, wide-area networking (LPWAN) protocol based on LoRa Technology.


### The Opportunity:

LoRaWAN networks are deployed in star-of-star topology. LoRaWAN protocol is suitable for devices requiring small payloads, long-range communication, and low power requirements.


## LoRa Packet


### Definition:

A LoRa packet has 3 elements - preamble, header (optional), and payload.


### The Opportunity:

LoRa packets can be categorized into two groups:



*   Explicit header mode - the header is included with the LoRa packet. The header consists of the payload length, coding rate, and a flag indicating whether the payload Cyclic Redundancy Check (CRC) is present or not.
*   Implicit header mode - the header is removed from the LoRa packet. In this mode, the payload, coding rate, and presence of the payload CRC are fixed. 

As the header is removed from the LoRa packet the LoRa packets configured with the implicit mode take less transmission time than the packets configured with the explicit mode.


## CRC


### Definition:

Cyclic Redundancy Check is abbreviated as CRC that is an error-detecting code used in the digital transmission to detect accidental changes to raw data. It is based on binary division.


### The Opportunity:

CRC is used to detect errors in digital data.


## Spreading Factor


### Definition:

The number of raw bits encoded by a symbol is called the Spreading Factor (SF). For example, the following symbol holds 7 raw bits:

Symbol = 1011101

This corresponds to the Spreading Factor = 7.


### The Opportunity:

The Spreading Factor defines the number of chips that a symbol can hold. 

_Number of chips or values = 2<sup>SF</sup>_

For example, if the Spreading Factor is 7 the number of chips that a symbol can hold is 2<sup>7</sup> = 128.

The value a chip can have for a particular symbol ranges from 0 to 2<sup>SF</sup> -1. 

For example, consider the following symbol:

Symbol = 1011111 = 95 (decimal). 

The symbol has 2<sup>7</sup> = 128 chips (also the programmed bandwidth is divided into 128 steps) and the value of the chips is 95 (decimal). Then the decimal value 95 is encoded as a cyclic** shift** onto a sweep signal (up- chirp) as shown below.



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


The spreading factor is applied to the LoRa packet as shown in the following figure.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



## Bandwidth


### Definition:

Bandwidth is the range of frequencies occupied by the modulated radio frequency signal. The bandwidth is expressed in Hertz (Hz).



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


f<sub>l</sub> = lower limit of the frequency, f<sub>h</sub> = upper limit of the frequency, f<sub>c</sub> = center frequency.


### The Opportunity:

The bandwidth impacts the Time on Air and the receiver sensitivity. LoRa modulation sends the spread data stream at a chip rate equal to the bandwidth (see Chip Rate).

_R<sub>C</sub> = BW_

For example, the bandwidth 125 kHz corresponds to a Chip Rate of 125000 chips/sec. 

A single bit represented by many chips, for example, if 7 bits are used to encode a symbol, that symbol holds 2<sup>7</sup> = 128 chips. This indicates that the chips must be sent faster than the original bit rate (7 bits but 128 chips). For a fixed spreading factor and a fixed packet size, increasing the bandwidth will decrease the time taken to transmit the information but also reduce the receiver sensitivity. Using a narrower bandwidth will maximize the receiver sensitivity but increase the Time on Air.


## Uplink message


### Definition:

An uplink message is sent by an end device to the network server relayed by one or more gateways.


### The opportunity:

Uplink messages are always initiated by the end devices. These messages are used to send MAC commands and application-specific data. There are two types of uplink messages: confirmed uplink and unconfirmed uplink. The confirmed uplink data messages must be acknowledged by the receiver (network server or application server). The unconfirmed data message does not require an acknowledgment. The join-request and rejoin-request messages are also considered uplink messages.


## Downlink message


### Definition:

A downlink message is sent by the network server (or application server) to only one end device relayed by a single gateway.


### The opportunity:

Downlink messages are initiated by the network server or application server. These messages are used to send MAC commands and application-specific data. There are two types of downlink messages: confirmed downlink and unconfirmed downlink messages. The confirmed downlink data messages must be acknowledged by the receiver (end node). The unconfirmed data message does not require an acknowledgment. The join-accept message is also considered a downlink message.


## End Device


### Definition:

An end device is a sensor or an actuator that is wirelessly connected to the LoRaWAN network through gateways using LoRa RF modulation.


### The opportunity:

End devices can send and receive messages to and from the LoRaWAN network. Every end device consists of a microcontroller, LoRa radio transceiver, power supply, peripherals such as sensors, and an antenna. Each end device can be specialized for a specific use case such as environmental monitoring, animal tracking, shock detection, etc.


## Network Server


### Definition:

The network server ensures reliable and secure data routing all along with the LoRaWAN network.


### The opportunity:

The network server connects end devices, gateways, and applications together. The network server features device address checking, frame authentication, and counter management, acknowledge received messages, adapting data rates, responding to all MAC commands, forwarding uplink application payloads to the application server, forwarding application-layer downlink payloads from the application server to the correct end device, and forwarding Join-request and Join-accept messages between the devices and the join server.

Sometimes the network server, application server, and the join server are co-located. The network server holds the Network Session Key (NwkSKey).


## Application Server


### Definition:

The Application server is a LoRaWAN entity responsible for securely handling, managing, and interpreting application data.


### The opportunity:

The Network Server routes the packets from each device of the network to the associated Application Server. The application server generates all the application-layer downlink payloads to the connected end devices. The application server holds the Application Session Key (AppSKey).


## Join Server


### Definition:

The join server is a LoRaWAN entity that manages the over-the-air activation process for end devices to be added to the network.


### The opportunity:

The join server contains the information required to process the uplink join-request frame and generate the join-accept frame. In LoRaWAN 1.1, the root keys (AppKey & NwkKey) are provisioned onto the Join Server.


## Data Rate


### Definition:

A combination of Bandwidth, Spreading Factor, and Code Rate defines how quickly a message is transmitted and expressed in bits per second (bits/sec). The terms data rate and bit rate can be used interchangeably. 


### The opportunity:

When the bandwidth is increased, the data rate also gets increased. When the spreading factor is increased the data rate gets decreased. When the Code Rate is increased the data rate gets decreased. Using higher data rates will result in shorter transmission ranges while saving battery life.


## Adaptive Data Rate


### Definition:

The Adaptive Data Rate (ADT) is a mechanism that allows to easily scale the network simply by adding gateways. maximize the capacity of a LoRaWAN network. 


### The Opportunity:

The ADR drastically increases the capacity of the LoRaWAN network. The main goal of the ADR is to save the battery power of the end devices. If the ADR is enabled, the end devices closest to the gateways transmit data using the lowest spreading factor resulting in minimum Time on Air and longer battery life. Also, the end devices far away from the gateways transmit data using the highest spreading factor resulting in maximum Time on Air and shorter battery life.


## Chip Duration


### Definition:

The bandwidth is divided into 2<sup>SF</sup> chips or steps. In other words, a chip is a subset of the bandwidth.

The Chip duration is calculated using the following equation.

_T<sub>C</sub> = 1 / BW_

Where Bandwidth (BW) in Hertz.



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


The frequency of each step can be expressed as,

_BW / 2<sup>SF</sup>_


### The opportunity:

Calculate the chip duration for the bandwidth = 125 kHz.

TC = 1/ 125000 = 0.000008 seconds = 8 μs

Calculate the frequency of each chip for Center frequency = 868 MHz, bandwidth = 125 kHz, and Spreading Factor = 7.

First, calculate the bandwidth of each chip:

125000 / 128 = 976.5625 Hz. 

Then find the lower frequency limit of the bandwidth:

f<sub>0 </sub>= 868000 - 125/2 = 867,937.5 KHz = 867937500 Hz.

Now calculate the frequency of each chip:

f<sub>0</sub> = 867937500 + 976.5625 Hz = 867,938,476.5625 Hz

f<sub>1</sub> = 867937500 + 976.5625 Hz = 867,938,476.5625 Hz

f<sub>2</sub> = 867937500 + 976.5625 * 2 Hz = 867,939,453.125 Hz

….

f<sub>127</sub> = 867937500 + 976.5625 * 128 Hz = 868,062,500 Hz

Where f<sub>127</sub> is the upper-frequency limit of the bandwidth.


## Symbol Rate


### Definition:

The Symbol rate defines the number of symbols transmitted per second. A combination of bandwidth and spreading factor defines the symbol rate. The Symbol rate (R<sub>S</sub>) is calculated using the following equation.

_R<sub>S </sub>= BW / 2<sup>SF</sup>_

Where bandwidth (BW) in Hertz and Spreading Factor (SF) = 7-12.

The Symbol rate is expressed in symbols per second (symbols/s).


### The Opportunity:

Calculate the Symbol rate for the factors, bandwidth = 125 kHz and Spreading Factor = 7.

R<sub>S </sub>= 125000 / 2<sup>7 </sup>= 977 symbols/s


## Chip Rate


### Definition:

The bandwidth expressed in Hertz interchangeably with the Chip Rate. The Chip Rate is calculated using the following simple equation. 

_R<sub>C</sub> = BW_

Where bandwidth (BW) in hertz.

The Chip Rate (R<sub>C</sub>) is expressed in chips per second (chips/s).


### The opportunity:

LoRa modulation sends the spread data stream at a chip rate equal to the bandwidth (see Chip Rate).

_R<sub>C</sub> = BW_

For example, the bandwidth 125 kHz corresponds to a Chip Rate of 125000 chips/sec. 

A single bit represented by many chips, for example, if 7 bits are used to encode a symbol, that symbol holds 2<sup>7</sup> = 128 chips. This indicates that the chips must be sent faster than the original bit rate (7 bits but 128 chips). For a fixed spreading factor and a fixed packet size, increasing the bandwidth will decrease the time taken to transmit the information but also reduce the receiver sensitivity. Using a narrower bandwidth will maximize the receiver sensitivity but increase the Time on Air.


## Symbol Duration


### Definition:

The sweep time of a chirp (up/down chirp or up/down sweep signal) is known as the symbol duration. The sweep signal is divided into 2<sup>SF</sup> steps or chips. The Symbol duration (T<sub>S</sub>) is calculated using the following equation.

_T<sub>S</sub> = 2<sup>SF</sup> / BW_

where Bandwidth (BW) in Hertz and Spreading Factor (SF) from 7-12.

The Symbol duration (T<sub>S</sub>) is expressed in microseconds (μs) or milliseconds (ms).



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


T<sub>S</sub> = Symbol duration, f<sub>C</sub> = center frequency, f<sub>h</sub> = upper frequency limit of the bandwidth, f<sub>l</sub> = lower frequency limit of the bandwidth.


### The opportunity:

A combination of bandwidth and spreading factor defines the symbol duration. If the bandwidth increases the symbol duration decreases. If the spreading factor increases the symbol duration increases.

Calculate the Symbol duration (T<sub>S</sub>) for the factors, bandwidth = 125 kHz and Spreading Factor = 7.

T<sub>S</sub> = 2<sup>7</sup> / 125000 = 1.024 ms


## EIRP


### Definition:

Certain regulatory bodies such as European Telecommunications Standards Institute (ETSI) and Federal Communications Commission (FCC) define the maximum allowed EIRP value for end devices and gateways. The Effective Isotropic Radiated Power (EIRP) is the total power radiated by a hypothetical isotropic antenna in a single direction. EIRP is expressed in **dBm **or **Watts**.


### The Opportunity:

When calculating EIRP, the antenna gain is expressed in dBi.

Calculate the EIRP for the following parameters:



*   Transmitter power = 15 dBm
*   Antenna gain = 10 dBi
*   Cable loss = 5 dBm

EIRP  = Transmitter power + Antenna gain - Cable loss

  = 15 + 10 - 5

  = 20 dBm

The EIRP can be converted to the corresponding ERP value (see ERP) using the following equation.

_ERP = EIRP - 2.15_


## ERP


### Definition:

The Effective Radiated Power (ERP) is the total power radiated by a half-wave dipole antenna. ERP is expressed in **dBm **or **Watts**.


### The Opportunity:

Certain regulatory bodies such as European Telecommunications Standards Institute (ETSI) and Federal Communications Commission (FCC) define the maximum allowed ERP value for end devices and gateways. When calculating ERP, the antenna gain is expressed in dBd.

Calculate the ERP for the following parameters:



*   Transmitter power = 15 dBm
*   Antenna gain = 7.85 dBi
*   Cable loss = 5 dBm

ERP   = Transmitter power + Antenna gain - Cable loss

  = 15 + 7.85 - 5

  = 17.85 dBm

The ERP can be converted to the corresponding EIRP value (see EIRP) using the following equation.

_EIRP = ERP + 2.15_


## RSSI


### Definition:

The Received Signal Strength Indicator is abbreviated as RSSI. The RSSI is measured in dBm and it is a negative value.


### The Opportunity:

The RSSI value indicates how well the receiver can receive a signal from the sender. For example, an RSSI value closer to 0 means better reception of the signal. 


## SNR


### Definition:

Signal-to-Noise-Ratio is abbreviated as SNR. The SNR indicates the ratio between the received power signal and the noise floor power level. The SNR is expressed in dB.


### The Opportunity:

LoRa SNR values can range from -20 dB to +10 dB.  A value closer to +10 dB means that the received signal is less corrupted. A value closer to -20 dB means that the received signal is more corrupted. However, LoRa can demodulate signals that are -7.5 dB to -20 dB below the **noise floor**.


## Noise Floor


### Definition:

The noise floor is the physical limit of the receiver sensitivity.


### The Opportunity:

LoRa works below the noise floor level means it can demodulate signals that are -7.5 dB to -20 dB below the **noise floor**.


## Frequency


### Definition:

Frequency means oscillations (cycles) per second in hertz (Hz). For higher frequencies, the wavelength is shorter than the lower frequencies.


### The Opportunity:

The following equation is used to calculate the frequency (f).

_f = c / λ_

Where c is the speed of light in a vacuum (c = 299,792,458 m/s) and λ is the wavelength in meters.

LoRaWAN uses different frequencies (license free ISM bands) to modulate the signals (Eg. 868 MHz, 915 MHz, 433 MHz etc).


## Forward Error Correction


### Definition:

Adding error correction bits to the transmitted data is known as forward error correction. Error correction bits are redundant bits.

Eg:

Data: 01010101

Date with error correction bits added: 0101001011


### The Opportunity:

Error correction bits help to restore the data corrupted by if any interference. Adding more error correction bits allows easy recovery of the corrupted data. However, this will require more data to transmit resulting in the shorter battery life of an end device.

See **Coding Rate** for more information.


## Coding Rate


### Definition:

The coding rate defines the proportion of bits that actually carries the information. For example, the coding rate 4/5 means 4 bits carry actual information and one bit is used for the error correction - a total of 5 bits.


### The Opportunity:

LoRa uses the following Coding Rates for the communication.


<table>
  <tr>
   <td>Coding Rate
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>4/5 (1 error correction bit for 4 information bits)
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>4/6 (2 error correction bits for 4 information bits)
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>4/7 (3 error correction bits for 4 information bits)
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>4/8 (4 error correction bits for 4 information bits)
   </td>
  </tr>
</table>


See **Forward Error Correction** for more information.


## Time on Air


### Definition:

The time is taken to arrive at a signal from the sender to receiver. The Time on Air is abbreviated as ToA.


### The Opportunity:

The Time on Air (ToA) is calculated using the following equation:

ToA =  Preamble duration in seconds + Payload duration in seconds

A higher spreading factor results in a longer Time on Air, a lower data rate, and shorter battery life. Also, a longer ToA means the distance between the sender and receiver is long.


## Preamble


### Definition:

The preamble is a set of symbols (or chirps) that is used by the receiver to detect a LoRa packet.



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")



### The Opportunity:

The number of symbols that the preamble contains is region-specific, for example, for EU868 it is 8. If the LoRa modem has locked on to the preamble signal, the end of the preamble is signaled by reverse chirps (for example, 2 down chirps) called sync symbols.


## Decibel (dB)


### Definition:

Decibel (dB) is a unit of measurement used to express the ratio between input power and output power. It could be a gain or loss. The following equation is used to calculate the gain or loss in dB.

_X = 10 x log<sub>10</sub>(P<sub>o</sub> / P<sub>i</sub>) dB_

Where _P<sub>i</sub>_ is the input power and _P<sub>o</sub>_ is the output power.


### The Opportunity:

Decibel is useful to express the gain or loss of a communication system. If the calculated answer is a positive value it indicates the system has a ‘gain’ and a negative value indicate the system has a ‘loss’.

If a communication system has an input power of 3W and an output power of 9W calculate the ratio of electrical powers.

= 10 x log<sub>10</sub>(9 / 3) dB

= 4.7 dB (gain)

If a communication system has an input power of 6W and an output power of 4W calculate the ratio of electrical powers.

= 10 x log<sub>10</sub>(4 / 6) dB

= - 1.7 dB (loss)

The above two results represent ratios, not absolute values.


## Decibel-milliwatts (dBm)


### Definition:

dBm (decibel-milliwatts) is a unit of level used to indicate that a power level is expressed in decibels (dB) with reference to input power of 1 mW.

_X = 10 *  log<sub>10</sub>(P<sub>o</sub> / P<sub>i</sub>) dB_

_X = 10 *  log<sub>10</sub>(P<sub>o</sub> / 1) dBm_


### The Opportunity:

This represents an absolute value because the input power uses a reference input power of 1 mW. So the above equation can be written to calculate the output power of a system in milli-watts (mW) or watts (W).

_(P<sub>o</sub> / 1) = 10 * log<sub>10</sub>_

_P<sub>o</sub>  = 10<sup>(X/10) </sup>mW_

Calculate the output power if the gain of a system is 27 dBm.

_P<sub>o</sub>    = 10<sup>(27/10) </sup>mW_

_= 500 mW (approximately)_
