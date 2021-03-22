---
title: Miscellaneous
weight: -10000
---

## Configuration

> What `clksrc` value should I use?

In the packet forwarder's configuration file, `clksrc` is the ID of the radio that provides clock to the concentrator. On most devices, it is the radio 1 - so the configuration should be `"clksrc": 1`. However, on the Multitech Conduit, the clock is provide by radio 0. Thus, if you're using a configuration that was not written for Multitech Conduits, you should ensure that in the configuration, `"clksrc": 0`.

## What's next?

* [Improve the Conduit's range and case it for outdoor use.](https://www.thethingsnetwork.org/labs/story/build-an-outdoor-gateway-with-multitech-conduit)
