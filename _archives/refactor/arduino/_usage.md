# Library Usage
Here's how you include and use The Things Network library.

## Include

To use the library:

1.  Follow [setup](#setup) to install the library in Arduino IDE.
2.  Select **Sketch > Include Library > TheThingsNetwork** to include it.

	Or simply copy and paste:
  
	```c
	#include <TheThingsNetwork.h>
	```

## Initialise

A typical sketch has the following structure:

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

The actual streams you'd pass to `ttn.init()` depend on the board you use and the Serial Port you connected a LoRaWAN module to. For The Things Uno and Node use the Serial Ports and baud rates shown here.

## Activate

In the [`setup()`](https://www.arduino.cc/en/Reference/setup) function, after initialising the library, we have to activate the device.

There are two ways to activate your device. By default your device is registered to use OTAA. You can personalise a device to use ABP.

### Over The Air Activation (OTAA)

For OTAA you will use the `join()` method with the **App EUI** and **App Key** configured for your device.

1.  Right after the include for the library create constants to hold the keys:

    ```c
    const byte appEui[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
    const byte appKey[16] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
    ```

    * For `appEui` use the **Application EUI** found on the device's page on the dashboard. Click `<>` to toggle to the **msb** format and then `📋` to copy.
    * For `appKey` use the **App Key** found on the device page. Click `<>` to toggle to the **msb** format. You'll have to click `👁` to show the key before you can copy it.

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
    const byte devAddr[4] = {0x00, 0x00, 0x00, 0x00};
    const byte nwkSKey[16] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
    const byte appSKey[16] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
    ```

    * For `devAddr ` use the **Device Address** found on the device's page on the dashboard. Click `<>` to toggle to the **msb** format and then `📋` to copy.
    * For `nwkSKey ` use the **Network Session Key**. Click `<>` to toggle to the **msb** format. You'll have to click `👁` to show the key before you can copy it.
    * For `appSKey` use **App Session Key**.

2.  In your `setup()` function, right after you have called `ttn.init()` and `ttn.reset()` call `ttn.personalize()` with the constants you just created:

    ```c
    ttn.personalize(devAddr, nwkSKey, appSKey);
    ```

Your device will now report to the network using these keys.

## Send

To send messages call `ttn.sendBytes()` with an array of bytes and its size. Here's an example that sends the current state of [`LED_BUILTIN`](https://www.arduino.cc/en/Reference/Constants) every 10 seconds:

```c
void loop() {
  byte data[1];
  data[0] = (digitalRead(LED_BUILTIN) == HIGH) ? 1 : 0;
    
  ttn.sendBytes(data, sizeof(data));
  
  delay(10000);
}
```

To minimise your use of the limited daily airtime try to use as little bytes as possible. See the Arduino [Array guide](https://www.arduino.cc/en/Reference/Array) and [Bit Math Tutorial](http://playground.arduino.cc/Code/BitMath#binary) to learn how.

## Receive

You can only receive messages in response to a message you send, even if it is just a single byte.

* The `ttn.sendBytes()` method will return the number of bytes received, if any.
* Get the actual bytes via `ttn.downlink`.
* The port the response addresses can be read from `ttn.downlinkPort`.

Here's the above example with added support to turn the LED on or off by sending a downlink message via port 1:

```c
void loop() {
  byte data[1];
  data[0] = (digitalRead(LED_BUILTIN) == HIGH) ? 1 : 0;
    
  int downlinkSize = ttn.sendBytes(data, sizeof(data));

  if (downlinkSize == 1 && ttn.downlinkPort == 1) {
  
    if (ttn.downlink[0] == 0) {
    	digitalWrite(LED_BUILTIN, LOW);
    	
    } else if (ttn.downlink[0] == 1) {
    	digitalWrite(LED_BUILTIN, HIGH);
    }
  }
  
  delay(10000);
}
```
