---
title: Firmware Updates
zindex: 750
---

# Kerlink Station Firmware Updates

Kerling Station firmware updates are installed from a USB drive. This needs to be a USB 1.1 device formatted as FAT32.
The firmware consists of two parts:

- **System Firmware** (usually) from Kerlink
  - Installed in `/` partition
- **User Firmware** from TTN/TTI/Partner
  - Installed in `/mnt/fsuser-1` partition
  - Includes "global" configuration

The update process is simple:

- Plug in the USB drive
- Wait for 5 minutes
- A log file is written back to USB drive (`produsb.log`)

## System Firmware (v3.1)

> ⚠️ WARNING: After installation of this firmware you will not be able to revert to v2.3.3 - an attempt will brick your gateway. Refer Kerlink Wiki.

The Gateway is shipped with Kerlink's "stock system firmware". A backup of this system firmware is kept for recovery purposes (on the rescue FS). The system firmware can be updated by putting the contents of `usbflashdrive_wirmav2_wirnet_v3.1.zip` on a USB drive. Firmware updates do not overwrite the backup, rescue FS can be updated with `fs_rescue` files (see Kerlink wiki).

Contents of USB drive:

- `u-boot.bin` - the bootloader binary
- `initramfs.cpio.gz.uboot` - the initial RAM filesystem that handles updates and recovery
- `script_uboot.img` - bootloader scripts
- `produsb.sh` - this script is executed by the initramfs
- `uImage` - the Linux kernel
- `rootfs.tar.gz` - the root filesystem, will be extracted to `/` (`/dev/mtdblock5`)
- `userfs.tar` - the user filesystem, will be extracted to `/mnt/fsuser-1` (`/dev/mtdblock6`)

### Recovery

The gateway automatically restores the "stock system firmware" from the rescue FS if it detects that it's unstable. The gateway is considered unstable if the u-boot `bootfail` variable is greater than `max_bootfail`. This `max_bootfail` is 20 by default. The `bootfail` variable is incremented on each boot and reset when the gateway successfully starts. Both `bootfail` and `max_bootfail` can be set with the `fw_setenv` tool (or with `setenv` and `saveenv` in the u-boot console). Forcing the recovery process can be done by pressing the reset button for at least `max_bootfail` times with intervals of 4-10 seconds. This does not overwrite the user filesystem `/mnt/fsuser-1` (`/dev/mtdblock6`).

## User Firmware and System Firmware Customizations

The Gateway is usually shipped without or with outdated user firmware. The user firmware can be updated with `dota_XXXX.tar.gz` and `custo_XXXX.tar.gz` files.

Contents of USB drive:

- `produsb.sh` - the script that executes the update steps
- `dota_XXXX.tar.gz` - customizes/updates the **user firmware**. Example contents of a `dota_thethingsnetwork_XXX.tar.gz` file:
  - `begin_dota.sh` - executed at the begin of the update
  - `end_dota.sh` - executed at the end of the update
  - `mnt/fsuser-1/thethingsnetwork/poly_pkt_fwd.sh` - script that wraps the packet forwarder (sometimes called `wrapper.sh`)
  - `mnt/fsuser-1/thethingsnetwork/poly_pkt_fwd` - the packet forwarder binary
  - `mnt/fsuser-1/thethingsnetwork/global_conf.json` - configuration file for the packet forwarder
  - `mnt/fsuser-1/thethingsnetwork/manifest.xml` - description of the "package" including auto-start settings
- `custo_XXXX.tar.gz` customizes/updates the **system firmware** (**and** the backup). Example contents of `custo_libloragw_4.1.3-klk3_wirnet.tar.gz`:
  - `usr/local/bin/util_fpga_start` - Utility to start the FPGA that handles listen-before-talk (LBT)

After editing the contents of the `dota_XXXX.tar.gz` file, compress with `tar -cvzf dota_upgrade.tar.gz --owner root --group root mnt usr` (use `gtar` on macOS).

### Recovery

- Just flash again with correct `dota` file
- Manually delete files/folders from `/mnt/fsuser-1`

## USB Firmware update security

- Set a password in `/etc/usbkey.txt` on the gateway
- The same password must be in `usbkey.txt` on the USB drive

## Resources

- v2.3.3 firmware: [usbflashdrive_wirmav2_wirgrid_v2.3.3.zip](https://thethings.blob.core.windows.net/klkmirror/station/usbflashdrive_wirmav2_wirgrid_v2.3.3.zip) and [produsb_wirgrid_v2.3.3.zip](https://thethings.blob.core.windows.net/klkmirror/station/produsb_wirgrid_v2.3.3.zip)
- v3.1 firmware: [usbflashdrive_wirmav2_wirnet_v3.1.zip](https://thethings.blob.core.windows.net/klkmirror/station/usbflashdrive_wirmav2_wirnet_v3.1.zip) and [produsb_wirnet_v3.1.zip](https://thethings.blob.core.windows.net/klkmirror/station/produsb_wirnet_v3.1.zip)
- v4.1.3 custo for LBT: [custo_libloragw_4.1.3-klk3_wirnet.tar.gz](https://thethings.blob.core.windows.net/klkmirror/station/custo_libloragw_4.1.3-klk3_wirnet.tar.gz)
- v4.1.3 dota: [dota_spf_3.1.0-klk11_4.1.3-klk3_wirnet_31_03_2017.tar.gz](https://thethings.blob.core.windows.net/klkmirror/station/dota_spf_3.1.0-klk11_4.1.3-klk3_wirnet_31_03_2017.tar.gz)
