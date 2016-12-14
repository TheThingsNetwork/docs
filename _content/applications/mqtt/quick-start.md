---
title: Quick Start
---

# Quick Start
This guide will walk you through subscribing to an application's activations and messages as well as send a response to a specific device, using [Eclipse Mosquitto](https://mosquitto.org)'s CLIs to [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) and to [publish](https://mosquitto.org/man/mosquitto_pub-1.html) messages.

> This guide assumes the sketch and payload functions of [The Things Uno / Quick Start](../../devices/uno/quick-start.md), but can be easily applied to any other.

## Setup

* [Download](https://mosquitto.org/download/) Mosquitto.
* Download and save the [PEM encoded CA certificate](https://console.thethingsnetwork.org/mqtt-ca.pem) if you'd like to use TLS.

## Credentials

On [console.thethingsnetwork.org](https://console.thethingsnetwork.org/), navigate to the application you'd like to use. Here you can find the **Application ID** and an **Access Key** needed to authenticate over MQTT. Under **Handler Status** you will also find the region the application is registered to. You will need the part that follows `ttn-handler-`, e.g. `eu`.
    
## Receive Activations
Let's listen for new device activations first.

1.  Open a terminal window and execute the following command:

    ```bash
    mosquitto_sub -h <Region>.thethings.network -t '+/devices/+/events/activations' -u '<AppID>' -P '<AppKey>' -v
    ```
  
    * Replace `<Region>` with the region you looked up.
    * Replace `<AppID>` with your **Application ID**.
    * Replace `<AppKey>` with your **Access Key** (base64).
  
    > We add `-v` to also see the topics of the incoming messages.
    
    For TLS - assuming [mqtt-ca.pem](https://console.thethingsnetwork.org/mqtt-ca.pem) is in the same folder - append:

    ```bash
    --cafile mqtt-ca.pem -p 8883
    ```

2.  Power up, reset or upload a new sketch to a device to force it to activate and you should see something like:

    ```bash
    hello-world/devices/my-uno/events/activations {"app_eui":"70B3D57EF000001C","dev_eui":"0004A30B001B7AD2","dev_addr":"26012723","metadata":{"time":"2016-09-13T09:59:02.90329585Z","frequency":868.5,"modulation":"LORA","data_rate":"SF7BW125","coding_rate":"4/5","gateways":[{"eui":"B827EBFFFE87BD22","timestamp":1484146403,"time":"2016-09-13T09:59:02.867283Z","channel":2,"rssi":-49,"snr":7,"rf_chain":1}]}}
    ```

    Use `Ctrl C` to exit.  

## Receive Messages (up)
Now let's listen for actual messages coming in from devices.

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_sub -h <Region>.thethings.network -t '+/devices/+/up' -u '<AppID>' -P '<AppKey>' -v
    ```

    > Don't forget to replace `<Region>`, `<AppID>`, `<AppKey>` and append the options for TLS if you used that.

2.  If you uploaded the [The Things Uno / Quick Start](../../devices/uno/quick-start.md) sketch you should see something like:

    ```bash
    hello-world/devices/my-uno/up {"port":1,"counter":5,"payload_raw":"AQ==","payload_fields":{"led":true},"metadata":{"time":"2016-09-14T14:19:20.272552952Z","frequency":868.1,"modulation":"LORA","data_rate":"SF7BW125","coding_rate":"4/5","gateways":[{"eui":"B827EBFFFE87BD22","timestamp":1960494347,"time":"2016-09-14T14:19:20.258723Z","rssi":-49,"snr":9.5,"rf_chain":1}]}}
    ```
    
### Subscribe to a specific field

You can also subscribe to a specific field. Building on [The Things Uno / Quick Start](../../devices/uno/quick-start.md) you could subscribe to get just the `led` field:

```bash
mosquitto_sub -h <Region>.thethings.network -t '+/devices/+/up/led' -u '<AppID>' -P '<AppKey>' -v

hello-world/devices/my-uno/up/led true
```

## Send Messages (down)
To send a message you will have to address a specific device by its **Device ID**. Let's send the same message used in the [The Things Uno / Quick Start](../../devices/uno/quick-start.md#message-your-device):

```bash
{
  "led": true
}
```

If you have followed [The Things Uno / Quick Start / Encode Messages](../../devices/uno/quick-start.md#encode-messages) you can send this as is using the `payload_fields` key:

```json
{
  "payload_fields": {
    "led": true
  }
}
```

Otherwise, you'll have to use `payload_raw` and send a base64 encoded array of bytes, e.g.:

```json
{
  "payload_raw": "AQ=="
}
```

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_pub -h <Region>.thethings.network -t '<AppID>/devices/<DevID>/down' -u '<AppID>' -P '<AppKey>' -m '{"payload_fields":{"led":true}}'
    ```

2.  If you are running [The Things Uno / Quick Start](../../devices/uno/quick-start.md) sketch you should see something like:

    ```
    -- LOOP
    Sending: mac tx uncnf 1 with 1 bytes
    Successful transmission. Received 1 bytes
    LED: on
    ```

🎉 Congratulations! Now you know how to monitor and send messages via MQTT. Go build something awesome!
