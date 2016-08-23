# Retrieving the data

Now that the hardware transmits the data to the network, it can be retrieved by the TTN MQTT broker. We'll use Node-RED to retrieve the data from the TTN server.

1. Host your own [version of Node-RED](http://nodered.org/docs/).
2. Boot Node-RED by entering `node-red` in your command line.

    ```
    node-red

    Welcome to Node-RED
    ===================

    9 May 15:15:29 - [info] Node-RED version: v0.13.4
    9 May 15:15:29 - [info] Node.js  version: v4.4.3
    9 May 15:15:29 - [info] Windows_NT 6.3.9600 x64 LE
    9 May 15:15:29 - [info] Loading palette nodes
    9 May 15:15:31 - [warn] ------------------------------------------
    9 May 15:15:31 - [warn] Failed to register 2 node types
    9 May 15:15:31 - [warn] Run with -v for details
    9 May 15:15:31 - [warn] ------------------------------------------
    9 May 15:15:31 - [info] Settings file  : C:\Users\ludo\AppData\Roaming\npm\node_modules\node-red\settings.js
    9 May 15:15:31 - [info] User directory : C:\Users\ludo\.node-red
    9 May 15:15:31 - [info] Flows file : C:\Users\ludo\.node-red\flows_Ludo-ROG.json
    9 May 15:15:31 - [info] Creating new flow file
    9 May 15:15:31 - [info] Starting flows
    9 May 15:15:31 - [info] Started flows
    9 May 15:15:31 - [info] Server now running at http://127.0.0.1:1880/
    ```

Navigate to your browser and enter the url (http://127.0.0.1:1880/) that is given by the Node-RED application. You should see the following web page:

![]({{ site.baseurl }}/assets/node-red.png)

## Building the data flow

1. Open up your Node-RED.
2. Now build the flow by placing the following block from the left component window in your sketch:
  1. Get the mqtt component:         **input > 'mqtt'**.

        ![]({{ site.baseurl }}/assets/mqtt-comp.png)       

  2. Get your json component:      **function > 'Json'**.

        ![]({{ site.baseurl }}/assets/json-comp.png)

  3. Get your function component:   **function > 'function'**

        ![]({{ site.baseurl }}/assets/function-comp.png)

  4. Get your Debug component:      **output > 'Debug'**

        ![]({{ site.baseurl }}/assets/debug-comp.png)

4. Now connect all the components together as listed above.

     ![]({{ site.baseurl }}/assets/flow.png)

5. Configure the `mqtt component`:
    1. Double-click the `mqtt component`
    2. Click on the pencil icon
    3. **under connection:***   Enter for server:   `staging.thethingsnetwork.org`

         ![]({{ site.baseurl }}/assets/connection.png)

    4. **under security:**      Enter for Username: `your AppEui`
    5. **under security:**      Enter for password: `the corresponding Access Key`

        The `AppEui` and `Access key` can be looked up in the [ttnctl tool](http://gruifin.github.io/cookbook/the-things-uno/# create-application).

        ![]({{ site.baseurl }}/assets/security.png)

    6. Click the **update** button
    7. Enter for Topic: `+/devices/+/up`

        ![]({{ site.baseurl }}/assets/mqtt.png)

6. Configure the `function component`
    1. Double-click the `function component`
    2. add the following code to your function
    3. Click the Ok button

        ![]({{ site.baseurl }}/assets/function-ex.png)

    ```
    var text = new Buffer(msg.payload.payload, 'base64').toString();
    return {
        payload: text
    }
    ```

7. Click the **Deploy** button at the right top of your window. Your data flow should look

     ![]({{ site.baseurl }}/assets/deploy.png)

8. You should get a message that the sketch is successfully deployed.

     ![]({{ site.baseurl }}/assets/deploy-ok.png)

<aside class = 'success'>
    Congratulations, you have successfully build your first Node-RED flow.    
</aside>

# # Retrieve the data

Now that the Things Uno is sending data it'll be received in the Node-RED data flow.

1. Make sure that the green checkbox on the `Debug` block is checked.

    ![]({{ site.baseurl }}/assets/debug-check.png)

2. Make sure that the mqtt input block reports: `connected`.

    ![]({{ site.baseurl }}/assets/mqtt-cnnt.png)

3. Navigate to the right side of the Node-RED page and open the `Debug` tab.

    ![]({{ site.baseurl }}/assets/debug-tab.png)

4. Now you should see the messages that the node transmits.

    ![]({{ site.baseurl }}/assets/message.png)

<aside class = 'success'>
    Congratulations, you have successfully received your first data over The Things Network
</aside>
