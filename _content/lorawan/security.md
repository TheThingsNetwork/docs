---
title: Security
---

# LoRaWAN Security

LoRaWAN 1.0 specifies a number of security keys: `NwkSKey`, `AppSKey` and `AppKey`. All keys have a length of 128 bits.

The network session key (`NwkSKey`) is used for interaction between the Node and the Network. This key is used to check the validity of messages (MIC check). In the backend of The Things Network this validation is also used to map a non-unique device address (`DevAddr`) to a unique `DevEUI` and `AppEUI`.

The application session key (`AppSKey`) is used for encryption and decryption of the payload. The payload is fully encrypted between the Node and the Handler component of The Things Network (which you will be able to run on your own server). This means that nobody except you is able to read the contents of messages you send or receive.

These two session keys (`NwkSKey` and `AppSKey`) are unique per device, per session. If you dynamically activate your device (OTAA), these keys are re-generated on every activation. If you statically activate your device (ABP), these keys stay the same until you change them.

Dynamically activated devices (OTAA) use the application key (`AppKey`) to derive the two session keys during the activation procedure. In The Things Network you can have a _default_ `AppKey` which will be used to activate all devices, or customize the `AppKey` per device.

## Frame Counters

Because we're working with a radio protocol, anyone will be able to capture and store messages. It's not possible to read these messages without the `AppSKey`, because they're encrypted. Nor is it possible to tamper with them without the `NwkSKey`, because this will make the MIC check fail. It is however possible to re-transmit the messages. These so-called replay attacks can be detected and blocked using frame counters.

When a device is activated, these frame counters (`FCntUp` and `FCntDown`) are both set to `0`. Every time the device transmits an uplink message, the `FCntUp` is incremented and every time the network sends a downlink message, the `FCntDown` is incremented. If either the device or the network receives a message with a frame counter that is lower than the last one, the message is ignored.

This security measure has consequences for development devices, which often are statically activated (ABP). When you do this, you should realize that these frame counters reset to `0` every time the device restarts (when you flash the firmware or when you unplug it). As a result, The Things Network will block all messages from the device until the `FCntUp` becomes higher than the previous `FCntUp`. Therefore, you should re-register your device in the backend every time you reset it.

## Spread Spectrum

> TODO: Explain why spread-spectrum communication is good for security (and reliability)

## Metadata

> TODO: Explain what kind of information can not be encrypted
Anybody with network access can ‘sniff’ the back-haul link between any Gateway and the (TTN) Network server.  All packets can be captured, recorded and analysed – after all this is the Internet and packets have well known formats.  This apparently alarming situation can be demonstrated by a real world example taken during the course of writing this article.

The sniffing command used is tcpdump – a basic tool.  It can collect all network traffic but can have filters applied that are used to narrow down any sniff to look for specific parameters such as source address, destination address and port numbers. 

A typical single gateway transmission can be seen below where the contents has been converted for easy human consumption.  A quick scan through the content reveals the date and time of the transmission along with other parameters that will be familiar from the gateway or applications pages of the main TTN pages. It’s also possible to see that the node that sent the original LoRa packet to the gateway is in very close proximity. 

tcpdump 'port 1700' -A

14:47:45.279919 IP <Gateway Address> <ttn server address port=1700>

{"rxpk":[{"tmst":789603980,"time":"2018-03-29T13:47:45.279764Z","chan":6,"rfch":0,"freq":867.700000,"stat":1,"modu":"LORA","datr":"SF7BW125","codr":"4/5","lsnr":10.8,"rssi":-33,"size":19,"data":"QOEnASYA+RIDabg30ue8KNKS0Q=="}]}

The important point is that the section following the metadata -  data is not in plain text.  There are two reasons for this.  The first is that the data packet is 64 bit encoded, to minimise the data packet size but even when de-encoded the contents are further encrypted by the 128 bit AES imposed by the LoRaWAN layer.  Imposing encryption ensures that all packets are totally intelligible from end to end.  
