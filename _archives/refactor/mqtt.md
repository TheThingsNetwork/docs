---
layout: guide
title: MQTT
sections:
 - mqtt/_clients.md
 - mqtt/_quick-start.md
 - mqtt/_api.md
 - mqtt/_migrate.md
---

[MQTT](http://mqtt.org) is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport.

The Things Network uses MQTT to publish device activations and messages, but also allows you to publish a message for a specific device in response.

## Prerequisites

* Access to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/).
* Access to an application with registered device on TTN.

<div class="alert alert-danger"><strong>Warning:</strong> The APIs for these versions of the library and backend might still change and the database (registered application and devices) reset. Do not use in production!</div>
