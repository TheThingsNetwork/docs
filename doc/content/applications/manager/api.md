---
title: API Reference
weight: -1000
source: 'https://github.com/TheThingsNetwork/api/blob/master/handler/ApplicationManager.md'
---

# API Reference

## .handler.ApplicationManager

ApplicationManager manages application and device registrations on the Handler

To protect our quality of service, you can make up to 5000 calls to the
ApplicationManager API per hour. Once you go over the rate limit, you will
receive an error response.

### Methods

#### `DeleteApplication`

DeleteApplication deletes the application with the given identifier (app_id)

- Request: [`ApplicationIdentifier`](#handlerapplicationidentifier)
- Response: [`Empty`](#googleprotobufempty)

Available HTTP Endpoints:

- `DELETE` `/applications/{app_id}`

Input:

```json
{
  "app_id": "some-app-id"
}
```

Output:

```json
{}
```

#### `DeleteDevice`

DeleteDevice deletes the device with the given identifier (app_id and dev_id)

- Request: [`DeviceIdentifier`](#handlerdeviceidentifier)
- Response: [`Empty`](#googleprotobufempty)

Available HTTP Endpoints:

- `DELETE` `/applications/{app_id}/devices/{dev_id}`

Input:

```json
{
  "app_id": "some-app-id",
  "dev_id": "some-dev-id"
}
```

Output:

```json
{}
```

#### `DryDownlink`

DryUplink simulates processing a downlink message and returns the result

- Request: [`DryDownlinkMessage`](#handlerdrydownlinkmessage)
- Response: [`DryDownlinkResult`](#handlerdrydownlinkresult)

#### `DryUplink`

DryUplink simulates processing an uplink message and returns the result

- Request: [`DryUplinkMessage`](#handlerdryuplinkmessage)
- Response: [`DryUplinkResult`](#handlerdryuplinkresult)

#### `GetApplication`

GetApplication returns the application with the given identifier (app_id)

- Request: [`ApplicationIdentifier`](#handlerapplicationidentifier)
- Response: [`Application`](#handlerapplication)

Available HTTP Endpoints:

- `GET` `/applications/{app_id}`

Input:

```json
{
  "app_id": "some-app-id"
}
```

Output:

```json
{
  "app_id": "some-app-id",
  "converter": "function Converter(decoded, port) {...",
  "decoder": "function Decoder(bytes, port) {...",
  "encoder": "Encoder(object, port) {...",
  "payload_format": "",
  "register_on_join_access_key": "",
  "validator": "Validator(converted, port) {..."
}
```

#### `GetDevice`

GetDevice returns the device with the given identifier (app_id and dev_id)

- Request: [`DeviceIdentifier`](#handlerdeviceidentifier)
- Response: [`Device`](#handlerdevice)

Available HTTP Endpoints:

- `GET` `/applications/{app_id}/devices/{dev_id}`

Input:

```json
{
  "app_id": "some-app-id",
  "dev_id": "some-dev-id"
}
```

Output:

```json
{
  "altitude": 0,
  "app_id": "some-app-id",
  "attributes": {
    "key": "",
    "value": ""
  },
  "description": "Some description of the device",
  "dev_id": "some-dev-id",
  "latitude": 52.375,
  "longitude": 4.887,
  "lorawan_device": {
    "activation_constraints": "local",
    "app_eui": "0102030405060708",
    "app_id": "some-app-id",
    "app_key": "01020304050607080102030405060708",
    "app_s_key": "01020304050607080102030405060708",
    "dev_addr": "01020304",
    "dev_eui": "0102030405060708",
    "dev_id": "some-dev-id",
    "disable_f_cnt_check": false,
    "f_cnt_down": 0,
    "f_cnt_up": 0,
    "last_seen": 0,
    "nwk_s_key": "01020304050607080102030405060708",
    "uses32_bit_f_cnt": true
  }
}
```

#### `GetDevicesForApplication`

GetDevicesForApplication returns all devices that belong to the application with the given identifier (app_id)

- Request: [`ApplicationIdentifier`](#handlerapplicationidentifier)
- Response: [`DeviceList`](#handlerdevicelist)

Available HTTP Endpoints:

- `GET` `/applications/{app_id}/devices`

Input:

```json
{
  "app_id": "some-app-id"
}
```

Output:

```json
{
  "devices": {
    "altitude": 0,
    "app_id": "some-app-id",
    "attributes": {
      "key": "",
      "value": ""
    },
    "description": "Some description of the device",
    "dev_id": "some-dev-id",
    "latitude": 52.375,
    "longitude": 4.887,
    "lorawan_device": {
      "activation_constraints": "local",
      "app_eui": "0102030405060708",
      "app_id": "some-app-id",
      "app_key": "01020304050607080102030405060708",
      "app_s_key": "01020304050607080102030405060708",
      "dev_addr": "01020304",
      "dev_eui": "0102030405060708",
      "dev_id": "some-dev-id",
      "disable_f_cnt_check": false,
      "f_cnt_down": 0,
      "f_cnt_up": 0,
      "last_seen": 0,
      "nwk_s_key": "01020304050607080102030405060708",
      "uses32_bit_f_cnt": true
    }
  }
}
```

#### `RegisterApplication`

Applications should first be registered to the Handler with the `RegisterApplication` method

- Request: [`ApplicationIdentifier`](#handlerapplicationidentifier)
- Response: [`Empty`](#googleprotobufempty)

Available HTTP Endpoints:

- `POST` `/applications`

Input:

```json
{
  "app_id": "some-app-id"
}
```

Output:

```json
{}
```

#### `SetApplication`

SetApplication updates the settings for the application. All fields must be supplied.

- Request: [`Application`](#handlerapplication)
- Response: [`Empty`](#googleprotobufempty)

Available HTTP Endpoints:

- `PUT` `/applications/{app_id}`
- `POST` `/applications/{app_id}`

Input:

```json
{
  "app_id": "some-app-id",
  "converter": "function Converter(decoded, port) {...",
  "decoder": "function Decoder(bytes, port) {...",
  "encoder": "Encoder(object, port) {...",
  "payload_format": "",
  "register_on_join_access_key": "",
  "validator": "Validator(converted, port) {..."
}
```

Output:

```json
{}
```

#### `SetDevice`

SetDevice creates or updates a device. All fields must be supplied.

- Request: [`Device`](#handlerdevice)
- Response: [`Empty`](#googleprotobufempty)

Available HTTP Endpoints:

- `PUT` `/applications/{app_id}/devices/{dev_id}`
- `POST` `/applications/{app_id}/devices`
- `PUT` `/applications/{app_id}/devices`
- `POST` `/applications/{app_id}/devices/{dev_id}`

Input:

```json
{
  "altitude": 0,
  "app_id": "some-app-id",
  "attributes": {
    "key": "",
    "value": ""
  },
  "description": "Some description of the device",
  "dev_id": "some-dev-id",
  "latitude": 52.375,
  "longitude": 4.887,
  "lorawan_device": {
    "activation_constraints": "local",
    "app_eui": "0102030405060708",
    "app_id": "some-app-id",
    "app_key": "01020304050607080102030405060708",
    "app_s_key": "01020304050607080102030405060708",
    "dev_addr": "01020304",
    "dev_eui": "0102030405060708",
    "dev_id": "some-dev-id",
    "disable_f_cnt_check": false,
    "f_cnt_down": 0,
    "f_cnt_up": 0,
    "last_seen": 0,
    "nwk_s_key": "01020304050607080102030405060708",
    "uses32_bit_f_cnt": true
  }
}
```

Output:

```json
{}
```

#### `SimulateUplink`

SimulateUplink simulates an uplink message

- Request: [`SimulatedUplinkMessage`](#handlersimulateduplinkmessage)
- Response: [`Empty`](#googleprotobufempty)

## Messages

### `.google.protobuf.Empty`

A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs.

### `.handler.Application`

The Application settings

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_id` | `string` |  |
| `converter` | `string` | The converter is a JavaScript function that can be used to convert values in the object returned from the decoder. This can for example be useful to convert a voltage to a temperature. This function is used when the payload format is set to custom. |
| `decoder` | `string` | The decoder is a JavaScript function that decodes a byte array to an object. This function is used when the payload format is set to custom. |
| `encoder` | `string` | The encoder is a JavaScript function that encodes an object to a byte array. This function is used when the payload format is set to custom. |
| `payload_format` | `string` | The payload format indicates how payload is formatted. |
| `register_on_join_access_key` | `string` | The "register on join" access key should only be set if devices need to be registered on join |
| `validator` | `string` | The validator is a JavaScript function that checks the validity of the object returned by the decoder or converter. If validation fails, the message is dropped. This function is used when the payload format is set to custom. |

### `.handler.ApplicationIdentifier`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_id` | `string` |  |

### `.handler.Device`

The Device settings

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `altitude` | `int32` |  |
| `app_id` | `string` |  |
| `attributes` | _repeated_ [`AttributesEntry`](#handlerdeviceattributesentry) |  |
| `description` | `string` |  |
| `dev_id` | `string` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |
| `lorawan_device` | [`Device`](#lorawandevice) |  |

### `.handler.Device.AttributesEntry`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `key` | `string` |  |
| `value` | `string` |  |

### `.handler.DeviceIdentifier`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_id` | `string` |  |
| `dev_id` | `string` |  |

### `.handler.DeviceList`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `devices` | _repeated_ [`Device`](#handlerdevice) |  |

### `.handler.DryDownlinkMessage`

DryDownlinkMessage is a simulated message to test downlink processing

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app` | [`Application`](#handlerapplication) | The Application containing the payload functions that should be executed |
| `fields` | `string` | JSON-encoded object with fields to encode |
| `payload` | `bytes` | The binary payload to use |
| `port` | `uint32` | The port number that should be passed to the payload function |

### `.handler.DryDownlinkResult`

DryDownlinkResult is the result from a downlink simulation

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `logs` | _repeated_ [`LogEntry`](#handlerlogentry) | Logs that have been generated while processing |
| `payload` | `bytes` | The payload that was encoded |

### `.handler.DryUplinkMessage`

DryUplinkMessage is a simulated message to test uplink processing

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app` | [`Application`](#handlerapplication) | The Application containing the payload functions that should be executed |
| `payload` | `bytes` | The binary payload to use |
| `port` | `uint32` | The port number that should be passed to the payload function |

### `.handler.DryUplinkResult`

DryUplinkResult is the result from an uplink simulation

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `fields` | `string` | The decoded fields |
| `logs` | _repeated_ [`LogEntry`](#handlerlogentry) | Logs that have been generated while processing |
| `payload` | `bytes` | The binary payload |
| `valid` | `bool` | Was validation of the message successful |

### `.handler.LogEntry`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `fields` | _repeated_ `string` | A list of JSON-encoded fields that were logged |
| `function` | `string` | The location where the log was created (what payload function) |

### `.handler.SimulatedUplinkMessage`

SimulatedUplinkMessage is a simulated uplink message

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_id` | `string` |  |
| `dev_id` | `string` |  |
| `payload` | `bytes` | The binary payload to use |
| `port` | `uint32` | The port number |

### `.lorawan.Device`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `activation_constraints` | `string` | The ActivationContstraints are used to allocate a device address for a device (comma-separated). There are different prefixes for `otaa`, `abp`, `world`, `local`, `private`, `testing`. |
| `app_eui` | `bytes` | The AppEUI is a unique, 8 byte identifier for the application a device belongs to. |
| `app_id` | `string` | The AppID is a unique identifier for the application a device belongs to. It can contain lowercase letters, numbers, - and _. |
| `app_key` | `bytes` | The AppKey is a 16 byte static key that is known by the device and the application. It is used for negotiating session keys (OTAA). |
| `app_s_key` | `bytes` | The AppSKey is a 16 byte session key that is known by the device and the application. It is used for payload encryption. This key is negotiated during the OTAA join procedure, or statically configured using ABP. |
| `dev_addr` | `bytes` | The DevAddr is a dynamic, 4 byte session address for the device. |
| `dev_eui` | `bytes` | The DevEUI is a unique, 8 byte identifier for the device. |
| `dev_id` | `string` | The DevID is a unique identifier for the device. It can contain lowercase letters, numbers, - and _. |
| `disable_f_cnt_check` | `bool` | The DisableFCntCheck option disables the frame counter check. Disabling this makes the device vulnerable to replay attacks, but makes ABP slightly easier. |
| `f_cnt_down` | `uint32` | FCntDown is the downlink frame counter for a device session. |
| `f_cnt_up` | `uint32` | FCntUp is the uplink frame counter for a device session. |
| `last_seen` | `int64` | When the device was last seen (Unix nanoseconds) |
| `nwk_s_key` | `bytes` | The NwkSKey is a 16 byte session key that is known by the device and the network. It is used for routing and MAC related functionality. This key is negotiated during the OTAA join procedure, or statically configured using ABP. |
| `uses32_bit_f_cnt` | `bool` | The Uses32BitFCnt option indicates that the device keeps track of full 32 bit frame counters. As only the 16 lsb are actually transmitted, the 16 msb will have to be inferred. |

