<!-- EDIT AT https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md -->

# API Reference

Require the TTN Client module:

```java
import org.thethingsnetwork.java.app.lib.Client;
import org.thethingsnetwork.java.app.lib.events.*;
```

## Class: Client

Creates an instance of the client:

```java
Client client = new Client(region, appId, accessKey [, connOpts]);
```

* `region [String]`: The region (e.g. `eu`) or full hostname (e.g. `eu.thethings.network`) of the handler to connect to.
* `appId [String]`: The ID of the application to connect to (e.g. `HELLO-WORLD`).
* `appAccessKey [String]`: An access key for the application, formatted as base64 (e.g. `'2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo='`).
* `connOpts [MqttConnectOptions]`: Some custom configuration of the MQTT connection. This parameter is optional.

## Event: connect

Emitted on successful connection.

```java
client.onConnected(new ConnectHandler() {
    public void handle(MqttClient client) {
        System.out.println("connected !");
    }
});
```

* `client [MqttClient]`: MQTT connection wrapper. See [MQTT](http://www.eclipse.org/paho/files/javadoc/org/eclipse/paho/client/mqttv3/MqttClient.html).

## Event: error

Emitted when the client cannot connect or when a parsing error occurs.

```java
client.onError(new ErrorHandler() {
    public void handle(Throwable error) {
        System.err.println("error: " + error.getMessage());
    }
});
```

* `error [Throwable]`: Error object. See [MQTT](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html).

## Event: message

Emitted when TTN forwards a message addressed to your application.

```java
client.onUplink(new UplinkHandler() {
    public void handle(String devId, Object data) {
        System.out.println("Message: " + devId + " " + data);
    }
});
```

* `devId [String]`: Device ID, e.g.: `my-uno`.
* `data [Object]`: Message data, e.g.:

  ```json
  {
    "port": 1,
    "counter": 10,
    "payload_raw": {
      "type": "Buffer",
      "data": [
        1
      ]
    },
    "payload_fields": {
      "led": true
    },
    "metadata": {
      "time": "2016-09-07T12:50:07.068771281Z",
      "frequency": 868.1,
      "modulation": "LORA",
      "data_rate": "SF7BW125",
      "coding_rate": "4/5",
      "gateways": [{
        "eui": "0000024B08060112",
        "timestamp": 3955426155,
        "time": "2016-09-07T12:50:07.053048Z",
        "channel": 4,
        "rssi": -109,
        "snr": 5.8,
        "rf_chain": 1
      }]
    }
  }
  ```

### Listen for a specific device

```java
client.onUplink(new UplinkHandler() {
    public void handle(String devId, Object data) {
        System.out.println("Message: " + devId + " " + data);
    }
    public String getDevId(){
        return "my-uno";
    }
});
```

### Listen for a specific field (and device)

```java
client.onUplink(new UplinkHandler() {
    public void handle(String devId, Object data) {
        System.out.println("Message: " + devId + " " + data);
    }
    public String getDevId(){
        return "my-uno";
    }
    public String getField() {
        return "led";
    }
});
```

## Event: activation

Emitted when a device registered to the application activates.

```java
client.onActivation(new ActivationHandler() {
    public void handle(String devId, JSONObject data) {
        System.out.println("Activation: " + devId + " " + data);
    }
});
```

* `devId [String]`: Device ID, e.g.: `my-uno`.
* `data [Object]`: Activation data, e.g.:

  ```json
  {
    "app_eui": "70B3D57ED0000AFB",
    "dev_eui": "0004A30B001B7AD2",
    "dev_addr": "260023BB",
    "metadata": {
      "time": "2016-09-07T12:43:17.97454032Z",
      "frequency": 867.1,
      "modulation": "LORA",
      "data_rate": "SF7BW125",
      "coding_rate": "4/5",
      "gateways": [{
        "eui": "0000024B08060112",
        "timestamp": 3546311603,
        "time": "2016-09-07T12:43:17.938537Z",
        "channel": 2,
        "rssi": -107,
        "snr": 1.2
      }]
    }
  }
  ```

## Event: device

Emitted when a device event is published.

```java
client.onOtherEvent(new AbstractEventHandler() {
    public void handle(String devId, String event, JSONObject data) {
        System.out.println("Received event "+event+"for device "+devId);
    }
    public String getEvent() {
        return "down/scheduled";
    }
});
```

* `devId [String]`: Device ID, e.g.: `my-uno`.
* `event [String]`: Event name, e.g.: `down/scheduled`.
* `data [Object]`: Event data, e.g. for `down/scheduled`:

  ```json
  {
    "port": 1,
    "payload_raw": {
      "type": "Buffer",
      "data": [
        1
      ]
    }
  }
  ```

## Method: send

Send a message to a specific device.

```java
client.send(devId, payload, port);
```

*  `deviceId [String]`: The ID of the device to address, e.g. `my-uno`
*  `payload [mixed]`: Message to send, either:
    *  Byte array, e.g. `[1]`
    *  JsonObject, e.g. `{ led: true }`
    
        > This requires your application to be configured with an encoder payload function to encode the object in bytes.
        
*  `port [Integer]`: Optional port to address. Default: `1`.

## Method: end

Close the client via [`client.close()`](http://www.eclipse.org/paho/files/javadoc/org/eclipse/paho/client/mqttv3/MqttClient.html#close--).

```java
client.end([timeout]);
```

* `timeout [Integer]`: The time you give to the client to close the connection. This parameter is optional. Default is 5000 ms.
