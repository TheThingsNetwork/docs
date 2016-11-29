---
title: Quick Start
zindex: 10
---

# Quick Start

This guide will walk you through setting up a Node.js project that listens to device activations and messages and responds to every 3rd message.

> This guide assumes the sketch and payload functions of [The Things Uno / Quick Start](../../devices/uno/quick-start.md), but can be easily applied to any other.

The full script that we will build is also included as [example](https://github.com/TheThingsNetwork/node-app-lib/blob/master/src/example.js) in the Node.js library. You can even modify and run it directly in your browser via the [Live Example](live.md).

## Setup
Let's install Node.js, create a Node.js project and install the TTN Client.

1.  [Download](https://nodejs.org/en/download/) and install Node.js.
2.  Create a new Node.js project:

    ```bash
    cd $HOME
    mkdir app
    cd app
    npm init
    ```

    > Just press return to accept the default answer to any question asked.

3.  Install and save the [TTN Client](https://www.npmjs.com/package/ttn) as dependency using the refactor tag:

    ```bash
    npm install --save ttn@refactor
    ```

## Connect
Next, we will write the script that requires the TTN Client module and uses it to connect.

1.  Create the main script and open it in your favorite editor:

    ```bash
    touch index.js
    open index.js
    ```

2.  Require the TTN Client module:

    ```js
    var ttn = require('ttn');
    ```

3.  In the [console](https://preview.console.thethingsnetwork.org/applications), navigate to the application you'd like to connect to.

5.  In the editor, create an instance of the client:

    ```js 
    var region = 'eu';
    var appId = 'hello-world';
    var accessKey = '2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo=';
    
    var client = new ttn.Client(region, appId, accessKey);
    ```

    Here's where you can find the values in the console:
    
    * For `region`, copy the part following `ttn-handler-` for **Handler Status** in the **Application Overview** box.
    * For `appId`, copy the value for **Application ID** in the **Application Overview** box.
    * For `accessKey`, scroll down and then show and copy the value for **default key** in the **Access Key** box.

6.  Add a listener for the `connect` and `error` events to test the connection:

    ```js 
    client.on('connect', function(connack) {
        console.log('[DEBUG]', 'Connect:', connack);
    });
    
    client.on('error', function(err) {
        console.error('[ERROR]', err.message);
    });
    ```
 
7.  Run the script to test the connection:

    ```bash
    node .
    ```

    You should see something like:

    ```bash
    [DEBUG] Connect: Packet {
      cmd: 'connack',
      retain: false,
      qos: 0,
      dup: false,
      length: 2,
      topic: null,
      payload: null,
      sessionPresent: false,
      returnCode: 0 }
    ```

    Use `Ctrl C` to terminate the script.

    If you get an error it should say what is wrong:

    ```bash
    [ERROR] Connection refused: Not authorized
    ```

    > Make sure you have used the **Application ID** and not an **Application EUI** like version 1.x of the client.

## Receive Activations
Now that we are connected, let's listen for new device activations.

> Be aware that you will only receive `activation` events since the moment the script connects.

1.  Add a listener for the `activation` event:

    ```js
    client.on('activation', function(deviceId, data) {
        console.log('[INFO] ', 'Activation:', deviceId, data);
    });
    ```

2.  Run the script again:

    ```bash
    node .
    ```

3.  Power up, reset or upload a new sketch to a device to force it to activate and you should see something like:

    ```bash
    [INFO]  Activation: my-uno {
      app_eui: '70B3D57EF000001C',
      dev_eui: '0004A30B001B7AD2',
      dev_addr: '2601205D',
      metadata:
       { time: '2016-09-08T13:57:03.415027706Z',
         frequency: 868.1,
         modulation: 'LORA',
         data_rate: 'SF7BW125',
         coding_rate: '4/5',
         gateways: [ [Object] ] } }
    ```

    Use `Ctrl C` to terminate the script.    

## Receive Messages
Now let's listen for actual messages coming in from devices.

1.  Add a listener for the `message` event:

    ```js
    client.on('message', function(deviceId, data) {
        console.info('[INFO] ', 'Message:', deviceId, JSON.stringify(data, null, 2));
    });
    ```

2.  Run the script again:

    ```bash
    node .
    ```

    You should see messages come in like:

    ```bash
    [INFO]  Message: my-uno {
      "port": 1,
      "counter": 0,
      "payload_raw": "AQ==",
      "payload_fields": {
        "led": true
      },
      "metadata": {
        "time": "2016-09-08T13:57:08.685529132Z",
        "frequency": 868.3,
        "modulation": "LORA",
        "data_rate": "SF7BW125",
        "coding_rate": "4/5",
        "gateways": [
          {
            "eui": "B827EBFFFE87BD22",
            "timestamp": 1064899219,
            "time": "2016-09-08T13:57:08.673927Z",
            "channel": 1,
            "rssi": -54,
            "snr": 8.2,
            "rf_chain": 1
          }
        ]
      }
    }
    ```

## Send Messages
The most common [Class A](https://www.lora-alliance.org/What-Is-LoRa/Technology) LoRaWAN devices - including The Things Node and Uno - can only receive the last scheduled message in response to a message they send.

1.  In the Arduino IDE, select **Tools > Serial Monitor** `Ctrl/⌘ Shift M`.

2.  In the editor for the script, add another listener for the `message` event:

    ```js
    client.on('message', null, 'led', function(deviceId, led) {
    
      // Toggle the LED
      var payload = {
        led: !led
      };
    
      // If you don't have an encoder payload function:
      // var payload = [led ? 0 : 1];
    
      console.log('[DEBUG]', 'Sending:', JSON.stringify(payload));
      client.send(deviceId, payload);
    });
    ```
    
    This is what it will do:
    
    * Subscribe to any (`null`) device, but only the `led` field.
    * Create a new payload to toggle the current `led` value.
    * Send it off to the device we received the message of.

4.  Run the script again:

    ```bash
    node .
    ```

    After every message the script should output:

    ```
    [DEBUG] Sending: {"led":true}
    ```

    Via the Serial Monitor you should see the message coming in:

    ```
    -- LOOP
    Sending: mac tx uncnf 1 with 1 bytes
    Successful transmission. Received 1 bytes
    LED: on
    ```

🎉 Congratulations! Now you know how to process and send messages from a Node.js script. Go build something!
