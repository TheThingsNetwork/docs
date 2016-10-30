---
title: LoPy
redirect_from:
 - /lopy/
---

Editor notes

* To get the LoRa module's MAC to use as Device EUI for registering the LoPy run:

  ```
  >>> from network import LoRa
  >>> import binascii
  >>> lora = LoRa(mode=LoRa.LORAWAN)
  >>> DEUI = binascii.hexlify(lora.mac()).upper().decode('utf-8')
  >>> print('%s %s %s %s %s %s %s %s' % (DEUI[:2], DEUI[2:4], DEUI[4:6], DEUI[6:8], DEUI[8:10], DEUI[10:12], DEUI[12:14], DEUI[14:16]))
  70 B3 D5 49 95 85 FC A7
  ```
  
  In this case the Device EUI is `70 B3 D5 49 95 85 FC A7`
  
Joining a LoRaWAN network:

* To join using OTAA:

```
from network import LoRa
import time
import binascii

lora = LoRa(mode=LoRa.LORAWAN)

app_eui = binascii.unhexlify('AD A4 DA E3 AC 12 67 6B'.replace(' ',''))
app_key = binascii.unhexlify('11 B0 28 2A 18 9B 75 B0 B4 D2 D8 C7 FA 38 54 8B'.replace(' ',''))

lora.join(activation=LoRa.OTAA, auth=(app_eui, app_key), timeout=0)

# wait until the module has joined the network
while not lora.has_joined():
    time.sleep(2.5)
    print('Not joined yet...')

print('Network joined!)
```

* To join using ABP:

```
from network import LoRa
import binascii
import struct

lora = LoRa(mode=LoRa.LORAWAN)

dev_addr = struct.unpack(">l", binascii.unhexlify('00 00 00 01'.replace(' ','')))[0]
nwk_swkey = binascii.unhexlify('2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C'.replace(' ',''))
app_swkey = binascii.unhexlify('2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C'.replace(' ',''))

lora.join(activation=LoRa.ABP, auth=(dev_addr, nwk_swkey, app_swkey))
```

After joining the network, create a LoRa socket to send packets:

```
import socket
s = socket.socket(socket.AF_LORA, socket.SOCK_RAW)
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 5)
s.setblocking(False)
s.send(bytes([1, 2, 3]))
```

Use socket options to configure the desired data rate. The minimmum data rate supported is 0 and the maximum is 7. For instance:

```
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 0)
```

It's also possible to configure the socket timeout or to make it blocking, e.g.:

```
s.setblocking(True)   # Make the socket blocking, socket.send() won't return until completed
s.settimeout(3.5)     # Configure the timeout of the socket to 3.5 seconds
```
