# Library

Devices and Applications exchange messages and events via MQTT. Your library will wrap this in a more friendly API specific for your platform.

## Examples
Examples of libraries that wrap MQTT are [Node.js](../../current/node-js) and [Java](../../v2-preview/java). The [Node-RED](../../current/node-red) library actually is another wrapper over the Node.js library.

## Understanding how MQTT works
It is important to have a good understanding of how MQTT in general and our broker specifically works.

**TL;DR:** You authenticate to a local MQTT broker using an Application ID and Access Key. Subscribe to topics for messages and events coming from specific or any device registered to the application. Publish to a device's downlink topic to send a message.

For more information, see the [MQTT guide](../../current/mqtt/).

## Building a client library

### Find a MQTT client
You can find a [MQTT client](https://github.com/mqtt/mqtt.github.io/wiki/libraries) for pretty much any language and platform. For example, the Node.js library uses [MQTT.js](https://www.npmjs.com/package/mqtt).

### Abstract the connection
To connect to the MQTT broker we need the broker URL, username and password. We can ask the user for the full URL including scheme (`mqtt` or `mqtts`) and port, but it by default it should 
