# Send & Receive Messages

Now you've registered an application and registered a device and activated the device, you are all set to communicate over The Things Network.

## Send (uplink)

To send messages you will use [`sendBytes()`](https://github.com/TheThingsNetwork/arduino-library/blob/master/src/TheThingsNetwork.cpp#L247) with raw bytes. It takes a buffer with bytes plus the size of the buffer.

In your `loop()` function this looks like:

```c
byte data[3] = { 0x01, 0x02, 0x03 };
ttn.sendBytes(data, sizeof(data));
```

> There's also a method `sendString()` which calls [`getBytes()`](https://www.arduino.cc/en/Reference/StringGetBytes) on the String to copy its characters to a supplied buffer.

## Receive (downlink)

You can only receive messages in response to a message you send. What we will do is send a single byte and `sendBytes()` will respond with the length of the response. We can then read the response from the library's public `downlink` variable.

In your `loop()` function this looks like:

```c
  byte send[1] = { 0x01 };
  int downlinkBytes = ttn.sendBytes(send, 1);

  if (downlinkBytes > 0) {
    debugSerial.print("Received " + String(downlinkBytes) + " bytes: ")

    for (int i = 0; i < downlinkBytes; i++) {
      debugSerial.print(String(ttn.downlink[i]) + " ");
    }

    debugSerial.println();
  }
```