---
title: Configuration
---

The `ttnctl` program can be configured with command line options described in the [API Reference](api.md), with environment variables or with a configuration file.

## Environment

`ttnctl` can be configured using environment variables.
The format of these variables is the underscored version of the command line options that can be found in the [API Reference](api.md), prefixed with `TTNCTL_`. Environment variables are uppercase. The environment variables shown below are the values needed for **local development**. If you just want to use the default TTN server, you don't have to set any variables.

```sh
export TTNCTL_DEBUG=true
export TTNCTL_DISCOVERY_ADDRESS=localhost:1900
export TTNCTL_AUTH_SERVER=https://account.thethingsnetwork.org
export TTNCTL_ROUTER_ID=dev
export TTNCTL_HANDLER_ID=dev
export TTNCTL_MQTT_ADRESS=localhost:1883
```

## Configuration File

A configuration file can be specified using the `--config` option. By default, `ttnctl` looks for the file `~/.ttnctl.yml` (in your home directory).
The configuration file shown below shown below are the values needed for **local development**. If you just want to use the default TTN server, you don't have to do any configuration.

```yaml
debug: true
discovery-address: localhost:1900
auth-server: https://account.thethingsnetwork.org
router-id: dev
handler-id: dev
mqtt-address: localhost:1883
```
