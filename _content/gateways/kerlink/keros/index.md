---
title: KerOS installation and configuration
image: /gateways/kerlink-iBTS/image.png
section: Hardware
---

# KerOS unified firmware for Wirnet gateways

The Kerlink Wirnet product family share the same firmware and software architecture (for Wirnet iBTS, Wirnet iFemtoCell, Wirnet iFemtoCell-Evolution, Wirnet iStation).

This page describes how to install and configure any of these gateways.

## 1. Update the firmware

Check the firmware version using the command:

```
cat /tmp/sys_startup_status.json

```

The response should look something like:

```
{
    "cpu": {
        ...
        },
        "serial_number": "0x2e040353",
        "start_time": "15:19:04 2018-07-09",
        "sw_version": "4.1.6_20190829151113"
```

#### Update with the last firmware version:

To update the gateway firmware with the last **Wirnet KerOS** firmware, go to Kerlink's [Resources page](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:resources:resources#keros_firmware_and_toolchain). The firmware can be updated via a USB key or over the Network.

> You can also use the file **Liveburner IPK** for updating this Kerlink firmware, to perform a factory reset. This will however erase the whole partition and resets the default password.

**Option 1: Software update over USB**

1. Find an empty USB key (FAT-32 formatted) and add the 3 files:

 * `usb.autorun`
 * `usbkey.txt`
 * `keros_x.y.z.ipk` or `liveburner_x.y.z.ipk`

2. Plug the USB key in the gateway, the firmware is automatically installed. Unplug the USB key when the yellow debug led starts blinking fast.

3. Reboot the gateway.

4. Check if the firmware is properly updated via the command `cat /tmp/sys_startup_status.json`, you can see the version after the line `sw_version`.


**Option 2: Software update over Network**

*This example uses a package meant to upgrade the firmware, however the steps are the same for any other package.*

1. Create the directory `.updates` under `/user` (if it doesn't already exist):
 ```
 mkdir -p /user/.updates
 ```
2. Transfer the KerOS package corresponding to the new firmware in this directory (replace with `liveburner_x.y.z` for a factory reset):
 ```
 scp keros_4.1.6.ipk root@<ip_address>:/user/.updates/
 ```
3. Ensure file is correctly written:
 ```
 sync
 ```
4. Trigger Update for next reboot:
 ```
 kerosd -u
 ```
5. Restart:
 ```
 reboot
 ```
6. Check the firmware version in the file `/tmp/sys_startup_status.json` under the field `sw_version`.



## 2. Connect to The Things Network

To use the gateway, you need to install the packet forwarder.

1. Install Kerlink's latest packet forwarder which can be found under Kerlink's [Resources section](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:resources:resources#common_packet_forwarder). The Kerlink packet forwarder is composed of the LoRa daemon (LoRa modem management) and the LoRa forwarder (connection to TTN), respectively called `lorad` and `lorafwd`. Download the pre-compiled `.ipk` version of both files which look something like this: `lorad_1.1.5-1_klkgw.ipk` and `lorafwd_1.1.1-2_klkgw.ipk`.
    Install the packet forwarder over the network or USB and reboot the gateway. [More info](https://wikikerlink.fr/wirnet-productline/doku.php?id=wiki:lora:cpf)
2. Configure the LoRa modem: edit the file `/etc/default/lorad` and select the appropriate file for your region.
3. Configure the frequency plan: edit the file that you selected at step 2, and edit the frequencies [according to your region](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html).
4. Configure the LoRa forwarder: see the location of your configuration file from `/etc/default/lorafwd`. Edit that file (for example `/user/etc/lorafwd/lorafwd.toml`), and scroll to the `[ gwmp ]` section (around line 81) and configure the server address and ports:

        [ gwmp ]
        
        # The internet host where the gateway should connect. The node can be either a
        # fully qualified domain name or an IP address (IPv4 or IPv6).
        #
        # Type:    string
        # Example: "myhost.example.com" or "123.45.67.89" or "2001:db8::1234"
        # Default: "localhost"
        #
        node = "router.eu.thethings.network"
        
        # The GWMP services can be a service name (see services(5)) or an integer and,
        # in this case, refers to a network port.
        
        # The service where the gateway should push uplink messages.
        #
        # Type:    string or integer
        # Example: "https" or 1234
        # Default: 0
        #
        service.uplink = 1700
        
        # The service where the gateway should pull downlink messages.
        #
        # Type:    string or integer
        # Example: "https" or 1234
        # Default: 0
        #
        service.downlink = 1700

   * The gateway EUI can be found by using the command `grep EUI /tmp/board_info.json`
 > Write down the gateway EUI, you'll need it later for registering the gateway in the Developer Console.
   * Check [this link](https://www.thethingsnetwork.org/docs/gateways/packet-forwarder/semtech-udp.html#router-addresses) for the right `node`.
   * The UDP ports `1700` are used, both for outgoing and incoming traffic. You can set this UDP port in the lines `service.uplink` and `service.downlink`. (In some cases, firewalls block these UDP ports. Please contact your network administrator if you’re in doubt).
   * Don't forget to uncomment the `node`, `service.uplink` and `service.downlink` lines, and ensure the `node` value (server address) is between double quotes.
   * Restart the packet forwarder with `killall lorad lorafwd`
5. Register the gateway in the [Developer Console](https://console.thethingsnetwork.org/). You can find more information on how to register your gateway in the Console [here](https://www.thethingsnetwork.org/docs/gateways/registration.html). If all went well, you should see something like this:

 ![Kerlink iBTS Console](ibts.png)

