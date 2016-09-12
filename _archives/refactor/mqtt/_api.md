# API Reference

As MQTT broker use:

* Host: `<Region>.thethings.network`
* Port: `1883`

> TLS is not yet supported.

## Regions

Each application is registered to one or more regions. The region determines the host of the MQTT broker.

Currently we have:

* `eu.thethings.network`
* `us-west.thethings.network`
* `brazil.thethings.network`
* `se-asia.thethings.network`

## Authentication

For authentication use:

* Username: Application ID (string).
* Password: Application Access Key (base64).

On [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/), go to your application and click **learn how to get data from this app** to find your credentials.

> **TODO ^**

## Topic: Activations

To get activations for all devices registered to the application you have authenticated against, subscribe to:

```
<AppEUI>/devices/+/activations
```

Or, since the authentication already limits you to an Application:

```
+/devices/+/activations
```

To get activations for a specific device subscribe to:

```
+/devices/<DeviceEUI>/activations
```

Or if you like to be verbose:

```
<AppEUI>/devices/<DeviceEUI>/activations
```

### Message format

A published topic and JSON encoded payload could look like:

```bash
70B3D57ED0000DA9/devices/0004A30B001B7AD2/activations

{
  "metadata": [{
    "frequency": 868.1,
    "datarate": "SF7BW125",
    "codingrate": "4/5",
    "gateway_timestamp": 3475324075,
    "channel": 0,
    "server_time": "2016-09-12T14:00:16.614852216Z",
    "rssi": -42,
    "lsnr": 9.2,
    "rfchain": 1,
    "crc": 1,
    "modulation": "LORA",
    "gateway_eui": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

> As you can see the EUI of the activated device is not part of the payload, but must be filtered from the returned topic.

### Example

With [mosquitto_sub](https://mosquitto.org/man/mosquitto_sub-1.html), you'd subscribe with:

```bash
mosquitto_sub -h staging.thethingsnetwork.org -t '+/devices/+/activations' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -v
```

> Add `-v` to also see the topics of the incoming messages.

For TLS you'd use the following, assuming [mqtt-ca.pem](http://staging.thethingsnetwork.org/mqtt-ca.pem) is in the same folder:

```bash
mosquitto_sub --cafile mqtt-ca.pem -p 8883 -h staging.thethingsnetwork.org -t '+/devices/+/activations' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -v
```

## Topic: Up (Receive)

To receive messages from all devices registered to the application, subscribe to:

```
<AppEUI>/devices/+/up
```

Or, since the authentication already limits you to an Application:

```
+/devices/+/up
```

To get messages for a specific device subscribe to:

```
+/devices/<DeviceEUI>/up
```

Or if you like to be verbose:

```
<AppEUI>/devices/<DeviceEUI>/up
```

### Message format

A published topic and JSON encoded payload could look like:

```bash
70B3D57ED0000DA9/devices/0004A30B001B7AD2/up

{
  "payload": "SGVsbG8=",
  "fields": {
    "myField": 5
  },
  "port": 1,
  "counter": 15,
  "dev_eui": "0004A30B001B7AD2",
  "metadata": [{
    "frequency": 867.3,
    "datarate": "SF7BW125",
    "codingrate": "4/5",
    "gateway_timestamp": 3662434019,
    "channel": 4,
    "server_time": "2016-09-12T14:03:23.729350993Z",
    "rssi": -43,
    "lsnr": 8.8,
    "rfchain": 0,
    "crc": 1,
    "modulation": "LORA",
    "gateway_eui": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

> As you can see the EUI of the device is not part of the payload, but must be filtered from the returned topic.

### Example

With [mosquitto_sub](https://mosquitto.org/man/mosquitto_sub-1.html), you'd subscribe with:

```bash
mosquitto_sub -h staging.thethingsnetwork.org -t '+/devices/+/up' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -v
```

> Add `-v` to also see the topics of the incoming messages.

For TLS you'd use the following, assuming [mqtt-ca.pem](http://staging.thethingsnetwork.org/mqtt-ca.pem) is in the same folder:

```bash
mosquitto_sub --cafile mqtt-ca.pem -p 8883 -h staging.thethingsnetwork.org -t '+/devices/+/up' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -v
```

## Topic: Down (Send)

To send a message to a specific device registered to the application, publish to:

```
+/devices/<DeviceEUI>/down
```

Or, in this case maybe more clear:

```
<AppEUI>/devices/<DeciceEUI>/down
```

### Message format

Encoded as JSON string, format your message as:

```json
{
  "payload": "SGVsbG8gd29ybGQK=",
  "port": 1,
  "ttl": "1h"
}
```

* `payload [string]`: Payload as a base64 encoded array of bytes.
* `port [int]`: Port to address. Optional, defaults to `1`.
* `ttl [string]`: Time-to-live. How long the message should remained queued until it can be delivered to the device.

### Example

With [mosquitto_pub](https://mosquitto.org/man/mosquitto_pub-1.html), you'd subscribe with:

```bash
mosquitto_pub -h staging.thethingsnetwork.org -t '70B3D57ED0000DA9/devices/0004A30B001B7AD2/down' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -m '{ "payload":"SGVsbG8gd29ybGQK=","port":1,"ttl":"1h"}'
```

> Add `-v` to also see the topics of the incoming messages.

For TLS you'd use the following, assuming [mqtt-ca.pem](http://staging.thethingsnetwork.org/mqtt-ca.pem) is in the same folder:

```bash
mosquitto_pub --cafile mqtt-ca.pem -p 8883 -h staging.thethingsnetwork.org -t '70B3D57ED0000DA9/devices/0004A30B001B7AD2/down' -u 70B3D57ED0000DA9 -P 'I0f+e1W+CWgIiuIC4SjR5cpLxFZQfK2agDEpuCBpttI=' -m '{ "payload":"SGVsbG8gd29ybGQK=","port":1,"ttl":"1h"}'
```