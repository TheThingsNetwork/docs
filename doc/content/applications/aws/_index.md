---
title: AWS IoT
section: Integrations
---

This integration brings LoRaWAN to [AWS IoT](https://aws.amazon.com/iot/): sync thing registry, sync thing shadows, act on uplink messages and send downlink messages.

Syncing the thing registry allows you to manage LoRaWAN devices in AWS IoT: devices are created and updated in The Things Network. Syncing thing shadows enables reporting shadow state from uplink messages and sending downlink messages from shadow delta updates. Finally, uplink and downlink messages are available on AWS IoT MQTT so you can store messages in [DynamoDB](https://aws.amazon.com/dynamodb/), invoke [Lambda](https://aws.amazon.com/lambda/) functions and many more.

This integration runs in your AWS account and security context and can connect to The Things Network public community network and private networks.

## Getting Started

See [Quick Start]({{< relref "./quick-start" >}}) on how to get started.


## Video

[![Getting started with AWS IoT](https://img.youtube.com/vi/XuMv258g1kY/0.jpg)](https://www.youtube.com/watch?v=XuMv258g1kY)

Find the Arduino Sketch for The Things Node [here](https://github.com/TheThingsNetwork/docs/blob/master/_content/applications/aws/AWS-The-Things-Node.ino).
