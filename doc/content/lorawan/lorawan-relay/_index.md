---
title: LoRaWAN Relay
section: The Things Fundamentals
weight: 50
images:
- relay-placement.png
---

LoRaWAN relays are suitable for bridging wireless communication gaps in areas where the gateway and end device cannot directly communicate with each other due to weak signal strength caused by factors such as extreme distance or obstacles between them. They are low-cost, low-power devices. A relay's hardware is equivalent to a standard LoRaWAN end device. A single relay can serve up to 16 end devices. For the Network Server, a relay appears as a standard end device.

The following figure shows how a relay helps to forward/relay a message from an end device to the gateway.

{{< figure src="relay-placement.png" alt="Relay Placement" >}}

Adding a new gateway is a good idea if many devices have a lack of signal reception. But if it's just a few devices, using a relay is a cheaper solution.

## Relay Requirments

The relay specification requirements are described in the  [LoRaWAN® Relay Specification TS011-1.0.0](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay) document.

- End device should implement the LoRaWAN stack, precisely TS001-LoRaWAN L2 1.0.4 and Regional Parameters RP2-1.0.3 specifications, and LoRa Basics Modem firmware. The experimental release of the LoRa Basics Modem firmware can be found [here](https://github.com/Lora-net/SWL2001).
- End device should be implemented with SX1261/2, LR1110, LR1120, or LR1121 sub-GHz LoRa transceiver.
- A LoRaWAN Network Server (e.g., The Things Stack ) supporting the relay specification.

{{< note "The gateways do not need to be updated to support relays." />}}

## How Relay Works?

The following steps describe how an end device communicates with the Network Server through a relay.

The end device and the relay know in advance which channels (frequencies) are used for exchanging frames between them.

The end device that wants to use the support of a relay, first sends a  Wake-on-Radio (WOR) frame. The WOR frame is used to wake up the relay and share the radio parameters like frequency and data rate that will be used in the subsequent uplink frame.

There are two types of WOR frames an end device can send to a relay, whose type can be identified by examining the payload content:

- Relay Join-Request
- Relay Uplink (Class A uplink)

The relay goes to sleep mode if there is no radio activity. Even if the relay is in sleep mode, it periodically scans the channel for any radio activity in a very low-power mode. This channel scanning period is called Channel Activity Detection (CAD). The CAD can be 25ms to 1s (default). The duration between two consecutive CAD is called CADPeriodicity. The WOR frame's preamble has a variable length and can be up to 1s long. This long preamble gives the relay a higher chance of detecting the WOR frame with its very short CAD. If there is no LoRa activity detected during the CAD, the relay goes back to sleep mode.

If the relay detects a LoRa activity during the scan, it switches from CAD to the reception mode. The time taken to switch from CAD to the reception mode is called CadToRx delay. In this mode, the relay demodulates the incoming WOR frame. If the demodulation is successful and the WOR frame is valid, the relay sends the Wake On Radio Acknowledge (WOR-ACK) frame to the end device.

The end device finds the following information in the payload of the WOR-ACK frame. These parameters are then used by the end device to align certain settings with the relay.

- CadToRx - the time required to switch from CAD to the reception mode of WOR
- Forward - indicates the current state of the relay forward limitations
- RelayDataRate- the data rate used by the relay to forward the end device payload
- XTALAccuracy - the crystal frequency accuracy of the relay clock
- CADPeriodicity - the delay between two consecutive CAD scans performed by the relay on a single channel
- TOffset - the time, in milliseconds, between the start of the scan and the end of the reception of the WOR frame preamble. 

The relay listens for the subsequent uplink LoRaWAN frame from the end device. Upon receiving it, the relay prepends a 6-byte metadata field to the frame. The resulting frame is called Relay Uplink FRMPayload. Subsequently, the relay creates a new LoRaWAN frame by inserting the Relay Uplink FRMPayload into its payload field. This new frame is then transmitted to the Network Server through the nearby gateways (FPort = 226). The Network Server handles the message deduplication.

The relay receives any downlink frame from the Network Server (FPort = 226) over RX1 or RX2 slots. Upon receiving it, the relay extracts the actual payload from the LoRaWAN frame and then sends it to the end device over the RXR slot.

## Regional Parameters for Relays

The following regional parameters are applicable to use with relays in different regions.

In EU868, four dedicated channels with a bandwidth of 125 kHz and a spreading factor of 9 are used to communicate between the end device and the relay. Among them, two channels are used to send the WOR frame from the end device to the relay:

| Channel | Frequency |
| ------- | --------- |
| 0 | 856.1 MHz |
| 1 | 865.5 MHz |

Two channels are used to send the WOR-ACK frame from the relay to the end device:

| Channel | Frequency |
| ------- | --------- |
| 0 | 865.3 MHz |
| 1 | 865.9 MHz |

In US915, four dedicated channels with a bandwidth of 500 kHz and a spreading factor of 10 are used to communicate between the end device and the relay. Among them, two channels are used to send the WOR frame from the end device to the relay:

| Channel | Frequency |
| ------- | --------- |
| 0 | 916.7 MHz |
| 1 | 919.9 MHz |

Two channels are used to send the WOR-ACK frame from the relay to the end device:

| Channel | Frequency |
| ------- | --------- |
| 0 | 918.3 MHz |
| 1 | 918.3 MHz |

Refer to the [Regional Parameters Specification 1.0.4](https://resources.lora-alliance.org/document/rp002-1-0-4-regional-parameters) document for channel frequencies, bandwidths, and spreading factors in other regions, such as AU915, CN470, AS923, KR920, IN865, and RU864.

## Security

The relay has root keys (AppKey and NwkKey) the same as those of the standard end device, which are used to derive session keys (AppSKey and NwkSKey). However, these session keys cannot be used to calculate the MIC and encrypt the payload field of WOR and WOR-ACK frames. Therefore, a new root key is defined, called the Root Relay Session Key (RootWorSKey), which is used by both the relay and the end device.

The end device derives the RootWorSKey from its NwkSkey (LoRaWAN Version 1.0.X) or NwkSEncKey (LoRaWAN Version 1.1.X and higher). The relay will also receive a copy of the RootWorSKey from the Network Server.

Based on the RootWorSKey and the DevAddr, two session keys are derived by both the end device and the relay:

- WOR Integrity Session Key (WorSIntKey) - used by both the end device and the relay to calculate and verify the MIC of the WOR and WOR-ACK frames
- WOR Encryption Session Key (WorSEncKey) - used by both the end device and the relay to encrypt/decrypt the payload field of the WOR and WOR-ACK frames