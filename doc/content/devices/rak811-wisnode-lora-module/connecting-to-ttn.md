---
title: Connecting to The Things Network (TTN)
weight: 500
---
# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network here.

1 . First, connect RAK811 WisNode LoRa Module with your PC and open the serial port tool on your PC.

2 . Select the appropriate COM port and open it as in the image: 

![Figure 1: RAK811 Serial Port](images/serialportttn.png)

>**Note:** In this section, it is assumed that you have connected your LoRa gateway with TTN correctly.

3 . Now go to the [The Things Network](https://www.thethingsnetwork.org/) website ang Log in. Fill in the necessary credentials and in the "**Console**" tab, pick "**Application**" as shown in the image below.

![Figure 2. TTN Console page](images/ttnlogin.jpg)

4 . Press the "**add application**" button.

![Figure 3: TTN Applications Page](images/ttnapplication.jpg)

5 . Create your own Application by filling up with correct contents.
>**Note:** Your Device ID is a unique ID of lower case, alphanumeric characters and nonconsecutive - and _.

![Figure 4: TTN Add Application Page](images/addapplication.jpg)

6 . Then press the “Add application” button at the bottom of this page, and you can see the following page: 

![Figure 5: TTN Application Information Page](images/adddevice.jpg)

7 . At the middle of this page, you can find the box named “**DEVICES**”. Then, click "**Register Device**". 

![Figure 6: Registering Device in TTN](images/register.jpg)

8 . Fill in the "**Device ID**" . Click the icon in the “**Device EUI**”, then a code is generated automatically. 

You can get the “Device EUI” of your RAK811 with the following command, which will display all node parameters:

```
at+get_config=lora:status
```

In case you have had TTN generate a new “Device EUI” you can use the command below to import it into the RAK811 configuration parameters (X is the Device_EUI you want to update):

```
at+set_config=lora:dev eui:XXXX
```
![Figure 7: Filling in the Device Information](images/ttnparamaters.jpg)


9 .Then press the “**Register**” button at the bottom of this page to finish.

![Figure 8: Device Overview in TTN](images/deviceEUI.jpg)

When you connect the RAK811 to a LoRa Gateway, we need some amount of security and trust to be established amongst them. There are two connection modes, and we distinguish between them using the criteria of security and ease of implementation. These are the Over-The-Air Activation (OTAA) and Activation By Personalization (ABP).

## Join in OTAA Mode

From the previous section, it can be seen that the default activation for TTN is OTAA. In joining OTAA, these three parameters are necessary: Device EUI, Application EUI and App Key.

![Figure 9: OOTA Parameters](images/ootaparameters.jpg)

>**Note:** The default LoRa work mode is LoRaWAN 1.0.2, while the default LoRa join mode is OOTA, and the default LoRa Class is A.

* If the join mode is not in OTAA, just set the LoRa join mode to OTAA and LoRa class to Class A. Open your RAK811 Firmware and type the following commands.

![Figure 10: OOTA Mode and Class](images/ootamodeandclass.jpg)

* Type the following AT command to set the: **Frequency/Region to EU868, Device EUI, Application EUI and Application Key**:

![Figure 11: OOTA Frequency and DeviceEUI](images/ootafrequencyanddeviceeui.jpg)

![Figure 12: OOTA Appkey and AppEUI](images/ootaappkeyappeui.jpg)

* Then, join in OTAA mode.

![Figure 13: Join OOTA](images/joinoota.jpg)

* Joined Successfully! Now, try sending data from our RAK811 WisNode LoRa Module to TTN.

![Figure 14: OOTA Sending Data](images/ootasendingdata.jpg)

* We can view the data sent from the RAK811 WisNode LoRa Module to our The Things Network Application Data

![Figure 15: OOTA Data Viewing](images/ootadataviewing.jpg)

## Join in ABP Mode

To join the ABP mode, go to device settings and switch the activation method to ABP.

![Figure 16: ABP Switching](images/abpswitching.jpg)

* Set the Device Address, Network Session Key and App Session Key. These three parameters will be used on RAK811 WisNode LoRa Module:

![Figure 17: ABP Parameters](images/abpparameters.jpg)

OK! Now, let’s join in ABP mode and set EU868 frequency as an example.

* If the join mode is not in ABP, just set the LoRa join mode to ABP and LoRa class to Class A. Open your RAK811 Firmware and type the following commands

![Figure 18: ABP Mode and Class](images/abpmodeclass.jpg)

Type the following AT command to set the: **Frequency/Region to EU868, Device Address, Network Session Key and App Session Key**:

![Figure 19: ABP Frequency and Device Address](images/abpfreqanddevadd.jpg)

![Figure 20: ABP Network and AppKey](images/abpnetworkandapplicationkey.jpg)

* Then, join in ABP mode.

![Figure 21: ABP Join](images/abpjoin.jpg)

>**Note:** Actually, it is not necessary to join in ABP mode. But, you still need to set this ATcommand to validate the parameters set for ABP Mode.

* Joined Successfully. Now, try sending data from our RAK811 WisNode LoRa Module to TTN.

![Figure 22: ABP Send Data](images/abpsend.jpg)

* We can view the data sent from the RAK811 WisNode LoRa Module to our The Things Network Application Data

![Figure 23: ABP View Data](images/abpdataview.jpg)

### Optional Configurations
You can also try other configurations which is supported in RAK811 WisNode LoRa Module. Click through the guides provided below to learn more. Enjoy!
* Connecting to [LoRaServer](https://doc.rakwireless.com/rak811-wisnode-lora-module/connecting-to-loraserver)
* LoRa [P2P Mode](https://doc.rakwireless.com/rak811-wisnode-lora-module/lora-p2p-mode)
