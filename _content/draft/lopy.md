---
title: LoPy
redirect_from:
 - /lopy/
---

Editor notes

* Be aware that the order of the `auth` tuple for `lora.join()` is `AppKey` first, then `AppEUI`.
* To get the LoRa module's MAC to use as Device EUI for registering the LoPy run:

  ```
  >>> import binascii
  >>> from network import LoRa
  >>> lora = LoRa(mode=LoRa.LORAWAN)
  >>> binascii.hexlify(lora.mac())
  b'70b3d5499585fca7'
  ```
  
  In this case the Device EUI is `70b3d5499585fca7` or `70 B3 D5 49 95 85 FC A7`
