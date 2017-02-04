---
title: Overview
section: Integrations
zindex: 1000
---

# Integrations

Integrations are the easiest way to connect your devices to an applications. An integration uses the same APIs or SDKs an application could use directly. Together with the private or public APIs of the platform it ties up the application running on the platform with The Things Network:

![Platform Integration](options-integration.png)

Platform Integrations completely you from any code and even The Things Network Console or CLI. A good example is an integration for Azure IoT Hub or Amazon IoT, where the user could manage his application and devices from there, while the integration takes care of synchronizing with The Things Network.

## Messaging Integration

A common integration is to forward messages to some webhook or other messaging endpoint (uplink messages). For these situations we provide a set of messaging integrations which act as a bridge between the Handler Data API and any endpoint you configure. It also provides you with an endpoint to send messages back to devices (downlink messages). Easy to configure and use is the HTTP Integration.

![HTTP Integration](options-http.png)

For some messaging integrations we provide a configuration template. Instead of manually configuring the HTTP Integration, we ask you only for variables like a platform key and generate the configuration for you.

## Add an Integration

1.  Go the application in the Console.
2.  Select **Integrations** from the top-right menu.
3.  Click the **add integration** link.
4.  Click to select the integration you'd like to add:

    ![Select](integration-select.png)
    
5.  Configure the integration (if there are any settings):

    ![Config](integration-config.png)
    
    > Depending on the integration, there might be more options to set. See the guide for the integration for details.
    
6.  Click **Create integration**.
