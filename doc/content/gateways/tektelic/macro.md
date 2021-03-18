---
title: KONA Macro
section: Hardware
weight: 200
---

The KONA Macro IoT Gateway is an ideal solution for operators and enterprises that require a very scalable low cost LoRaWAN gateway that minimizes network TCO while improving coverage and capacity. In order to facilitate rapid deployment, the gateway is designed to be extremely compact and light weight. With both the cellular modem and GPS antennas embedded internally the KONA Macro is targeted at network sites that dictate a small form factor and low power consumption. Rated IP67 it is designed for the most demanding outdoor installations. The KONA Macro can be installed in various locations reducing site and deployment costs while addressing different vertical IoT applications.

![KONA_Macro_Gateway](KONA_Macro_Tilt.PNG)


## Key Features

- Frequency Division Duplex (FDD) 16 Rx & 2 Tx Channels
- Time Division Duplex (TDD) 16 Rx / 2 Tx Channels
- Global Frequency Bands: NA915, EU868, AS923, JP920, CH779, …
- Extremely Compact, Simple, Reliable and Fully Integrated System
- Copper Ethernet & Global 3G/4G Backhaul Options
- Integrated Highly Selective Duplexers or Bandpass Filters
- GPS Precise Network Synchronization with Hold-Over
- Optional Comprehensive & Customizable TDoA Geolocation Solution
- Up to 30dBm Tx Power per Antenna
- Superior Receiver & Transmitter RF Performance
- Tier 1 Carrier Grade Design, IP-67 Enclosure, -40°C to +60°C
- Multiple Deployment & Mounting Options (Tower, Pole, Wall)
- Comprehensive KonaFT OA&M Tool 
- Low Total Cost of Ownership Solution (Deployment and Maintenance)  



## Provisioning on TTN Network Server

This application note outlines the procedure to provision a Kona Gateway on The Things Network (TTN) Network Server.

### 1.1 Required Equipment

- Computer running Windows XP/7/10
- Kona Micro/Macro/Mega Gateway
- Power source
- KonaFT software self-extracting installer
- Cat 5/5e/6 Network cable

### 1.2 Gateway Setup

1.	Connect the Ethernet ports of the gateway and computer as illustrated below.
2. Copy the KonaFT self-extracting installer software onto the computer then double-click on the installer icon to start the installation process.
3. Apply power to the Kona Gateway (refer to product specific user&#39;s guide).  Boot up time of the Gateway is approximately 2 minutes. During boot up, the LED status is Flashing Green.
4. The Kona Gateway supports DHCP on the Ethernet port. The Gateway MAC address is printed on the Gateway label. Using KonaFT and the MAC address determine the IP address of the Gateway.
 - In KonaFT select **Tools** , then select **Find My Gateway** , then press **Scan**. When scanning is complete click then entry that corresponds to the Gateway&#39;s MAC address and press **Select**.
 ![KONA_setup](Screen_1.png)
5. The Gateway&#39;s IP address should appear in the bottom left corner of the KonaFT GUI.  Ensure the port number is set to 161 (default), then select the Start button.
6. Take note of the Gateway ID.  This information is required for registering the gateway on the Network Server.
 ![KONA_setup2](Screen_2.png)

### 1.3 Registering the Gateway on TTN

1. Create a new TTN account or login to your previously created TTN account.
2. Click the dropdown arrow next to the User, and select **CONSOLE**.
3. Select **Gateways** , and then select **Register Gateway**.
4. Under Gateway ID, check the Legacy Packet Forwarder checkbox.
5. Under Gateway EUI, enter the 8 byte gateway ID recorded in one of the previous steps.
6. Under Description add a human readable description of the gateway.
7. Select a frequency plan from the dropdown box that corresponds to the frequency band supported by the Gateway.
8. Select a router, picking the one that&#39;s closest to the physical location of the gateway to reduce latency.
9. Add location and antenna placement if desired (optional).
 ![KONA-to-TTN](TTN_Screen.png)
10. Click **Register Gateway**.


### 1.4 Configuring the Gateway to connect to TTN

1. From KonaFT select the **Configuration** tab.
2. Press the **Refresh files** button and then select **config.json** from the drop down menu.
 ![KONA_setup3](Screen_3.png)
3. Press the **Read** button.
 ![KONA_setup4](Screen_4.png)
4. Edit the config.json file to update the server\_address (router address) to point the gateway to the correct router.  Refer to [https://www.thethingsnetwork.org/docs/gateways/packet-forwarder/semtech-udp.html](https://www.thethingsnetwork.org/docs/gateways/packet-forwarder/semtech-udp.html).
 ![KONA_setup5](Screen_5.png)
5. Add the Gateway ID (EUI).
 ![KONA_setup6](Screen_6.png)
6. Press **Write** to save the changes to the config.json file.
7. Reboot the Gateway.
8. The Gateway should now connect to The Things Network.
