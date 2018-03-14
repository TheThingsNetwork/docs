---
title: Gateway LED Status
hidden: false
zindex: 200
---

# Gateway LED Status

## Possible Combinations

| **LED 1** | **LED 2**  | **LED 3**  | **LED 4**  | **Status** |
| --------- | ---------- | ---------- | ---------- | ---------- |
| On        | Slow blink |       -    |     -      | Connecting to the internet |
| On        | Fast blink |      -     |     -      | Could not connect to the internet |
| On        | On         | Slow blink |       -    | Activating |
| On        | On         | Fast blink |       -    | Could not activate (restart activation from step 1) |
| On        | On         | On         |     -      | Activated |
| On        | On         | On         | On         | Connected to the server |

## Details

| **LED** | **State** | **Reason** | **Cause** | **User Action** |
| ------- | --------- | ---------- | --------- | ------------- |
| **1 - Power** | Off | No software is running | No power | Make sure the device is powered |
| | Off| - | Incorrect firmware loaded | Make sure the correct firmware is loaded |
| | Slow | Software update in progress | -| Wait |
| | On | Software is loaded and running |
| **2 - Internet** | Slow | Checking for internet |
| | Fast | No Ethernet or WiFi connection | No Ethernet link and WiFi connection failed; only possible way to connect is via the gateway’s WiFi access point (AP) | Connect to gateway's AP |
| | On | Has internet |
| **3 - Configuration** | Slow | Activating |
| | Fast | Bad configuration | No ID |Need to configure a gateway ID on the device |
| | | | Already activated | Need to configure valid key on the device |
| | | | Invalid key | Need to configure valid key on the device |
| | | | No router | Need to configure router in the TTN console |
| | | | Invalid URL | Correct URL in the TTN console |
| | On  | Activation successful |
| **4 - Connection** | Slow | Connecting MQTT |
| | On | Connected MQTT |
| **5 - Activity** | Single | Uplink/Downlink |
