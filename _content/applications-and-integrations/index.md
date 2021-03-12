---
title: Applications & Integrations
description: Create applications and use The Things Network integrations to build an end-to-end IoT solution
sections:
 - Applications
 - Integrations
zindex: 800
---

# Applications

To establish the communication with a LoRaWAN device, you need to [add the device](../devices-and-gateways/adding-devices.md) within an application.

An application can be created via [Console](https://www.thethingsindustries.com/docs/getting-started/console/) or via [CLI](https://www.thethingsindustries.com/docs/getting-started/cli/installing-cli/). You create an application in no-time by just providing an **Application ID** and setting its **Owner**. [See details about creating an application using the Console or commands for using the CLI](https://www.thethingsindustries.com/docs/integrations/adding-applications/).

# Integrations

Within your application, you can also create integrations to help you with processing data and acting on it by triggering events. This way, you can implement a solution e.g. to monitor or visualize your sensor data using some cloud IoT platform, to schedule commands to be sent to your end device, etc. Integrations are added within applications.

The Things Network offers a number of [integrations](https://www.thethingsindustries.com/docs/integrations/):

- [MQTT](https://www.thethingsindustries.com/docs/integrations/mqtt/) - The Things Stack exposes an MQTT Server, so you can use [MQTT clients](https://www.thethingsindustries.com/docs/integrations/mqtt-clients/) to subscribe to uplink messages coming from your device, or to publish downlink messages to be sent to your device.
- [Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/) - The HTTP Webhooks feature allows to send application-related messages to specifis HTTP(S) endpoints. You can even contribute to our [Webhook templates](https://github.com/TheThingsNetwork/lorawan-webhook-templates/) open source repository if you want to add a [Webhook integration template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/) to The Things Stack by yourself. 
- [Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/) - Storage Integration allows you to store upstream messages in a persistent database, so you can retrieve them at a later time.
- [AWS IoT](https://www.thethingsindustries.com/docs/integrations/aws-iot/) - The Things Stack allows you to integrate with AWS IoT and publish application telemetry to the IoT Core endpoint.
- [LoRa Cloud](https://www.thethingsindustries.com/docs/reference/application-packages/lora-cloud-device-and-application-services/) - LoRa Cloud integration takes advantage of the [Device & Application Services protocol](https://www.loracloud.com/documentation/device_management) to allow you to manage common functionalities at the application layer and geolocation for modem-based devices. 

Check the official The Things Stack documentation page for more step-by-step [integration guides](https://www.thethingsindustries.com/docs/integrations/), such as for [Node-RED](https://www.thethingsindustries.com/docs/integrations/node-red/), [IFTTT](https://www.thethingsindustries.com/docs/integrations/ifttt/), [popular cloud platforms](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/), etc.