---
title: Connect to TTN
weight: 800
---


# Restore the pre-built OS image

You will need two USB flash drives. The first will be for the AIOT-ILRA01 TTN-ready image, and the second for the Clonezilla boot disk.

First of all, get a copy of the latest image for your gateway. Unzip the directory on a FAT32 formatted USB key.

You will also need to download the latest version of clonezilla to mount our image on your ILRA01. [Download the latest AMD64, ZIP version of clonezilla here](http://clonezilla.org/downloads/download.php?branch=stable). Getting clonezilla ready is different depending on what OS you are. For a detailed guide, please visit the official documentation page on how to burn a USB flash drive.

Backup anything you need before you continue, as flashing the TTN-ready image will completely wipe your gateway.

* Make sure the clonezilla flash drive is plugged in the gateway
* Make sure your clonezilla flash disk Boot your gateway, if it’s the first time you will automatically be in the BIOS setup configuration, otherwise choose the “Advanced system setup” page on the OS selection list. Go to the “boot” tab, a make sure your clonezilla USB key is set to boot before the hard disk of the gateway. Now you can save and exit.
* The system will now reboot, and the clonezilla setup screen will appear. Select “Clonezilla Live (To RAM)”. When prompted, select the correct layout for your keyboard.
* Select “Start Clonezilla”. When prompted, select the first option, “Device-Image”.
* When prompted select a “local_dev” configuration.
* Press enter
* Now you can safely remove the clonezilla flash drive and enter the drive with the TTN-ready image
* Press CTRL + C as asked
* Now you can select your newly inserted USB device as the image source (usually sda1).
* Select the folder where image has been copied
* Choose BEGINNER mode as it’s the fastest option
* When prompted, select the “Restore Disk” option
* Select the folder with the TTN-ready image again
* SELECT the hard disk of your gateway as the destination
* You can ask clonezilla to verify the validity of the TTN-ready image you downloaded
* Ask for a reboot when the mounting is finished
* All partitions will be now copied. Whenever prompted, just say “y”

The machine will now reboot. Your gateway is now running a fresh installation of ubilinux with all set ready for The Things Network.

Login of Ubilinux is:   user: ubilinux password: ubilinux


# Register the gateway to TTN Console

Before to be able to connect the gateway to TTN, login to [TTN console](https://console.thethingsnetwork.org/) and register a new gateway.

Select “I’m using the legacy packet forwarder” (AAEON TTN-ready image use Semtech UDP packet forwarder) and enter the gateway EUI (ID) of 8 bytes.

Complete the rest of the steps, then take note of Gateway EUI.

Login into Ubilinux on the fresh restored gateway AIOT-ILRA01 and launch from desktop the script gateway_ID.sh by double clicking on it; select “Execute in terminal” when the dialog box pops-up, the terminal window will open a file editor.

Replace TTN GATEWAY ID, with the Gateway EUI (example `AB01FFBBCC110011`), press CTRL+X, Save the file and exit.

Restart the system and at the following reboot the gateway will connect to TTN console.
There is no need o login Ubilinux to enable the connection.

