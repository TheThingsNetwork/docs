---
title: Configuring Your Gateway
weight: 600
---
Assuming you have successfully logged into your LoRa Gateway using SSH. Enter the following command in the command line:
```
sudo gateway-config
```

You will now then see a page like the following picture below

![Figure 1: Configuration Options for the Gateway](images/config-options.png)
1. **Set pi password** - used to set/change the password of the LoRaWAN® Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the LoRaWAN® Gateway will operate on, and the LoRaWAN® Server which the LoRaWAN® Gateway will work with.
3. **Restart packet-forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

>**Note:** A unique ID will be generated in for LoRaWAN® Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```
sudo gateway-version
```

![Figure 2: Gateway ID using the command line](images/gateway-id-cmd.png)

## Set a new password for the LoRa Gateway
It is a good security practice to change the default password **"raspberry"** which is the same on all Raspberry Pi devices.

* First, choose "1 Set pi password" option referred on the image below.

![Figure 3: Set Pi Password](images/set_pi_password.png)

* Next, press "Yes" and you will be asked to enter your new password twice then press "Enter".

![Figure 4: Confirm Password Change](images/confirm_password.png)

* Alright, the success message for changing password will then pop up.

![Figure 5: Successful Password Change](images/success_password_change.png)

## Set up RAK Gateway LoRa® Concentrator
This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "2 Setup RAK Gateway LoRa® concentrator"

![Figure 6: Choosing Setup RAK Gateway LoRa® concentrator](images/set_up_gateway_concentrator.jpg)

You can choose one of two supported LoRa® Servers here: TTN or ChirpStack.

### Server is TTN

![Figure 7: Server Is TTN](images/7_server_ttn.png)

* **TTN (The Things Network).** If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

![Figure 8: Selecting the TTN Channel Plan](images/8_select_ttn.png)

After choosing the correct frequency, the success message will appear as shown below.

![Figure 9: Successfully Changed the Frequency](images/9_success_change_frequency.png)

## Connect the LoRaWAN® Gateway to a Router

If you want to use TTN or an independent LoRaServer which may be deployed in Local area network or Internet, you need to connect your LoRaWAN® Gateway to a router first.

### Connect through Wi-Fi
If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4.

![Figure 14: Configuration options for WiFi](images/14_config_wifi.png)

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the LoRaWAN® Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the LoRaWAN® Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

> **Note**: In order to enable Wi-Fi client mode, you need to disable first the AP Mode.

Once Wi-Fi AP Mode has been disabled by choosing Item 2, you can now then connect to a new Wi-Fi Network by choosing Item 4:

![Figure 15: Add a new SSID](images/15_add_new_ssid.png)

* Start by Selecting your Country of residence
![Figure 16: Selecting Country of Residence](images/16_country.png)

* Enter the SSID of the network you want to connect:
![Figure 17: SSID of the Network you want to connect to.](images/17_ssid_network.png)

* Enter also the password. Just leave it empty if None.
![Figure 18: Password of the Wi-Fi](images/18_wifi_password.png)

> Please ensure to input the correct Wi-Fi SSID and password or you will not be able to connect to the RAK7244C again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow the procedure list [here](https://doc.rakwireless.com/rak7244c-lorawan----developer-gateway/configuring-the-gateway#reverting-to-wi-fi-ap-mode)

### Connect through Ethernet
If you want to connect to router through Ethernet Cable, do the following steps:

* In the main configuration menu, choose “6 Configure LAN”. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
* Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the LoRaWAN® gateway and the router must be in the same network segment, otherwise the connection will fail.
* By default, the IP Address of the LoRaWAN® Gateway's Ethernet is `192.168.10.10`
![Figure 19: Default LoRaWAN® Gateway Ethernet IP Address](images/19_ethernet_ip.png)

* Then configure the IP address of the Router. This is the LAN Interface IP address of the router:
![Figure 20: LAN Interface IP Address of the Router](images/20_lan_interface.png)

* Press OK then the success message will appear.
* Lastly, reboot the LoRaWAN® Gateway using the command `sudo reboot` in the command line and it will connect to the router successfully through Ethernet.
