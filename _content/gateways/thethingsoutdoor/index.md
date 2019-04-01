---
title: The Things Outdoor Gateway
image: /gateways/thethingsoutdoor/TTOG.png
section: Hardware
---


# The Things Outdoor Gateway

The Things Outdoor Gateway (TTOG) is an industrial, outdoor and fully compliant gateway.

![TTOG](TTOG.png)

**Salient Features:**

* LoRaWAN 1.0.2 compliant
* Supports up to 16 channels
* 3G/4G backhaul supported
* Option support wide frequency range from 470MHz to 928MHz
* Supports LBT (Listen Before Talk)
* EU868, US915, AS923 and CN470 versions available.
* IP67 waterproof
* Dimensions: 230 x 200 x 68mm
* Weight: 2.05kg
* Power voltage: 55VDC/0.6A via PoE adapter


## Set up your gateway

1. Connect all antennas:
 ANT 1 - GPS
 ANT 2 - LTE antenna
 ANT 3 - LoRaWAN antenna
 ANT 4 - LoRaWAN antenna (optional)
2. Connect the PoE Output cable to the Gateway Ethernet connector. Connect the PoE Input cable to the network connection device.




## Activate your gateway

The ODU GUI is a web interface to configure all network settings. The ODU GUI uses the IP address assigned by the Gateway to enter the network setting page.

1. Enter the IP Address assigned by the Gateway into the web browser to acquire access to the ODU GUI interface. The IP address is likely `192.168.2.13`. The configuration page should look like this:
 ![GUI](GUI.png)
2. Login with the username and password: `admin` / `admin`
 > Make sure to update the password the first time you login!
3. Connect the gateway to The Things Network via: **Packet Forward** > **Module 1 Settings** and enter the following settings
 **Server Address:** [Router address for you region](https://www.thethingsnetwork.org/docs/gateways/packet-forwarder/semtech-udp.html#router-addresses) 
 **Server Uplink Port:** 1700
 **Server Downlink Port:** 1700
 ![Gateway Settings](gateway-info.png)
4. Save the **Gateway ID**, you will need this later on when adding the gateway to the Developer Console of The Things Network.
5. Set the network settings via **Network** > **WAN**. You can choose to connect via Ethernet or 3G/LTE. Reboot the gateway after configuring the network settings.
 
 > Did you connect the gateway via 3G/LTE? It will take a few minutes before the gateway will start routing messages. 
 > To open the ODU GUI again, you should manually set the IP address:
 > IP address: `192.168.11.100`
 > Subnet Mask: `255.255.255.0`
 > Router: `192.168.11.10`
 > Now, you can access the web interface via: [192.168.11.10](http://192.168.11.10).



## Connecting to the The Things Network Backend

1. To connect this gateway to the [The Things Network console](https://console.thethingsnetwork.org/), register the gateway using the **I'm using the Legacy Packet Forwarder** option. 
2. The EUI of the gateway can be derived from the Gateway ID which can be found in the ODE GUI, under **Packet Forward** > **Module 1 Settings**. Add `0000` at the beginning of the Gateway ID to get the Gateway EUI. For example `80029c10xxxx` becomes `000080029c10xxxx`.
4. This is the value to be entered in the Gateway ID field on the [console](https://console.thethingsnetwork.org).
5. Enter the other details such as location, frequency plan and router.
6. If your configuration was successful, you should start receiving packets (if there are LoRaWAN nodes transmitting nearby).
