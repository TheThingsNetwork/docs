---
title: Troubleshooting
weight: 200
---

Is something not working like it should? This section is here to help you find out the issue might come from.

>If you have issues specifically with a gateway, see [Gateway Troubleshooting]({{< relref "../../gateways/troubleshooting" >}}).

## Check the Status page

Did everything work before? Before going through a list of possible causes, please check [The Things Network Status](https://status.thethings.network) to see if all services are operational.

## Application is not receiving data

If your application is not receiving data anymore, please check the following:

1. Make sure the application authenticates correctly, with a valid App ID and App Access Key. See the **Application overview** of your application in The Things Network Console
2. Check if you see data flowing in the Console, see the **Data** tab
3. Check if your device has been seen at all. Go to **Devices**, select a device, and check the **Last seen** (see also below)
4. Check one or more gateways covering your device are online, see the [community map](https://www.thethingsnetwork.org/map), or the **Gateways** section in the Console. For issues specifically with gateways, see [Gateway Troubleshooting]({{< relref "../../gateways/troubleshooting" >}})

## Network is not receiving device data

If the network does not receive data from your device, i.e. the **Last seen** date and time of a device is longer ago than expected, please check the following:

1. If your device is configured as ABP, the [frame counters](https://www.thethingsnetwork.org/docs/lorawan/security.html#frame-counters) may be reset because of a power cycle, leading to blocked messages. Please program devices as OTAA as soon as you can. In the meantime, you can go to a device in the Console, and click **reset frame counters** next to the device's frame counters
2. Check one or more gateways covering your device are online, see the [community map](https://www.thethingsnetwork.org/map), or the **Gateways** section in the Console. For issues specifically with gateways, see [Gateway Troubleshooting]({{< relref "../../gateways/troubleshooting" >}})

## Other issues

Our public community network is run by the community. The best way to reach out to the community for questions and issues is through [The THings Network Forum](https://www.thethingsnetwork.org/forum) and Slack ([request invite in your account](https://ttn.fyi/slack-invite)): the **#support** and **#ops** channel.

# Commercial support

The Things Industries offers hosted solutions and commercial support. See [Pricing](https://www.thethingsindustries.com/technology/pricing) for plans and pricing.
