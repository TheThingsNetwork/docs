---
title: Quick Start
weight: 1000
---

# Quick Start
This guide will walk you through setting up a Java project that listens to device activations and messages and responds to every 3rd message.

> This guide assumes the sketch and payload functions of [The Things Uno / Quick Start](../../devices/uno/quick-start.md), but can be easily applied to any other.

The full script that we will build is also included as [example](https://github.com/TheThingsNetwork/java-app-sdk/blob/master/samples/mqtt/src/main/java/org/thethingsnetwork/samples/mqtt/App.java) in the Java SDK.

## Setup
Let's install Java, create a Java project and require the TTN Client.

1.  [Download](https://www.java.com/) and install Java (at least version 8). 

    Under debian-based systems, use :

    ```bash
    sudo apt-get install openjdk-8-jdk
    ```
    
    For Mac and Windows users, download it here: [java](https://www.java.com/download/)
    
2.  [Download](https://maven.apache.org/download.cgi) and install maven. 

    Under debian-based systems, use :

    ```bash
    sudo apt-get install maven
    ```

    For Mac users:

    ```bash
    brew install maven
    ```

    For Windows users, see this [link](https://www.mkyong.com/maven/how-to-install-maven-in-windows/)
   
3.  Create a new Java project:

    ```bash
    cd $HOME
    mvn archetype:generate \
    -DgroupId=org.thethingsnetwork.samples.mqtt \
    -DartifactId=mqtt \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -DinteractiveMode=false
    cd mqtt
    ```

4.  Require the [TTN Client](https://github.com/TheThingsNetwork/java-app-sdk/tree/master/data/data-mqtt) as dependency:

    ```xml
    <dependency>
      <groupId>org.thethingsnetwork</groupId>
      <artifactId>data-mqtt</artifactId>
      <version>2.1.0</version>
    </dependency>
    ```
    
5.  Test your configuration:

    ```bash
    mvn clean compile
    ```

## Connect
Next, we will write the script that requires the TTN Client module and uses it to connect.

1.  Create the main script and open it in your favorite editor:

    ```bash
    open src/main/java/org/thethingsnetwork/samples/mqtt/App.java
    ```

2.  Import all required classes :

    ```java
    package org.thethingsnetwork.samples.mqtt;

    import org.json.JSONObject;
    import org.thethingsnetwork.data.common.Connection;
    import org.thethingsnetwork.data.mqtt.Client;
    ```

3.  In the [console](https://console.thethingsnetwork.org/applications), navigate to the application you'd like to connect to.

5.  In the editor, create an instance of the client:

    ```java 
    String region = "eu";
    String appId = "hello-world";
    String accessKey = "2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo=";

    Client client = new Client(region, appId, accessKey);
    
    client.start();
    ```

    Here's where you can find the values in the console:
    
    * For `region`, copy the part following `ttn-handler-` for **Handler Status** in the **Application Overview** box.
    * For `appId`, copy the value for **Application ID** in the **Application Overview** box.
    * For `accessKey`, scroll down and copy the value for **default key** in the **Access Key** box.

6.  Add a listener for the `connected` and `error` events to test the connection:

    ```java
    client.onError((Throwable _error) -> System.err.println("error: " + _error.getMessage()));

    client.onConnected((Connection _client) -> System.out.println("connected !"));
    ```
 
7.  Run the script to test the connection:

    ```bash
    mvn clean compile exec:java \
    -Dexec.mainClass="org.thethingsnetwork.samples.mqtt.App"
    ```

    You should see something like:

    ```bash
    [INFO] Scanning for projects...
    [INFO] 
    [INFO] -----------------------------------------------------------
    [INFO] Building mqtt 1.0.0
    [INFO] -----------------------------------------------------------
    [INFO] 
    [INFO] --- exec-maven-plugin:1.2.1:exec (default-cli) @ sample ---
    connected !
    ```

    Use `Ctrl C` to terminate the script.

    If you get an error it should say what is wrong:

    ```bash
    Connection refused: Not authorized
    ```

## Receive Activations
Now that we are connected, let's listen for new device activations.

> Be aware that you will only receive `activation` events since the moment the script connects.

1.  Add a listener for the `activation` event:

    ```java
    client.onActivation((String _devId, JSONObject _data) -> System.out.println("Activation: " + _devId + ", data: " + _data));
    ```

2.  Run the script again:

    ```bash
    mvn clean compile exec:java \
    -Dexec.mainClass="org.thethingsnetwork.samples.mqtt.App"
    ```

3.  Power up, reset or upload a new sketch to a device to force it to activate and you should see something like:

    ```bash
    Activation: my-uno {
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

    ```java
    client.onMessage((String devId, Object data) -> System.out.println("Message: " + devId + " " + data));
    ```

2.  Run the script again:

    ```bash
    mvn clean compile exec:java \
    -Dexec.mainClass="org.thethingsnetwork.samples.mqtt.App"
    ```

    You should see messages come in like:

    ```bash
    Message: my-uno {
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
            "gtw_id": "B827EBFFFE87BD22",
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

    ```java
    client.onMessage(null, "led", (String _devId, Object _data) -> {
            try {
                // Toggle the LED
                JSONObject response = new JSONObject().put("led", !_data.equals("true"));

                /**
                 * If you don't have an encoder payload function:
                 * client.send(_devId, _data.equals("true") ? new byte[]{0x00} : new byte[]{0x01}, 0);
                 */
                System.out.println("Sending: " + response);
                client.send(_devId, response, 0);
            } catch (Exception ex) {
                System.out.println("Response failed: " + ex.getMessage());
            }
        });
    ```
    
    This is what it will do:
    
    * Subscribe to any device, but only the `led` field.
    * Create a new payload to toggle the current `led` value.
    * Send it off to the device we received the message of.

4.  Run the script again:

    ```bash
    mvn clean compile exec:java \
    -Dexec.mainClass="org.thethingsnetwork.samples.mqtt.App"
    ```

    After every message the script should output:

    ```
    Sending: {"led":true}
    ```

    Via the Serial Monitor you should see the message coming in:

    ```
    -- LOOP
    Sending: mac tx uncnf 1 with 1 bytes
    Successful transmission. Received 1 bytes
    LED: on
    ```

🎉 Congratulations! Now you know how to process and send messages from a Java app. Go build something!
