---
title: Configuring the RAK811 WisNode LoRa Module 
zindex: 600
---

# Configuring the RAK811 WisNode LoRa Module

You can configure your WisNode by sending AT Commands via a Serial port tool running on your PC.The list below shows the AT Commands available for use:

| AT Command | Description |
| --- | --- |
| at+help | This AT command can show all available AT commands of this module/product for you |
| at+version | Get the current firmware version number. |
| at+get_config=device:status | Get all information about the device’s hardware components and their current status. |
| at+set_config=device:restart | 	After set, the device will restart. |
| at+set_config=device:boot | Let the device work in boot mode |
| at+run | Stop boot mode and run as normal. It is valid when the device works in boot mode. |
| at+set_config=device:sleep:X | Get all information about the device’s hardware components and their current status. |
| at+set_config=device:gpio:X:Y | Set a certain GPIO pin to high/low level.<br/>X definition: the pin number of a certain GPIO on RAK811 module.<br/>Y definition: 0: low level, 1: high level. |
| at+get_config=device:gpio:X | Get a certain GPIO’s level.<br/>X definition: the pin number of the GPIO on RAK811 module. |
| at+get_config=device:adc:X | Get the ADC value.<br/>X definition: the pin number of the ADC on RAK811 module. |
| at+set_config=device:iic:X:YY:ZZ:AAA | Read data from I2C or write a data to I2C.<br/>X definition: 0: read, 1: write.<br/>YY definition: device address, in HEX format.<br/>ZZ definition: sensor’s register address, in HEX format.<br/>AAA definition: if read, this parameter means the length you want to read. If write, this parameter means the data you want to write. It must be in HEX format too. |
| at+set_config=device:uart_mode:X:Y | Set the UART work mode.<br/>X definition: UART number on RAK811 module.<br/>Y definition:  0: Configuration mode; 1: Passthrough mode. |
| at+send=uart:X:YYY | Set a certain UART’s Baud rate.<br/>X definition: the UART number.<br/>Y definition: the Baud rate value. |
| at+set_config=device:uart:X:Y | Send data through UART.<br/>X definition: the UART number of RAK811 module.<br/>YYY definition: the data you want to send through UART. |
| at+join	| Start to join LoRa network |
| at+send=lora:X:YYY	| Send a customized data. <br/> X definition: LoRa port <br/> YYY definition: the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format. |
| at+set_config=lora:work_mode:X	| Set the work mode for LoRa. <br/>X definition: 0: LoRaWAN, 1: LoRaP2P, 2: Test Mode. |
| at+set_config=lora:join_mode:X | Set the join mode for LoRaWAN. <br/>X definition: 0: OTAA, 1: ABP |
| at+set_config=lora:class:X	| Set the class for LoRa. <br/>X definition: 0: Class A, 1: Class B, 2: Class C |
| at+set_config=lora:region:XXX	| Set the region for LoRa. <br/>XXX define: one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923. |
| at+set_config=lora:confirm:X	| Set the type of messages which will be sent out through LoRa. <br/>X definition: 0: unconfirm, 1: confirm |
| at+set_config=lora:dev_eui:XXXX	| Set the device EUI for OTAA. <br/>XXXX definition: the device EUI. |
| at+set_config=lora:app_eui:XXXX	| Set the application EUI for OTAA. <br/>XXXX definition: the application EUI. |
| at+set_config=lora:app_key:XXXX	| Set the application key for OTAA. <br/>XXXX definition: the application key. |
| at+set_config=lora:dev_addr:XXXX	| Set the device address for ABP. <br/>XXXX definition: the device address. |
| at+set_config=lora:apps_key:XXXX	| Set the application session key for ABP. <br/>XXXX definition: the application session key. |
| at+set_config=lora:nwks_key:XXXX	| Set the network session key for ABP. <br/>XXXX definition: the network session key. |
| at+set_config=lora:ch_mask:X:Y	| Set a certain channel on or off. <br/>X definition: the channel number, and you can check which channel can be set before you set it.<br/>Y definition: 0: off, 1: on |
| at+set_config=lora:adr:X	| Open or close the ADR function of LoRa Node.<br/>X definition: 0: Close ADR; 1: Open ADR. |
| at+set_config=lora:dr:X	| Set the DR of LoRa Node.<br/>X definition: the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN 1.0.2 specification. |
| at+set_config=lora:tx_power:X	| Set the TX power level.<br/>X definition: The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN 1.0.2 region specification on this [link](https://github.com/RAKWireless/Update-File/blob/master/LoRaWANRegionalParametersv1.0.2.pdf). |
| at+get_config=lora:status	| Returns all of the current information of LoRa, except LoRa channel. |
| at+get_config=lora:channel	| It will return the state of all LoRa channels, then you can see which channel is closed and which channel is open very clearly |
| at+set_config=lorap2p:XXX:Y:Z:A:B: C	| Set the parameters for LoRa P2P mode. This AT command is valid when the work mode is ·LoRaP2P. <br/>XXX definition: Frequency in Hz. <br/>Y definition: Spreading factor, [6, 7, 8, 9, 10, 11, 12]. <br/>Z definition: Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz. <br/>A definition: Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8. <br/>B definition: Preamble Length, 5~65535. <br/>C definition: Power in dbm, 5~20. |
| at+send=lorap2p:XXX | Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. <br/>XXX definition: the data in HEX.| 