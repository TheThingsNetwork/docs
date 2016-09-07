# Receive Messages (downlink)

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