---
title: "Quick Start"
description: "Get started with The Things Stack Community Edition"
image: /devices/icon.png
menu:
  main:
    weight: 10
---

Since January 2021, **The Things Network V2 software has been upgraded to The Things Stack Community Edition**. This upgrade comes with a set of brand new features, out-of-the-box integrations, extended coverage and improved user experience. 

The Things Stack Community Edition is one of the distributions of The Things Stack, a third version (V3) of the LoRaWAN Network Server that is developed and actively maintaned by The Things Industries. 

> The Things Stack Community Edition runs on open source code, so if you would like to explore or contribute, visit our [open source LoRaWAN stack repository](https://github.com/TheThingsNetwork/lorawan-stack).
>
> Click [here](https://www.thethingsindustries.com/docs/download/) to learn about other distributions of The Things Stack.

The Things Stack Community Edition offers a free and developer-friendly way to get familiar with LoRaWAN technology. It provides a public community LoRaWAN network, initiated by [The Things Industries](https://thethingsindustries.com/), and supported by 100k+ The Things Network community members from more than 100 countries around the world.

> Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or [Slack](https://thethingsnetwork.slack.com/) for community support.

> For commercial solutions, we recommend using an SLA-backed network provided by The Things Industries. Visit [The Things Industries website](https://thethingsindustries.com/) to learn more about it.

{{< note >}} **The Things Network V2 will no longer be actively maintained and all V2 machines are going to be shut down by the end of 2021**. If you have been using The Things Network V2 previously, you will need to [migrate your gateways and devices to The Things Stack Community Edition]({{< relref "../the-things-stack" >}}). {{</ note >}}

#### Useful links:

- [The Things Stack Community Edition development environment](https://console.cloud.thethings.network/)
- [The Things Stack Introduction video](https://www.youtube.com/watch?v=rK8oJHZ9Q7U)
- [The Things Stack official documentation page](https://www.thethingsindustries.com/docs)
- [What is The Things Industries, The Things Network and The Things Stack?](https://www.thethingsindustries.com/docs/getting-started/what-is-tts/)

## Learn more about LoRaWAN

LoRaWAN is a radio frequency protocol that allows devices to connect to the Internet over a long range with incredibly low power consumption. Visit our documentation to [learn more about LoRaWAN]({{< relref "../lorawan" >}}).

Watch the video below on *Everything you need to know about LoRaWAN in 60 minutes* by Johan Stokking (tech lead of The Things Network):

{{< youtube ZsVhYiX4_6o >}}

<br>

Read along to learn how you can implement your end-to-end IoT prototype within a day.

## Start using The Things Stack Community Edition

The Things Stack Community Edition can be accessed via the Console. You can access the Console by [selecting a cluster](https://console.cloud.thethings.network/) that is closest to you geographically.

![The Things Stack Community Edition Console](TTN-V3-console.png "The Things Network Console")

## Set up your LoRaWAN network

The main building blocks of the public community LoRaWAN network are **gateways**. Thousands of gateways across the globe are already connected to The Things Stack Community Edition, making the community LoRaWAN network available for free usage. 

> See the [global coverage map](https://www.thethingsnetwork.org/map)

Although you might already have coverage in your area, we still recommend you get your hands on a gateway to ensure reliable coverage. There are a lot of gateways with extensive features on the market, so make sure you choose the one that fits your needs best. For example, here is a short list of some popular indoor gateways:

|   |  Gateway | Link  |
| ------------- |:-------------:| -----:|
| <img src="mikrotik_wap_l8.jpg" alt="Mikrotik wAP LR8" style="width:200px"/> | **Mikrotik wAP LR8** | [More info](https://mikrotik.com/product/wap_lr8_kit) |
| <img src="sentrius-rg1xx.png" alt="Laird Sentrius RG1xx" style="width:200px"/> | **Laird Sentrius RG1xx** | [More info](https://www.lairdconnect.com/wireless-modules/lorawan-solutions/sentrius-rg1xx-lorawan-gateway-wi-fi-ethernet-optional-lte-us-only) |
| <img src="kona-micro-light-gateway.png" alt="Tektelic Kona Micro Lite" style="width:200px"/> | **Tektelic Kona Micro Lite** | [More info](https://tektelic.com/catalog/kona-micro-lite-lorawan-gateway) |
| <img src="multitech-conduit-ap.png" alt="Multitech Conduit AP" style="width:200px"/> | **Multitech Conduit AP** | [More info](https://www.multitech.com/brands/multiconnect-conduit-ap) |

Once you have your hands on a gateway, [learn how to connect your gateway to The Things Stack Community Edition]({{< relref "../devices-and-gateways/adding-gateways" >}}).

> **Important note:** Different world regions use different [frequency plans](https://www.thethingsindustries.com/docs/reference/frequency-plans/), e.g. 863-870 MHz for Europe, 902-928 MHz for North America, etc. Make sure you double-check that the hardware aligns with your region’s radio frequency before purchasing!

To learn more about gateways, have a look at the review video by Ben Olayinka:

{{< youtube h_6dIte_IxI >}}

## Get your development board and activate it

To build a prototype of your end-to-end IoT solution, you will need a development board. Here is a short list of popular development boards that can help you build your IoT app in no-time:

| Image | Development board | Webshop  |
| ------------- |:-------------:| -----:|
| <img src="TheThingsUno.png" alt="The Things Uno" style="width:200px"/> | **The Things Uno** | [Buy](https://connectedthings.store/gb/lorawan-development/the-things-uno-development-board.html) |
| <img src="Arduino-MKR-WAN-1300.jpg" alt="Arduino MKR WAN 1300" style="width:200px"/> | **Arduino MKR WAN 1300** | [Buy](https://store.arduino.cc/arduino-mkr-wan-1300-lora-connectivity-1414) |
| <img src="Pycom-lopy4.png" alt="Pycom lopy4" style="width:200px"/> | **Pycom LoPy4** | [Buy](https://pycom.io/product/lopy4/) |
| <img src="stm32L0-discover-kit.jpg" alt="stm32L0 discover kit" style="width:200px"/> | **STM32L0 Discovery Kit** | [Buy](https://www.st.com/en/evaluation-tools/b-l072z-lrwan1.html) |
| <img src="adafruit-feather.jpg" alt="Adafruit Feather RFM95 LoRa Radio" style="width:200px"/> | **Adafruit Feather RFM95 LoRa Radio** | [Buy](https://www.adafruit.com/product/3078) |


Did you set up your gateway and created a free account on The Things Stack Community Edition? Great, now it is time to activate your development board! [Learn how to connect your device to The Things Stack Community Edition]({{< relref "../devices-and-gateways/adding-devices" >}}).

To learn more about getting started with The Things Stack (Community Edition), have a look at the video by Bogdans Afonins:

{{< youtube rK8oJHZ9Q7U >}}

## Build your end-to-end application

Once you have your LoRaWAN network setup, you can use available integrations to build your end-to-end IoT solution. Integrations allow you to process data and act on it by triggering events. Learn [how to create integrations on The Things Stack Community Edition]({{< relref "../applications-and-integrations/" >}}).


### Other useful links:

- [Official The Things Stack documentation page](https://www.thethingsindustries.com/docs)
- [What is The Things Industries, The Things Network and The Things Stack?](https://www.thethingsindustries.com/docs/getting-started/what-is-tts/)
- [The Things Stack Getting Started playlist](https://www.youtube.com/playlist?list=PLM8eOeiKY7JWTf-d4XmRuRjK1ZFaoinwM)
- [The Things Network Forum](https://www.thethingsnetwork.org/forum/)
