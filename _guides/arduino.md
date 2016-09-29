---
title: Arduino
zindex: 998
sections:
 - arduino/_ide.md
 - arduino/_usage.md
 - arduino/_api.md
 - arduino/_examples.md
 - arduino/_resources.md
---

[Arduino](https://www.arduino.cc/en/Guide/Introduction) is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects.

With [The Things Network Library](https://github.com/thethingsnetwork/arduino-device-lib) Arduino Boards can communicate via The Things Network. Both [The Things Uno](/uno/) and The Things Node are Arduino Boards that include a LoRaWAN module.

## Prerequisites

* Access to [staging.thethingsnetwork.org](https://staging.thethingsnetwork.org/).
* Arduino board with [Microchip RN2xx3 module](http://www.microchip.com/design-centers/wireless-connectivity/embedded-wireless/lora-technology) for LoRaWAN.
* Version 0.x of the [The Things Network Arduino Library](https://github.com/thethingsnetwork/arduino-device-lib).

> Since version 0.17, the library now has its [own repository](https://github.com/thethingsnetwork/arduino-device-lib), can be installed via the [Library Manager](https://www.arduino.cc/en/Guide/Libraries#toc3) and has been renamed from `TheThingsUno` to `TheThingsNetwork`. I guess it should have been bumped to 1.x - oops! 😝