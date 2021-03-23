---
title: "Quick Start"
description: "Get started with The Things Network"
image: /devices/icon.png
menu:
  main:
    weight: 1
---


The Things Network offers a free and developer-friendly way to get familiar with LoRaWAN technology. The Things Network provides a public community LoRaWAN network, initiated by <a href="https://thethingsindustries.com/" target="_blank">The Things Industries</a>
, and supported by 100k+ community members from more than 100 countries around the world.

> Join The Things Network [Forum](https://www.thethingsnetwork.org/forum/) or <a href="https://thethingsnetwork.slack.com/" target="_blank">Slack</a> for community support.

> For commercial solutions, we recommend using an SLA-backed network provided by The Things Industries. Learn more about <a href="https://thethingsindustries.com/" target="_blank">The Things Industries</a>.

> The Things Network runs on open source code, actively maintained by The Things Industries. If you would like to explore or contribute, visit our <a href="https://github.com/TheThingsNetwork/lorawan-stack" target="_blank">open source LoRaWAN stack repository</a>.

#### Useful links:

- <a href="https://console.cloud.thethings.network/" target="_blank">The Things Network development environment</a>
- <a href="https://www.youtube.com/watch?v=rK8oJHZ9Q7U" target="_blank">The Things Stack Introduction video</a>
- <a href="https://www.thethingsindustries.com/docs" target="_blank">Visit the official The Things Stack documentation page.</a>
- <a href="https://www.thethingsindustries.com/docs/getting-started/what-is-tts/" target="_blank">What is The Things Industries, The Things Network and The Things Stack?</a>

> **Important note:** In 2021, The Things Network community edition will be upgraded to use [**The Things Stack**]({{< relref "../the-things-stack" >}}) V3. **The Things Network Stack** V2 will no longer be actively maintained. If you have been using The Things Network, you will need to learn how to [migrate your gateways and devices to The Things Stack]({{< relref "../the-things-stack/migrate-to-v3" >}}).

## Learn more about LoRaWAN

LoRaWAN is a radio frequency protocol that allows devices to connect to the Internet over a long range with incredibly low power consumption. Visit our documentation to [learn more about LoRaWAN]({{< relref "../lorawan" >}}).

Watch the video below on *Everything you need to know about LoRaWAN in 60 minutes* by Johan Stokking (tech lead of The Things Network):

{{< youtube ZsVhYiX4_6o >}}

Read along to learn how you can implement your end-to-end IoT prototype within a day.

## Set up your LoRaWAN network

The main building blocks of The Things Network are **gateways**. Thousands of gateways across the globe are already connected to The Things Network, making the community LoRaWAN network available for free usage. 

> See the [global coverage map](https://www.thethingsnetwork.org/map)

Although you might already have coverage in your area, we still recommend you get your hands on a gateway to ensure reliable coverage. There are a lot of gateways with extensive features on the market, so make sure you choose the one that fits your needs best. For example, here is a short list of some popular indoor gateways:

|   |  Gateway | Link  |
| ------------- |:-------------:| -----:|
| <img src="mikrotik_wap_l8.jpg" alt="Mikrotik wAP LR8" style="width:200px"/> | **Mikrotik wAP LR8** | <a href="https://mikrotik.com/product/wap_lr8_kit" target="_blank">More info</a> |
| <img src="sentrius-rg1xx.png" alt="Laird Sentrius RG1xx" style="width:200px"/> | **Laird Sentrius RG1xx** | <a href="https://www.lairdconnect.com/wireless-modules/lorawan-solutions/sentrius-rg1xx-lorawan-gateway-wi-fi-ethernet-optional-lte-us-only" target="_blank">More info</a> |
| <img src="kona-micro-light-gateway.png" alt="Tektelic Kona Micro Lite" style="width:200px"/> | **Tektelic Kona Micro Lite** | <a href="https://tektelic.com/catalog/kona-micro-lite-lorawan-gateway" target="_blank">More info</a> |
| <img src="multitech-conduit-ap.png" alt="Multitech Conduit AP" style="width:200px"/> | **Multitech Conduit AP** | <a href="https://www.multitech.com/brands/multiconnect-conduit-ap" target="_blank">More info</a> |

Once you have your hands on a gateway, [learn how to connect your gateway to The Things Stack]({{< relref "../devices-and-gateways/adding-gateways" >}}).

> **Important note:** Different world regions use different <a href="https://www.thethingsindustries.com/docs/reference/frequency-plans/" target="_blank">frequency plans</a>, e.g. 863-870 MHz for Europe, 902-928 MHz for North America, etc. Make sure you double-check that the hardware aligns with your region’s radio frequency before purchasing!

To learn more about gateways, have a look at the review video by Ben Olayinka:

{{< youtube h_6dIte_IxI >}}

## Get your development board and activate it

To build a prototype of your end-to-end IoT solution, you will need a development board. Here is a short list of popular development boards that can help you build your IoT app in no-time:

| Image | Development board | Webshop  |
| ------------- |:-------------:| -----:|
| <img src="TheThingsUno.png" alt="The Things Uno" style="width:200px"/> | **The Things Uno** | <a href="https://connectedthings.store/gb/lorawan-development/the-things-uno-development-board.html" target="_blank">Buy</a> |
| <img src="Arduino-MKR-WAN-1300.jpg" alt="Arduino MKR WAN 1300" style="width:200px"/> | **Arduino MKR WAN 1300** | <a href="https://store.arduino.cc/arduino-mkr-wan-1300-lora-connectivity-1414" target="_blank">Buy</a> |
| <img src="Pycom-lopy4.png" alt="Pycom lopy4" style="width:200px"/> | **Pycom LoPy4** | <a href="https://pycom.io/product/lopy4/" target="_blank">Buy</a> |
| <img src="stm32L0-discover-kit.jpg" alt="stm32L0 discover kit" style="width:200px"/> | **STM32L0 Discovery Kit** | <a href="https://www.st.com/en/evaluation-tools/b-l072z-lrwan1.html" target="_blank">Buy</a> |
| <img src="adafruit-feather.jpg" alt="Adafruit Feather RFM95 LoRa Radio" style="width:200px"/> | **Adafruit Feather RFM95 LoRa Radio** | <a href="https://www.adafruit.com/product/3078" target="_blank">Buy</a> |


Did you set up your gateway and created a free account on The Things Network? Great, now it is time to activate your development board! [Learn how to connect your device to The Things Stack]({{< relref "../devices-and-gateways/adding-devices" >}}).

To learn more about getting started with The Things Stack, have a look at the video by Bogdans Afonins:

{{< youtube rK8oJHZ9Q7U >}}

## Build your end-to-end application

Once you have your LoRaWAN network setup, you can use available integrations to build your end-to-end IoT solution. Integrations allow you to process data and act on it by triggering events. Learn [how to create integrations]({{< relref "../applications-and-integrations/" >}}).


### Other useful links:

- <a href="https://www.thethingsindustries.com/docs" target="_blank">Official The Things Stack documentation page</a>
- <a href="https://www.thethingsindustries.com/docs/getting-started/what-is-tts/" target="_blank">What is The Things Industries, The Things Network and The Things Stack?</a>
- <a href="https://www.youtube.com/playlist?list=PLM8eOeiKY7JWTf-d4XmRuRjK1ZFaoinwM" target="_blank">The Things Stack Getting Started playlist</a>
- <a href="https://www.thethingsnetwork.org/forum/" target="_blank">The Things Network Forum</a>
