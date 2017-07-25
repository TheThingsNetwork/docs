---
title: Semtech Packet Forwarder
---

# Semtech Packet Forwarder

The Semtech Packet Forwarder is the **first packet forwarder**, connecting to servers through the [Semtech UDP protocol](../start/connection.html#semtech-udp-protocol). Although this protocol has several flaws, many gateways include a pre-compiled version of the packet forwarder, which makes it easy to test a gateway with this protocol.

## Installation

Many gateways (Multitech Conduit, LORIX One...) include a pre-compiled version of this packet forwarder. For other gateways, the code is [available online](https://github.com/Lora-net/packet_forwarder), and can be compiled with Semtech's [LoRa library](https://github.com/Lora-net/lora_gateway).

## Configuration

When the packet forwarder starts, it looks in the current directory for a `global_conf.json`, a `local_conf.json` and a `debug_conf.json`. If `debug_conf.json` exists, the other files are ignored - otherwise, the parameters in `local_conf.json` override those in `global_conf.json`.

### Registration

Before starting the packet forwarder, it is wiser to [register the gateway in the console](../registration#via-udp-packet-forwarder) first, using its **unique EUI**.

### EUI configuration

Once the registration is complete, add the **gateway EUI** in the `local_conf.json`:

```json
{
    "gateway_conf": {
        "gateway_ID": "<Gateway EUI>"
    }
}
```

### Router configuration

After that, edit the `global_conf.json` file to point to the router. If you're using the public community network, you will need to add the **hostname of the router region** - for example, for the EU region, it will be `router.eu.thethings.network`. Otherwise, it will be the hostname of your **router** - most of the time, it is just the hostname of your network.

Unless you're running the network yourself on specific ports, the **ports** will be 1700 and 1700.

```json
{
  [...]
	"gateway_conf": {
		"server_address": "router.eu.thethings.network",
		"serv_port_up": 1700,
		"serv_port_down": 1700,
    [...]
  }
}
```
