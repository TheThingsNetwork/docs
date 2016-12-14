---
title: MQTT
label: v2
section: APIs
redirect_from:
 - /refactor/mqtt/
 - /v2-preview/mqtt/
 - /current/mqtt/
 - /mqtt/
---

# MQTT

[MQTT](http://mqtt.org) is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport.

The Things Network uses MQTT to publish device activations and messages, but also allows you to publish a message for a specific device in response.

## Clients

You can find MQTT Client libraries for any language or platform:

* For an extensive list see the official [MQTT.org Wiki](https://github.com/mqtt/mqtt.github.io/wiki/libraries).
* The [Eclipse Paho](http://www.eclipse.org/paho/) project provides open-source client implementations for a good number of languages.
* [Eclipse Mosquitto](https://mosquitto.org) providers a CLI to [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) and to [publish](https://mosquitto.org/man/mosquitto_pub-1.html) messages.
* [MQTTBox](http://workswithweb.com/mqttbox.html) is a cross-platform client with a nice GUI.

We'll use Mosquitto as example in the [API Reference](api.md).

## SDKs

To hide the complexity of parsing and composing the message payloads from you, The Things Network will develop client libraries for popular languages and platforms.

At the moment, we offer clients for:

* [Node.js](../nodejs/index.md)
* [Node-RED](../nodered/index.md)

If you'd like to create and maintain a client for another language or platform, let us know! We'd like to support you and look after achieving consistent APIs across libraries.
