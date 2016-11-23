---
title: API Reference
---

# API Reference

Include TheThingsNetwork library:

```c
#include <TheThingsNetwork.h>
```

## Method: reset
Reset the LoRaWAN module. In most cases you'd call this with no arguments before calling `init()`.

```c
void reset(bool adr = true, int sf = DEFAULT_SF, int fsb = DEFAULT_FSB);
```

- `bool adr = true` **TODO**
- `int sf = DEFAULT_SF` **TODO**
- `int fsb = DEFAULT_FSB` **TODO**

## Method: init
Initialize the library with the streams it should communicate with.

```c
void init(Stream& modemStream, Stream& debugStream);
```

- `Stream& modemStream`: Stream to the LoRaWAN modem.
- `Stream& debugStream`: Stream to write debug logs to.

For The Things Uno and Node use `Serial1` and `Serial`.

## Method: showStatus
Writes information about the device and LoRaWAN module to `debugStream`.

```c
void showStatus();
```

Will write something like:

```bash
Device Information

EUI: 0004A30B001B672E
Battery: 3304
AppEUI: 0000000000000000
DevEUI: 0004A30B001B672E
DevAddr: 00000000
Data Rate: 5
RX Delay 1: 1000
RX Delay 2: 2000

use the device `EUI` to register the device for OTAA
```

## Method: join
Activate the device via OTAA.

```c
bool join(const byte appEui[8], const byte appKey[16]);
```

- `const byte appEui[8]`: Application EUI the device is registered to.
- `const byte appKey[16]`: Application Key assigned to the device.

Returns `true` or `false` depending on whether it received confirmation that the activation was successful. You'll probably call this method in a while to retry until it returns true:

```c
while (!ttn.join(appEui, appKey)) {
  delay(10000);
}
```

See [Library Usage / Activate](#activate).

## Method: personalize
Activate the device via ABP.

```c
bool personalize(const byte devAddr[4], const byte nwkSKey[16], const byte appSKey[16]);
```

- `const byte devAddr[4]`: Dev(ice) Address assigned to the device.
- `const byte nwkSKey[16]`: Network Session Key assigned to the device.
- `const byte appSKey[16]`: App(lication) Session Key assigned to the device.

See [Library Usage / Activate](#activate).

## Method: sendBytes
Send a message to the application using raw bytes.

```c
int sendBytes(const byte* buffer, int length, int port = 1, bool confirm = false);
```

- `const byte* buffer`: Bytes to send.
- `int length`: The number of bytes. Use `sizeof(buffer)` to get it.
- `int port = 1`: The port to address. Defaults to `1`.
- `bool confirm = false`: Whether to ask for confirmation.

	- **TODO:** How does one check the result?

Returns the size of the message received in response, if any. Use `downlink` for the actual bytes received.

## Method: sendString
Send a message to the application using a string, which the library will encode as bytes for you.

> To minimize air time we advise not to use this method and try to use a minimal amount of bytes to communicate your message.

```c
int sendString(String message, int port = 1, bool confirm = false);
```

- `String message`: String to encode and send.
- `int port = 1`: The port to address. Defaults to `1`.
- `bool confirm = false`: Whether to ask for confirmation.

	- **TODO:** How does one check the result?

Returns the size of the message received in response, if any. Use `downlink` for the actual bytes received.

## Property: downlinkPort
The port the last message received was addressed to.

```c
int downlinkPort
```

## Property: downlink
The last message received.

```c
byte downlink[64];
```
