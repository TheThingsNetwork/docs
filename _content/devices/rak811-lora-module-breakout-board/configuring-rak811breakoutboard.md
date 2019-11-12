---
title: Configuring your RAK811 WisDuo LoRa Module
zindex: 600
---
# Configuring your RAK811 WisDuo LoRa Module

The purpose of this document is to demonstrate on how to configure the RAK811 thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| AT Command | Description |
| --- | --- |
| at+version | Get the current firmware version number. |
| at+get_config=device:status | Get all information about the device’s hardware components and their current status. |
| at+set_config=device:restart | 	After set, the device will restart. |
| at+set_config=device:boot | Let the device work in boot mode |
| at+run | Stop boot mode and run as normal. It is valid when the device works in boot mode. |
| at+set_config=device:sleep:X | Get all information about the device’s hardware components and their current status. |
| at+join	| Start to join LoRa network |
| at+send=lora:X:YYY	| Send a customized data. X definition: LoRa port YYY definition: the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format. |
| at+set_config=lora:work_mode:X	| Set the work mode for LoRa. X definition: 0: LoRaWAN, 1: LoRaP2P, 2: Test Mode. |
| at+set_config=lora:join_mode:X | Set the join mode for LoRaWAN. X definition: 0: OTAA, 1: ABP |
| at+set_config=lora:class:X	| Set the class for LoRa. X definition: 0: Class A, 1: Class B, 2: Class C |
| at+set_config=lora:region:XXX	| Set the region for LoRa. XXX define: one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923. |
| at+set_config=lora:confirm:X	| Set the type of messages which will be sent out through LoRa. X definition: 0: unconfirm, 1: confirm |
| at+set_config=lora:dev_eui:XXXX	| Set the device EUI for OTAA. XXXX definition: the device EUI. |
| at+set_config=lora:app_eui:XXXX	| Set the application EUI for OTAA. XXXX definition: the application EUI. |
| at+set_config=lora:app_key:XXXX	| Set the application key for OTAA. XXXX definition: the application key. |
| at+set_config=lora:dev_addr:XXXX	| Set the device address for ABP. XXXX definition: the device address. |
| at+set_config=lora:apps_key:XXXX	| Set the application session key for ABP. XXXX definition: the application session key. |
| at+set_config=lora:nwks_key:XXXX	| Set the network session key for ABP. XXXX definition: the network session key. |
| at+set_config=lora:ch_mask:X:Y	| Set a certain channel on or off. X definition: the channel number, and you can check which channel can be set before you set it. Y definition: 0: off, 1: on |
| at+set_config=lora:adr:X	| Open or close the ADR function of LoRa Node. X definition: 0: Close ADR; 1: Open ADR. |
| at+set_config=lora:dr:X	| Set the DR of LoRa Node. X definition: the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN 1.0.2 specification. |
| at+get_config=lora:channel	| It will return the state of all LoRa channels, then you can see which channel is closed and which channel is open very clearly |
| at+set_config=lorap2p:XXX:Y:Z:A:B: C	| Set the parameters for LoRa P2P mode. This AT command is valid when the work mode is ·LoRaP2P. XXX definition: Frequency in Hz. Y definition: Spreading factor, [6, 7, 8, 9, 10, 11, 12]. Z definition: Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz. A definition: Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8. B definition: Preamble Length, 5~65535. C definition: Power in dbm, 5~20. |
| at+send=lorap2p:XXX	| Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. XXX definition: the data in HEX.| 