# API Reference

As MQTT broker use:

* Host: `<Region>.thethings.network`
* Port: `1883`

> TLS is not yet supported in this version.

## Region

Each application is registered to one or more regions. This determines the host of the MQTT broker you will use.

Currently we have:

* `eu`
* `us-west`
* `brazil`
* `se-asia`

> On [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/), go to your application. Under **Handler Status** you will also find the region the application is registered to. You will need the part that follows `ttn-handler-`, e.g. `eu`.

<div class="alert alert-danger"><strong>Warning:</strong> The names of the current regions might still change until this version goes into production.</div>

## Authentication

For authentication use:

* Username: Application ID (string).
* Password: Application Access Key (base64).

> On [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/), go to your application to find the **Application ID** and **Access Keys** you can use.

## Topic: Activations

To get activations for all devices registered to the application you have authenticated against, subscribe to:

```
<AppID>/devices/+/activations
```

Or, since the authentication already limits you to an Application:

```
+/devices/+/activations
```

To get activations for a specific device subscribe to:

```
+/devices/<DeviceID>/activations
```

Or if you like to be verbose:

```
<AppID>/devices/<DeviceID>/activations
```

### Message format

A published topic and JSON encoded payload could look like:

```bash
hello-world/devices/my-uno/activations

{
  "app_eui": "70B3D57EF000001C",
  "dev_eui": "0004A30B001B7AD2",
  "dev_addr": "26012723",
  "metadata": {
    "time": "2016-09-13T09:59:02.90329585Z",
    "frequency": 868.5,
    "modulation": "LORA",
    "data_rate": "SF7BW125",
    "coding_rate": "4/5",
    "gateways": [{
      "eui": "B827EBFFFE87BD22",
      "timestamp": 1484146403,
      "time": "2016-09-13T09:59:02.867283Z",
      "channel": 2,
      "rssi": -49,
      "snr": 7,
      "rf_chain": 1
    }]
  }
}
```

> As you can see the ID of the activated device is not part of the payload, but must be filtered from the returned topic.

## Topic: Uplink Messages

To receive messages from all devices registered to the application, subscribe to:

```
<AppID>/devices/+/up
```

Or, since the authentication already limits you to an Application:

```
+/devices/+/up
```

To get messages for a specific device subscribe to:

```
+/devices/<AppID>/up
```

Or if you like to be verbose:

```
<AppID>/devices/<DeviceID>/up
```

### Message format

A published topic and JSON encoded payload could look like:

```bash
hello-world/devices/my-uno/up

{
  "port": 1,
  "counter": 0,
  "payload_raw": "AQ==",
  "payload_fields": {
    "led": true
  },
  "metadata": {
    "time": "2016-09-13T09:59:08.179119279Z",
    "frequency": 868.3,
    "modulation": "LORA",
    "data_rate": "SF7BW125",
    "coding_rate": "4/5",
    "gateways": [{
      "eui": "B827EBFFFE87BD22",
      "timestamp": 1489443003,
      "time": "2016-09-13T09:59:08.167028Z",
      "channel": 1,
      "rssi": -49,
      "snr": 8,
      "rf_chain": 1
    }]
  }
}
```

> As you can see the ID of the device is not part of the payload, but must be filtered from the returned topic.

> To send `payload_fields`, the application must be configured with a Payload Function to decode it to `payload_raw`.

## Topic: Uplink Fields

To receive only a specific field from all devices registered to the application, subscribe to:

```
<AppID>/devices/+/up/<FieldPath>
```

Or, since the authentication already limits you to an Application:

```
+/devices/+/up/<FieldPath>
```

To get a field for a specific device subscribe to:

```
+/devices/<AppID>/up/<FieldPath>
```

Or if you like to be verbose:

```
<AppID>/devices/<DeviceID>/up/<FieldPath>
```

### Message format

If your fields look like the following:

```json
{
  "water": true,
  "analog": [0, 255, 500, 1000],
  "gps": {
    "lat": 52.3736735,
    "lon": 4.886663
  },
  "text": "why are you using text?"
}
```

Then here are the field topics you could subscribe to and the messages they will get you:

```bash
+/devices/+/up/water true
+/devices/+/up/analog [0, 255, 500, 1000]
+/devices/+/up/gps { "lat": 52.3736735, "lon": 4.886663 }
+/devices/+/up/gps/lat 52.3736735
+/devices/+/up/gps/lon 4.886663
+/devices/+/up/text "why are you using text?"
```

## Topic: Downlink Messages

To send a message to a specific device registered to the application, publish to:

```
<AppID>/devices/<DeviceID>/down
```

### Message format

Encoded as JSON string, format your message as:

```json
{
  "payload_raw": "AQ==",
  "port": 1
}
```

* `payload_raw [string]`: Payload as a base64 encoded array of bytes.
* `ttl [string]`: Time-to-live. How long the message should remained queued until it can be delivered to the device.

#### Sending fields

Instead of `payload_raw` you can also use `payload_fields`, which takes a object with fields:

```json
{
  "payload_fields": {
    "led": true
  },
  "port": 1
}
```

> To accept `payload_fields`, the application must be configured with an encoder payload function to convert it to bytes.
