---
title: Quick Start
weight: 1000
---

# Quick Start

In this Quick Start, you'll learn how to initialize a new Node.js application, install the Node.js Application SDK and receive uplink messages from your application.

## Setup
Let's install Node.js, create a Node.js project and install the Node.js Application SDK.

1.  [Download](https://nodejs.org/en/download/) and install Node.js.
2.  Create a new Node.js project:

    ```bash
    cd $HOME
    mkdir app
    cd app
    npm init
    ```

    > Just press return to accept the default answer to any question asked.

3.  Install and save the [Node.js Application SDK](https://www.npmjs.com/package/ttn) as dependency:

    ```bash
    npm install --save ttn
    ```

## Connect
Next, we will write the script that requires the Node.js Application SDK and uses it to connect.

1.  Create the main script and open it in your favorite editor:

    ```bash
    touch index.js
    open index.js
    ```

2.  Import the Node.js Application SDK:

    ```js
    var ttn = require("ttn")
    ```

3.  In the [Console](https://console.thethingsnetwork.org/applications), navigate to the application you'd like to connect to.

5.  In `index.js`, enter the App ID and App Access Key:

    ```js 
    var appID = "foo"
    var accessKey = "ttn-account-v2.eiPq8mEeYRL_PNBZsOpPy-O3ABJXYWulODmQGR5PZzg"
    ```

    Here's where you can find the values in the console:
    
    * For `appID`, copy the value for **Application ID** in the **Application Overview** box.
    * For `accessKey`, scroll down and then show and copy the value for **default key** in the **Access Key** box.

6.  Add a listener for the `connect` and `error` events to test the connection:

    ```js 
    ttn.data(appID, accessKey)
      .then(function (client) {
        client.on("uplink", function (devID, payload) {
          console.log("Received uplink from ", devID)
          console.log(payload)
        })
      })
      .catch(function (error) {
        console.error("Error", error)
        process.exit(1)
      })
    ```
 
7.  Run the script to test the connection:

    ```bash
    node .
    ```

    You should see something like:

    ```bash
    Received uplink from  office-hq
    { app_id: 'office-app',
      dev_id: 'office-hq',
      hardware_serial: '0004A30B001B61DE',
      port: 1,
      counter: 8717,
      payload_raw: <Buffer 01 e9 02 b1 01 69>,
      payload_fields: { celcius: 6.89, light: 489, sound: 361, state: { on: true } },
      metadata:
      { time: '2017-08-31T12:38:35.784566782Z',
        frequency: 868.3,
        modulation: 'LORA',
        data_rate: 'SF7BW125',
        coding_rate: '4/5',
        gateways: [ [Object], [Object], [Object] ] } }
    ```

    Use `Ctrl+C` to terminate the script.

    If you get an error it should say what is wrong:

    ```bash
    Error: Connection refused: Not authorized
    ```

🎉 Congratulations! Now you know how to receive messages in a Node.js script. Go build something! See [API](./api.html) for all the functionality
