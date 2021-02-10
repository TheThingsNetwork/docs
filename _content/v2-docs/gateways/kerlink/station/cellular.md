---
title: Cellular Connection
zindex: 700
---

# Cellular Connection

It is possible to connect the Kerlink to a GPRS/3G connection. This may be useful in locations where there is no ethernet network access, or where access to the local/company network is not allowed.

## Configure using a dota file and USB flash drive

It is possible to configure the GPRS/3G connection without logging into the gateway. This can be done in the same way as the packet forwarder was installed. An example dota file which should be copied to a flash drive is provided here. This dota will configure the gateway to use the `internet` APN and use a blank username and a blank password. This dota also applies the fix to allow blank login details for gprs.

* Download [dota_gprs_apn_internet_nopw.tar.gz](https://raw.githubusercontent.com/TheThingsNetwork/kerlink-station-firmware/legacy/dota/dota_gprs_apn_internet_nopw.tar.gz) and copy it to a USB flash drive without extracting it.
* Dowload [produsb_wirnet_v3.6.zip](https://raw.githubusercontent.com/TheThingsNetwork/kerlink-station-firmware/legacy/dota/produsb_wirnet_v3.6.zip) and extract it to the flash drive.
* Plug the USB flash drive into the gateway and wait for the dota to be installed.

The configuration files needed to get gprs/3G to work are inside the dota archive. You can modify them with your settings before installing the dota on the gateway.

## Configure by manually editing config files

Log into the gateway using SSH or a Wirgrid device.

Set your APN settings in `/etc/sysconfig/network` (see [Provider Settings](#provider-settings)):

> *You can open the file via the terminal, type: `vi /etc/sysconfig/network`. Type `i` to start editing the file, after doing so, save and quit the file: press `esc` > `:w` > `esc` > `:q`*

```plaintext
# Selector operator APN
GPRSAPN=internet
# Enter pin code if activated
GPRSPIN=
# Update /etc/resolv.conf to get dns facilities
GPSDNS=yes
# PAP authentication
GPRSUSER=myusername
GPRSPASSWORD=mypassword

# Bearers priority order
BEARERS_PRIORITY="eth0,ppp0"
```

Configure the autoconnect in `/knet/knetd.xml`

```xml
<!-- ############## connection parameters ############## -->
<!-- enable the autoconnect feature (YES/NO) -->
<CONNECT auto_connection="YES" />

<!-- ############## default area for connection policy ############## -->

<AREA id="default">
<ACCESS_POINT bearer="gprs" />
</AREA>  
```
  
**Warning:** There is a bug in the software. When `GPRSUSER` and `GPRSPASSWORD` needs to stay empty the Kerlink does funny things and no connection is made. To resolve this problem, please apply [this patch](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/dota_update_gprs_script.tar.gz?raw=true).

**Troubleshooting:** If you are using the Kerlink SPF packet forwarder it will automatically restart when the internet connection changes. For other packet forwarders it might be necessary to restart the packet forwarder when this occurs. You can do so by adding the line: `/usr/bin/killall poly_pkt_fwd` at the bottom of the files `/etc/ppp/ip-up` and `/etc/ppp/ip-down`.


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

