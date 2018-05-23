---
title: Connect to ResIOT
zindex: 750
---

# Introduction
ResIOT is the world first platform for professional LoRaWAN™/LPWAN Networks and IoT Projects for Smart City or Industry 4.0. Cost-effective High availability and scalability.

In order to facilitate the startup of the complete solution, including AAEON AIOT-ILRA01 LoRaWAN™ Gateway&Network server, a pre-built OS image had been created.

# Flashing the ResIOT™ image

You will need two USB flash drives. The first will be for the ResIOT image, and the second for the Clonezilla boot disk.

First of all, [get a copy](http://update.resiot.io/images/aaeon_ilra01_resiot.tar.gz) of the latest image for your gateway. Unzip the directory on a FAT32 formatted USB key.

You will also need to download the latest version of clonezilla to mount our image on your ILRA01. [Download the latest AMD64, ZIP version of clonezilla here](http://clonezilla.org/downloads/download.php?branch=stable). Getting clonezilla ready is different depending on what OS you are. For a detailed guide, please visit the [official documentation page](http://clonezilla.org/liveusb.php) on how to burn a USB flash drive.

Backup anything you need before you continue, as flashing the ResIOT image will completely wipe your gateway.

* Make sure the clonezilla flash drive is plugged in the gateway
* Make sure your clonezilla flash disk Boot your gateway, if it’s the first time you will automatically be in the BIOS setup configuration, otherwise choose the “Advanced system setup” page on the OS selection list. Go to the “boot” tab, a make sure your clonezilla USB key is set to boot before the hard disk of the gateway. Now you can save and exit.
* The system will now reboot, and the clonezilla setup screen will appear. Select “Clonezilla Live (To RAM)”. When prompted, select the correct layout for your keyboard.
* Select “Start Clonezilla”. When prompted, select the first option, “Device-Image”.
* When prompted select a “local_dev” configuration.
* Press enter
* Now you can safely remove the clonezilla flash drive and enter the drive with the ResIOT™ image
* Press CTRL + C as asked
* Now you can select your newly inserted USB device as the image source (usually sda1).
* Select the RESIOT_SUITE folder.
* Choose BEGINNER mode as it’s the fastest option
* When prompted, select the “Restore Disk” option
* Select the RESIOT_SUITE folder again
* SELECT the hard disk of your gateway as the destination
* You can ask clonezilla to verify the validity of the ResIOT image you downloaded
* Ask for a reboot when the mounting is finished
* All partitions will be now copied. Whenever prompted, just say “y”

The machine will now reboot. Your gateway is now running a fresh installation of ubilinux with the ResIOT basestation client on it.

Login of Ubilinux is:   user: ubilinux password: ubilinux


# Running the software

The ILRA01 gateway has a preinstalled copy of the ResIOT™ LoRaWAN™ network server and IOT platform.

You now can decide if you want to connect your gateway to the cloud with a, or if you prefer instead running the entire ResIOT suite of tools on your gateway.

## Configure as Gateway + Network Server
If you want to install an on-premise version of ResIOT on your gateway, visit the following page on your gateway:


`http://localhost:8088`
Setup your main account and LoRa server and activate a free license. More information can be found on the [official on-premise installation page](http://docs.resiot.io/onpremise_setup).

Now visit your Base Station Gateway Client Configuration page on your gateway:


`http://localhost:50056`
Please refer to the [official documentation](https://www.resiot.io/en/gateway-config) of the ResIOT™ LoRaWAN™ Base Station Gateway Client to properly connect your gateway to a ResIOT server.


## Connecting your gateway to a ResIOT network server
If you plan to connect to an external ResIOT network server, visit the following page on your gateway:


`http://localhost:50056`
Please refer to the [official documentation](https://www.resiot.io/en/gateway-config) of the ResIOT™ LoRaWAN™ Base Station Gateway Client to properly connect your gateway to a ResIOT server.

