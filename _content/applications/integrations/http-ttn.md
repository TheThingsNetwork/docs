---
title: API Reference
zindex: -1000
source: 'https://github.com/TheThingsIndustries/integration-messaging/blob/master/ttn/README.md'
---

# HTTP Integration Reference

The HTTP Integration allows you to send uplink data over HTTP to an endpoint and receive downlink data over HTTP.

## Uplink

You can configure the URL, the HTTP method (e.g. `POST`) and optionally the HTTP Authorization header of your endpoint. The integration will post data in the following format:

```js
{
  "app_id": "my-app-id",                 // The app ID
  "dev_id": "my-dev-id",                 // The device ID
  "hardware_serial": "0102030405060708", // In case of LoRaWAN: the DevEUI
  "port": 1,                             // LoRaWAN FPort
  "counter": 2,                          // LoRaWAN frame counter
  "is_retry": false,                     // Is set to true if this message is a retry (you could also detect this from the counter)
  "payload_raw": "AQIDBA==",             // Base64 encoded payload: [0x01, 0x02, 0x03, 0x04]
  "payload_fields": {},                  // Object containing the results from the payload functions - left out when empty
  "metadata": {
    "time": "1970-01-01T00:00:00Z",      // Time when the server received the message
    "frequency": 868.1,                  // Frequency at which the message was sent
    "modulation": "LORA",                // Modulation that was used - LORA or FSK
    "data_rate": "SF7BW125",             // Data rate that was used - if LORA modulation
    "bit_rate": 50000,                   // Bit rate that was used - if FSK modulation
    "coding_rate": "4/5",                // Coding rate that was used
    "gateways": [
      {
        "id": "ttn-herengracht-ams",     // The gateway ID
        "timestamp": 12345,              // Timestamp when the gateway received the message
        "time": "1970-01-01T00:00:00Z",  // Time when the gateway received the message - left out when gateway does not have synchronized time 
        "channel": 0,                    // Channel where the gateway received the message
        "rssi": -25,                     // Signal strength of the received message
        "snr": 5,                        // Signal to noise ratio of the received message
        "rf_chain": 0,                   // RF chain where the gateway received the message
      },
      //...more if received by more gateways...
    ]
  },
  "downlink_url": "https://integrations.thethingsnetwork.org/ttn/api/v2/down/my-app-id/my-process-id?key=ttn-account-v2.secret"
}
```

## Downlink

Your application can schedule a downlink message to a URL for your application, process name and app access key:

```
https://integrations.thethingsnetwork.org/ttn/api/v2/down/my-app-id/my-process-id?key=ttn-account-v2.secret
```

This URL is also provided in each uplink message for convenience. However, you can call this URL any time to schedule downlink.

Your application should `POST` or `PUT` a downlink message in the following format:

```js
{
    "dev_id": "my-dev-id",     // The device ID
    "port": 1,                 // LoRaWAN FPort
    "confirmed": false,        // Whether the downlink should be confirmed by the device
    "payload_raw": "AQIDBA==", // Base64 encoded payload: [0x01, 0x02, 0x03, 0x04]
}
```

You can also use payload fields if your application has a encoder payload function declared to encode JSON to binary:

```js
{
    "dev_id": "my-dev-id", // The device ID
    "port": 1,             // LoRaWAN FPort
    "confirmed": false,    // Whether the downlink should be confirmed by the device
    "payload_fields": {    // The JSON object to be encoded by your encoder payload function
        "on": true,
        "color": "blue",
    }
}
```
