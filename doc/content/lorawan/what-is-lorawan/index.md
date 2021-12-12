---
title: What are LoRa and LoRaWAN?
section: The Things Fundamentals
weight: 20
---

Welcome to the first chapter of The Things Fundamentals on LoRaWAN. In this section, you'll learn why LoRaWAN is so awesome, hear about some great LoRaWAN use cases, and learn the difference between LoRa and LoRaWAN.

### LoRa

LoRa is a wireless modulation technique derived from **Chirp Spread Spectrum (CSS)** technology. It encodes information on radio waves using chirp pulses - similar to the way dolphins and bats communicate! LoRa modulated transmission is robust against disturbances and can be received across great distances.

Don’t be alarmed about the complex terms; **LoRa modulation** and **Chirp Spread Spectrum technology** are simple to understand in practice. In case you are curious, in this video, **Richard Wenner** explains how **Chirp Spread Spectrum technology** works: 

{{< youtube "dxYY097QNs0" >}}

LoRa is ideal for applications that transmit small chunks of data with low bit rates. Data can be transmitted at a longer range compared to technologies like WiFi, Bluetooth or ZigBee. These features make LoRa well suited for sensors and actuators that operate in low power mode.

LoRa can be operated on the license free **sub-gigahertz** bands, for example, 915 MHz, 868 MHz, and 433 MHz. It also can be operated on **2.4 GHz** to achieve higher data rates compared to sub-gigahertz bands, at the cost of range. These frequencies fall into ISM bands that are reserved internationally for industrial, scientific, and medical purposes.

### LoRaWAN

LoRaWAN is a Media Access Control (MAC) layer protocol built on top of LoRa modulation. It is a software layer which defines how devices use the LoRa hardware, for example when they transmit, and the format of messages.

The LoRaWAN protocol is developed and maintained by the [LoRa Alliance](https://lora-alliance.org/). The first LoRaWAN specification was released in January 2015. The table below shows the version history of the LoRaWAN specifications. At the time of this writing the latest specifications are 1.0.4 (in 1.0 series) and 1.1 (1.1 series).

<table>
  <tr>
   <td><strong>Version</strong>
   </td>
   <td><strong>Release date</strong>
   </td>
  </tr>
  <tr>
   <td>1.0
   </td>
   <td>January 2015
   </td>
  </tr>
  <tr>
   <td>1.0.1
   </td>
   <td>February 2016
   </td>
  </tr>
  <tr>
   <td>1.0.2
   </td>
   <td>July 2016
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>October 2017
   </td>
  </tr>
  <tr>
   <td>1.0.3
   </td>
   <td>July 2018
   </td>
  </tr>
  <tr>
   <td>1.0.4
   </td>
   <td>October 2020
   </td>
  </tr>
</table>

## Bandwidth vs. Range

LoRaWAN is suitable for transmitting small size payloads (like sensor data) over long distances. LoRa modulation provides a significantly greater communication range with low bandwidths than other competing wireless data transmission technologies. The following figure shows some access technologies that can be used for wireless data transmission and their expected transmission ranges vs. bandwidth.

![alt_text](bandwidth-vs-range.png "Bandwidth Vs Range")

## Why is LoRaWAN so awesome?

*   **Ultra low power** - LoRaWAN end devices are optimized to operate in low power mode and can last up to 10 years on a single coin cell battery.
*   **Long range** - LoRaWAN gateways can transmit and receive signals over a distance of over 10 kilometers in rural areas and up to 3 kilometers in dense urban areas.
*   **Deep indoor penetration** - LoRaWAN networks can provide deep indoor coverage, and easily cover multi floor buildings.
*   **License free spectrum** - You don't have to pay expensive frequency spectrum license fees to deploy a LoRaWAN network.
*   **Geolocation**- A LoRaWAN network can determine the location of end devices using triangulation without the need for GPS. A LoRa end device can be located if at least three gateways pick up its signal.
*   **High capacity** - LoRaWAN Network Servers handle millions of messages from thousands of gateways. 
*   **Public and private deployments** - It is easy to deploy public and private LoRaWAN networks using the same hardware (gateways, end devices, antennas) and software (UDP packet forwarders, Basic Station software, LoRaWAN stacks for end devices).
*   **End-to-end security**- LoRaWAN ensures secure communication between the end device and the application server using AES-128 encryption.
*   **Firmware updates over the air** - You can remotely update firmware (applications and the LoRaWAN stack) for a single end device or group of end devices.
*   **Roaming**- LoRaWAN end devices can perform seamless handovers from one network to another.
*   **Low cost** - Minimal infrastructure, low-cost end nodes and open source software.
*   **Certification program**- The LoRa Alliance certification program certifies end devices and provides end-users with confidence that the devices are reliable and compliant with the LoRaWAN specification.
*   **Ecosystem**- LoRaWAN has a very large ecosystem of device makers, gateway makers, antenna makers, network service providers, and application developers.

## LoRaWAN use cases

Here are a few great LoRaWAN use cases provided by [Semtech](https://info.semtech.com/lora-everywhere), to give you some insight into how LoRaWAN can be applied:

*   **Vaccine cold chain monitoring** - LoRaWAN sensors are used to ensure vaccines are kept at appropriate temperatures in transit.
*   **Animal conservation** - Tracking sensors manage endangered species such as Black Rhinos and Amur Leopards.
*   **Dementia patients** - Wristband sensors provide fall detection and medication tracking.
*   **Smart farms**- Real time insights into crop soil moisture and optimized irrigation schedule reduce water use up to 30%.
*   **Water conservation**- Identification and faster repair of leaks in a city's water network.
*   **Food safety**- Temperature monitoring ensures food quality maintenance.
*   **Smart waste bins** - Waste bin level alerts sent to staff optimize the pickup schedule.
*   **Smart bikes**- Bike trackers track bikes in remote areas and dense buildings.
*   **Airport tracking** - GPS-free tracking monitors vehicles, personnel, and luggage.
*   **Efficient workspaces** - Room occupancy, temperature, energy usage and parking availability monitoring.
*   **Cattle health** - Sensors monitor cattle health, detect diseases and forecast calves delivery time.
*   **LoRa in space** - Satellites to provide LoRaWAN-based coverage worldwide.

## LoRa Alliance

The LoRa Alliance® is an open, non-profit association established in 2015. It supports development of the LoRaWAN protocol and ensures interoperability of all LoRaWAN products and technologies. Today, the LoRa Alliance has over [500 members around the globe](https://lora-alliance.org/member-directory/).

The LoRa Alliance provides LoRaWAN certification for end devices. Certified end devices provide users with confidence that the end device is reliable and compliant with the LoRaWAN specification. You can learn more about LoRaWAN certification by visiting the [LoRa Alliance website](https://lora-alliance.org/lorawan-certification/). Certification is only available for device manufacturers that are members of the LoRa Alliance. Once certified, the manufacturer can use the LoRaWAN Certified mark with the product.

## LoRaWAN is now an ITU standard.

As announced by the LoRa Alliance® on December 7, 2021, LoRaWAN® is officially approved as a standard for Low Power Wide Area Networking (LPWAN) by the [International Telecommunication Union](https://www.itu.int/en/Pages/default.aspx) (ITU).

Read the Lora Alliance® Press Release, [LoRaWAN® Formally Recognized as ITU International Standard for Low Power Wide Area Networking](https://lora-alliance.org/lora-alliance-press-release/lorawan-formally-recognized-as-itu-international-standard-for-low-power-wide-area-networking/) for more information. 

## Questions

1. Who provides the LoRaWAN certification?
   - <span style="text-decoration:underline;">LoRa Alliance</span>
   - The Things Network
   - IEEE
   - Semtech
   

2. LoRa is a:
   - MAC layer protocol
   - <span style="text-decoration:underline;">Physical layer implementation</span>
   
   
3. LoRaWAN is a:
   - <span style="text-decoration:underline;">MAC layer protocol</span>
   - Physical layer implementation
   
   
4. LoRaWAN can be operated on:
   - License free spectrum
   - ISM bands
   - 2.4 GHz
   - <span style="text-decoration:underline;">All of the above</span>
   
   
5. Which is not a suitable use case of LoRaWAN?
   - Animal conservation
   - <span style="text-decoration:underline;">Credit card payments</span>
   - Smart waste bins
   - Cattle health
   
