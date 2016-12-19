---
title: Overview
section: APIs
zindex: 1000
---

# APIs

The most basic way to integrate your application with The Things Network is to use standard protocol libraries to connect directly to The Things Network's Handler APIs:

![APIs](options-apis.png)

### Data API
The Data API allow you to receive events and messages from devices as well as send messages to devices. You can use the Data API via:

* [MQTT](mqtt/index.md)
* AMQP (coming)

### Application Manager API
The Application Manager API let you manage applications and devices registered to it. You can use the Data API via:

* gRPC (to be documented)
* [HTTP](manager/index.md)