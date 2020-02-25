---
title: Configuring your RAK7200 Using AT Commands
zindex: 600
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
| at+set_config=device:sleep:**X** | After Setting, the device will go to sleep mode or wake up imediately **X** - 0:Wake-up,1:Sleep |
| at+join	| Start the join procedure for the LoRaWAN™ network |
| at+send=lora:**X**:**YYY**	| Send an uplink with a custom payload: **X**:LoRa® Frame Port **Y**:The data which you want to send. (Length limit is 50 bytes and the data must be in Hex Format)|
| at+set_config=lora:work_mode:**X**	| Set the Working Mode: **X** -  0:LoRaWan™,1:LoRaP2P,2:Test Mode |
| at+set_config=lora:join_mode:**X** | Set the join mode for LoRaWAN™. **X** - 0:OTAA,1:ABP |
| at+set_config=lora:class:**X**	| Set the class for LoRa®. **X** - 0:Class A,1:Class B,2:Class C |
| at+set_config=lora:region:**XXX**	| Set the Region for LoRa®: **X** - Options: IN865, EU868, AU915, US915, KR920, AS923 |
| at+set_config=lora:confirm:**X**	| Set the type of messages which will be sent out through LoRa®. X - 0:unconfirm,1:confirm |
| at+set_config=lora:dev_eui:**XXXX**	| Set the device EUI **XXXX**:The Device EUI |
| at+set_config=lora:app_eui:**XXXX**	| Set the application EUI (for OTAA) **XXXX**:The Application EUI |
| at+set_config=lora:app_key:**XXXX**	| Set the Application key for (for OTAA) **XXXX**"The Application Key |
| at+set_config=lora:dev_addr:**XXXX**	| Set the Device Address (for ABP) **XXXX**:The Device Address |
| at+set_config=lora:apps_key:**XXXX**	| Set the Application session key (for ABP) **XXXX**:The Application Session Session Key |
| at+set_config=lora:nwks_key:**XXXX**	| Set the network session key (for ABP) **XXXX**:The Network Session Key |
| at+set_config=lora:ch_mask:**X**:**Y**	| Turn a certain channel on/off **X**:The Channel Number you want to toggle. You can check the channel number using the command : at+get_config=lora:channel **Y** - 0:Off,1:On |
| at+set_config=lora:dr:**X**	| Set the DR of LoRa® Node **X** - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN™ 1.0.2 specification. |
| at+set_config=lora:tx_power:**X**	| Set the TX Power Level **X** - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN™ 1.0.2 region specification  |
| at+setconfig=lora:send_interval:**X**:**Y**	| Set the time interval for sending data **X** - Enable/disable the mechanism for sending data in intervals. 0: the device will not send data automatically. 1: the device will send data every **Y** seconds. **Y**: Interval time in seconds. This parameter is only valid if X is set to 1.  |
| at+get_config=lora:status	| It will return all of the current information of LoRa®, except the LoRa® Channel |
| at+get_config=lora:channel	| It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly |
| at+set_config=lorap2p:**XXX**:**Y**:**Z**:**A**:**B**:**C**	| Set the Parameters for LoRa® P2P mode. This AT Command is valid when the work ode is LoRaP2P **XXX**:Frequency in Hz. **Y**:Spreading Factor, [6,7,8,9,10,11,12] **Z**:Bandwidth, 0: 125kHz,1: 250kHz,2: 500kHz **A** : Coding Rate,1: 4/5,2: 4/6, 3: 4/7,4: 4/8 **B**: Preamble Length, 5 - 65535 **C**: Power in dBm, 5-20 |
| at+send=lorap2p:**XXX**	| Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. **XXX** : Data in HEX |
| at+set_config=device:gps:**X**	| Turn on or turn off GPS **X** - 0:close,1: open,2: sleep,3: standby |
| at+set_config=device:gps_timeout:**X**	| Set the timeout of searching GPS satellite **X**: Time in seconds |