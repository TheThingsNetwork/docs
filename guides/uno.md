---
layout: guide
title: The Things Uno
permalink: /uno/
sections:
- "uno/hello.md"
- "uno/arduino.md"
- "dashboard/register-application.md"
- "arduino/register-device.md"
- "arduino/activate-device.md"
- "arduino/send-receive.md"
---

<a href="https://shop.thethingsnetwork.com/index.php/product/the-things-uno/" target="_blank">The Things Uno</a> is based off the [Arduino Leonardo](https://www.arduino.cc/en/Guide/ArduinoLeonardoMicro) ([not the Arduino Uno](https://www.arduino.cc/en/Guide/ArduinoLeonardoMicro#toc9)) with added [Microchip LoRaWAN module](http://www.microchip.com/design-centers/wireless-connectivity/embedded-wireless/lora-technology) and (with exception of beta boards) uFL connector for an optional external antenna. It is fully compatible with the [Arduino IDE](https://www.arduino.cc/en/Main/Software) and [existing shields](http://shieldlist.org/).

It's the perfect board to start prototyping your IoT ideas or make an existing project wireless with up to 10km range by simply swapping boards.

This guide will walk you through programming The Things Uno to send and receive messages via The Things Network. We will:

1. Setup the Arduino IDE and The Things Network Library.
2. Register an application Application on The Things Network.
3. Register and Activate a Device via either of two available mechanisms.
4. Send a message from a Device.
5. Receive a (response) message on the Device.