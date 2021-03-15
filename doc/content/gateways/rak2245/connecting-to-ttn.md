---
title: Connecting to The Things Network (TTN)
weight: 500
---

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network here.

* First, you should have connected your LoRaWAN® Gateway to the router in order to access the internet according to the method which has been introduced in the “Configure your LoRaWAN® Gateway” section of this document.
* Second, config your LoRaWAN® Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the Configuring the Gateway section.
Now go to the TTN Website: https://www.thethingsnetwork.org/ and Login. You will then see the following page:
![Figure 1: The Things Network Home Page](images/ttn-index.png)

* Choose Console then Click Gateway.

![Figure 2: The Things Network Console Page](images/console.png)

* All of your Registered Gateways will be displayed here in this page. Click **"register gateway"**

![Figure 3: Adding a Gateway to TTN](images/gateway-add.png)

![Figure 4: Registering your Gateway](images/register-gateway.png)
* **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type `gateway-version` in the command line. This must be the same with the LoRaWAN® Gateway's True Gateway ID otherwise you will fail to register your LoRaWAN® Gateway on TTN.
> Make sure to select the "I'm using the legacy packet forwarder" check box.
* **Description** - A human readable description of your LoRa Gateway.
* **Frequency Plan** - This is the frequency you want to use and it must be the same with LoRaWAN® Gateway and the LoRaWAN® Node.
* **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
* **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
* **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click **Register Gateway** and wait for a couple of minutes . If the status of your gateway is Connected, Congratulations! Your LoRaWAN® Gateway is now connected to the The Things Network (TTN).

You have also the option to connect your LoRaWAN® Gateway with **Chirpstack.** Go to this [guide](https://doc.rakwireless.com/rak2245-pi-hat-edition---lorawan----gateway-concentrator-module/connect-the-lora-gateway-with-chirpstack) to learn how!