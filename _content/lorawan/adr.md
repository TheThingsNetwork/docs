---
title: Adaptive Data Rate
---

# LoRaWAN Adaptive Data Rate

Adaptive Data Rate (ADR) is a mechanism for optimizing data rates, airtime and energy consumption in the network. Only static nodes should use ADR. ADR can also be used by a mobile node that is able to detect when it is "parked" on a fixed spot. Nodes decide if ADR should be used or not, not the application or the network.

From the moment a node indicates that it wants to use ADR, the network will collect metrics of the 20 most recent transmissions from the node. This history contains the frame counter, signal-to-noise ratio (SNR) and number of gateways that received each transmission.

Based on this history, the network can calculate how much "margin" there is to increase the data rate or lower the transmit power. For example, when the network receives a message with data rate `SF12BW125` and SNR `5.0`, that message has a margin of 25 dB. This is a waste of valuable airtime and energy. If we would increase the data rate to `SF7BW125` we would still have a margin of 12.5 dB, but that would be many times more airtime- and energy efficient. We could even lower the transmit power to save even more energy and cause less interference.

The algorithm used in The Things Network is based on Semtech's recommended algorithm for rate adaptation. The following diagram outlines the ADR flow as implemented in The Things Network's NetworkServer:

![ADR Overview](adr.png)
