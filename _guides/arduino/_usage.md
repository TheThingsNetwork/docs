# Library Usage
Here's how you include and use The Things Network library.

## Include

To use the library:

1. Follow [setup](#setup) to install the library in Arduino IDE.
2. Select **Sketch > Include Library > TheThingsNetwork** to include it.

  Or simply copy and paste:
  
  ```c
  #include <TheThingsNetwork.h>
  ```

## Initialise

Your sketch will have the following template:

```c
#include <TheThingsNetwork.h>

// OTAA or ABP keys
// ..

#define loraSerial Serial1
#define debugSerial Serial

TheThingsNetwork ttn;

void setup() {
  debugSerial.begin(9600);
  loraSerial.begin(57600);

  ttn.init(loraSerial, debugSerial);
  ttn.reset();

  // OTAA or ABP activation
  // ..
}

void loop() {

  // Send and receive messages
  // ..
}
```

The actual streams you'd pass to `ttn.init()` depend on the board you use and the Serial Port you connected a LoRaWAN module to. For The Things Uno and Node use the Serial Ports and baud rates from the template.

## Activate

In the [`setup()`](https://www.arduino.cc/en/Reference/setup) function, after initialising the library, we have to activate the device.

There are two ways to activate your device.

### Over The Air Activation (OTAA)

For OTAA you will use the `join()` method with the **App EUI** and **App Key** configured for your device.

1.  Right after the include for the library create constants to hold the keys:

    ```c
    const byte appEui[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xE0, 0xE0, 0x01, 0x4A1};
    const byte appKey[16] = {0x73, 0x6D, 0x24, 0xD2, 0x69, 0xBE, 0xE3, 0xAE, 0x0E, 0xCE, 0xF0, 0xBB, 0x6C, 0xA4, 0xBA, 0xFE};
    ```

    * For `appEui` use the **App EUI** found on the application's page on the dashboard. Click `<>` to toggle to the **msb** format and then `📋` to copy.
    * For `appKey` use the **App Key** found on the device's page under the application. Click `<>` to toggle to the **msb** format. You'll have to click `👁` to show the key before you can copy it.

2.  In your `setup()` function, right after you have called `ttn.init()` and `ttn.reset()` call `ttn.join()` with the constants you just created:

    ```c
    while (!ttn.join(appEui, appKey)) {
      delay(10000);
    }
    ```

Your device will now try to activate via OTAA every 10 seconds until it succeeds.

### Activation By Personalization (ABP)

For ABP you will use the `personalize()` method with the device's **Dev EUI**, **Network Session Key** and **App Session Key**.

1.  Right after the include for the library create constants to hold the keys:

    ```c
    const byte devAddr[4] = {0x02, 0xDE, 0xAE, 0x00};
    const byte nwkSKey[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C};
    const byte appSKey[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C};
    ```

    * For `devAddr ` use the **Dev Address** found on the device's page on the dashboard. Click `<>` to toggle to the **msb** format and then `📋` to copy.
    * For `nwkSKey ` use the **Network Session Key**. Click `<>` to toggle to the **msb** format. You'll have to click `👁` to show the key before you can copy it.
    * For `appSKey` use **App Session Key**.

2.  In your `setup()` function, right after you have called `ttn.init()` and `ttn.reset()` call `ttn.personalize()` with the constants you just created:

    ```c
    ttn.personalize(devAddr, nwkSKey, appSKey);
    ```

Your device will now report to the network using these keys.

## Send

To send messages call `ttn.sendBytes()` with an array of bytes and the size:

```c
byte data[3] = { 0x01, 0x02, 0x03 };
ttn.sendBytes(data, sizeof(data));
```

To minimise your use of the limited daily airtime try to use as little bytes as possible. See the Arduino [Array guide](https://www.arduino.cc/en/Reference/Array) and [Bit Math Tutorial](http://playground.arduino.cc/Code/BitMath#binary) to learn more.

## Receive

You can only receive messages in response to a message you send, even if it is just a single byte.

* The `ttn.sendBytes()` method will return the number of bytes received, if any.
* Get the actual bytes via `ttn.downlink`.
* The port the response addresses can be read from `ttn.downlinkPort`.

Your `loop()` function might look like:

```c
void loop() {
  byte send[1] = { 0x01 };
  int downlinkBytes = ttn.sendBytes(send, sizeof(send));

  if (downlinkBytes > 0) {
    debugSerial.print("Received " + String(downlinkBytes) + " bytes via " + String(ttn.downlinkPort) + ": ")

    for (int i = 0; i < downlinkBytes; i++) {
      debugSerial.print(String(ttn.downlink[i]) + " ");
    }

    debugSerial.println();
  }
  
  delay(10000);
}
```