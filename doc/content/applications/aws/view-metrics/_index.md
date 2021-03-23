---
title: View Metrics
weight: 300
---

The integration process reports metrics to AWS CloudWatch. These metrics include thing registry synchronization numbers, uplink and downlink messages, reported thing shadow states and sent shadow deltas. This guide walks you through viewing these metrics in AWS CloudWatch.

1. Log in to the [AWS Management Console](http://console.aws.amazon.com)
2. In **Services** under **Management Tools**, go to **CloudWatch**
3. Click **Browse Metrics**
4. Under **Custom Namespaces**, go to **TheThingsNetwork/Integration**
5. Click **AppID, DiscoveryServer** to view the metrics from the integration
6. Selecting the metrics of interest adds them to the chart

  ![metrics](../metrics.png)

7. In **Graphed metrics** change the **Statistic** to **Sum** to view count per time interval.

* **MessagesReceived** indicates the number of uplink messages
* **MessagesSent** indicates the number of downlink messages
* **ShadowStatesReported** indicates the number of thing shadow states reported
* **ShadowDeltasSent** indicates the number of thing shadow deltas sent
* **ThingsCreatedInAWS** indicates the number of device from The Things Network that are created as things in AWS IoT
* **ThingsCreatedInTTN** indicates the number of AWS IoT things that are created as devices in The Things Network
* **ThingUpdatesInTTN** indicates the number of AWS IoT thing updates that are applied to the device in The Things Network
