# Quick Start
This guide will walk you through subscribing to an application's activations and messages as well as send a response to a specific device, using [Eclipse Mosquitto](https://mosquitto.org)'s CLIs to [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) and to [publish](https://mosquitto.org/man/mosquitto_pub-1.html) messages.

## Setup

* [Download](https://mosquitto.org/download/) Mosquitto.
* Download and save the [PEM encoded CA certificate](http://<Region>.thethings.network/mqtt-ca.pem) if you'd like to use TLS.

## Credentials

On [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/), navigate to the application you'd like to use. Here you can find the **Application ID** and an **Access Key** needed to authenticate over MQTT. Under **Handler Status** you will also find the region the application is registered to. You will need the part that follows `ttn-handler-`, e.g. `eu`.
    
## Receive Activations
Let's listen for new device activations first.

1.  Open a terminal window and execute the following command:

    ```bash
    mosquitto_sub -h <Region>.thethings.network -t '+/devices/+/activations' -u '<AppID>' -P '<AppKey>' -v
    ```
  
    * Replace `<Region>` with the region you looked up.
    * Replace `<AppID>` with your **Application ID**.
    * Replace `<AppKey>` with your **Access Key** (base64).
  
    > We add `-v` to also see the topics of the incoming messages.

2.  Power up, reset or upload a new sketch to a device to force it to activate and you should see something like:

    ```bash
    hello-world/devices/my-uno/activations {"app_eui":"70B3D57EF000001C","dev_eui":"0004A30B001B7AD2","dev_addr":"26012723","metadata":{"time":"2016-09-13T09:59:02.90329585Z","frequency":868.5,"modulation":"LORA","data_rate":"SF7BW125","coding_rate":"4/5","gateways":[{"eui":"B827EBFFFE87BD22","timestamp":1484146403,"time":"2016-09-13T09:59:02.867283Z","channel":2,"rssi":-49,"snr":7,"rf_chain":1}]}}
    ```

    Use `Ctrl + C` to exit.  

## Receive Messages (up)
Now let's listen for actual messages coming in from devices.

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_sub -h <Region>.thethings.network -t '+/devices/+/up' -u '<AppID>' -P '<AppKey>' -v
    ```

    > Don't forget to replace `<Region>`, `<AppID>` and `<AppKey>`.

    Alternatively, you could also exit the process (`Ctrl + C`) and subscribe to all topics using `-t '#'` instead.

2.  If you uploaded the [The Things Uno / Quick Start](/uno/#quick-start) sketch you should see something like:

    ```bash
    hello-world/devices/my-uno/up {"port":1,"counter":0,"payload_raw":"SGVsbG8=","payload_fields":{"message":"Hello"},"metadata":{"time":"2016-09-13T09:59:08.179119279Z","frequency":868.3,"modulation":"LORA","data_rate":"SF7BW125","coding_rate":"4/5","gateways":[{"eui":"B827EBFFFE87BD22","timestamp":1489443003,"time":"2016-09-13T09:59:08.167028Z","channel":1,"rssi":-49,"snr":8,"rf_chain":1}]}}
    ```

## Send Messages (down)
To send a message you will have to address a specific device by its **Dev EUI**. Let's send the same message as in the [The Things Uno / Quick Start](/docs/uno/#receive-message-downlink):

```bash
Hi
```

As explained in the API reference for the [+/devices/+/down](#topic-down-send) topic, we'll have to publish this as part of a JSON encoded object, with the payload itself base64 encoded:

```json
{
  "payload_raw": "SGk=",
  "port": 1
}
```

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_pub -h <Region>.thethings.network -t '<AppID>/devices/<DevID>/down' -u '<AppID>' -P '<AppKey>' -m '{ "payload_raw":"SGk=","port":1}'
    ```

2.  If you uploaded the [The Things Uno / Quick Start](/uno/#quick-start) sketch you should see something like:

    ```
    Sending: mac tx uncnf 1 with 5 bytes
    Successful transmission. Received 2 bytes
    Received Hi
    ```

Congratulations! Now you know how to send and receive messages via MQTT.