---
title: Device Classes
section: The Things Fundamentals
weight: 55
images:
- class-a.png
---

The LoRaWAN specification defines three device types: **Class A**, **Class B**, and **Class C**. All LoRaWAN devices must implement Class A, whereas Class B and Class C are extensions to the specification of Class A devices. All device classes support bi-directional communication (uplink and downlink). During firmware upgrades over-the-air (FUOTA), a device must be switched to Class B or Class C.

{{< note "End devices can’t send uplink messages while they receive downlink messages." />}}

## Class A

All LoRaWAN end-devices must support Class A implementation. A Class A device can send an uplink message at any time. Once the uplink transmission is completed, the device opens two short receive windows for receiving downlink messages from the network. There is a delay between the end of the uplink transmission and the start of each receive window, known as RX1 Delay and RX2 Delay, respectively. If the network server does not respond during these two receive windows, the next downlink will be scheduled immediately after the next uplink transmission.

![Class A Receive Windows](class-a.png)

The network server can respond during the first receive window (RX1) or the second receive window (RX2), but does not use both windows. Let's consider three situations for downlink messages as illustrated below.

![Class A Receive Windows](class-a-alt.png)

1. The end device opens both receive windows but it doesn’t receive an downlink message during either receive window.
2. The end device receives a downlink during the first receive window and therefore it does not open the second receive window.
3. The end device opens the first receive window but it does not receive a downlink. Therefore it opens the second receive window and it receives a downlink during  the second receive window.

Class A end devices have very low power consumption. Therefore, they can operate with battery power. They spend most of their time in sleep mode and usually have long intervals between uplinks. Additionally, Class A devices have high downlink latency, as they require sending an uplink to receive a downlink.

The following are some of the use cases for Class A end devices:

- Environmental monitoring
- Animal tracking
- Forest fire detection
- Water leakage detection
- Smart parking
- Asset tracking
- Waste management

## Class B

Class B devices extend Class A capabilities by periodically opening receive windows called **ping slots** to receive downlink messages. The network broadcasts a time-synchronized beacon (unicast and multicast) periodically through the gateways, which is received by the end devices. These beacons provide a timing reference for the end devices, allowing them to align their internal clocks with the network. This allows the network server to know when to send a downlink to a specific device or a group of devices. The time between two beacons is known as the **beacon period**.

After an uplink, the two short receive windows, RX1 and RX2 will open similar to Class A devices.


![Class B Receive Windows](class-b.png)

Class B end devices have low latency for downlinks compared to Class A end devices because they periodically open ping slots. However, they have much higher latency than the Class C end devices. Class B devices are often battery powered. The battery life is shorter in Class B compared to Class A because the devices spend more time in active mode due to receiving beacons and having open ping slots. Because of the low latency for downlinks, Class B mode can be used in devices that require medium-level critical actuation, such as utility meters.

The following are some of the use cases for Class B end devices:
- Utility meters (electrical meters, water meters, etc)
- Street lights

Class B devices can also operate in Class A mode.

## Class C

Class C devices extend Class A capabilities by keeping the receive windows open unless transmitting an uplink, as shown in the figure below. Therefore, Class C devices can receive downlink messages at almost any time, thus having very low latency for downlinks. These downlink messages can be used to activate certain functions of a device, such as reducing the brightness of a street light or turning on the cut-off valve of a water meter.

Class C devices open two receive windows, RX1 and RX2, similar to Class A. However, the RX2 receive window remains open until the next uplink transmission. After the device sends an uplink, a short RX2 receive window opens, followed by a short RX1 receive window, and then the continuous RX2 receive window opens. This RX2 receive window remains open until the next uplink is scheduled. Uplinks are sent when there is no downlink in progress.


![Class C Receive Windows](class-c.png)

Compared to Class A and Class B devices, Class C devices have the lowest latency. However, they consume more power due to the need for opening continuous receive slots. As a result, these devices cannot be operated with batteries for long time therefore they are often mains powered.

The following are some of the use cases for Class C end devices:
- Utility meters (electrical meters, water meters, etc)
- Street lights
- Beacon lights
- Alarms

Class C devices can also operate in Class A mode.

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
