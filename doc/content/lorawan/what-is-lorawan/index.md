---
title: What is LoRa and LoRaWAN
section: Fundamental
---

### LoRa

LoRa is a wireless modulation technique derived from Chirp Spread Spectrum (CSS) technology. It encodes information on radio waves using chirp pulses - similar to the way dolphins and bats communicate! LoRa modulated transmission is robust against disturbances and can be received across great distances.

Don’t be alarmed about the complex terms; LoRa modulation and Chirp Spread Spectrum technology are simple to understand in practice. In case you are curious, in this video, Richard Wenner explains how CSS works: 

[https://www.youtube.com/watch?v=dxYY097QNs0](https://www.youtube.com/watch?v=dxYY097QNs0)

LoRa is ideal for applications that transmit small chunks of data with low bit rates. Data can be transmitted at a longer range compared to technologies like WiFi, Bluetooth or ZigBee. LoRa is well suited for sensors and actuators that operate in low power mode.

LoRa can be operated on the license free **sub-gigahertz** bands, for example, 915 MHz, 868 MHz, and 433 MHz. It also can be operated on **2.4 GHz** to achieve higher data rates compared to sub-gigahertz bands, at the cost of range. These frequencies fall into ISM bands that are reserved internationally for industrial, scientific, and medical purposes.


### LoRaWAN

**LoRaWAN **is a **Media Access Control (MAC)** layer protocol built on top of LoRa modulation. It is a software layer which defines how devices use the LoRa hardware, for example when they transmit, and the format of messages.

The LoRaWAN protocol is developed and maintained by the **LoRa Alliance (https://lora-alliance.org/)**. LoRaWAN defines three classes of devices, and MAC options which allow devices to communicate by standardizing messaging formats. (_see Figure 1_).



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


_Figure: LoRaWAN protocol stack._

The first LoRaWAN specification was released in January 2015. The table below shows the version history of the LoRaWAN specifications. At the time of this writing the latest specifications are 1.0.4 (in 1.0 series) and 1.1 (1.1 series).

_Table: LoRaWAN specification versions and release dates._


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



## Why is LoRaWAN so awesome?



*   **Ultra low power** - LoRaWAN end devices are optimized to operate in low power mode and the battery lifetime on coin cells can be up to 10 years.
*   **Long range** - LoRaWAN gateways can transmit and receive signals over a distance of over 10 kilometers in rural areas and up to 3 kilometers in dense urban areas depending on how deep indoors the end devices are located.
*   **Deep indoor penetration** - LoRaWAN networks can provide deep indoor coverage including multi floor buildings.
*   **License free spectrum** - you don’t need to obtain a license to deploy a LoRaWAN network.
*   **Geolocation **- A LoRaWAN network can determine the location of your end devices using triangulation without the need for GPS. A LoRa end device can be located if at least three gateways pick up its signal.
*   **High capacity** - LoRaWAN Network Servers handle millions of messages from thousands of gateways. 
*   **Public and private deployments** - It is easy to deploy public and private LoRaWAN networks using the same hardware (gateways, end devices, antennas) and software (UDP packet forwarders, Basic Station software, LoRaWAN stacks for end devices).
*   **End-to-end security **- LoRaWAN ensures secure communication between the end device and the application server using AES-128 encryption.
*   **Firmware updates over the air** - Remotely update firmware (applications and the LoRaWAN stack) for a single-end device or group of end devices.
*   **Roaming **- Seamless handovers of an end device from one network to another.
*   **Low cost** - Minimal infrastructure, low-cost end nodes and open source software.
*   **Certification program **- The LoRa Alliance certification program certifies end devices and provides end-users with confidence that the devices are reliable and compliant with the LoRaWAN specification.
*   **Ecosystem **- LoRaWAN has a very large ecosystem of device makers, gateway makers, antenna makers, network service providers, and application developers.


## LoRaWAN use cases

The following use cases will give you a better insight into how LoRaWAN can be applied (source: https://info.semtech.com/lora-everywhere):



*   **Animal conservation** - Tracking sensors manage endangered species such as Black Rhinos and Amur Leopards.
*   **Dementia patients** - Wristband sensors provide fall detection and medication tracking 
*   **Smart farms **- Real time insights into crop soil moisture, optimized irrigation schedule reduce water use up to 30%.
*   **Water conservation **- Identification and faster repair of leaks in a city's water network.
*   **Food safety **- Temperature monitoring ensures food quality
*   **Smart waste bins** - Waste bin level alerts sent to staff optimizes pickup schedule.
*   **Smart bikes **- Bike trackers track bikes in remote areas and dense buildings.
*   **Airport tracking** - GPS-free tracking monitors vehicles, personnel, and luggage.
*   **Efficient workspaces** - Monitors room occupancy, temperature, energy usage, and parking availability.
*   **Cattle health** - Sensors monitor cattle health, detect diseases and forecast delivery of calves.
*   **LoRa in space** - Satellites to provide LoRaWAN-based coverage worldwide.
*   **Covid-19 ** - Proximity detection and back-tracking helps businesses protect their workers from COVID-19 threats.


## LoRa Alliance

The LoRa Alliance is an open, non-profit association established in 2015. It supports development of the LoRaWAN protocol and ensures interoperability of all LoRaWAN products and technologies. Today, the LoRa Alliance has over 500 members around the globe ([https://lora-alliance.org/member-directory/](https://lora-alliance.org/member-directory/)).

The LoRa Alliance provides LoRaWAN certification for end devices. Certified end devices provide users with confidence that the end device is reliable and compliant with the LoRaWAN specification. You can learn more about LoRaWAN certification by visiting [https://lora-alliance.org/lorawan-certification/](https://lora-alliance.org/lorawan-certification/). Certification is only available for device manufacturers that are members of the LoRa Alliance. Once certified, the manufacturer can use the LoRaWAN<sup>®</sup> Certified<sup>CM</sup> mark with the product.


## LoRaWAN Network Architecture

LoRaWAN networks are deployed in a **star-of-stars **topology (see the figure below). 



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


End devices communicate with nearby gateways and each gateway is connected to the network server. LoRaWAN networks use an ALOHA based protocol, so end devices don’t need to peer with specific gateways. Messages sent from end devices travel through all gateways within range. Message deduplication is handled by the network server.

A LoRaWAN network consists of the following elements.



*   End devices
*   Gateways
*   Network server
*   Join server
*   Application server(s)

The following figure shows a typical LoRaWAN network implementation from end-to-end.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


_Figure: A typical LoRaWAN network architecture._

Let’s examine each element in detail.


### End devices

A LoRaWAN end device could be a sensor, an actuator, or both. They are often battery operated. These end devices are wirelessly connected to the LoRaWAN network through gateways using LoRa RF modulation. The following figure shows a LoRaWAN end device which is a water meter.



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


_Figure: A LoRaWAN water meter sensor that can be attached to an existing water meter. Source: https://www.nasys.no/product/lorawan-water-meter-sensor/_

Here are some applications for LoRaWAN based end devices.



*   Environmental sensors
*   Pet/animal tracking
*   Vehicle/people tracking
*   Smoke alarms
*   Wireless locks
*   Street lights
*   Water meters with shut-off valves
*   Trash containers


### Gateways

Each gateway is registered to a LoRaWAN network. A gateway receives LoRa modulated RF messages from end devices and simply forwards them to the LoRaWAN network server. Gateways are connected to the internet through an IP backbone. IP traffic from gateway to the network server can be **backhauled **through Cellular (3G/4G/5G), WiFi, Ethernet, Fiber-optic or 2.4 GHz radio links. 

There are two types of messages that pass through the gateway:


### Uplink messages

Uplink messages are sent by end devices to the network server and relayed by all gateways within reach. Gateways demodulate the received RF messages into IP traffic. Gateways also check the integrity of received messages and forward metadata such as the gateway location and received time to the network server. Each uplink message sent by the end device will be received by all gateways within reach, and deduplicated by the network server.


### Downlink messages

Each downlink message is sent by the network server to only one end device and is relayed by a single gateway. The gateway modulates the received IP data packets into LoRa radio messages.

When transmitting a downlink message, the network server selects the gateway that received the last uplink message, and if multiple gateways are in range of a device, the network server chooses one based on SNR (see glossary) and RSSI (see glossary).


### Types of LoRaWAN Gateways

LoRaWAN gateways can be categorized into indoor (picocell) and outdoor (macrocell) gateways. Indoor gateways provide coverage in difficult-to-reach indoor locations and are therefore suitable for use in homes, businesses and buildings. 



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


_Figure: The Things Indoor gateway_

Outdoor gateways are suitable for providing coverage in rural, urban, and dense urban areas. This type of gateway is intended for deployment places like cellular towers, the rooftops of very tall buildings, etc. The following figure shows a gateway mounted on a rooftop of a building.



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


_Figure: A Kerlink outdoor gateway is mounted on a rooftop._

Usually, the receiver sensitivity of an outdoor gateway is higher than the receiver sensitivity of an indoor gateway.



*   **Indoor (picocell) **- Receiver sensitivity up to -139dBm
*   **Outdoor (macrocell) **- Receiver sensitivity up to -142.5dBm


### Network Server

The network server manages the entire LoRaWAN network. It receives IP traffic from gateways. The Network Server is responsible for network management functions like:



*   Over-The-Air-Activation - see chapter ‘device activation’.
*   Messages/data deduplication - eliminates duplicate messages received by multiple gateways
*   Message routing - forwards uplink application payloads to the appropriate application server, forwards downlink messages coming from any application server to the end device, forwards Join-request and Join-accept messages between the devices and the join server (in v1.1 and 1.0.4).
*   Adaptive data rate control - see chapter ‘adaptive data rate’
*   Acknowledgements of messages - provides acknowledgements of received confirmed data messages and some MAC commands.


### Application Server

The application server processes application-specific data messages (application-specific payloads) received from end devices. It also generates all the application-layer downlink payloads and sends them to the connected end devices through the network server. A LoRaWAN network can have more than one application server. The collected data can be interpreted by applying techniques like machine learning and artificial intelligence to solve business problems.


### Join Server

The Join Server processes join-request messages sent by end devices. It stores root keys, generates session keys, and transfers those session keys to the network server and the application server. The Join Server is introduced in LoRaWAN 1.1 and 1.0.4. You will learn how the Join Server processes the join-request message in the chapter ‘End Device Activation’.


## Bandwidth vs Range

LoRaWAN is suitable to transmit small size payloads (Eg. sensor data) over long distances. LoRa modulation provides a significantly greater communication range with low bandwidths than other competing wireless data transmission technologies. The following figure shows some access technologies that can be used for wireless data transmission and their expected transmission ranges vs. the bandwidth .



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")


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
    21. _Data deduplication_
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
