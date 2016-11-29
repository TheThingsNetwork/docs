---
title: SDKs
---

# Platform SDKs

Devices and Applications exchange messages and events via the Handler's MQTT broker. SKDs wrap this in a more friendly platform-specific API.

## Examples
Examples of libraries that wrap MQTT are [Node.js](../applications/nodejs/index.md) and [Java](../applications/java/index.md). The [Node-RED](../applications/nodered/index.md) library actually is in fact another wrapper of the Node.js library.

## Understanding MQTT
It is important to have a good understanding of how MQTT in general and our broker specifically works. For more information, see the [MQTT guide](../applications/mqtt/index.md).

**TL;DR:** You authenticate to a local MQTT broker using an Application ID and Access Key. Subscribe to topics for messages and events coming from specific or any device registered to the application. Publish to a device's downlink topic to send a message.

## Building a SDK

### Find a MQTT client
You can find a [MQTT client](https://github.com/mqtt/mqtt.github.io/wiki/libraries) for pretty much any language and platform. For example, the Node.js library uses [MQTT.js](https://www.npmjs.com/package/mqtt).

### Abstract the connection
To connect to the MQTT broker we need the broker URL, username and password. We can ask the user for the full URL including scheme (`mqtt` or `mqtts`) and port, but........

### Abstract device events

### Abstract receiving messages

### Abstract sending messages

## Consistency & Parity

Within the limitations of the platform language, always try to implement the full interface and keep the abstraction layer consistent across platforms. The [Node.js](../applications/nodejs/index.md) SDK is a good implementation to follow closely.

### Pseudo Code

```
...
```
