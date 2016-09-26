---
layout: guide
title: Arduino
zindex: 998
sections:
 - arduino/_ide.md
 - arduino/_usage.md
 - arduino/_api.md
 - arduino/_bytes.md
 - arduino/_examples.md
 - arduino/_resources.md
---

[Arduino](https://www.arduino.cc/en/Guide/Introduction) is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects.

With [The Things Network Library](https://github.com/thethingsnetwork/arduino-device-lib) Arduino Boards can communicate via The Things Network. Both [The Things Uno](/uno/) and [The Things Node](/node/) are Arduino Boards that include a LoRaWAN module.

## Prerequisites

* Access to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/).
* Arduino board with [Microchip RN2xx3 module](http://www.microchip.com/design-centers/wireless-connectivity/embedded-wireless/lora-technology) for LoRaWAN.
* Version 0.x of the [The Things Network Arduino Library](https://github.com/thethingsnetwork/arduino-device-lib).

<div class="alert alert-danger"><strong>Warning:</strong> The APIs for these versions of the library and backend might still change and the database (registered application and devices) reset. Do not use in production!</div>
