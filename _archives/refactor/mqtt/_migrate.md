# Migration Guide

This guide will walk you through migrating connections via MQTT from `staging.thethingsnetwork.org` to `<Region>.thethings.network`.

<div class="alert alert-danger"><strong>Warning:</strong> The APIs for these versions of the library and backend might still change and the database (registered application and devices) reset. Do not use in production!</div>

## Region-specific hostname

In staging you connected to `staging.thethingsnetwork.org`. Replace this with `<Region>.thethings.network`. See [API Reference / Authentication](#authentication) to learn what region to use. See the next section for a before/after example.

## Application EUI becomes ID

In staging you used the **Application EUI** as username and as first element in all topics. Replace this with the **Application ID**.

### Staging

```bash
mosquitto_sub -h staging.thethingsnetwork.org -t '#' -u <AppEUI -P '<AppKey>' -v
```

### New

```bash
mosquitto_sub -h <Region>.thethings.network -t '#' -u '<AppID>' -P '<AppKey>' -v
```

## Activations

The topic has changed to `<AppId>/devices/<DevId>/events/activations`.

The JSON encoded payload has also changed on several points. Update the code where you process it.

### Staging

```json
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
    "gtw_id": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

### New

```json
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

> Note that you now receive the Application EUI and the Device EUI and Address. Also, Gateway metadata can now be found in an array of all gateways that forwarded the activation.

## Up(link) payload

The JSON encoded payload has changed on several points. Update the code where you process it.

### Staging

```json
{
  "payload": "AQ==",
  "fields": {
    "led": true
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
    "gtw_id": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

### New

```json
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

> Note that `payload` is now `payload_raw` and `fields` has been renamed to `payload_fields`. Also, `dev_eui` is no longer there and Gateway metadata can now be found in an array of all gateways that forwarded the activation.

## Down(link) payload

The JSON encoded payload to send a message has also changed. Update the code where you compose the payload.

### Staging

```json
{
  "payload": "AQ==",
  "port": 1,
  "ttl": "1h"
}
```

### New

```
{
  "payload_raw": "AQ==",
  "port": 1
}
```

> Note that `payload` has been renamed to `payload_raw` and `ttl` is no longer included. Also consider to use the new [`payload_fields`](#topic-downlink-messages).
