# API Reference

Require the TTN Client module:

```js
var ttn = require('ttn');
```

## Class: Client

Creates an instance of the client:

```js
var client = new ttn.Client(region, appId, appAccessKey);
```

* `region [string]`: The region (e.g. `eu`) or full hostname (e.g. `eu.thethings.network`) of the handler to connect to.
* `appId [string]`: The ID of the application to connect to (e.g. `HELLO-WORLD`).
* `appAccessKey [string]`: An access key for the application, formatted as base64 (e.g. `'2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo='`).

> Notice that the first 2 arguments changed in version 2.0.0.

## Event: connect

Emitted on succesful (re)connection.

```js
client.on('connect', function(connack) {});
```

* `connack [object]`: Connack packet. See [MQTT](https://www.npmjs.com/package/mqtt#event-connect).

## Event: error

Emitted when the client cannot connect or when a parsing error occurs.

```js
client.on('error', function(err) {});
```

* `err [Error]`: Error object. See [MQTT](https://www.npmjs.com/package/mqtt#event-error).

## Event: activation

Emitted when a device registered to the application activates.

```js
client.on('activation', function(data)) {});
```

*  `data [object]`: Activation data, e.g.:

	```json
	{
		"app_id": "HELLO-WORLD",
		"app_eui": "70B3D57ED0000AFB",
		"dev_id": "MY-UNO",
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

## Event: message

Emitted when TTN forwards a message addressed to your application.

```js
client.on('message', function(data) {});
```

*  `data [object]`: Message data, e.g.:

	```json
	{
		"app_id": "HELLO-WORLD",
		"dev_id": "MY-UNO",
		"port": 1,
		"counter": 10,
		"payload_raw": "SGVsbG8=",
		"payload_fields": {
			"message": "Hello"
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

## Method: send

Send a message to a specific device.

```js
client.send(devId, payload, [port]);
```

* `devId [string]`: The ID of the device to address, e.g. `MY-UNO`.
* `payload [Buffer]`: Message to send, as [Buffer](https://nodejs.org/api/buffer.html).
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

Close the client via [`client.mqtt.end()`](https://www.npmjs.com/package/mqtt#end).

```js
client.end([force], [cb]);
```

* `force [bool]`: Passing it to true will close the client right away, without waiting for the in-flight messages to be acked. This parameter is optional.
* `cb [Function]`: will be called when the client is closed. This parameter is optional.

## Property: mqtt

Interact with the wrapped [MQTT client](https://www.npmjs.com/package/mqtt):

```js
client.mqtt.on('reconnect', console.log.bind(this, 'reconnect'));
client.mqtt.on('close', console.log.bind(this, 'close'));
```