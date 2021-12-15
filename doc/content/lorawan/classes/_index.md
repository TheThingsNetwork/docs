---
title: Device Classes
section: The Things Fundamentals
weight: 55
images:
- class-a.png
---

The LoRaWAN specification defines three device types: **Class A**, **Class B**, and **Class C**. All LoRaWAN devices must implement Class A, whereas Class B and Class C are extensions to the specification of Class A devices. All device classes support bi-directional communication (uplink and downlink)

{{< note "End devices can’t send uplink messages while they receive downlink messages." />}}

## Class A

All LoRaWAN end-devices must support **Class A** implementation. Class A communication is always initiated by the end-device. A device can send an uplink message at any time. Once the uplink transmission is completed the device opens two short receive (downlink) windows. There is a delay between the end of the uplink transmission and the start of the receive windows (RX1 and RX2 respectively. If the network server does not respond during these two receive windows, the next downlink will be after the next uplink transmission.

![Class A Receive Windows](class-a.png)

_Figure: Class A receive windows_

The server can respond during the first receive window (RX1), or during  the second receive window (RX2), but does not use both windows.  Let’s consider three situations for downlink messages as illustrated below.

![Class A Receive Windows](class-a-alt.png)

_Figure: Behaviour of Class A receive windows_

* **Case 1:** The end device opens both receive windows but it doesn’t receive an downlink message during either receive window.
* **Case 2:**  The end device receives a downlink during the first receive window and therefore it does not open the second receive window.
* **Case 3:** The end device opens the first receive window but it does not receive a downlink. Therefore it opens the second receive window and it receives a downlink during  the second receive window.

Class A end devices:

*   are often battery-powered
*   have the lowest energy consumption
*   spend most of the time in sleep mode
*   usually keep long intervals between uplinks
*   have high downlink latency (to receive a downlink, the end device must send an uplink)

Some common use cases for Class A end-devices:

*   Environmental monitoring
*   Animal tracking
*   Fire detection
*   Water leakage detection
*   Earthquake early detection
*   Location tracking

## Class B

In addition to the class A initiated receive windows, **Class B** devices open  scheduled receive windows for receiving downlink messages from the network server. Using time-synchronized beacons transmitted by the gateway, the devices periodically open receive windows. The time between two beacons is known as the beacon period. 
The device opens downlink ‘ping slots’ at scheduled times for receiving downlink messages from the network server.
Class B devices also open receive windows after sending an uplink, as you can see below:

![Class B Receive Windows](class-b.png)

_Figure: Class B receive windows_

Class B end devices have lower latency than the Class A end devices, because they are reachable at preconfigured times and do not need to send an uplink to receive a downlink. The battery life is shorter in Class B than Class A, because the device spends more time in active mode, during beacons and ping slots. 

Some common use cases for Class B end-devices:

*   Utility meters
*   Temperature reporting

## Class C

**Class C** devices extend Class A by keeping the receive windows open unless they are transmitting, as shown in the figure below. This allows for low-latency communication but is many times more energy consuming than Class A devices.

![Class C Receive Windows](class-c.png)

Class C end devices:

*   are often mains powered
*   have no downlink latency - continuous receive window

The following are some common **Class C** end device **applications**, but there are more:

*   Utility meters with cut-off valves/switches
*   Streetlights

##  Questions

1. Which end device class consumes the lowest power?
   - <span style="text-decoration:underline;">Class A</span>
   - Class B
   - Class C
   
   
2. Which end device class consumes the highest power?
   - Class A
   - Class B
   - <span style="text-decoration:underline;">Class C</span>
   
   
3. Which end device class usually runs on mains power?
   - Class A
   - Class B
   - <span style="text-decoration:underline;">Class C</span>
   
   
4. What does RX1 Delay mean?
   - <span style="text-decoration:underline;">The delay between the end of the uplink transmission and the start of the RX1 receive window</span>.
   - The delay between the end of the uplink transmission and the start of the RX2 receive window.
   - The delay between the end of the RX1 and the end of the RX2 receive windows.
   - The delay between the start of the RX1 and the start of the RX2 receive windows.
   
   
5. Which device class has the lowest downlink latency?
   - Class A
   - Class B
   - <span style="text-decoration:underline;">Class C</span>
   
   
6. Which device class has the highest downlink latency?
   - <span style="text-decoration:underline;">Class A</span>
   - Class B
   - Class C
   
   
7. Which device class is synchronized to the network using periodic beacons?
   - Class A
   - <span style="text-decoration:underline;">Class B</span>
   - Class C
   
   
8. Which device class only can receive a downlink message after sending an uplink message?
   - <span style="text-decoration:underline;">Class A</span>
   - Class B
   - Class C
