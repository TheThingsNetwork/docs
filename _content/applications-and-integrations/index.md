---
title: Applications
description: Create applications and use The Things Network integrations to build an end-to-end IoT solution
sections:
 - Applications
 - Integrations
zindex: 800
---

# Applications

To establish communication with a LoRaWAN device, you need to [add the device](../devices-and-gateways/adding-devices.md) within an application.

An application can be created via the <a href="https://www.thethingsindustries.com/docs/getting-started/console/" target="_blank">Console</a> or via the <a href="https://www.thethingsindustries.com/docs/getting-started/cli/" target="_blank">CLI</a>. You create an application in no-time by providing an **Application ID** and setting its **Owner**. <a href="https://www.thethingsindustries.com/docs/integrations/adding-applications/" target="_blank">See details about creating an application using the Console or commands for using the CLI</a>.

# Integrations

Within your application, you can also create integrations to help you with processing data and acting on it by triggering events. This way, you can implement a solution e.g. to monitor or visualize your sensor data using some cloud IoT platform, to schedule commands to be sent to your end device, etc. Integrations are added within applications.

The Things Network offers a number of <a href="https://www.thethingsindustries.com/docs/integrations/" target="_blank">integrations</a>:

- <a href="https://www.thethingsindustries.com/docs/integrations/mqtt/" target="_blank">MQTT</a> - The Things Stack exposes an MQTT Server, so you can use <a href="https://www.thethingsindustries.com/docs/integrations/mqtt-clients/" target="_blank">MQTT clients</a>  to subscribe to uplink messages coming from your device, or to publish downlink messages to be sent to your device.
- <a href="https://www.thethingsindustries.com/docs/integrations/webhooks/" target="_blank">Webhooks</a> - The HTTP Webhooks feature allows to send application-related messages to specific HTTP(S) endpoints. You can even contribute to our <a href="https://github.com/TheThingsNetwork/lorawan-webhook-templates/" target="_blank">Webhook templates</a> open source repository if you want to add a <a href="https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/" target="_blank">Webhook integration template</a> to The Things Stack by yourself. 
- <a href="https://www.thethingsindustries.com/docs/integrations/storage" target="_blank">Storage Integration</a> - Storage Integration allows you to store upstream messages in a persistent database, so you can retrieve them at a later time.
- <a href="https://www.thethingsindustries.com/docs/integrations/aws-iot/" target="_blank">AWS IoT</a> - The Things Stack allows you to integrate with AWS IoT and publish application telemetry to the IoT Core endpoint.
- <a href="https://www.thethingsindustries.com/docs/reference/application-packages/lora-cloud-device-and-application-services/" target="_blank">LoRa Cloud</a> - LoRa Cloud integration takes advantage of the <a href="https://www.loracloud.com/documentation/device_management" target="_blank">Device & Application Services protocol</a> to allow you to manage common functionalities at the application layer and geolocation for modem-based devices. 

Check the official The Things Stack V3 documentation page for more step-by-step <a href="https://www.thethingsindustries.com/docs/integrations/" target="_blank">integration guides</a>, such as for <a href="https://www.thethingsindustries.com/docs/integrations/node-red/" target="_blank">Node-RED</a>, <a href="https://www.thethingsindustries.com/docs/integrations/ifttt/" target="_blank">IFTTT</a>, <a href="https://www.thethingsindustries.com/docs/integrations/cloud-integrations/" target="_blank">popular cloud platforms</a>, etc.