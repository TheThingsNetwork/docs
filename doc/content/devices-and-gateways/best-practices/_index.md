---
title: Best Practices
section: Devices
aliases:
  - /devices/bestpractices
---

The goal of defining best practices for LoRaWAN devices which use The Things Stack Community Edition is to optimize their performance, as well as performance of the whole LoRaWAN network. Optimization means reducing energy consumption and increasing number of devices that are being reliably and efficiently served, while keeping the same number of gateways. 

To make sure you are exploiting device's capabilities in the most efficient way, follow these recommendations:

- Your device should be compliant to the [LoRaWAN specification](https://lora-alliance.org/about-lorawan/).
- Prefer using OTAA over ABP. See details about [why using OTAA is recommended](https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/).
- Eliminate unnecessary Join Requests to prevent network bloating in cases of a temporary connection loss.
- Sample your data as rarely as possible. 
- Reduce the payload size to the minimum possible. 
- Avoid confirmed uplink messages, if your application does not require 100% transmission assurance.
- Check your local government's regulations on the LoRaWAN device duty cycle and make sure you are respecting them.
- Do not be surprised if you are experiencing a packet loss up to 10%. Use Forward Error Correction (FEC) to reduce it further.
- Use jitter and backoff mechanisms to avoid device synchronization. 
- Use a different seed for every device's random number generator to make sure channels are truly being selected randomly, and also to avoid device synchronization.
- Use Adaptive Data Rate (ADR) mechanism for stationary devices to minimize the power consumption. 
- Use 32 bit frame counters that increment after each uplink/downlink to prevent replay attacks.
- Do not assume link loss if at least 3 ACKs are not missed.
- Use Hardware Secure Elements. Learn more about the [ATECC608A security solution developed by Microchip The Things Industries](https://www.thethingsindustries.com/docs/devices/atecc608a/).

Read more best practices at [The Things Stack - Best Practices](https://www.thethingsindustries.com/docs/devices/best-practices/)
