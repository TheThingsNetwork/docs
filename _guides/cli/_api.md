# API Reference

Control The Things Network from the command line.

**Options**

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```

## ttnctl applications

ttnctl applications retrieves the applications of the logged on user.

**Usage:** `ttnctl applications`

### ttnctl applications authorize

ttnctl applications authorize lets you authorize a user for an application.

**Usage:** `ttnctl applications authorize [eui] [e-mail]`

### ttnctl applications create

ttnctl applications create creates a new application.

**Usage:** `ttnctl applications create [name]`

### ttnctl applications delete

ttnctl application delete deletes an existing application.

**Usage:** `ttnctl applications delete [eui]`

### ttnctl applications pf

ttnctl applications pf shows the payload functions for decoding,
converting and validating binary payload.


**Usage:** `ttnctl applications pf`

#### ttnctl applications pf set

ttnctl applications pf set sets the decoder, converter and validator
function by loading the specified files containing JavaScript code.


**Usage:** `ttnctl applications pf set [decoder.js]`

**Options**

```
  -c, --converter string   Converter function
  -v, --validator string   Validator function
```

#### ttnctl applications pf test

ttnctl applications pf test sends the specified payload functions to
the Handler, as well as a payload to test them on and returns the fields and validation result.


**Usage:** `ttnctl applications pf test [payload] [decoder.js]`

**Options**

```
  -c, --converter string   Converter function
  -v, --validator string   Validator function
```

### ttnctl applications use

ttnctl applications use marks an application as the currently active application in ttnctl.

**Usage:** `ttnctl applications use [eui]`

## ttnctl devices

ttnctl devices retrieves a list of devices that your application
registered on the Handler.

**Usage:** `ttnctl devices`

### ttnctl devices delete

ttnctl devices delete deletes a specific device.

**Usage:** `ttnctl devices delete [DevAddr|DevEUI]`

### ttnctl devices info

ttnctl devices info shows information about a specific device.

**Usage:** `ttnctl devices info [DevAddr|DevEUI]`

**Options**

```
      --lmic   Print info for LMiC
```

### ttnctl devices register

ttnctl devices register creates or updates an OTAA registration on
the Handler

**Usage:** `ttnctl devices register [DevEUI] [AppKey]`

#### ttnctl devices register default

ttnctl devices register default creates or updates OTAA registrations
on the Handler that have not been explicitly registered using ttnctl devices
register [DevEUI] [AppKey]

**Usage:** `ttnctl devices register default [AppKey]`

#### ttnctl devices register personalized

ttnctl devices register personalized creates or updates an ABP
registration on the Handler

**Usage:** `ttnctl devices register personalized [DevAddr] [NwkSKey] [AppSKey]`

**Options**

```
      --relax-fcnt   Allow frame counter to reset (insecure)
```

## ttnctl downlink

ttnctl downlink sends a downlink message to the network

The DevEUI should be an 8-byte long hex-encoded string (16 chars), the Payload
is a hex-encoded string and the TTL defines the time-to-live of this downlink,
formatted as "1h2m" for one hour and two minutes. The default TTL is one hour.

**Usage:** `ttnctl downlink [DevEUI] [Payload] [TTL]`

**Options**

```
      --plain   send payload as plain-text
```

## ttnctl join

ttnctl join sends a join request to the network

**Usage:** `ttnctl join [DevEUI] [AppKey]`

## ttnctl subscribe

ttnctl subscribe prints out uplink messages from a device as they
arrive.

The optional DevEUI argument can be used to only receive messages from a
specific device. By default you will receive messages from all devices of your
application.

**Usage:** `ttnctl subscribe [DevEUI]`

**Options**

```
      --plain   parse payload as plain-text
```

## ttnctl uplink

ttnctl uplink sends an uplink message to the network

**Usage:** `ttnctl uplink [ShouldConfirm] [DevAddr] [NwkSKey] [AppSKey] [Payload] [FCnt]`

**Options**

```
      --plain   send payload as plain-text
```

## ttnctl user

ttnctl user shows the current logged on user

**Usage:** `ttnctl user`

### ttnctl user create

ttnctl user create allows you to create a new user

**Usage:** `ttnctl user create [e-mail]`

### ttnctl user login

ttnctl user login allows you to login

**Usage:** `ttnctl user login [e-mail]`

### ttnctl user logout

ttnctl user logout logs out the current user

**Usage:** `ttnctl user logout`

## ttnctl version

ttnctl version gets the build and version information of ttnctl

**Usage:** `ttnctl version`

