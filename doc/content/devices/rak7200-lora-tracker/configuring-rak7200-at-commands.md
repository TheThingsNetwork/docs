---
title: Configuring your RAK7200 Using AT Commands
weight: 600
---
# Configuring your RAK7200 Using AT Commands

The purpose of this document is to demonstrate on how to configure the RAK7200 LoRa® Tracker thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

>Note: It is highly recommended to use our own RAK Serial Port Tool for its built-in AT Commands for your convenience.

| AT Command | Description |
| --- | --- |
| at+help | Get all available AT Commands |
| at+version | Get the current firmware version number. |
| at+get_config=device:status | Get all information about the device’s hardware components and their current status. |
| at+set_config=device:restart | 	After set, the device will restart. |
| at+set_config=device:boot | Let the device work in boot mode |
| at+run | Stop boot mode and run as normal. It is valid when the device works in boot mode. |
| at+set_config=device:sleep:**X** | After Setting, the device will go to sleep mode or wake up imediately{::nomarkdown}<ul><li>X - 0: Wake-up, 1: Sleep</li></ul>{:/}|
| at+join	| Start the join procedure for the LoRaWAN™ network |
| at+send=lora:**X**:**YYY**	| Send an uplink with a custom payload: {::nomarkdown}<ul><li>X: LoRa® Frame Port</li></ul>{:/}{::nomarkdown}<ul><li>Y: The data which you want to send. (Length limit is 50 bytes and the data must be in Hex Format)</li></ul>{:/} |
| at+set_config=lora:work_mode:**X**	| Set the Working Mode:{::nomarkdown}<ul><li>X -  0: LoRaWan™, 1: LoRaP2P,2: Test Mode</li></ul>{:/}  |
| at+set_config=lora:join_mode:**X** | Set the join mode for LoRaWAN™.{::nomarkdown}<ul><li>X - 0: OTAA, 1: ABP</li></ul>{:/} |
| at+set_config=lora:class:**X**	| Set the class for LoRa®.{::nomarkdown}<ul><li>X - 0: Class A, 1: Class B, 2: Class C</li></ul>{:/} |
| at+set_config=lora:region:**XXX**	| Set the Region for LoRa®:{::nomarkdown}<ul><li>X - Options: IN865, EU868, AU915, US915, KR920, AS923</li></ul>{:/}  |
| at+set_config=lora:confirm:**X**	| Set the type of messages which will be sent out through LoRa®.{::nomarkdown}<ul><li>X - 0: unconfirm, 1: confirm</li></ul>{:/} |
| at+set_config=lora:dev_eui:**XXXX**	| Set the device EUI {::nomarkdown}<ul><li>XXXX - The Device EUI</li></ul>{:/} |
| at+set_config=lora:app_eui:**XXXX**	| Set the application EUI (for OTAA) {::nomarkdown}<ul><li>XXXX - The Application EUI</li></ul>{:/} |
| at+set_config=lora:app_key:**XXXX**	| Set the Application key for (for OTAA) {::nomarkdown}<ul><li>XXXX - The Application Key</li></ul>{:/} |
| at+set_config=lora:dev_addr:**XXXX**	| Set the Device Address (for ABP) {::nomarkdown}<ul><li>XXXX - The Device Address</li></ul>{:/} |
| at+set_config=lora:apps_key:**XXXX**	| Set the Application session key (for ABP) {::nomarkdown}<ul><li>XXXX - The Application Session Session Key</li></ul>{:/} |
| at+set_config=lora:nwks_key:**XXXX**	| Set the network session key (for ABP) {::nomarkdown}<ul><li>XXXX - The Network Session Key</li></ul>{:/} |
| at+set_config=lora:ch_mask:**X**:**Y**	| Turn a certain channel on/off {::nomarkdown}<ul><li>X - The Channel Number you want to toggle. You can check the channel number using the command : at+get_config=lora:channel</li></ul>{:/}{::nomarkdown}<ul><li>Y - 0: Off, 1: On</li></ul>{:/} |
| at+set_config=lora:dr:**X**	| Set the DR of LoRa® Node {::nomarkdown}<ul><li>X - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN™ 1.0.2 specification.</li></ul>{:/}  |
| at+set_config=lora:tx_power:**X**	| Set the TX Power Level {::nomarkdown}<ul><li>X - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN™ 1.0.2 region specification</li></ul>{:/}   |
| at+set_config=lora:send_interval:**X**:**Y**	| Set the time interval for sending data {::nomarkdown}<ul><li>X - Enable/disable the mechanism for sending data in intervals. 0: the device will not send data automatically. 1: the device will send data every Y seconds.</li></ul>{:/}{::nomarkdown}<ul><li>Y - Interval time in seconds. This parameter is only valid if X is set to 1.</li></ul>{:/} |
| at+get_config=lora:status	| It will return all of the current information of LoRa®, except the LoRa® Channel |
| at+get_config=lora:channel	| It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly |
| at+set_config=lorap2p:**XXX**:**Y**:**Z**:**A**:**B**:**C**	| Set the Parameters for LoRa® P2P mode. This AT Command is valid when the work ode is LoRaP2P {::nomarkdown}<ul><li>XXX - Frequency in Hz.</li></ul>{:/}{::nomarkdown}<ul><li>Y - Spreading Factor, [6,7,8,9,10,11,12]</li></ul>{:/}{::nomarkdown}<ul><li>Z - Bandwidth, 0: 125kHz,1: 250kHz,2: 500kHz</li></ul>{:/}{::nomarkdown}<ul><li>A - Coding Rate, 1: 4/5,2: 4/6, 3: 4/7,4: 4/8</li></ul>{:/}{::nomarkdown}<ul><li>B - Preamble Length, 5 - 65535</li></ul>{:/}{::nomarkdown}<ul><li>C - Power in dBm, 5-20</li></ul>{:/} |
| at+send=lorap2p:**XXX**	| Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode.{::nomarkdown}<ul><li>XXX - Data in HEX</li></ul>{:/} |
| at+set_config=device:gps:**X**	| Turn on or turn off GPS {::nomarkdown}<ul><li>X - 0: close, 1: open, 2: sleep, 3: standby</li></ul>{:/} |
| at+set_config=device:gps_timeout:**X**	| Set the timeout of searching GPS satellite {::nomarkdown}<ul><li>X - Time in seconds</li></ul>{:/} |
