---
title: What is LoRa and LoRaWAN
section: Fundamental
---

## What is LoRa and LoRaWAN?

**LoRa **(**Lo**ng **Ra**nge) is a **proprietary **spread spectrum modulation technique derived from **Chirp Spread Spectrum** (**CSS**) technology. It manipulates the radio waves to the encoded information using a chirped, multi-symbol format. LoRa modulation provides transmission of data in low bit rates and very good receiver sensitivity within a fixed channel bandwidth - because of the use of chips to encode data. LoRa is essential for the applications that require to transmit small chunks of data with low bit rates therefore the data can be transmitted at a much longer range rather than using other comparably expensive radio technologies. On the other hand LoRa is perfectly suited with sensors and actuators that operate in low power mode. The technology can be utilized by public, private, or hybrid networks and provides a greater range than Cellular networks. LoRa is a Physical layer implementation consisting of regional ISM bands and the LoRa modulation (_see Figure 1_).

LoRa can be operated on the license free **sub-gigahertz** bands, for example, 915 MHz, 868 MHz, and 433 MHz. It also can be operated on **2.4 GHz** (2.4 GHz is an ISM band) and can achieve higher data rates than when operated on the sub-gigahertz bands.

**_NOTE: LoRa 2.4 GHz is not covered in The Things Fundamentals certification._**

**LoRaWAN **is a **Media Access Control (MAC)** layer protocol built on top of LoRa modulation. The LoRaWAN protocol is developed and maintained by the **LoRa Alliance (https://lora-alliance.org/)**. LoRaWAN is a MAC layer implementation consisting of device classes, MAC options, and LoRaWAN MAC (_see Figure 1_).



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


_Figure: LoRaWAN protocol stack_

The first LoRaWAN specification was released in January 2015 which is version 1.0. The table below shows the version history of the LoRaWAN specifications. There are two latest versions: version 1.1 and 1.0.4.

_Table: LoRaWAN specification versions and release dates._


<table>
  <tr>
   <td><strong>Version</strong>
   </td>
   <td><strong>Release date</strong>
   </td>
   <td><strong>Is latest?</strong>
   </td>
  </tr>
  <tr>
   <td>1.0
   </td>
   <td>January 2015
   </td>
   <td>no
   </td>
  </tr>
  <tr>
   <td>1.0.1
   </td>
   <td>February 2016
   </td>
   <td>no
   </td>
  </tr>
  <tr>
   <td>1.0.2
   </td>
   <td>July 2016
   </td>
   <td>no
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>October 2017
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>1.0.3
   </td>
   <td>July 2018
   </td>
   <td>no
   </td>
  </tr>
  <tr>
   <td>1.0.4
   </td>
   <td>October 2020
   </td>
   <td>yes
   </td>
  </tr>
</table>



## Why is LoRaWAN so awesome?



*   **Ultra low power** - LoRaWAN end devices are optimized to operate in low power mode and the battery lifetime on tiny coin cells is up to 10 years.
*   **Long range** - LoRaWAN gateways can transmit and receive signals over a distance of over 15 kilometers in rural areas, up to 5 kilometers in dense urban areas depending on how deep indoors the end devices are located.
*   **Deep indoor penetration** - LoRaWAN networks can provide deep indoor coverage including multi floor buildings.
*   **License free spectrum** - you don’t need to obtain a license to deploy a LoRaWAN network.
*   **Geolocation **- A LoRaWAN network can determine the location of your end devices using triangulation without the need for GPS. A LoRa end device can be located if at least three gateways pick up its signal.
*   **High capacity** - forwards millions of messages per gateway, multi-tenant interoperability. 
*   **Public and private deployments** - It is easy to deploy public and private LoRaWAN networks using the same hardware (gateways, end-devices, antennas) and software (UDP packet forwarders, Basic Station software, LoRaWAN stacks for end devices).
*   **End-to-end security **- ensures secure communication between the end device and the application server using AES-128 encryption.
*   **Firmware updates over the air** - allows to remotely update firmware (applications and the LoRaWAN stack) for a single-end device or group of end devices.
*   **Roaming **- seamless handovers of an end-device from one network to another.
*   **Low cost** - minimal infrastructure, low-cost end nodes and open source software.
*   **Certification program **- The LoRa Alliance  LoRaWAN end device certification program certifies end devices provide end-users with confidence that the device is reliable and compliant with the LoRaWAN specification.
*   **Ecosystem **- LoRaWAN has a very large ecosystem of device makers, gateway makers, antenna makers, network service providers, and application developers.


## LoRaWAN use cases

The following use cases will give you a better insight into how LoRaWAN can be applied (source: https://info.semtech.com/lora-everywhere):



*   **Animal conservation** - tracking sensors manage endangered species such as Black Rhinos and Amur Leopards.
*   **Dementia patients** - wristband sensors provide fall detection and medication tracking 
*   **Smart farms **- real time insights into crop soil moisture, optimized irrigation schedule reduce water use up to 30%.
*   **Water conservation **- identification and faster repair of leaks in a city's water network.
*   **Food safety **- temperature monitoring ensures food quality
*   **Smart waste bins** - waste bin level alerts sent to staff optimizes pickup schedule.
*   **Smart bikes **- bike trackers track bikes in remote areas and dense buildings.
*   **Airport tracking** - GPS-free tracking monitors vehicles, personnel, and luggage.
*   **Efficient workspaces** - monitors room occupancy, temperature, energy usage, and parking availability.
*   **Cattle health** - sensors monitor cattle health, detect diseases and forecast delivery of calves.
*   **LoRa in space** - satellites to provide LoRaWAN-based coverage worldwide.
*   **Covid-19 ** - proximity detection and back-tracking helps businesses protect their workers from COVID-19 threats.


## LoRa Alliance

The LoRa Alliance is an open, non-profit association established in 2015 to support LoRaWAN (long range wide-area network) protocol as well as ensure interoperability of all LoRaWAN products and technologies. Today LoRa Alliance has over 500 members around the globe (https://lora-alliance.org/member-directory/).

The LoRa Alliance provides the LoRaWAN certification for end devices. The certified end devices provide end users with confidence that the end device is reliable and compliant with the LoRaWAN specification. You can learn more about the LoRaWAN certification by visiting [https://lora-alliance.org/lorawan-certification/](https://lora-alliance.org/lorawan-certification/). The certification is only available for device manufacturers that are members of the LoRa Alliance. Once certified, the manufacturer can use the LoRaWAN<sup>®</sup> Certified<sup>CM</sup> mark with the product.


## LoRaWAN Network Architecture

LoRaWAN networks are deployed in a **star-of-stars **topology. A LoRaWAN network consists of the following elements.



*   End-devices
*   Gateways
*   Network server
*   Join server
*   Application server(s)

The following figure shows a typical LoRaWAN network implementation from end-to-end.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


_Figure: A typical LoRaWAN network architecture._

Let’s examine each element in detail.


### End devices

A LoRaWAN end device could be a sensor, or an actuator, or both. They are often battery operated. These end devices are wirelessly connected to the LoRaWAN network through gateways using LoRa RF modulation. The following figure shows a LoRaWAN end device which is a water meter.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


_Figure: A LoRaWAN water meter sensor that can be attached to an existing water meter. Source: https://www.nasys.no/product/lorawan-water-meter-sensor/_

Here are some applications for LoRaWAN based end-devices.



*   Environmental sensors
*   Pet/animal tracking
*   Vehicle/people tracking
*   Smoke alarms
*   Wireless locks
*   Street lights
*   Water meters with shut-off valves
*   Trash containers


### Gateways

Each gateway is registered to a LoRaWAN network (this can be done by the gateway’s configuration settings). A gateway receives LoRa modulated RF messages from end devices and simply forwards them to the LoRaWAN network server. Gateways are connected to the internet through an IP backbone. IP traffic from gateway to the network server can be **backhauled **through Cellular (3G/4G/5G), WiFi, Ethernet, Fiber-optic or 2.4 GHz radio links. 

There are two types of messages that pass through the gateway.



*   **Uplink messages** - these messages are sent by end devices to the network server and relayed by all gateways within reach. Gateways demodulates the received RF messages into IP traffic.
*   **Downlink messages** - Each downlink message is sent by the network server to only one end device and is relayed by a single gateway. The gateway modulates the received IP data packets into LoRa radio messages.

Each uplink message sent by the end-device will be received by all gateways within reach. A gateway can also receive data from the network server and forward data to the correct end device.

The gateway checks the data integrity of the received LoRa radio messages by checking the CRC. If the CRC of the message is incorrect the message will be dropped by the gateway. If the CRC is correct, the gateway forwards the message to the network server by adding some metadata to the message such as the RSSI level of the message and the timestamp.

The network server selects the gateway that received the last uplink message with the best RSSI when transmitting a downlink message.

The LoRaWAN gateways can be categorized into indoor (picocell) and outdoor (macrocell) gateways. Indoor gateways provide coverage in difficult-to-reach indoor locations and are therefore suitable for use in homes, businesses and buildings. The following figure shows an indoor gateway mounted onto the wall.



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


_Figure: The Things Indoor gateway_

Outdoor gateways suitable for providing coverage in rural, urban, and dense urban areas. This type of gateways are intended for deployment in such places as cellular towers, the rooftops of very tall buildings, etc. The following figure shows a gateway mounted on a rooftop of a building.



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


_Figure: A Kerlink outdoor gateway is mounted on a rooftop._

Usually the receiver sensitivity of an outdoor gateway is higher than the receiver sensitivity of an indoor gateway.



*   **Indoor (picocell) **- Receiver sensitivity up to -139dBm
*   **Outdoor (macrocell) **- Receiver sensitivity up to -142.5dBm


### Network Server

The network server manages the entire LoRaWAN network. It receives IP traffic from gateways. The Network Server is responsible for network management functions like:



*   Over-The-Air-Activation - see chapter ‘device activation’.
*   Messages/data de-duplication - eliminates duplicate messages received by multiple gateways
*   Message routing - forwards uplink application payloads to the appropriate application server, forwards downlink messages coming from any application server to the end device, forwards Join-request and Join-accept messages between the devices and the join server (in v1.1 and 1.0.4).
*   Adaptive data rate control - see chapter ‘adaptive data rate’
*   Acknowledgements of messages - provides acknowledgements of received confirmed data messages and some MAC commands.


### Application Server

The application server processes application-specific data messages (application-specific payloads) received from end-devices. It also generates all the application-layer downlink payloads and sends them to the connected end devices through the network server. A LoRaWAN network can have more than one application server. The collected data can be interpreted by applying techniques like machine learning and artificial intelligence to solve business problems.


### Join Server

The Join Server processes join-request message sent by end devices. It stores root keys, generates session keys, and transfers those session keys to the network server and the application server. The Join Server is introduced in LoRaWAN 1.1 and 1.0.4. You will learn how the Join Server processes the join-request message in the chapter ‘End Device Activation’.


## Bandwidth vs Range

LoRaWAN is suitable to transmit small size payloads (Eg. sensor data) for long distances. LoRa modulation provides a significantly greater communication range with low bandwidths than other competing wireless data transmission technologies. The following figure shows some access technologies that can be used for wireless data transmission and their expected transmission ranges vs the bandwidth .



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


Figure: Bandwidth Vs Range


## Questions



1. _Who provides the LoRaWAN certification?_
    1. _<span style="text-decoration:underline;">LoRa Alliance</span>_
    2. _The Things Network_
    3. _IEEE_
    4. _Semtech_
2. _LoRa is a_
    5. _MAC layer protocol_
    6. _<span style="text-decoration:underline;">Physical layer implementation</span>_
3. _LoRaWAN is a_
    7. _<span style="text-decoration:underline;">MAC layer protocol</span>_
    8. _Physical layer implementation_
4. _LoRaWAN can be operated on._
    9. _License free spectrum_
    10. _ISM bands_
    11. _2.4 GHz_
    12. _<span style="text-decoration:underline;">All of the above</span>_
5. _Which is not a use case of LoRaWAN?_
    13. _Animal conservation_
    14. _<span style="text-decoration:underline;">Credit card payments</span>_
    15. _Smart waste bins_
    16. _Cattle health_
6. _Who initiates the uplink messages?_
    17. _Network server_
    18. _<span style="text-decoration:underline;">End devices</span>_
    19. _Application server_
    20. _Join server_
7. _What is not a role of the Network Server?_
    21. _Data de-duplication_
    22. _<span style="text-decoration:underline;">Initiate uplink messages</span>_
    23. _Adaptive data rate control_
    24. _Message routing_
8. _Which is not a backhaul for the gateways?_
    25. _Cellular_
    26. _WiFi_
    27. _Ethernet_
    28. _<span style="text-decoration:underline;">Satellite Ku-band link</span>_
9. _The Application server can process_
    29. _MAC commands_
    30. _<span style="text-decoration:underline;">Application-specific data messages</span>_
    31. _Join-request messages_
10. _ The Join Server can process,_
    32. _<span style="text-decoration:underline;">Join-request messages</span>_
    33. _MAC commands_
    34. _Application-specific data messages_