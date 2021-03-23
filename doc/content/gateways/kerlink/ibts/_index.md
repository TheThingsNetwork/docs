---
title: Wirnet iBTS
image: /gateways/kerlink/ibts/image.png
section: Hardware
aliases:
 - /kerlink/kerlink-ibts
---

<img src="ibts-gw.png" alt="Kerlink iBTS" width="200"/>

The Wirnet iBTS is the carrier-grade, high capacity gateway. It is based on Semtech's gateway reference design v2 and can be used for GPS-free geolocalization services.

The Wirnet iBTS has a modular architecture allowing you to configure and upgrade the gateway to according to your needs. Thanks to the modularity you are able to choose:

* The backhaul network: Ethernet or GPRS/EDGE/HSPA/CDMA/LTE
* The unlicensed band (ISM) where to operate the LoRa LPWAN: 868MHz, 902-928MHz or 915-928MHz
* The number of channels to operate the LoRa LPWAN: 8 to 64
* The antenna interface: single (omnidirectional), dual (space diversity or dual polarization) or tri (sectorization)

[Source & further info](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:ibts:hardware_arch_ibts)

or [Legacy documentation](http://wikikerlink.fr/wirnet-ibts/doku.php) (for the legacy 3.x branch of the KerOS firmware)
*You do need to request a login and password from Kerlink by providing your gateway serial number*

## 1. Connecting to the gateway

You can either connect to the gateways via SSH, or via the Wirma2 Debug Tool. [More info](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:ibts:connect_ibts).

Once you are connected to the gateway, log in with `root` / `pdmk-$serialno` as credentials. The `$serialno` equals the 6 last characters of its serial number (CPU module, starts with `***AT`).

> For security reasons, it is highly recommended to change the password. You can do so with the command: `passwd`. [More info](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:systeme_mana:connection_credentials#how_to_change_the_passwords).

### Connect via SSH

* ##### Remote LAN connection

  * **Using SSH:** Start an SSH client (typically Putty on Windows) using port 22 and the gateway’s IP address obtained from the DHCP server.
  * **Using SFTP:** Start a SFTP client (typically WinSCP on Windows) using the gateway’s IP address obtained from the DHCP server.


* ##### Local connection
  You can connect you laptop directly to the gateway via the LOCAL port.
    * If you have an DHCP server: Start an ssh client on port 22 and use the gateway’s IP address obtained from the DHCP server.
    * You don't have a DHCP server: Configure your PC Ethernet card to use `192.168.1.100` (netmask: 255.255.255.0) and start a ssh client on port 22 and using the gateway default LOCAL IP address which is `192.168.1.1`.

### Install and configure the gateway

Follow the [unified generic KerOS guide]({{< relref "../keros" >}}) to install and configure your gateway.
