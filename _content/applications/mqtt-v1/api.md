---
title: API Reference
---

# API Reference

As MQTT broker use:

* Host: `staging.thethingsnetwork.org`
* Port: `1883`

Or for TLS:

* Host: `staging.thethingsnetwork.org`
* Port: `8883`
* PEM encoded CA certificate: [mqtt-ca.pem](http://staging.thethingsnetwork.org/mqtt-ca.pem)

## Authentication

For authentication use:

* Username: Application EUI (hex).
* Password: Application Access Key (base64).

On [staging.thethingsnetwork.org](https://staging.thethingsnetwork.org/), go to your application and click **learn how to get data from this app** to find your credentials.

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

## Topic: Down (Send)

To send a message to a specific device registered to the application, publish to:

```
+/devices/<DeviceEUI>/down
```

Or, in this case maybe more clear:

```
<AppEUI>/devices/<DeviceEUI>/down
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
