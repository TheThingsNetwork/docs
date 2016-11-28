---
title: LoPy
ambassador:
  name: Daniel Campora
  username: danicampora
section: Hardware
---

# LoPy

With LoRa, Wifi and BLE, the the [LoPy](https://www.pycom.io/solutions/py-boards/lopy/) is the only triple bearer MicroPython enabled micro controller on the market today – the perfect enterprise grade IoT platform for your connected Things.

This guide will walk you through using The Things Network on the LoPy as node.

> The LoPy can also function as a single-channel gateway, but The Things Network discourages the use of single-channel gateways. Use a multi-gateway instead.

## Prerequisites

* [LoPy](https://www.pycom.io/product/lopy/), upgraded to the latest firmware.

  Follow Pycom's [Getting Started](https://www.pycom.io/gettingstarted/) to [upgrade](https://docs.pycom.io/lopy/lopy/general.html#upgrading-with-the-lopy-updater-stand-alone-tool) the [firmware](https://www.pycom.io/support/supportdownloads/) and connect to the LoPy.
  
  > Be aware that you need a male-to-male wire to boot into safe mode.

* [Antenna](https://www.pycom.io/product/lora-antenna-kit/).

  > Using the LoPy without an external antenna might damage it. The connector for the LoRa antenna the one on the side with the button and LED (white square).

* [Expansion Board](https://www.pycom.io/product/expansion-board/).

  > Mount the LoPy with the LED (white square) [positioned on the same side](https://docs.pycom.io/lopy/lopy/tutorial/intro.html#plugging-into-the-expansion-board-and-powering-on) as the Micro-USB connector of the expansion board.
  
**Bonus:** If you use the case, guide the pigtail coming from the LoPy between the LoPy and the row of pins. It should then bent back to the antenna in a way that it doesn't hide the pin labels from you once you close the case.
