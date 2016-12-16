---
title: Gateway Registration
---

# Gateway Registration

We are refactoring the process for Gateway Registration.

## What will change?
Currently, our backend accepts data from any gateway. Once you have configured it to forward to our backend, registration is optional to add meta data (like location), drop it on our [map](https://www.thethingsnetwork.org/map) and link it to your account for further management.

Once we are done and updated firmware for your gateway is available, you will first register the gateway. This will generate a key which you will use to configure and activate the gateway, much like you already do for devices.

## Current process
For current gateway firmware, please follow these steps:

1.  Go to [Claim a gateway](https://www.thethingsnetwork.org/g/claim).

    * For **Title**, enter anything you like to be displayed on listings such as our [map](https://www.thethingsnetwork.org/map).
    * For **Eui**, enter the hardware or configured EUI of your gateway.

2.  Press **Save**.

    > If you get an error saying **Gateway doesn't exist**, then the backend hasn't seen a gateway with this EUI yet. Please check the EUI and make sure your gateway is on, connected and [is visible](http://noc.thethingsnetwork.org:2020/api/v1/gateways).

    > If you get **This gateway has been claimed already**, then another gateway has already used this EUI. Please configure your gateway with [a different one](https://www.randomlists.com/string?length=16).

3.  Enter the location and altitude of the gateway.

    If you're sitting next to it, go to [MyGeoPosition.com](http://mygeoposition.com/) to find both.