---
title: Configuration
zindex: 800
---

# Configuration

## Configuring packet forwarder
To configure the gateway, you need to download [The Things Network's packet forwarder](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/dota_thethingsnetwork_v1.3_EU.tar.gz) and [produsb.zip](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/produsb.zip) from our Github.

Install the update the following way:

- Copy the unpacked content of [produsb.zip](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/produsb.zip) and the [packet forwarder](https://github.com/TheThingsNetwork/kerlink-station-firmware/blob/master/dota/dota_thethingsnetwork_v1.3_EU.tar.gz) onto an empty USB flash drive formatted in FAT-32. Make sure there is no `.log` file.
- Plug the USB flash drive into the gateway.
- Wait for 5 min. During this time the gateway will reboot itself.
- Unplug the key and check that a `.log` file has appeared. The file should contain  `WirmaV2 0x080XXXXX updated`. This log file prevents any further installation on the gateways to avoid cyclic reboots.
- To redo the update on same gateway, remove this log file from the flash drive reinsert it into the gateway USB. This is not needed if you update another gateway.

## Connect with the Gateway

### SSH-Serial
Logon to the gateway by using the SSH protocol, on a Mac or Linux system just use the Terminal and `run ssh root@10.1.0.117` (substitute by the correct IP-address). On a Windows PC you can use [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). Login with the user `root` and default password `root`.

At your firewall system make sure the external IP-address used will map port `1700` to the internal IP-address of the gateway. This is needed when using NAT for internal IP-address translation.

Your are basically done now. For further checking continue to the next step. The following steps require some knowledge about how to use the command-line in Linux or Mac.

## WIRGRID
The serial interface (linux console) of the gateway can also be accessed by using the QIRGRID debug tool. This tool connect to your PC by a USB (type B > A) cable.

![WIRGRID](config-wirgrid.jpg)

1.	Connect the WIRGRID tool to your gateway and PC 
2.	Look up to which port the WIRGRID is assigned to
3.	Open a serial connection with the following settings:
    - **Baudrate:** 115200
    - **Data length:** 8
    - **Parity:** none
    - **Stop bit:** 1
    - **Flow control:** none
4. When the connection opens up, log in with the following credentials
    - **Login:** root
    - **Password:** root

## Check if the Packet forwarder is running

### The Packet Forwarder on gateway
Use the following command on the gateway to check whether data is being sent and received:

```bash
tcpdump -i eth0 -n -vvvX host 54.229.214.112
```

The output must be somewhat similar to the following, check out if inbound as well as outbound traffic is shown:

```plaintext
tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes
19:35:07.292396 IP (tos 0x0, ttl 64, id 35878, offset 0, flags [DF], proto UDP (17), length 40)
    <span style="background-color: #FFFF00">10.1.0.117.37763 > 54.229.214.112.1700</span>: [udp sum ok] UDP, length 12
	0x0000:  4500 0028 8c26 4000 4011 96d3 0a01 0075  E..(.&@.@......u
	0x0010:  36e5 d670 9383 06a4 0014 c7e2 0169 7302  6..p.........is.
	0x0020:  aa55 5a00 0806 0529                      .UZ....)
19:35:07.321453 IP (tos 0x20, ttl 46, id 1404, offset 0, flags [DF], proto UDP (17), length 32)
    <span style="background-color: #FFFF00">54.229.214.112.1700 > 10.1.0.117.37763</span>: [udp sum ok] UDP, length 4
	0x0000:  4520 0020 057c 4000 2e11 2f66 36e5 d670  E....|@.../f6..p
	0x0010:  0a01 0075 06a4 9383 000c d978 0169 7301  ...u.......x.is.
	0x0020:  0000 0000 0000 0000 0000 0000 0000 eca3  ................
	0x0030:  5d2a                                     ]*
19:35:17.322399 IP (tos 0x0, ttl 64, id 35879, offset 0, flags [DF], proto UDP (17), length 40)
    10.1.0.117.37763 > 54.229.214.112.1700: [udp sum ok] UDP, length 12
	0x0000:  4500 0028 8c27 4000 4011 96d2 0a01 0075  E..(.'@.@......u
	0x0010:  36e5 d670 9383 06a4 0014 3bfa 0151 ff02  6..p......;..Q..
	0x0020:  aa55 5a00 0806 0529                      .UZ....)
19:35:17.351482 IP (tos 0x20, ttl 46, id 2099, offset 0, flags [DF], proto UDP (17), length 32)
    54.229.214.112.1700 > 10.1.0.117.37763: [udp sum ok] UDP, length 4
	0x0000:  4520 0020 0833 4000 2e11 2caf 36e5 d670  E....3@...,.6..p
	0x0010:  0a01 0075 06a4 9383 000c 4d90 0151 ff01  ...u......M..Q..
	0x0020:  0000 0000 0000 0000 0000 0000 0000 1efe  ................
	0x0030:  8b8d                                     ..
^C
4 packets captured
5 packets received by filter
0 packets dropped by kernel
```

The gateway does not automatically send data to auto include itself on the status pages of The Things Network. This will only happen after a network node has sent or is sending data via the gateway.

### Packet forwarder status on TTN network with NOC

When the packet forwarder is running, it report to the TTN network. The activity of all the gateways on the network can be checked by the NOC tool. 

1.	Go to the [noc gateway overview](http://noc.thethingsnetwork.org:8085/api/v2/gateways)
2.	Look up your gateway EUI by using the find-tool (`Crtl/Cmd + F`)
3.	You’ll see the following information next to the EUI:

    ```json
    {"id":"eui-0000024b080602d9","status":{"lastSeen":"1479346682871027747"}}
    ```
    
4.	Last Seen determines when it was the last time the gateway was shown on the TTN network. The time unit is in UNIX-time, and can be converted by converter to the standard time unit.

### Packet forwarder status on TTN network simple overview

The activity of all the gateways on the network can also be checked at [https://staging.thethingsnetwork.org/gatewaystatus/](https://staging.thethingsnetwork.org/gatewaystatus/).

This page is more simple than the raw data from option two. The only downside is that the page updates slightly slower that the previous option.
