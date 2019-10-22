---
title: Adaptive Data Rate
section: Specifications
zindex: 7
redirect_from:
 - current/adr/
---

# LoRaWAN Adaptive Data Rate

Adaptive Data Rate (ADR) is a mechanism for optimizing data rates, airtime and energy consumption in the network. ADR should be enabled whenever an end device has sufficiently stable RF conditions. This means that it can generally be enabled for static devices. If the static end device can determine that RF conditions are unstable (for example, when a car is parked on top of a parking sensor), ADR should (temporarily) be disabled. Mobile end devices should be able to detect when they are stationary for a longer times, and enable ADR during those times. End devices decide if ADR should be used or not, not the application or the network.

To determine the optimal data rate, the network needs some measurements (uplink messages). Currently TTN takes the 20 most recent uplinks, starting at the moment the ADR bit is set. These measurements contains the frame counter, signal-to-noise ratio (SNR) and number of gateways that received each uplink. When a device unsets the ADR bit (because it knows it is moving or it knows RF conditions are unstable), previous measurements are discarded. As soon as the ADR bit is set again, the network starts measuring again.

For each of these measurements, we take the SNR of the best gateway, and we calculate the so-called "margin", which is the measured SNR minus the required SNR to demodulate a message given the data rate. This margin is used to determine how much we can increase the data rate or lower the transmit power. For example, when the network receives a message with data rate `SF12BW125` and SNR `5.0`, that message has a margin of 25 dB. This is a waste of valuable airtime and energy. If we would increase the data rate to `SF7BW125` we would still have a margin of 12.5 dB, but that would be many times more airtime- and energy efficient. We could even lower the transmit power to save even more energy and cause less interference.

There are a several moments when an ADR request is scheduled or sent:

1. The initial ADR Request (for US915 and AU915). This is sent immediately after join and is mainly used to set the channel mask of the device. This one is a bit tricky, because we don't have enough measurements for setting an accurate data rate. To avoid silencing the device, we use an extra "buffer" of a few dB here. This request is only needed with pre-LoRaWAN 1.1 on our v2 stack. With LoRaWAN 1.1 devices on our v3 stack, we can set the channel mask in the JoinAccept message. ABP devices pre-LoRaWAN 1.1 will only get this message once, if they reset after that, they won't get the message again; this issue is also solved by LoRaWAN 1.1.
2. A regular ADR request is scheduled when we have enough measurements and the current data rate is not optimal. The request is only scheduled, and will be attached to an existing application downlink (such as an ACK or downlink payload).
3. An ADR request is sent when we have enough measurements and the device is using DR0 (SF12BW125 in most regions).
4. An ADR request is sent when the device sets the ADRAckReq bit. By default this happens after sending 64 uplinks without receiving a downlink, but as that depends on the device implementation we can't give you an exact number here.

ADR requests are no longer scheduled or sent if the device refused several ADR requests. This could either mean a bad implementation of the device, or a version mismatch between the device and the server.

The algorithm used in The Things Network is based on Semtech's recommended algorithm for rate adaptation. The following diagram outlines the ADR flow as implemented in The Things Network's NetworkServer:

![ADR Overview](adr.png)
