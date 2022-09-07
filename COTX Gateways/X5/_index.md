---
title: COTX X5
section: Hardware
weight: 100
---

# COTX X5 GATEWAY

COTX X5 is a standard LoRaWAN outdoor gateway and a Helium Full hotspot.

It is highly compatible and has a user-friendly interface.

Rich in software tools, powerful back office management and technical support.

Safe and reliable outdoor design, easy to install and deploy.

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F36.tmp.jpg) 

 

## Key Features

- COTX-X5 is an outdoor industrial iot gateway with industrial components for iot deployment stability. 
- Powered by Raspberry Pi Compute Module 4B.
- Built-in Semtech SX1302&SX1303 ECC security chipset.
- Power Over Ethernet (POE) is supported and installation accessories.
- A complete 8-channel gateway based on the LORAWAN protocol.
- LoRa band support：CN470,EU868,US915,AS923,KR920,AU915.
- LoRa power support up to 27dbm
- Support BLE/WiFi to implete the local and remote settings and managment, and also manage other maker's gateways.
- IP67 level waterproof and dust-proof case,aluminium design.
- SMART INTERFACE LED,shows SYS,ETH,WiFi,LTE, BLE.
- Support BLE/WiFi to implement the local and remote settings and management, and also manage other maker's gateways.

## Provisioning on TTN Network Server

#### 1.1 Required Equipment

- COTX X5 Gateway
- Power source
- Internet ready

### 1.2 Gateway Setup 

**Step 1**: First, carefully connect the LoRa® antenna to the “Lora” port of the gateway , the Wi-Fi antenna to the “WiFi/BLE” port and the LTE antenna to the “LTE” port.

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F37.tmp.jpg) 

**Step 2**: Next find a suitable location for your gateway to be positioned. Make sure it will provide the best coverage.

**Step 3**: To integrate Ethernet network, use a network cable and connect the gateway to the switch or router 

**Step 4**: The default setting is Power over Ethernet (PoE). Connect the Ethernet port of the gateway to a switch with PoE function (PoE - IEEE 802.3af or IEEE 802.3at). If unavailable, use a PoE injector and power up. 

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F47.tmp.png)![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F58.tmp.png) 

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F59.tmp.png)![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F5A.tmp.png) 

Now System LED lights up. When the system gets ready, that light will turn green.The Gateway should now connect to The Things Network .

 

### 1.3 Registering the Gateway on TTN

1. Create a new TTN account or login to your previously created TTN account.

2. Select **CONSOLE** for **Europe1**.

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F6B.tmp.jpg) 

3. Select **Gateways**, and then select **Register Gateway**.

4. Under Gateway ID,enter the 8 byte gateway ID recorded on the bottom of gateway’s label named “**ID**”.

5. Under Gateway EUI, enter the 8 byte gateway ID recorded on the bottom of gateway’s label named “**ID**”

6. Under Description add a human readable description of the gateway.

7. Select a frequency plan from the dropdown box that corresponds to the frequency band supported by the Gateway.

8. The default connection of Gateway is **Europe1**, Gateway Server Address is: **eu1.cloud.thethings.network,** no additional other configuration. 

![img](file:///C:\Users\Think\AppData\Local\Temp\ksohtml\wps6F7B.tmp.jpg) 

9. Click **Create Gateway**. 

