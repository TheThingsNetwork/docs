---
title: TTNMapper
section: Integrations
ambassador:
  name: Timothy Sealy
  username: timothy
---

# TTN Mapper
The TTN Mapper integration allows you to upload coverage information (location, rssi and snr) to TTN Mapper directly from the TTN backend.

The goal of TTN Mapper is to provide a map of the actual coverage of the TTN gateways. Contributors to TTN Mapper measure the performance of gateways in their vicinity and upload this information to the TTN Mapper website. Here the information is aggregated and shared with the TTN community.

Go to https://ttnmapper.org for the global coverage map.

## Prerequisites
In order to use the TTN Mapper integration a LoRaWAN device with a GPS, capable of transmitting its GPS coordinates, is required. The minimal location information that needs to be sent by the device is its latitude and longitude. Preferably it should also send its altitude and HDOP values. If HDOP is not available, the end device should provide the accuracy of the GPS fix (in meters). As a last resort, if no accuracy can be provided, the satellite count can be sent.

*Note*: If you don't have a GPS enabled LoRa device, you can still contribute to TTN Mapper using your smartphone (Android or iOS) and any LoRaWAN device. See the "[Using TTN Mapper on Android](https://www.thethingsnetwork.org/labs/story/using-ttnmapper-on-android)" lab. If you want to use the Things Node for mapping check out the "[Mapping gateway coverage using a Things Node](https://www.thethingsnetwork.org/labs/story/mapping-gateway-coverage-using-a-things-node)" lab.

Once the integration is enabled any message sent by the end device will also be published to the TTN Mapper website. In order for TTN Mapper to correctly interpret the incoming messages, the message payload should be structured according to one of following formats:
1. A JSON object containing the keys "**latitude**", "**longitude**" and "**altitude**". In addition the JSON object must contain one of the following keys "**hdop**", "**accuracy**" or "**sats**". Using a Payload decoder function the raw payload can be decoded into a JSON object with the required keys.
2. The Cayenne LPP data format. When using the Cayenne LPP data format, the GPS coordinates will be decoded into a different JSON format which is also supported. Cayenne LPP does not contain the GPS accuracy, and therefore this data will be considered as inferior and will carry less weight in calculation of coverage, and will be deleted first during data cleanup.

If you are developing your own GPS enabled LoRa device please check the following [Github repository](https://github.com/ttnmapper/gps-node-examples) for example end-device software and decoder functions to be used with them.

## Create the integration
On the [The Things Console](https://console.thethingsnetwork.org/), open your application and then click on the *Integrations* tab. Search for the TTN Mapper integration and click on it. In the configuration page for the integration fill in the following:

* **Process ID**: a unique string describing this integration. This is mainly for you to make a distinction between (possibly) multiple integrations you have configured. The value does not have an influence on how the integration works.
* **E-mail address**: a valid email address. This email address will be used to associate all your data to you, and provides some guarantees on the quality of the data.
* **Port filter**: the port on which the GPS coordinates are sent. This is an optional field that should be left empty in most cases. If your application is used for multiple purposes, and you only send GPS coordinates on one specific port, you can use this field to specify the port on which the GPS coordinates are sent, ignoring any other sensor data that is sent by your devices.
* **Experiment name**: the name of the experimental dataset stored on the TTN Mapper website. This is an optional field that should be left empty in most cases. If you are measuring coverage that is out of the ordinary, like taking a GPS tracker on an aeroplane, strapping it to a balloon or drone, or climbing a high mast or tower that is not publicly accessible, your data should be logged to an experiment to keep it separated from the main TTN Mapper global coverage map.

Click on "Add integration" and your application is now ready to contribute to TTN Mapper.

## Verify the integration is working correctly

In order to verify whether the integration has been configured correctly, go to the Data tab for your device on the TTN Console. Switch on your device and make sure you see data appearing on the Data tab. Now go to the TTN Mapper website and in the menu select "[Advanced map options](https://ttnmapper.org/special_maps.php)". In the "Specific node" section fill in the Device ID in the "Node address" field. Leave the "Date" field as is - it is automatically set to today. Click on "View map" and you should see the data points sent by your end device.

For troubleshooting please post your question in the #ttn-mapper channel on Slack.

