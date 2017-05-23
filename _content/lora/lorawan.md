---
title: What is LoRaWAN
---

# What is LoRaWAN
LoRaWAN is a wide area network protocol designed for use with the LoRa physical layer. It takes the limitations and benefits of LoRa into account and describes a scalable way of using LoRa for thousands of nodes. LoRaWAN is an open standard, regulated by the [LoRa Alliance](https://www.lora-alliance.org/).

> LoRaWAN can give all THINGS a global voice. - LoRa Alliance

## Compared to the OSI stack
LoRa is the physical layer and forms the OSI layer 1. LoRaWAN is a little more than just a medium access control (MAC), but adds a few more features, allowing it to contain both layer 2 and layer 3 of the OSI stack.

| Nr | OSI model |         |
| -- | --------- | ------- |
| 3  | Network   | LoRaWAN |
| 2  | Data link | LoRaWAN |
| 1  | Physical  | LoRa    |

As LoRaWAN matures, it is getting more features like data fragmentation.

## Topology
LoRaWAN makes use of a star-of-stars topology. This means that end devices in the network has a limited task, allowing them to be as energy efficient as possible. The most networking overhead is moved towards the centre of the network.

<TODO: add image>

## Security
LoRaWAN is end to end encrypted. Devices are pre-programmed with keys they use to encrypt and decrypt data. When a packet is sent, it is transported via the network in an encrypted form. Only when it arrives at the destination application it is decrypted. As the device and the application are in the hands of the owner, only he can decrypt the data.

An in depth explanation of the security model of LoRaWAN can be seen in [the video by Johan Stokking](https://www.youtube.com/watch?v=Nu_yZelDMZI).

## Localisation
