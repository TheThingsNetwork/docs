---
title: What is LoRa
---

# What is LoRa

LoRa&reg; is a trademark of the [Semtech company](http://www.semtech.com/wireless-rf/lora.html). Originally intended to be an abbreviation of Long Range, but also Low Power. LoRa is a wireless protocol designed with the Internet-of-Things (IoT) in mind. In normal situations LoRa can reach multiple kilometres, using a quarter of the power of a WiFi connection. Because LoRa is so low power, devices incorporating it can last for years on the same battery. Compared to other radio standards that can reach the same distance, LoRa hardware is very low-cost.

## Long distance

What makes LoRa special is the long range that the signal can travel and still be successfully received. For long range one normally needs high power, but in the case of LoRa long range is achieved using a weak low power signal. This directly affects the lifetime of your device and allows remote devices to operate from batteries and small solar panels.

In information theory we have the [Shannon-Hartley theorem](https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem) that indicates what the maximum speed is at which you can communicate across a channel. When using radio it boils down to: the further you need to communicate, the slower you need to communicate. It is important to keep this in mind when using LoRa. By design LoRa uses a low data rate to make it possible for the signal to be received at a greater distance. The speed of LoRa can not at all be compared to WiFI or 3G. When using LoRa you are limited to sending a couple of bytes per minute. Think about a temperature sensor sending its value every 10 minutes. LoRa will never work for the transmission of video or photos. For more bandwidth it is recommended to switch to WiFi or 3G.

A LoRa signal is normally transmitted in a channel of 125kHz, 250kHz or 500kHz wide. To encode data the signal is shifted around within this channel, create so-called "chirps". From there the name Chirp Spread Spectrum modulation for the technique that is used by LoRa.

## References
* Semtech - http://www.semtech.com/
* LoRa crash course by Thomas Telkamp - https://www.youtube.com/watch?v=T3dGLqZrjIQ
* RN2483 command reference module
* SX1276 datasheet