---
title: TTN Packet Forwarder
---

# TTN Packet Forwarder

**⚠️ The development of this packet forwarder has been put on hold. We're currently working on new tools to make gateways easier to manage, that we will make public when ready. In the meanwhile, we recommend to use other packet forwarders ([Semtech packet forwarder](https://github.com/Lora-net/packet_forwarder), [MP packet forwarder](https://github.com/kersing/packet_forwarder)). To learn more, join the discussion on [the forum](https://www.thethingsnetwork.org/forum/t/new-ttn-packet-forwarder-available/7644/46).**

The TTN Packet Forwarder is a new packet forwarder, developed by the Things Network Core Team in Go. Builds for a selection of gateways, and documentation on how it is built, is available [on GitHub](https://github.com/TheThingsNetwork/packet_forwarder). Among the features of this packet forwarder:

+ Built in [Golang](https://golang.org) and open-source

+ Connects with the [Gateway Connector protocol](../start/connection.html#gateway-connector-protocol): authentified, reliable and encrypted

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
auth-server: https://account.<privatenetwork>.thethings.industries
```

### Configure on a specific router

If you want your packet forwarder to connect to a specific router, you can specify it in the packet forwarder's configuration:

```yaml
router: <ID of the router>
```

## Troubleshooting

Here are some common errors that can happen with the TTN Packet Forwarder, and tips on how to solve them:

### `dial tcp: lookup` error

```
FATAL Couldn't read configuration              error=Get https://account.thethingsnetwork.org/api/v2/gateways/test-gateway: dial tcp: lookup account.thethingsnetwork.org on [::1]:53: read udp [::1]:46876->[::1]:53: read: connection refused
```

*Example of this error happening*

This error happens when the gateway fails to complete a DNS lookup for the account server. It can happen for these reasons:

+ Your gateway **doesn't have access to Internet** or to its DNS server. To verify if your gateway has access to Internet, the easiest way is to execute `ping 8.8.8.8`. If there is an answer, your gateway is certainly connected. You'll also want to make sure that if you're behind a firewall, it isn't blocking DNS resolutions.

+ There is **no DNS server configured** on the gateway. The resolution method for this issue varies from gateway to gateway - for most Linux-based gateways, it can be resolved by configuring Google's DNS servers. Edit the `/etc/resolv.conf` file, and fill it with this:

```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

### Failed to load system roots and no roots provided

This error can happen to gateways that **aren't provisioned with any [root SSL certificates](https://www.globalsign.com/en/ssl-information-center/what-are-certification-authorities-trust-hierarchies/)**. Root certificates are used by the system to verify the identity of websites and servers that use SSL certificates to identify themselves. If your system doesn't have any root certificate, the packet forwarder **cannot verify the identity of the servers** you're communicating with, and fails as a **security measure**.

To fix this issue, make sure that your gateway's firmware is up to date. You'll then need to download to your system the right root certificate. In the case of The Things Network, you will need to download the **latest active [Let's Encrypt root certificate](https://letsencrypt.org/certificates/)**.

Once you've downloaded it, you'll need to register it in your system. For most Linux-based gateways, you'll just need to copy the root certificate inside the root certificates directory `/etc/ssl/certs`. It can however vary - for example, the procedure is different for [Debian-based Linux distributions](http://wiki.cacert.org/FAQ/ImportRootCert#Debian).

### Certificate is valid for [...], not for [...]

This is another SSL certificates error, which can happen if you're setting up your own routing services. SSL certificates is valid for a given **domain** - if you're trying to use it for a different domain, the verification of the certificate will fail. Make sure that the domain you've configured your network at matches the domain of your certificate.

### Failed to start concentrator

A **failed to start concentrator** error means that the **start procedure of the LoRa concentrator has failed**. It can be due to several errors:

+ The **communication with the device failed**. This can happen, for example:
  + if you're using a build for the wrong gateway ;
  + if you've made your own build, and that the communication interface (SPI-based, or FTDI-based) was not set up properly ;
  + if some obstacle is preventing communication between the process and the concentrator. For example, if your concentrator needs a [reset before usage](https://github.com/TheThingsNetwork/packet_forwarder/blob/develop/docs/INSTALL_INSTRUCTIONS/IMST_RPI.md#pin-reset), or if the interface needs to be [enabled before usage](https://www.thethingsnetwork.org/forum/t/pause-or-stop-packet-forwarding-on-kerlink/5352/2).
+ The LoRa concentrator is not **configured properly**. For examlpe, some gateways require additional [configuration steps](https://github.com/TheThingsNetwork/packet_forwarder/blob/dd535444e02f5ddd3ca379f2de715d417bde0f0c/pktfwd/configuration.go#L18-L21) - consult your gateway's documentation to know if the packet forwarder needs adaptation steps for this gateway.
