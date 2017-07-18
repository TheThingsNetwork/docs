---
title: TTN Packet Forwarder
---

# TTN Packet Forwarder

The TTN Packet Forwarder is a new packet forwarder, developed by the Things Network Core Team in Go. Builds for a selection of gateways, and documentation on how it is built, is available [on GitHub](https://github.com/TheThingsNetwork/packet_forwarder). Among the features of this packet forwarder:

+ Built in [Golang](https://golang.org) and open-source

+ Connects with the [Gateway Connector protocol](../start/connection#gateway-connector-protocol): authentified, reliable and encrypted

+ Pre-built for multiple gateways, and build instructions available for all SPI LoRa gateways

## Installation

Currently, we have installation guides available to install the packet forwarder for [Multitech Conduit](https://github.com/TheThingsNetwork/packet_forwarder/blob/master/docs/INSTALL_INSTRUCTIONS/MULTITECH.md), [Kerlink IoT Station](https://github.com/TheThingsNetwork/packet_forwarder/blob/master/docs/INSTALL_INSTRUCTIONS/KERLINK.md) and [Raspberry Pi + iC880a](https://github.com/TheThingsNetwork/packet_forwarder/blob/master/docs/INSTALL_INSTRUCTIONS/KERLINK.md) setups.

We will be adding more gateways over time. In the meantime, if you have a different gateway, we have documentation available to help you [build the packet forwarder](https://github.com/TheThingsNetwork/packet_forwarder/blob/master/docs/INSTALL_INSTRUCTIONS/SPI.md) for your own gateway. The TTN Packet Forwarder being open-source, please feel free to contribute with new documentation!

## Configuration

The TTN Packet Forwarder is configured through a configuration file. The location file's default location is `$HOME/.pktfwd.yml`, but can be located in different locations in our pre-built packages:

+ In the Multitech Conduit package, it is located at the `/usr/cfg/config.yml` path.

+ In the Kerlink IoT Station package, it is located at the `/mnt/fsuser-1/ttn-pkt-fwd/config.yml` path.

For in-depth configuration, all the paths are available [in the GitHub documentation](https://github.com/TheThingsNetwork/packet_forwarder#run).

### Change Gateway ID and key

To change the gateway's ID and key, edit the configuration file, and set those values:

```yaml
id: <New gateway ID>
key: <New gateway key>
```

### Configure on a private network

To configure the gateway to connect on a network that is **not** the public community network, set those values in the configuration:

```yaml
discovery-server: <Hostname of the private network>:<Port of the discovery server>
auth-server: <URL of the account server>
```

For example, if you have a private network at `<privatenetwork>.thethings.industries` with a default configuration, you will configure the packet forwarder on:

```yaml
discovery-server: <privatenetwork>.thethings.industries:1900
auth-server: https://accountserver.<privatenetwork>.thethings.industries
```

### Configure on a specific router

If you want your packet forwarder to connect to a specific router, you can specify it in the packet forwarder's configuration:

```yaml
router: <ID of the router>
```
