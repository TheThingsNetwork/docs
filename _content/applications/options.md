---
title: Integration Options
---

# Integration Options
An application can integrate The Things Network in different ways:

## 1. APIs
In the most basic scenario, the application uses standard protocol libraries to connect directly to The Things Network's Handler APIs:

![APIs](options-apis.png)

### Data API
The Data API allow you to receive events and messages from devices as well as send messages to devices. You can use the Data API via:

* [MQTT](mqtt/index.md)
* AMQP (coming)

### Application Manager API
The Application Manager API let you manage applications and devices registered to it. You can use the Data API via:

* gRPC (to be documented)
* [HTTP](manager/index.md)

## 2. SDK

We intend to SDKs for popular platforms such as [Node.js](nodejs/index.md) and [Java](java/index.md). These SDKs provide a layer of abstraction to make it easier to interact with the APIs:

![SDK](options-sdks.png)

> SDKs may not always wrap all available APIs.

If you'd like to contribute to a SDK, contact [us](mailto:community@thethingsnetwork.org).

## 3. HTTP Integration

Some platforms do not allow users to run code. Good examples are [IFTTT](https://ifttt.com/maker) and [Zapier](https://zapier.com/zapbook/webhook/). For these situations we provide an HTTP Integration which acts as a bridge between the Handler Data API and HTTP.

Simply configure it with HTTP requests to forward device messages and events to. It also provides you with a unique HTTP endpoint to send messages to devices.

![HTTP Integration](options-http.png)

For some platforms we provide a configuration template. Instead of directly configuring the HTTP requests, we ask you only for variables like a platform key and generate the configuration for you.

If you'd like to see a configuration template for your platform, contact [johan@thethingsnetwork.org](mailto:johan@thethingsnetwork.org).

## 4. Platform Integration

The most advanced way is a Platform Integration. An integration uses the same APIs or SDKs an application could use directly. Together with the private or public APIs of the platform it ties up the application running on the platform with The Things Network:

![Platform Integration](options-integration.png)

Platform Integrations can completely hide the user from any code and even The Things Network Console or CLI. A good example is an integration for Azure IoT Hub or Amazon IoT, where the user could manage his application and devices from there, while the integration takes care of synchronizing with The Things Network.
