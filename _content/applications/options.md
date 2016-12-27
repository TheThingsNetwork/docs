---
title: Build an Application
---

# Build an Application
An application can connect to The Things Network in different ways:

## 1. [APIs](apis.md)
In the most low-level scenario, the application uses standard protocol libraries to connect directly to The Things Network's Handler APIs:

![APIs](options-apis.png)

### Data API
The Data API allow you to receive events and messages from devices as well as send messages to devices. You can use the Data API via:

* [MQTT](mqtt/index.md)
* AMQP (coming)

### Application Manager API
The Application Manager API let you manage applications and devices registered to it. You can use the Data API via:

* gRPC (to be documented)
* [HTTP](manager/index.md)

## 2. [SDKs](sdks.md)

We intend to SDKs for popular platforms such as [Node.js](nodejs/index.md) and [Java](java/index.md). These SDKs provide a layer of abstraction to make it easier to interact with the APIs:

> If you'd like to contribute to a SDK, contact [us](mailto:community@thethingsnetwork.org).

![SDK](options-sdks.png)

> SDKs may not always wrap all available APIs.

## 3. [Integrations](integrations.md)

Integrations are the easiest way to connect your devices to an applications. An integration uses the same APIs or SDKs an application could use directly. Together with the private or public APIs of the platform it ties up the application running on the platform with The Things Network:

![Platform Integration](options-integration.png)

Platform Integrations completely you from any code and even The Things Network Console or CLI. A good example is an integration for Azure IoT Hub or Amazon IoT, where the user could manage his application and devices from there, while the integration takes care of synchronizing with The Things Network.

### HTTP Integration

A common integration is to forward messages to some webhook or other HTTP endpoint. Good examples are [IFTTT](https://ifttt.com/maker) and [Zapier](https://zapier.com/zapbook/webhook/). For these situations we provide an single HTTP Integration which acts as a bridge between the Handler Data API and any HTTP request you configure. It also provides you with a unique HTTP endpoint to send messages back to devices.

![HTTP Integration](options-http.png)

For some platforms we provide a configuration template. Instead of directly configuring the HTTP requests, we ask you only for variables like a platform key and generate the configuration for you.
