# Quick Start

This guide will walk you through programming The Things Uno to send and receive your first message via The Things Network.

{% include arduino/setup.md bump="#" %}

> See the [Arduino Guide](/arduino/) for more details.

## Connect Device

1. Use the included Micro-USB cable to connect The Things Uno to an USB power of your computer.
2. In Arduino IDE select **Tools > Board > Arduino Leonardo**.
3. Navigate to **Tools > Port** and select the port that identifies as **Arduino Leonardo**.

If you don't see a port that identifies as **Arduino Leonardo** make sure The Things Uno's power LED is on and check the cable and USB port you have used. See [Arduino Troubleshooting](https://www.arduino.cc/en/Guide/Troubleshooting#toc16) for more suggestions.

{% include lora/deveui.md bump="#" %}

{% include dashboard/create-application.md bump="#" %}

## Register Device
Devices need to be registered with an application in order to send and receive messages via it.

1.  In the **Devices** section of the Application page, click **register device**. 

    ![Register Device (OTAA)](/assets/register-device-otaa.png)

2.  On the **Register Device** screen leave **OTAA** selected.

    > See the [Dashboard / Register Device](/dashboard/#register-device) guide for more details on OTAA and its alternative ABP.

3.  Enter the **Dev(ice) EUI** you obtained earlier. When the format is correct, the **Register** button should become enabled.
4.  Leave the **App Key** to be randomly generated.
5.  Click **Register** to finish and get redirected to the device page:

    ![](/assets/device-info-otaa.png)

## Activate Device
Now that you have registered the device you need to activate it from the device itself.

1.  In Arduino IDE, select **File > Examples > TheThingsNetwork > [SendOTAA](https://github.com/TheThingsNetwork/arduino-library/blob/master/examples/SendOTAA/SendOTAA.ino)**.
2.  Copy the **App EUI** and **App Key** from the device page to the example.

    > Use <code><i class="fa fa-eye"></i></code> to show obfuscated keys and <code><i class="fa fa-code"></i></code> to toggle to **msb**. Then use <code><i class="fa fa-clipboard"></i></code> to copy.
    >
    > ![App Key](/assets/app-key.png)

    The first lines of the sketch should now look like:

    ```c
    #include <TheThingsNetwork.h>

    // Set your AppEUI and AppKey
    const byte appEui[8] = { 0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x00, 0x0A, 0xFB };
    const byte appKey[16] = { 0x9D, 0x5B, 0x5E, 0x5E, 0xAF, 0x1D, 0x20, 0x04, 0xDB, 0x79, 0xFA, 0xDB, 0x06, 0x3E, 0xD1, 0xA1 };
    ```

3.  Select **Sketch > Upload** `Ctrl/⌘ + U` to upload the sketch.

The example takes care of initializing The Things Network library by calling `ttn.init(loraSerial, debugSerial)` and activating the device by calling `ttn.join(appEui, appKey)`.

## Send Message
The example you uploaded calls `ttn.sendString(message)` with `message` defined as `Hello world`. You can find this code in [`loop()`](https://www.arduino.cc/en/Reference/Loop) with means it will execute continuously after sleeping for 20 seconds, thanks to `delay(20000)`.

Still on the dashboard's device page, you should see the messages coming in under the **Messages** section. As you can see the payload isn't `Hello world` as we expected:

![](/assets/dashboard-device-messages-payload.png)

This is because `sendString()` encodes the string as bytes (which is `48 65 6C 6C 6F 20 77 6F 72 6C 64`) and by default decoded using base64 as `SGVsbG8gd29ybGQ=`. To decode it we'll use:

```js
function (bytes) {
  return {
    payload: String.fromCharCode.apply(null, bytes)
  };
}
```