---
title: Cellular Connection
zindex: 700
---

# Cellular Connection

It is possible to connect the Kerlink to a GPRS/3G connection. This may be eligible when LAN security is tight.

## Configure

SIM card detection is only done at boot time. Insert the SIM card in the powered off LoRa station.

Set your APN settings in `/etc/sysconfig/network` (see [Provider Settings](#provider-settings)):

> *You can open the file via the terminal, type: `vi /etc/sysconfig/network`. Type `i` to start editing the file, after doing so, save and quit the file: press `esc` > `:w` > `esc` > `:q`*

```plaintext
# Selector operator APN
GPRSAPN=m2minternet
# Enter pin code if activated
GPRSPIN=
# Update /etc/resolv.conf to get dns facilities
GPSDNS=yes
# PAP authentication
GPRSUSER=kerlink
GPRSPASSWORD=password

# Bearers priority order
BEARERS_PRIORITY="ppp0,eth0,eth1"
```

Configure the autoconnect in `/knet/knetd.xml`

```xml
<!-- ############## local device configuration ############## -->
<LOCAL_DEV role="KNONE"/>

<!-- ############## connection parameters ############## -->
<!-- enable the autoconnect feature (YES/NO) -->
<CONNECT auto_connection="YES" />
<!-- frequency of connection monitoring -ping- (in seconds) -->
<CONNECT link_timeout="30"/>
<!-- DNS servers will be pinged if commented or deleted. Some operators can block the ping on there DNS servers -->
<CONNECT ip_link="8.8.8.8"/>

<!-- ############## default area for connection policy ############## -->

<AREA id="default">
<ACCESS_POINT bearer="gprs" />
</AREA>  
```
  
**Warning:** There is a bug in the software. When `GPRSUSER` and `GPRSPASSWORD` needs to stay empty the Kerlink does funny things and no connection is made. To resolve this problem, please apply [this patch](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/dota_update_gprs_script.tar.gz?raw=true).

**Troubleshooting:** The gateway goes offline when the GPRS connection drops and doesn't restart automatically. A workaround is to restart the packet forwarder when this happens. You can do so by adding the line: `/usr/bin/killall poly_pkt_fwd` at the bottom of the files `/etc/ppp/ip-up` and `/etc/ppp/ip-down`.


## Provider Settings

### KPN

```plaintext
# Selector operator APN
GPRSAPN=portalmmm.nl
# Enter pin code if activated
GPRSPIN=
# Update /etc/resolv.conf to get dns facilities
GPSDNS=yes
# PAP authentication
GPRSUSER=internet
GPRSPASSWORD=internet
```

### Vodafone

```plaintext
# Selector operator APN
GPRSAPN=live.vodafone.com
# Enter pin code if activated
GPRSPIN=
# Update /etc/resolv.conf to get dns facilities
GPSDNS=yes
# PAP authentication
GPRSUSER=vodafone
GPRSPASSWORD=vodafone
```

### Ben

```plaintext
# Selector operator APN
GPRSAPN=internet.ben
# Enter pin code if activated
GPRSPIN=
# Update /etc/resolv.conf to get dns facilities
GPSDNS=yes
# PAP authentication
GPRSUSER=
GPRSPASSWORD=
```
