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

    For OTAA, the example calls `ttn.join()` with the `appEui` and `appKey` you declared.

    ```c
    // ..

    // Runs once
    void setup() {

      // ..

      // Try OTAA with pauses of 6 seconds
      while(!ttn.join(appEui, appKey)){
        delay(6000);
      }
    }
    ```

3.  Select **Sketch > Upload** `Ctrl/⌘ + U` to upload the sketch.

    > Uploads might fail if you still have the Serial Monitor open.

## Send Message (uplink)
The example you uploaded calls `ttn.sendBytes()` to send an uplink message from the device to your application on The Things Network.

Messages are arrays of bytes so you need to encode any (sensor) data you'd like to send as bytes.

```c
// Runs continuously with pauses of 10 seconds
void loop() {

  // Declare and send an array of bytes
  byte payload[] = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };
  ttn.sendBytes(payload, sizeof(payload));

  delay(10000);
}
```

## Decode Message
Still on the dashboard's device page, you should see the messages coming in under the **Messages** section:

![](/assets/dashboard-device-messages-payload.png)

You could now use MQTT or the [TTN Node for Node-RED](/node-red/) to process the payload as it is, but we can also decode it first.

1.  Go back to the application page and click the **<i class="fa fa-pencil"></i> edit** link in the **Application Info** box.
2.  Leave **decoder** selected, paste the following JavaScript code and click **Save**.

    ```js
    function (bytes) {
      return {
        message: String.fromCharCode.apply(null, bytes)
      };
    }
    ```

3.  Go back to the application page and the next message should be decoded:

    ![](/assets/dashboard-device-messages-payload-decoded.png)

## Receive Message (downlink)
Now let's send a message back to the device. Devices can only receive the last message sent to them in response to a message they send themselves. This means that you need to poll The Things Network frequently to not miss any downlink messages.

1.  In the Arduino IDE, replace the call to `ttn.sendBytes()` with the following:

    ```c
    int downlinkBytes = ttn.sendBytes(payload, sizeof(payload));

    if (downlinkBytes > 0) {
      debugSerial.print("Received: ");
      
      for (int i = 0; i < downlinkBytes; i++) {
        debugSerial.print((char) ttn.downlink[i]);
      }
      
      debugSerial.println();
    }
    ```

2.  Select **Sketch > Upload** `Ctrl/⌘ + U` to upload the sketch.
3.  Select **Tools > Serial Monitor** `Ctrl/⌘ + M` to open the Serial Monitor.
4.  On the dashboard, go to the application page.
5.  In the **Devices** box click on the **Dev EUI** of your device to go to its page.
6.  In the **Downlink** box, paste the following hex-encoded list of bytes and click **Send**.

    ```
    48 69
    ```

7.  In the Arduino IDE, you should see the next succesful transmission followed up with the response:

    ```
    Sending: mac tx uncnf 1 with 5 bytes
    Successful transmission. Received 2 bytes
    Received: Hi
    ```