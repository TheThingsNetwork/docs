---
title: Modulation & Data Rate
section: Specifications
zindex: 8
---

# Modulation and Data Rate

In most cases LoRaWAN uses LoRa modulation. LoRa modulation is based on Chirp spread- spectrum technology, which makes it work well with channel noise, multipath fading and the Doppler effect, even at low power.

The data rate depends on the used bandwidth and spreading factor. LoRaWAN can use channels with a bandwidth of either 125 kHz, 250 kHz or 500 kHz, depending on the region or the frequency plan. The spreading factor is chosen by the end-device and influences the time it takes to transmit a frame.

> **The Data Rate Story**: There are three knobs you can turn: transmission power, bandwidth and spreading factor. If you lower the tx power, you'll save battery, but the range of the signal will obviously be shorter. The other two knobs combined form the data rate. This determines how fast bytes are transmitted. If you increase the data rate (make the bandwidth wider or the spreading factor lower) you can transmit those bytes in a shorter time. For those, the calculation is approximately as follows: Making the bandwidth 2x wider (from BW125 to BW250) allows you to send 2x more bytes in the same time. Making the spreading factor 1 step lower (from SF10 to SF9) allows you to send 2x more bytes in the same time. Lowering the spreading factor makes it more difficult for the gateway to receive a transmission, as it will be more sensitive to noise. You could compare this to two people taking in a noisy place (a bar for example). If you're far from each other, you have to talk slow (SF10), but if you're close, you can talk faster (SF7)