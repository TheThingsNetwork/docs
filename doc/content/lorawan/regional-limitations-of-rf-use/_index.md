---
title: "Regional Limitations of RF Use in LoRaWAN"
section: Additional Information
description: ""
weight:
---

The sub-gigahertz ISM (Industrial, Scientific, and Medical) band is a range of radio frequencies between **902 MHz and 928 MHz** in the **United States**, and between **868 MHz and 870 MHz** in **Europe**, that is available for unlicensed use. The frequencies mentioned are commonly used for wireless communications in industrial, scientific, and medical applications, and are also used in LoRaWAN networks.

# Europe (863-870 MHz)

In Europe, LoRaWAN uses a range of **24 to 80 channels** with either 125 kHz or 250 kHz bandwidth, where 250 kHz bandwidth can be achieved only using DR (Data Rate) 6.

All LoRaWAN end devices are required to operate at least on channels 868.10 MHz, 868.30 MHz, and 868.50 MHz. These channels must have a bandwidth of 125 kHz at DR0 to DR5, and be restricted to a maximum [duty cycle](/lorawan/duty-cycle/) of 1%. These three channels are used for sending join-requests, so all gateways should listen on these channels too.

The [LoRa Alliance®](https://lora-alliance.org/) recommends a duty cycle limitation of 1% in the European band which means that a device can transmit for no more than 1% of the time while ensuring the maximum EIRP (Effective Isotropic Radiated Power) of +16 dBm. The purpose of the duty cycle limitation is to ensure that devices operating in the ISM band do not cause harmful interference to other devices operating in the same band. 

The EIRP of 16 dBm is equal to 40 mW and is equivalent to an ERP of 14 dBm, which is equal to 25 mW. To learn more about EIRP and ERP, you can refer to the [LoRaWAN®](/lorawan/) section.

However, [ETSI](https://www.etsi.org/) (European Telecommunications Standards Institute) has segmented the European ISM frequency band into 6 sub-bands (K, L, M, N, P, Q) and imposes additional restrictions on the duty cycle and maximum ERP for some sub-bands (see pages 21-22 of the [ETSI EN300.220 V3.2.1 (2018-06) document](https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.02.01_60/en_30022002v030201p.pdf)).

- K (863 MHz - 865 MHz): 0.1%, 25 mW ERP
- L (865 MHz - 868 MHz): 1%, 25 mW ERP
- M (868 MHz - 868.6 MHz): 1%, 25 mW ERP
- N (868.7 MHz - 869.2 MHz): 0.1%, 25 mW ERP
- P (869.4 MHz - 869.65 MHz): 10%, 500 mW ERP
- Q (869.7 MHz - 870 MHz): 1%, 25 mW ERP

For example, devices operating in the 869.4-869.65 MHz range, which is sub-band P, have a duty cycle limitation of 10%, which means that a device can transmit for no more than 10% of the time.

Usually, the limitations of sub-bands K, L, M, N and Q are applied for uplink transmissions and the limitations of sub-band P are mainly applied for downlink transmissions. Usually, a number of end devices in a LoRaWAN network is way higher than a number of gateways. Gateways can therefore run into their duty cycle limit quicker than end devices. LoRaWAN's RX2 channel is normally chosen to fall into sub-bad P in order to benefit from the higher duty cycle limit, and provide 10x more downlinks to gateways instead of end devices.

By default, the RX1 receive window for downlinks uses the same frequency as the preceding uplink, while the RX2 receive window uses a fixed frequency, with the default being 869.525 MHz at DR0 using SF12 with 125 kHz.

In Europe 869.525 MHz is used for [Class B beacon transmissions and ping slots](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/lorawan-class-b-devices/).

# US (902-928 MHz)

The following regulations are applied to the USA, Canada, and all other countries in ITU Region 2 adopting the entire [FCC](https://www.fcc.gov/) (Federal Communications Commission) 47 CFR (Code of Federal Regulations) Part 15 in the 902-928 ISM band.

In the United States, the ISM band is divided into **80 channels**: 72 for uplink and 8 for downlink.

- There are **64 uplink channels**, numbered from 0 to 63, each with a bandwidth of 125 kHz. These channels start at a center frequency at 902.3 MHz and increment linearly by 200 kHz up to 914.9 MHz.
- There are **8 uplink channels**, numbered from 64 to 71, each with a bandwidth of 500 kHz. These channels start at a center frequency at 903.0 MHz and increment linearly by 1.6 MHz up to 914.2 MHz.
- There are **8 downlink channels**, numbered from 0 to 7, each with a bandwidth of 500 kHz. These channels start at a center frequency at 923.3 MHz and increment linearly by 600 kHz up to 927.5 MHz.

The end devices must have the capability to store parameters for the 72 uplink channels mentioned above.

The [dwell time](https://www.thethingsindustries.com/docs/reference/glossary/) for LoRaWAN in the US902-928 band refers to the amount of time that a device spends on a specific channel before switching to the next channel. The dwell time is an important parameter for LoRaWAN devices as it helps to ensure that devices are able to successfully transmit data while avoiding interference with other devices.

For the US ISM band, the dwell time for transmitting a LoRaWAN message must not exceed 400 ms. It is important to consider this dwell time limitation when designing and operating devices. For example, if a device is transmitting data at a high rate, it may need to use a faster hopping rate in order to comply with the 400 ms dwell time limitation.

Both end devices and gateways are also limited to a maximum EIRP of +30 dBm. The maximum EIRP can be maintained by adjusting the transmitter power, antenna gain, or cable loss. 

The downlink channel for the RX1 receive window is based on the uplink channel that was used to send the preceding uplink. The default downlink channel for the RX2 receive window is 923.3 MHz with a data rate of DR8.

Class B beacon transmissions and ping slots in the US utilize eight frequencies: 923.3, 923.9, 924.5, 925.1, 925.7, 926.3, 926.9, and 927.5 MHz. These frequencies are rotated starting at 923.3 MHz.


## Additional Regulatory Requirements and Certifications
It is important to note that there may be additional regulatory requirements and certifications that must be met to legally operate in the ISM band, such as obtaining approval or certification from organizations such as [FCC, ICASA, RED, R&TTE, etc](https://www.element.com/nucleus/2018/wireless-devices-a-guide-to-compliance-in-the-us-and-eu). Getting your LoRaWAN end device [certified](https://lora-alliance.org/lorawan-certification/) by the LoRa Alliance® before releasing it to the market is also highly recommended.