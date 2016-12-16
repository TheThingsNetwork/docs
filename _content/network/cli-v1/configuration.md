---
title: Configuration
zindex: 900
---

# Configuration

The `ttnctl` program can be configured with command line options described in the [API Reference](api.md), with environment variables or with a configuration file.

## Environment

`ttnctl` can be configured using environment variables.
The format of these variables is the underscored version of the command line options that can be found in the [API Reference](api.md), prefixed with `TTNCTL_`. Environment variables are uppercase. The environment variables shown below are the values needed for **local development**. If you just want to use the default TTN server, you don't have to set any variables.

```sh
export TTNCTL_DEBUG=true
export TTNCTL_TTN_ROUTER=localhost:1700
export TTNCTL_MQTT_BROKER=localhost:1883
export TTNCTL_TTN_HANDLER=localhost:1782
export TTNCTL_TTN_ACCOUNT_SERVER=https://account.thethingsnetwork.org
```

## Configuration File

A configuration file can be specified using the `--config` option. By default, `ttnctl` looks for the file `~/.ttnctl.yaml` (in your home directory).
The configuration file shown below shown below are the values needed for **local development**. If you just want to use the default TTN server, you don't have to do any configuration.

```yaml
debug: true
ttn-router: "localhost:1700"
mqtt-broker: "localhost:1883"
ttn-handler: "localhost:1782"
ttn-account-server: "https://account.thethingsnetwork.org"
```
