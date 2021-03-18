---
title: Wirnet iFemtoCell
image: /gateways/kerlink/ifemtocell/image.png
section: Hardware
aliases:
 - /kerlink/kerlink-ifemtocell
---

The wirnet iFemtoCell is a low-cost, indoor LoRaWAN nano gateway that can be easily connected through WiFi or ethernet.

![Kerlink iFemtoCell](image.png)

[Source & further info](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:ifemtocell:hardware_arch_ifemto)
*You do need to request a login and password from Kerlink*


## Powering the iFemtoCell

Connect the 12V adapter.


## Connecting to the iFemtoCell

iFemtoCells are named after their serial number and are called `klk-wifc-XXXXXX`. You can replace the `XXXXXX` by the six hexadecimal digits from the serial number which are also the last six hexadecimal digits of the **Board ID** (printed on the bottom of the gateway).

> For example, if an iFemtoCell has `704BEc1234AB` as board ID, the host name will be: `klk-wifc-1234AB`

### Ethernet or WiFi
 
Both ethernet and WiFi can be used (for WiFi, make sure to use the firmware 3.3.3. or later). A WiFi access point is available at boot time on each iFemtoCell for one hour, broadcasting an SSID named after its serial number (`klk-wifc-XXXXXX`). It can only be used to access the iFemtoCell itself as it does not route traffic to anywhere and does not serve as an Internet wireless access point.

The passphrase to connect to this WiFi network is the Ethernet MAC address (it can be found on the Wirnet iFemtoCell label), in uppercase, without spaces between the digits, e.g. `7076FFYYYYYY`.

> Note that this interface does not come with a DHCP server, it is only meant to be used for the iFemtoCell's configuration. Your computer may take some time to get the “connected” status, and the interface will have a “limited connectivity”, which is normal.


### iFemtoCell login/password

To prevent Web robots from attacking the gateway with standard login/password “root/root”, default password is built using the last 6 characters of the board ID: `pdmk-XXXXXX`. 

For example, if an iFemtoCell has `704BEc1234AB` as board ID, then the root password will be `pdmk-1234AB` (case sensitive).

```
klk-wifc-1234AB login: root
Password: pdmk-1234AB
```

> For security reasons, it is highly recommended to change the password. You can do so with the command: `passwd`


### Install and configure the gateway

Follow the [unified generic KerOS guide](../keros) to install and configure your gateway.


