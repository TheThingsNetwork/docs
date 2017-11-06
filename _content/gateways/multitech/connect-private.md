---
title: Connect to a private back-end
---

# Connect to a private back-end

If you've followed the [installer](https://github.com/kersing/multitech-installer), you've configured your gateway to connect to The Things Network. What if you want to connect your gateway to a private back-end, or to a specific router?

### Find the MQTT address of the bridge

First, you'll need to figure out what's the **MQTT address and port of the bridge**. Here are a few examples:

+ If you've set up the back-end yourself, using [our private routing guide](https://www.thethingsnetwork.org/article/setting-up-a-private-routing-environment), the MQTT address will be, by default, `<machine IP>:1883`.

+ If you're using a [The Things Industries installation](https://www.thethingsindustries.com/), your MQTT address will be `<routing services address>:1882`.

### Change the bridge configuration

Open with `vi` the `/var/config/lora/local_conf.json` file:

```
$ vi /var/config/lora/local_conf.json
```

You should then edit those values:

+ **`server_address`**: Change this value to **the MQTT address and port of the bridge**, in a `<address>:<port>` format.

+ **`serv_gw_id`**: the **ID of your gateway**.

+ **`serv_gw_key`**: the **key of your gateway**.

### Apply the configuration

Restart the packet forwarder to apply those changes:

```
$ /etc/init.d/ttn-packet-forwarder restart
```
