---
title: Network Security
---

The Things Network is a highly secure public network that supports true end-to-end encryption, mitigations against various man-in-the-middle attacks and support for different 128-bit encryption keys for every single end device.

LoRaWAN enforces using AES 128-bit message integrity checks and payload encryption. Payloads are fully encrypted between the Node and the Handler component of the backend. This means you can choose to operate your own private Handler and have real end-to-end encryption. The Router and Broker components route data based on public metadata and cannot decrypt the actual payload.

## User Accounts

Users need an account to use The Things Network. On the public community network, user accounts are stored in the [account server](https://account.thethingsnetwork.org). These accounts are identified by a username or e-mail address and protected by a password. In private networking setups, users may implement their own means of authentication and authorization.

## Applications

Users can create applications and they can authorize other users access to applications. Applications are identified by a unique Application ID. Each Application has one or more Access Keys to access application data and/or to manage devices.

