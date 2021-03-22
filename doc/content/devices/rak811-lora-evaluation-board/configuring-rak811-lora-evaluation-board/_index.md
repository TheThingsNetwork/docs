---
title: Configuring your RAK811 LoRa® Evaluation Board
weight: 600
---

The purpose of this document is to demonstrate on how to configure the RAK811 thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

>Note: It is highly recommended to use our own RAK Serial Port Tool for its built-in AT Commands for your convenience.

| AT Command | Description |
| --- | --- |
| at+help | This AT command can show all available AT commands of this module/product for you |
| at+version | Get the current firmware version number. |
| at+get_config=device:status | Get all information about the device’s hardware components and their current status. |
| at+set_config=device:restart | 	After set, the device will restart. |
| at+set_config=device:boot | Let the device work in boot mode |
| at+run | Stop boot mode and run as normal. It is valid when the device works in boot mode. |
| at+set_config=device:sleep:**X** | After setting, the device will go to sleep mode or wake up immediately.{::nomarkdown}<ul><li>X - 0: sleep, 1: wake-up</li></ul>{:/}  |
| at+set_config=device:gpio:**X**:**Y** | Set a certain GPIO pin to high/low level. {::nomarkdown}<ul><li>X - the pin number of a certain GPIO on RAK811 module.</li></ul>{:/}{::nomarkdown}<ul><li>Y - 0: low level, 1: high level.</li></ul>{:/} |
| at+get_config=device:gpio:**X** | Get a certain GPIO’s level. {::nomarkdown}<ul><li>X - the pin number of a certain GPIO on RAK811 module.</li></ul>{:/} |
| at+get_config=device:adc:**X** | Get the ADC value. {::nomarkdown}<ul><li>X - the pin number of the ADC on RAK811 module.</li></ul>{:/} |
| at+set_config=device:iic:**X**:**YY**:**ZZ**:**AAA** | Read data from I2C or write a data to I2C. {::nomarkdown}<ul><li>X - 0: read, 1: write.</li></ul>{:/}{::nomarkdown}<ul><li>YY - device address, in HEX format.</li></ul>{:/}{::nomarkdown}<ul><li>ZZ - sensor’s register address, in HEX format.</li></ul>{:/}{::nomarkdown}<ul><li>AAA - if read, this parameter means the length you want to read. If write, this parameter means the data you want to write. It must be in HEX format too.</li></ul>{:/} |
| at+set_config=device:uart_mode:**X**:**Y** | Set the UART work mode. {::nomarkdown}<ul><li>X - UART number on RAK811 module.</li></ul>{:/}{::nomarkdown}<ul><li> Y - 1: Passthrough mode.</li></ul>{:/}{::nomarkdown}<ul><li>Note: If you want to go back to configuration mode, enter +++in the serial port.</li></ul>{:/} |
| at+set_config=device:uart:**X**:**Y** | Set a certain UART’s Baud rate. {::nomarkdown}<ul><li>X - the UART number</li></ul>{:/}{::nomarkdown}<ul><li>Y - the Baud rate value.</li></ul>{:/} |
| at+send=uart:**X**:**YYY** | Send data through UART. {::nomarkdown}<ul><li>X - the UART number of RAK811 module</li></ul>{:/}{::nomarkdown}<ul><li>YYY - the data you want to send through UART</li></ul>{:/} |
| at+join	| Start to join LoRa® network |
| at+send=lora:**X**:**YYY**	| Send a customized data.{::nomarkdown}<ul><li>X - LoRa® port </li></ul>{:/}{::nomarkdown}<ul><li>YYY - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format.</li></ul>{:/} |
| at+set_config=lora:work_mode:**X**	| Set the work mode for LoRa®.{::nomarkdown}<ul><li>X - 0: LoRaWAN™, 1: LoRaP2P, 2: Test Mode.</li></ul>{:/} |
| at+set_config=lora:join_mode:**X** | Set the join mode for LoRaWAN™.{::nomarkdown}<ul><li>X - 0: OTAA, 1: ABP</li></ul>{:/} |
| at+set_config=lora:class:**X**	| Set the class for LoRa®.{::nomarkdown}<ul><li>X - 0: Class A,1: Class B,2: Class C</li></ul>{:/} |
| at+set_config=lora:region:**XXX**	| Set the region for LoRa®.{::nomarkdown}<ul><li>XXX - one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.</li></ul>{:/} |
| at+set_config=lora:confirm:**X**	| Set the type of messages which will be sent out through LoRa®.{::nomarkdown}<ul><li>X - 0: unconfirm, 1: confirm</li></ul>{:/} |
| at+set_config=lora:dev_eui:**XXXX**	| Set the device EUI for OTAA.{::nomarkdown}<ul><li>XXXX - the device EUI.</li></ul>{:/} |
| at+set_config=lora:app_eui:**XXXX**	| Set the application EUI for OTAA.{::nomarkdown}<ul><li>XXXX - the application EUI.</li></ul>{:/} |
| at+set_config=lora:app_key:**XXXX**	| Set the application key for OTAA.{::nomarkdown}<ul><li>XXXX - the application key.</li></ul>{:/}  |
| at+set_config=lora:dev_addr:**XXXX**	| Set the device address for ABP.{::nomarkdown}<ul><li>XXXX - the device address.</li></ul>{:/} |
| at+set_config=lora:apps_key:**XXXX**	| Set the application session key for ABP.{::nomarkdown}<ul><li>XXXX - the application session key.</li></ul>{:/} |
| at+set_config=lora:nwks_key:**XXXX**	| Set the network session key for ABP.{::nomarkdown}<ul><li>XXXX - the network session key.</li></ul>{:/} |
| at+set_config=lora:ch_mask:**X**:**Y**	| Set a certain channel on or off.{::nomarkdown}<ul><li>X - the channel number, and you can check which channel can be set before you set it.</li></ul>{:/}{::nomarkdown}<ul><li>Y - 0: off, 1: on</li></ul>{:/} |
| at+set_config=lora:adr:**X**	| Open or close the ADR function of LoRa® Node.{::nomarkdown}<ul><li>X - 0: Close ADR, 1: Open ADR.</li></ul>{:/} |
| at+set_config=lora:dr:**X**	| Set the DR of LoRa® Node.{::nomarkdown}<ul><li>X - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN™ 1.0.2 specification.</li></ul>{:/} |
| at+set_config=lora:tx_power:**X**	| Set the TX power level.{::nomarkdown}<ul><li>X - The level of TX power.</li></ul>{:/}If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN™ 1.0.2 region specification on this [link](https://github.com/RAKWireless/Update-File/blob/master/LoRaWANRegionalParametersv1.0.2.pdf) |
| at+get_config=lora:status	| It will return all of the current information of LoRa®, except LoRa® channel. |
| at+get_config=lora:channel	| It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly |
| at+set_config=lorap2p:**XXX**:**Y**:**Z**:**A**:**B**:**C**	| Set the parameters for LoRa® P2P mode. This AT command is valid when the work mode is ·LoRaP2P.{::nomarkdown}<ul><li>XXX - Frequency in Hz.</li></ul>{:/}{::nomarkdown}<ul><li>Y - Spreading factor, [6, 7, 8, 9, 10, 11, 12].</li></ul>{:/}{::nomarkdown}<ul><li>Z - Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz.</li></ul>{:/}{::nomarkdown}<ul><li>A - Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8.</li></ul>{:/}{::nomarkdown}<ul><li>B - Preamble Length, 5~65535.</li></ul>{:/}{::nomarkdown}<ul><li>C - Power in dbm, 5~20.</li></ul>{:/} |
| at+send=lorap2p:**XXX**	| Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode.{::nomarkdown}<ul><li>XXX - the data in HEX.</li></ul>{:/} | 
