---
title: "Quick Start"
description: "Get started with The Things Stack Community Edition"
image: /quick-start/tts-ce.png
menu:
  main:
    weight: 10
---

{{< figure src="TTN-logo.svg" class="float plain" >}}

Welcome to The Things Network! Here, you will learn all about LoRaWAN, and how to build IoT solutions with The Things Stack.

## What is LoRaWAN?

LoRaWAN is a low-power, wide area networking protocol built on top of the LoRa radio modulation technique. It wirelessly connects devices to the internet. Learn all about it in the [LoRaWAN section]({{< ref "lorawan" >}}).

## What is The Things Stack?

The Things Stack is a LoRaWAN Network Server that is developed and actively maintaned by [The Things Industries](https://thethingsindustries.com).

The Things Stack comes in different deployments for personal or business use cases, namely:

The Things Stack Cloud: an SLA-backed, production grade The Things Stack instance hosted by The Things Industries. ([Try it for free](https://www.thethingsindustries.com/stack/plans/)).

The Things Stack Community Edition: a free, community based deployment of The Things Stack for development use.

To learn the role of a Network Server and the other components of a LoRaWAN network, see [LoRaWAN Architecture]({{< ref "lorawan/architecture" >}}).

## What is The Things Stack Community Edition?

Since January 2021, The Things Network runs **The Things Stack Community Edition**, a free, community based deployment of The Things Stack.

This is an upgrade from the previous The Things Network V2, which comes with a set of brand new features, out-of-the-box integrations, extended coverage and improved user experience.

Complete documentation for all versions of The Things Stack is available [here](https://www.thethingsindustries.com/docs/).

The Things Stack Community Edition offers a free and developer-friendly way to get familiar with LoRaWAN technology. It provides a public community LoRaWAN network, initiated by [The Things Industries](https://thethingsindustries.com/), and supported by 100k+ The Things Network community members from more than 100 countries around the world.

[Login or create a free account](https://console.cloud.thethings.network/) to get started with The Things Stack Community Edition and start building IoT solutions.

Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or [Slack](https://thethingsnetwork.slack.com/) for plenty of great ideas for projects, and to ask or answer questions about The Things Stack.

The Things Stack Community Edition does not come with an uptime guarantee and is not recommended for commercial projects. For commercial projects, we recommend an SLA-backed The Things Stack instance provided by The Things Industries. [Try The Things Stack Cloud for free](https://www.thethingsindustries.com/stack/plans/).

## Scale Up

Once you have your LoRaWAN proof of concept project up and running, and you are ready to scale to a commercial level, we recommend using an SLA-backed network provided by The Things Industries. Visit [The Things Stack Plans Page](https://www.thethingsindustries.com/stack/plans/) to learn more about private deployments of The Things Stack.

## The Things Stack Features

The Things Stack, compared to The Things Network V2, is **more scalable, more secure and supports all the latest LoRaWAN developments** like the latest LoRaWAN versions 1.1 and 1.0.4.

The Things Stack architecture is based on microservices which allows for **better distribution of services, better scaling and interoperability with other LoRaWAN networks**.

The Things Stack **supports all LoRaWAN classes (A, B, C) and multicast device groups, all existing LoRaWAN versions (including v1.0.4 and v1.1) and all regional parameters as defined by the LoRa Alliance**. By being standards compliant, The Things Stack **supports passive roaming and will support handover roaming** in the future. **Firmware updates over the air, advanced clustering and load balancing techniques** also come along with this upgrade.

The advanced APIs offer **gRPC, HTTP and MQTT [integrations](https://www.thethingsindustries.com/docs/integrations/)**. For debugging purposes, there are **API-based event streams** that can help you trace issues, monitor device behaviour and get useful alerts. [Data Formats](https://www.thethingsindustries.com/docs/reference/data-formats/) used by The Things Stack have a different schema and have a much **richer metadata support**. For storing data, a **[Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/)** is also available.

Users of The Things Stack have the opportunity to use the **Global Join Server** for storing and issuing security keys, and in that way, improve the security of their sensor deployment. Since this network architecture is standards-compliant, developers can even use a join server operated by a trusted third party.

One of the most important features is the connection to **[Packet Broker](https://www.thethingsindustries.com/docs/reference/peering/)**, allowing the exchange of traffic between The Things Stack Community Edition and private LoRaWAN networks which increases LoRaWAN network coverage, performance and capacity, and prolongs the end device battery life. 

You will also be able to reuse your username and password from The Things Network V2 to log in, thanks to **The Things ID feature**. Users can use the [Console](https://www.thethingsindustries.com/docs/getting-started/console/) with an **improved user interface** or [CLI](https://www.thethingsindustries.com/docs/getting-started/cli/), to manage [gateways](https://www.thethingsindustries.com/docs/gateways/), [devices](https://www.thethingsindustries.com/docs/devices/), [applications](https://www.thethingsindustries.com/docs/integrations/adding-applications/), [users and organizations](https://www.thethingsindustries.com/docs/getting-started/user-management/), as well as to interact with uplink and downlink events in real-time. 

For a more detailed comparison between The Things Network V2 and The Things Stack Community Edition, check out the [Major Changes in The Things Stack](https://www.thethingsindustries.com/docs/getting-started/migrating/major-changes/) page.

## Start using The Things Stack Community Edition

The Things Stack Community Edition can be accessed via the Console. You can access the Console by [selecting a cluster](https://console.cloud.thethings.network/) that is closest to you geographically.

![The Things Stack Community Edition Console](TTN-V3-console.png "The Things Network Console")

## Set up your LoRaWAN network

The main building blocks of the public community LoRaWAN network are **gateways**. Thousands of gateways across the globe are already connected to The Things Stack Community Edition, making the community LoRaWAN network available for free usage. 

Take a look at the [global The Things Network coverage map](https://www.thethingsnetwork.org/map).

Although you might already have coverage in your area, we still recommend you get your hands on a gateway to ensure reliable coverage. There are a lot of gateways with extensive features on the market, so make sure you choose the one that fits your needs best. For example, here is a short list of some popular indoor gateways:

|   |  Gateway | Link  |
| ------------- |:-------------:| -----:|
| <img src="mikrotik_wap_l8.jpg" alt="Mikrotik wAP LR8" style="width:200px"/> | **Mikrotik wAP LR8** | [More info](https://mikrotik.com/product/wap_lr8_kit) |
| <img src="sentrius-rg1xx.png" alt="Laird Sentrius RG1xx" style="width:200px"/> | **Laird Sentrius RG1xx** | [More info](https://www.lairdconnect.com/wireless-modules/lorawan-solutions/sentrius-rg1xx-lorawan-gateway-wi-fi-ethernet-optional-lte-us-only) |
| <img src="kona-micro-light-gateway.png" alt="Tektelic Kona Micro Lite" style="width:200px"/> | **Tektelic Kona Micro Lite** | [More info](https://tektelic.com/catalog/kona-micro-lite-lorawan-gateway) |
| <img src="multitech-conduit-ap.png" alt="Multitech Conduit AP" style="width:200px"/> | **Multitech Conduit AP** | [More info](https://www.multitech.com/brands/multiconnect-conduit-ap) |

Once you have your hands on a gateway, [learn how to connect your gateway to The Things Stack Community Edition]({{< relref "../devices-and-gateways/adding-gateways" >}}).

{{< note >}} Different world regions use different [frequency plans](https://www.thethingsindustries.com/docs/reference/frequency-plans/), e.g. 863-870 MHz for Europe, 902-928 MHz for North America, etc. Make sure you double-check that the hardware aligns with your region’s radio frequency before purchasing! {{</ note >}}

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

### Useful Links:

- [The Things Stack Introduction video](https://www.youtube.com/watch?v=rK8oJHZ9Q7U)
- [The Things Stack official documentation page](https://www.thethingsindustries.com/docs)
- [What is The Things Industries, The Things Network and The Things Stack?](https://www.thethingsindustries.com/docs/getting-started/what-is-tts/)
- [The Things Stack Community Edition Console](https://console.cloud.thethings.network/)
- [The Things Stack Getting Started playlist](https://www.youtube.com/playlist?list=PLM8eOeiKY7JWTf-d4XmRuRjK1ZFaoinwM)
- [The Things Network Forum](https://www.thethingsnetwork.org/forum/)
