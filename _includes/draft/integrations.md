---
title: Building Integrations
sections:
 - integrations/_library.md
 - integrations/_hosting.md
---

There are two types of integrations you can build for The Things Network: A Library or Service.

![Architecture](architecture.png)

## Integration Library

Devices and applications exchange messages and events over The Things Network via [MQTT](../../current/mqtt/). The most simple type of integration is a library that wraps the MQTT protocol in a more friendly API specific for your language or platform. See for example the [Java](../../v2-preview/java/) and [Node-RED](../../current/node-red/) libraries.

## Integration Service

A more advanced type of integration is a service. In addition to the MQTT broker - possibly using an integration library - it also works with the Account Server and Application Handler to manager applications and devices on behalf of the user.

This allows you to build integrations that may completely hide the user from any code and even The Things Network Console or CLI. The user authorizes the service via the Account Server. The service then uses the Application Handler API to manage applications and devices and the MQTT broker to communicate with those devices.

Services can be hosted anywhere. For minimal latency you can host the service on The Things Network Integration Platform.
