---
title: Python
section: SDKs & Libraries
---

[Python](https://www.python.org/) is powerful, and fast; 
plays well with others; 
runs everywhere; 
is friendly & easy to learn; 
is Open.


The Python Application SDK for The Things Network allows you to send and receive messages to and from IoT devices.

*⚠️ The support and maintenance for this SDK has been discontinued, it is not recommended to use the SDK for new projects.*

## Installation

```
$ pip install ttn
```

## Documentation
* See the [API Reference](./api-reference.md) to learn how to start using the Python SDK.

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
