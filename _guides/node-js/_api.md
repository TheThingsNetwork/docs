# API Reference

Require the TTN Client module:

```js
var ttn = require('ttn');
```

## Class: Client

Creates an instance of the client:

```js
var client = new ttn.Client(broker, appEUI, appAccessKey);
```

* `broker [string]`: The Things Network Handler's MQTT broker (currently: `'staging.thethingsnetwork.org'`).
* `appEUI [string]`: The EUI for your application, formatted as hex (e.g. `'70B3D57ED0000AFB'`).
* `appAccessKey [string]`: The access key for your application, formatted as base64 (e.g. `'2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo='`).

## Event: connect

Emitted on successful (re)connection.

```js
client.on('connect', function() {});
```

## Event: error

Emitted when the client cannot connect or when a parsing error occurs.

```js
client.on('error', function(err) {});
```

* `err [Error]`: Error object.
  * `err.message [string]`: Error message.

## Event: activation

Emitted when a device registered to the application activates.

```js
client.on('activation', function(e)) {});
```

* `e.devEUI [string]`: The EUI of the activated device.

## Event: uplink

Emitted when TTN forwards a message addressed to your application.

```js
client.on('uplink', function(e) {});
```

* `e.devEUI [string]`: The EUI of the activated device.
* `e.fields [object]`: The decoded message.
  * `e.fields.raw [string]`: If the application has no custom decoder, this will have the raw content.
* `e.counter [number]`: The frame counter sent by the device.
* `e.port [number]`: The port addressed by the device.
* `e.metadata [object]`: Additional meta data.

Example output:

```json
{
  "devEUI": "0004A30B001B7AD2",
  "fields": {
    "message": "Hello"
  },
  "counter": 29,
  "port": 1,
  "metadata": {
    "frequency": 868.5,
    "datarate": "SF7BW125",
    "codingrate": "4/5",
    "gateway_timestamp": 326035051,
    "gateway_time": "2016-08-31T13:33:47.369434Z",
    "channel": 2,
    "server_time": "2016-08-31T13:33:47.384994459Z",
    "rssi": -71,
    "lsnr": 7.5,
    "rfchain": 1,
    "crc": 1,
    "modulation": "LORA",
    "gateway_eui": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }
}
```

## Method: downlink

Send a message to a specific device.

```js
client.downlink(devEUI, payload, [ttl], [port]);
```

* `devEUI [string]`: The EUI of a device, formatted as hex (e.g. `'0004A30B001B7AD2'`).
* `payload [Buffer]`: Message to send, as [Buffer](https://nodejs.org/api/buffer.html).
* `ttl [string]`: Time-to-live (e.g. `'1h'`, `'2d'`). If there's no opportunity to send the message within this window, the message will be dropped. Default: `'1h'`.
* `port [number]`: Port to send via. Default: `1`.

See the [Node.js Buffer reference](https://nodejs.org/api/buffer.html#buffer_class_buffer) for different ways to create a buffer. The client will call [`Buffer.toString('base64')`](https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end) before publishing the message to The Things Network's MQTT broker.

All these examples result in the same base64 payload `'SGk='` sent to the network:

```js
// Create buffer from a hex string
var payload = Buffer.from('4869', 'hex');

// Create buffer from a utf8 string
var payload = Buffer.from('Hi');

// Create buffer from array of octets
var payload = Buffer.from([0x48, 0x69]);
```

## Method: end

Close the client.

```js
client.end();
```