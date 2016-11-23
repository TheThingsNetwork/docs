---
title: Usage
---

# Usage
This is how you perform common tasks to use The Things Network on the LoPy. This assumes you are familiar with [MicroPython for LoPy](https://docs.pycom.io/lopy/) documentation.

## Register your Device EUI

To [register](../../v2-preview/console/#register-device) your device to a The Things Network application, you will need a unique Device EUI. You can either let The Things Network generate a Device EUI or use the unique MAC address of the LoRa module on the LoPy MAC. This is how you get the MAC address:

1.  [Start a MicroPython REPL prompt](https://docs.pycom.io/lopy/lopy/tutorial/repl.html), probably via [Telnet](https://docs.pycom.io/lopy/lopy/general.html#telnet-repl).

    > If you don't want to guess the USB port or IP address every time you want to connect to it, [configure your LoPy with a static IP](https://docs.pycom.io/lopy/lopy/tutorial/wlan.html).

2.  Run the following commands in the REPL:

    ```bash
    from network import LoRa
    import binascii
    lora = LoRa(mode=LoRa.LORAWAN)
    print(binascii.hexlify(lora.mac()).upper().decode('utf-8'))
    ```
  
    This should print your Device EUI like:
    
    ```bash
    70B3D5499585FCA1
    ```
    
3. Follow the steps to [register your device](../../v2-preview/console/#register-device).
  
## Activate your Device

Once you have registered your device you can now activate it via either OTAA or ABP. OTAA is the preferred method.

You'll probably want to program your your device via [Pymakr](https://www.pycom.io/solutions/pymakr/) or modify the `flash/main.py` file via [FTP](https://docs.pycom.io/lopy/lopy/general.html#local-file-system-and-ftp-access) instead of using the REPL.

### OTAA

Copy and paste your device's **Application EUI** and **Application Key** from the The Things Network Console and use the following code to activate via OTAA:

```python
from network import LoRa
import time
import binascii

lora = LoRa(mode=LoRa.LORAWAN)

app_eui = binascii.unhexlify('0000000000000000')
app_key = binascii.unhexlify('00000000000000000000000000000000')

lora.join(activation=LoRa.OTAA, auth=(app_eui, app_key), timeout=0)

# wait until the module has joined the network
while not lora.has_joined():
    time.sleep(2.5)
    print('Not joined yet...')

print('Network joined!')
```

> To monitor the logs, connect to the [Telnet REPL](https://docs.pycom.io/lopy/lopy/general.html#telnet-repl). This is also comes into use to to [soft-reboot](https://docs.pycom.io/lopy/lopy/tutorial/repl.html#resetting-the-board) the board after modifying `main.py`. Simply press `CTRL+D` to interrupt the active script and `CTRL+D` to soft reboot.

### ABP

Copy and paste your device's **Device Address**, **Network Session Key** and **Application Session Key** from the The Things Network Console and use the following code to activate via ABP:

```python
from network import LoRa
import binascii
import struct

lora = LoRa(mode=LoRa.LORAWAN)

dev_addr = struct.unpack(">l", binascii.unhexlify('00000000'))[0]
nwk_swkey = binascii.unhexlify('00000000000000000000000000000000')
app_swkey = binascii.unhexlify('00000000000000000000000000000000')

lora.join(activation=LoRa.ABP, auth=(dev_addr, nwk_swkey, app_swkey))
```

## Send a Message

After activation, you can send bytes over The Things Network like this:

```python
import socket
s = socket.socket(socket.AF_LORA, socket.SOCK_RAW)
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 5)
s.setblocking(False)
s.send(bytes([1, 2, 3]))
```

Use socket options to configure the desired data rate. The minimum data rate supported is 0 and the maximum is 7. For instance:

```
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 0)
```

It's also possible to configure the socket timeout or to make it blocking, e.g.:

```
s.setblocking(True)   # Make the socket blocking, socket.send() won't return until completed
s.settimeout(3.5)     # Configure the timeout of the socket to 3.5 seconds
```

## Receive Messages

After joining the network, create a LoRa socket, send a packet, and then try to receive:

```python
import socket
import time
s = socket.socket(socket.AF_LORA, socket.SOCK_RAW)
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 5)
s.setblocking(False)
s.send(bytes([1, 2, 3]))
time.sleep(3.0) # wait for the tx and rx to complete
rx_pkt = s.recv(64)   # get the packet received (if any)
print(rx_pkt)
```

Reception happens in the background automatically, therefore `s.recv(64)` will simply fecth data from the receive queue. If the receive queue is empty, the ``recv`` method will raise a **OSError** exception with an **EAGAIN** error code . Be careful when using blocking sockets, as in that case,``recv`` will block indefinitely until something arrives (which might never happen if you are not able to send again...). The best is to set a sensible timeout value for the socket, for instance, after the network is joined:

```python
import socket
import time
s = socket.socket(socket.AF_LORA, socket.SOCK_RAW)
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 5)
s.setblocking(False)
s.send(bytes([1, 2, 3]))
s.settimeout(3.0) # configure a timeout value of 3 seconds
try:
   rx_pkt = s.recv(64)   # get the packet received (if any)
   print(rx_pkt)
except socket.timeout:
  print('No packet received')
```

In the case above, if after 3 seconds there's no packet received, the call to ``s.recv(64)`` will raise a timeout exception.
