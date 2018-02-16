---
title: Quick Start
zindex: 1000
---

# Quick Start

This document gives a quick introduction to `ttnctl`.

## Installation

1.  Download the latest version of `ttnctl` using the following links:

    * [Mac (64 bit, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-darwin-amd64.zip)
    * [Linux (64 bit, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-linux-amd64.zip)
    * [Linux (32 bit, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-linux-386.zip)
    * [Linux (arm, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-linux-arm.zip)
    * [Windows (64 bit, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-windows-amd64.exe.zip)
    * [Windows (32 bit, zip)](https://ttnreleases.blob.core.windows.net/release/master/ttnctl-windows-386.exe.zip)

    > Downloads are also available as `.tar.gz` archives, just change the extension in the links above.

    SHA256 checksums for the uncompressed binaries are listed in the [`checksums`](https://ttnreleases.blob.core.windows.net/release/master/checksums) file. The `checksums` file is signed using our GPG key with fingerprint `2F06 2CD1 5425 47AF 71BD  9B81 8FC5 CD2B 9DFB 1B4B`. The signature is stored as [`checksums.sig`](https://ttnreleases.blob.core.windows.net/release/master/checksums).

2.  Decompress the file and make the executable globally available.
    
    On Mac and Linux create an alias or copy the executable as `ttnctl` to `/usr/local/bin` (use `⇧⌘G` in Mac OS Finder) or any other value that is in your path. On Windows use any other folder you use for global executables and make sure that folder is part of your path.

## Updates

To update the CLI run [`ttnctl selfupdate`](api.md#ttnctl-selfupdate).

## Configuration

If you don't like the default configuration options of `ttnctl`, you can configure them with environment variables or with a [configuration file](configuration.md#configuration-file). In most cases the default options should be fine. Later in this guide we'll add our application ID to the config file to save us some typing.

## Register and Login

1. To register as a new user, use the command [`ttnctl user register`](api.md#ttnctl-user-register):

    ```bash
    ❯ ttnctl user register yourname your@email.org
    Password: <entering password>
    INFO Registered user
    ```

2. Now go to [account.thethingsnetwork.org](https://account.thethingsnetwork.org/) and click [ttnctl access code](https://account.thethingsnetwork.org/users/authorize?client_id=ttnctl&redirect_uri=/oauth/callback/ttnctl&response_type=code).

3. You now have 5 minutes to use this code to login with [`ttnctl user login`](api.md#ttnctl-user-login):

    ```bash
    ❯ ttnctl user login LzWtldT-VGvN56I3u3oJiU8apRJGaWJAJKbYvALJoP3
    Password: <enter password>
    INFO Successfully logged in as yourname (your@email.org)
    ```

## Application Management

Now create a new application with [`ttnctl applications add`](api.md#ttnctl-applications-add). In this example we will create an application with the ID `hello-world` and title `Hello World App`.

```bash
❯ ttnctl applications add hello-world "Hello World App"
  INFO Added Application
  INFO Selected Current Application
```

Show your applications with [`ttnctl applications list`](api.md#ttnctl-applications-list) command:

```bash
❯ ttnctl applications list
  INFO Found 1 application(s)
   ID           Description      EUIs  Access Keys  Collaborators
1  hello-world  Hello World App  1     1            1
```

After an application is created, you'll need to **register it** on a handler before you can start registering devices:

```bash
❯ ttnctl applications register
  INFO Discovering Handler...                   Handler=ttn-handler-eu
  INFO Connecting with Handler...               Handler=eu.thethings.network:1904
  INFO Registered application                   AppID=hello-world
```

> By default, your application is registered on the `ttn-handler-eu` handler. This means that every LoRaWAN packet will be transmitted to the `eu` region of The Things Network. You can indicate another handler with the `--handler-id` flag. To show the list of available handlers, you can use the `ttnctl discover handler` command.

## Selecting an application

The newly added application has been selected for further commands automatically. To select a different app call [`ttnctl applications select`](api.md#ttnctl-applications-select):

```bash
❯ ttnctl applications select
  INFO Found 2 applications:

  	ID                  	Description
1	hello-world        	Hello World App
2	bye-world        	Bye World App

Which one do you want to use?
Enter the number (1 - 2) > 2
  INFO Found one EUI "70B3D57EF000002E", selecting that one.
  INFO Updated configuration
```

> If you know the Application ID (and EUI), then you can also pass those as arguments. If only one application or EUI is available it will be selected automatically.

## Device Management

To register a device you can use the [`ttnctl devices register`](api.md#ttnctl-devices-register) command. In the following example we register a device with ID `my-device`. A Device EUI and AppKey will be generated by `ttnctl`:

```bash
❯ ttnctl devices register my-device
  INFO Using Application                        AppEUI=70B3D57EF000002E AppID=bye-world
  INFO Generating random DevEUI...
  INFO Generating random AppKey...
  INFO Discovering Handler...                   Handler=ttn-handler-eu
  INFO Connecting with Handler...               Handler=eu.thethings.network:1904
  INFO Registered device                        AppEUI=70B3D57EF000002E AppID=bye-world AppKey=2593946DADA09D86E36E4A4DD3AC632D DevEUI=00995D884BEBBAB9 DevID=my-device
```

To personalize a device for Activation-by-Personalization (ABP) we have the command [`ttnctl devices personalize`](api.md#ttnctl-devices-personalize). In the following example we personalize the just registered device. The AppSKey and NwkSKey will be generated by `ttnctl`:

```bash
❯ ttnctl devices personalize my-device
  INFO Using Application                        AppEUI=70B3D57EF000002E AppID=bye-world
  INFO Generating random NwkSKey...
  INFO Generating random AppSKey...
  INFO Discovering Handler...                   Handler=ttn-handler-eu
  INFO Connecting with Handler...               Handler=eu.thethings.network:1904
  INFO Requesting DevAddr for device...
  INFO Personalized device                      AppID=bye-world AppSKey=48F41F0491B23C804AEB9826162EB9AD DevAddr=160115EB DevID=my-device NwkSKey=D7A883537558946974B8DE31D4671617
```

You can see a list of registered devices with [`ttnctl devices list`](api.md#ttnctl-devices-list):

```bash
❯ ttnctl devices list
  INFO Using Application                        AppEUI=70B3D57EF000002E AppID=bye-world
  INFO Discovering Handler...                   Handler=ttn-handler-eu
  INFO Connecting with Handler...               Handler=eu.thethings.network:1904

DevID           	AppEUI          	DevEUI          	DevAddr
my-device       	70B3D57EF000002E	00995D884BEBBAB9	160115EB

  INFO Listed 1 device                          bye-world
```

You can also get information about a specific device with [`ttnctl devices info`](api.md#ttnctl-devices-info), for example for the personalized device:

```bash
❯ ttnctl devices info my-device
  INFO Using Application                        AppEUI=70B3D57EF000002E AppID=bye-world
  INFO Discovering Handler...                   Handler=ttn-handler-eu
  INFO Connecting with Handler...               Handler=eu.thethings.network:1904
  INFO Found device

  Application ID: bye-world
       Device ID: my-device
       Last Seen: never

    LoRaWAN Info:

     AppEUI: 70B3D57EF000002E
     DevEUI: 00995D884BEBBAB9
    DevAddr: 160115EB
     AppKey: <nil>
    AppSKey: 48F41F0491B23C804AEB9826162EB9AD
    NwkSKey: D7A883537558946974B8DE31D4671617
     FCntUp: 0
   FCntDown: 0
    Options: FCntCheckEnabled, 32BitFCnt
```

## Receiving Uplink Messages

The [`ttnctl subscribe`](api.md#ttnctl-subscribe) command subscribes to all uplink messages that are sent to your application:

```bash
❯ ttnctl subscribe
  INFO Connecting to MQTT...                    MQTT Broker=tcp://eu.thethings.network:1883 Username=fokkezb-playground
  INFO Connected to MQTT
  INFO Subscribed to activations
  INFO Subscribed to uplink
```

You can also subscribe to uplink messages using [MQTT](../../applications/mqtt/index.md).

## Scheduling Downlink Messages

Scheduling downlink messages is done with the [`ttnctl downlink`](api.md#ttnctl-downlink) command. In the following example we plan a downlink message of 3 bytes for the device we just registered:

```bash
❯ ttnctl downlink my-device 010203
  INFO Connecting to MQTT...                    MQTT Broker=tcp://eu.thethings.network:1883 Username=bye-world
  INFO Connected to MQTT
  INFO Enqueued downlink                        AppID=bye-world DevID=my-device
```

Or if you have configured an [encoder](api.md#ttnctl-applications-pf) for JSON payloads:

```bash
$ ttnctl downlink my-device --json '{"led":"on"}'
  INFO Connecting to MQTT...                    MQTT Broker=tcp://eu.thethings.network:1883 Username=bye-world
  INFO Connected to MQTT
  INFO Enqueued downlink                        AppID=bye-world DevID=my-device
```
