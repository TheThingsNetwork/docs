---
title: Build an SDK
---

# Build an SDK

Devices and Applications exchange messages and events via the Handler's MQTT broker. SDKs wrap this in a more friendly platform-specific API.

## Examples
Examples of libraries that wrap MQTT are the [Go](../applications/golang/index.md), [Node.js](../applications/nodejs/index.md) and [Java](../applications/java/index.md) SDKs. The [Node-RED](../applications/nodered/index.md) Node actually is in fact another wrapper of the Node.js SDK.

## Understanding MQTT
It is important to have a good understanding of how MQTT in general and our broker specifically works. For more information, see the [MQTT guide](../applications/mqtt/index.md).

**TL;DR:** You authenticate to a local MQTT broker using an Application ID and Access Key. Subscribe to topics for messages and events coming from specific or any device registered to the application. Publish to a device's downlink topic to send a message.

## Building a SDK

### Find a MQTT client
You can find a [MQTT client](https://github.com/mqtt/mqtt.github.io/wiki/libraries) for pretty much any language and platform. For example, the Node.js SDK uses [MQTT.js](https://www.npmjs.com/package/mqtt).

### Abstract Connections
To connect to the MQTT broker we need the broker URL, username and password. Instead of asking the user for the full URL including scheme (`mqtt` or `mqtts`) and port, the SDK should ask for the Application ID, Access Key (which act as username and password) plus a region of the community network to which the SDK should append `.thethings.network`. The user should still be able to provide the full hostname.

The constructor in pseudo code should look like:

```plaintext
client = new Client(region, appId, appAccessKey, [options])
```

See [how the Node.js SDK does this](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L7-L11).

### Abstract Subscriptions
The [MQTT API](../applications/mqtt/api.md) provides a whole range of topics you can subscribe to. Since constructing topic paths is not the most fun activity, the SDK should provide methods that take arguments and construct the paths for users.

These methods in pseudo code should look like:

```plaintext
client.on('message', [deviceId], [field], function(deviceId, message) {})

client.on('device', [deviceId], event, function(deviceId, message) {})
```

See how the Node.js SDK's [`on/off()`](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L22-L46) methods use an [`_eventToTopic()`](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L85-L107) helper method to construct paths and another [`_topicToEvent()`](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L82) method to do the opposite upon [receiving](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L82) a topic message.

### Abstract Sending
A user may send messages back to a device using the downlink MQTT topic. Again, the SDK should make this easier by providing a method to do so.

The method should look like:

```plaintext
client.send(deviceId, payload, [port])
```

The MQTT topic wants the raw payload base64 encoded and the payload fields JSON encoded. The SDK however, should accept an plain Array of bytes, Buffer or object of fields and handle the encoding.

See how the Node.js SDK handles this in its [`send()`](https://github.com/TheThingsNetwork/node-app-sdk/blob/master/src/client.js#L53-L60) method.

## Consistency & Parity

Within the limitations of the platform language, always try to implement the full interface and keep the abstraction layer consistent across platforms. The [Node.js](../applications/nodejs/index.md) SDK is a good implementation to follow closely.
