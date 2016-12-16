---
title: Quick Start
zindex: 1000
---

# Quick Start
This guide will walk you through subscribing to an application's activations and messages as well as send a response to a specific device, using [Eclipse Mosquitto](https://mosquitto.org)'s CLIs to [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) and to [publish](https://mosquitto.org/man/mosquitto_pub-1.html) messages.

## Setup

* [Download](https://mosquitto.org/download/) Mosquitto.
* Download and save the [PEM encoded CA certificate](https://staging.thethingsnetwork.org/mqtt-ca.pem) if you'd like to use TLS.

## Credentials

1.  In the [dashboard](https://staging.thethingsnetwork.org/applications), navigate to the application you'd like to use and follow the link *learn how to get data from this app* in the **Application Info** box.

    ![Application Info](dashboard-application-info.png)

2.  Make note of the **App EUI** (hex) and **Access Keys** (base64)

    ![Application Credentials](dashboard-application-credentials.png)
    
## Receive Activations
Let's listen for new device activations first.

1.  Open a terminal window and execute the following command:

    ```bash
    mosquitto_sub -h staging.thethingsnetwork.org -t '+/devices/+/activations' -u <AppEUI> -P '<AppKey>' -v
    ```
  
    * Replace `<AppEUI>` with your **App EUI** (hex).
    * Replace `<AppKey>` with your **Access Key** (base64).
  
    > We add `-v` to also see the topics of the incoming messages.
  
    For TLS - assuming [mqtt-ca.pem](https://staging.thethingsnetwork.org/mqtt-ca.pem) is in the same folder - append:

    ```bash
    --cafile mqtt-ca.pem -p 8883
    ```

2.  Power up, reset or upload a new sketch to a device to force it to activate and you should see something like:

    ```bash
  0B3D57ED0000DA9/devices/0004A30B001B7AD2/activations {"metadata":[{"frequency":868.1,"datarate":"SF7BW125","codingrate":"4/5","gateway_timestamp":3475324075,"channel":0,"server_time":"2016-09-12T14:00:16.614852216Z","rssi":-42,"lsnr":9.2,"rfchain":1,"crc":1,"modulation":"LORA","gateway_eui":"B827EBFFFE87BD22","altitude":10,"longitude":5.90418,"latitude":52.95904}]}
    ```

    Use `Ctrl C` to exit.  

## Receive Messages (up)
Now let's listen for actual messages coming in from devices.

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_sub -h staging.thethingsnetwork.org -t '+/devices/+/up' -u <AppEUI> -P '<AppKey>' -v
    ```

    > Don't forget to replace `<AppEUI>` and `<AppKey>` and append the options for TLS if you used that.

    Alternatively, you could also exit the process (`Ctrl C`) and subscribe to all topics using `-t '#'` instead.

2.  If you uploaded the [The Things Uno / Quick Start](../../devices/uno/quick-start.md) sketch you should see something like:

    ```bash
    70B3D57ED0000DA9/devices/0004A30B001B7AD2/up {"payload":"SGVsbG8=","port":1,"counter":6,"dev_eui":"0004A30B001B7AD2","metadata":[{"frequency":868.3,"datarate":"SF7BW125","codingrate":"4/5","gateway_timestamp":3553348659,"channel":1,"server_time":"2016-09-12T14:01:34.633450398Z","rssi":-48,"lsnr":9,"rfchain":1,"crc":1,"modulation":"LORA","gateway_eui":"B827EBFFFE87BD22","altitude":10,"longitude":5.90418,"latitude":52.95904}]}
    ```

## Send Messages (down)
To send a message you will have to address a specific device by its **Dev EUI**. Let's send the same message as in the [The Things Uno / Quick Start](../../devices/uno/quick-start.md#message-your-device):

```bash
Hi
```

As explained in the API reference for the [+/devices/+/down](../mqtt/api.md#downlink-messages) topic, we'll have to publish this as part of a JSON encoded object, with the payload itself base64 encoded:

```json
{
  "payload": "SGk=",
  "port": 1,
  "ttl": "1h"
}
```

1.  Open another terminal window and execute the following command:

    ```bash
    mosquitto_pub -h staging.thethingsnetwork.org -t '<AppEUI>/devices/<DevEUI>/down' -u <AppEUI> -P '<AppKey>' -m '{ "payload":"SGk=","port":1,"ttl":"1h"}'
    ```

2.  If you uploaded the [The Things Uno / Quick Start](../../devices/uno/quick-start.md) sketch you should see something like:

    ```
    Sending: mac tx uncnf 1 with 5 bytes
    Successful transmission. Received 2 bytes
    Received Hi
    ```

Congratulations! Now you know how to send and receive messages via MQTT.
