---
title: Node.js
section: SDKs & Libraries
redirect_from:
 - /refactor/node-js/
 - /current/node-js/
 - /v2-preview/node-js/
 - /node-js/
---

# Node.js SDK

[Node.js](https://nodejs.org/) is a JavaScript run-time built on Chrome's V8 JavaScript engine.

With the [Node.js Application SDK](https://www.npmjs.com/package/ttn) you can manage applications, receive uplink messages and send downlink messages. You can also use the SDK to manage devices.

## Installation

```
$ pip install ttn
```

## Documentation
* [API Reference](https://www.thethingsnetwork.org/docs/applications/python/api.html)


## Example

```python
import time
import ttn

app_id = "foo"
access_key = "ttn-account.eiPq8mEeYRL_PNBZsOpPy-O3ABJXYWulODmQGR5PZzg"

def uplink_callback(msg, client):
  print("Received uplink from ", msg.dev_id)
  print(msg)

handler = ttn.HandlerClient(app_id, access_key)

# using mqtt client
mqtt_client = handler.data()
mqtt_client.set_uplink_callback(uplink_callback)
mqtt_client.connect()
time.sleep(60)
mqtt_client.close()

# using application manager client
app_client =  handler.application()
my_app = app_client.get()
print(my_app)
my_devices = app_client.devices()
print(my_devices)
```
