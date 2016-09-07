# Send Messages (uplink)

To send messages call [`sendBytes()`](https://github.com/TheThingsNetwork/arduino-library/blob/master/src/TheThingsNetwork.cpp#L247) with an array of bytes and the size:

```c
byte data[3] = { 0x01, 0x02, 0x03 };
ttn.sendBytes(data, sizeof(data));
```