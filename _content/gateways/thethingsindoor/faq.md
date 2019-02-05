---
title: FAQ
section: Frequently Asked Questions
zindex: 200
---

# Frequently Asked Questions

This page consolidates some of the most frequently asked questions on [The Things Indoor Gateway](./index.md).

> This section contains the most frequent issues and queries pertaining to the The Things Indoor Gateway. If you find issues that are not covered in this page, feel free to reach out to [The Things Network community forum](https://www.thethingsnetwork.org/forum).


#### Q. What is the right way to register the gateway in the TTN console?

Since this is a EUI based gateway, select the `I'm using the legacy packet forwarder` option while registering the gateway and add your 64bit (8byte) EUI in the `GatewayID` tab. The console automatically prepends lower case `eui-` to your ID. 
If registering using `ttnctl`, please follow the convention of `eui-<your 64bit EUI in lower case for the hex alphabets>`.


#### Q. Is registration in TTN Console required? (Maybe the new Basic Station software gives TTN sufficient information about the frequency plan, so registration might be fully optional?)

Yes the registration is mandatory. For now, these gateways are identified as US915/EU868 based on their EUIs and a default frequency plan is sent out. But, with the official V3 support, you can select other supported frequency plans while you register your gateways as you would do with other gateways currently.
