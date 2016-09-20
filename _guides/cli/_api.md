# API Reference

Control The Things Network from the command line.

## ttnctl applications

Show applications

### Synopsis


ttnctl applications retrieves the applications of the logged on user.

```
ttnctl applications
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications authorize

Authorize a user for the application

### Synopsis


ttnctl applications authorize lets you authorize a user for an application.

```
ttnctl applications authorize [eui] [e-mail]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications create

Create a new application

### Synopsis


ttnctl applications create creates a new application.

```
ttnctl applications create [name]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications delete

Delete an application

### Synopsis


ttnctl application delete deletes an existing application.

```
ttnctl applications delete [eui]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications pf

Show the payload functions

### Synopsis


ttnctl applications pf shows the payload functions for decoding,
converting and validating binary payload.


```
ttnctl applications pf
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications pf set

Set payload functions

### Synopsis


ttnctl applications pf set sets the decoder, converter and validator
function by loading the specified files containing JavaScript code.


```
ttnctl applications pf set [decoder.js]
```

### Options

```
  -c, --converter string   Converter function
  -v, --validator string   Validator function
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications pf test

Test the payload functions

### Synopsis


ttnctl applications pf test sends the specified payload functions to
the Handler, as well as a payload to test them on and returns the fields and validation result.


```
ttnctl applications pf test [payload] [decoder.js]
```

### Options

```
  -c, --converter string   Converter function
  -v, --validator string   Validator function
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl applications use

Set an application as active

### Synopsis


ttnctl applications use marks an application as the currently active application in ttnctl.

```
ttnctl applications use [eui]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices

Manage devices on the Handler

### Synopsis


ttnctl devices retrieves a list of devices that your application
registered on the Handler.

```
ttnctl devices
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices delete

Delete a device

### Synopsis


ttnctl devices delete deletes a specific device.

```
ttnctl devices delete [DevAddr|DevEUI]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices info

Show device information

### Synopsis


ttnctl devices info shows information about a specific device.

```
ttnctl devices info [DevAddr|DevEUI]
```

### Options

```
      --lmic   Print info for LMiC
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices register

Create or Update registrations on the Handler

### Synopsis


ttnctl devices register creates or updates an OTAA registration on
the Handler

```
ttnctl devices register [DevEUI] [AppKey]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices register default

Create or update default OTAA registrations on the Handler

### Synopsis


ttnctl devices register default creates or updates OTAA registrations
on the Handler that have not been explicitly registered using ttnctl devices
register [DevEUI] [AppKey]

```
ttnctl devices register default [AppKey]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl devices register personalized

Create or update ABP registrations on the Handler

### Synopsis


ttnctl devices register personalized creates or updates an ABP
registration on the Handler

```
ttnctl devices register personalized [DevAddr] [NwkSKey] [AppSKey]
```

### Options

```
      --relax-fcnt   Allow frame counter to reset (insecure)
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl downlink

Send downlink messages to the network

### Synopsis


ttnctl downlink sends a downlink message to the network

The DevEUI should be an 8-byte long hex-encoded string (16 chars), the Payload
is a hex-encoded string and the TTL defines the time-to-live of this downlink,
formatted as "1h2m" for one hour and two minutes. The default TTL is one hour.

```
ttnctl downlink [DevEUI] [Payload] [TTL]
```

### Options

```
      --plain   send payload as plain-text
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl join

Send a join requests to the network

### Synopsis


ttnctl join sends a join request to the network

```
ttnctl join [DevEUI] [AppKey]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl subscribe

Subscribe to uplink messages from a device

### Synopsis


ttnctl subscribe prints out uplink messages from a device as they
arrive.

The optional DevEUI argument can be used to only receive messages from a
specific device. By default you will receive messages from all devices of your
application.

```
ttnctl subscribe [DevEUI]
```

### Options

```
      --plain   parse payload as plain-text
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl uplink

Send uplink messages to the network

### Synopsis


ttnctl uplink sends an uplink message to the network

```
ttnctl uplink [ShouldConfirm] [DevAddr] [NwkSKey] [AppSKey] [Payload] [FCnt]
```

### Options

```
      --plain   send payload as plain-text
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl user

Show the current user

### Synopsis


ttnctl user shows the current logged on user

```
ttnctl user
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl user create

Create a new user

### Synopsis


ttnctl user create allows you to create a new user

```
ttnctl user create [e-mail]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl user login

Login

### Synopsis


ttnctl user login allows you to login

```
ttnctl user login [e-mail]
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl user logout

Logout the current user

### Synopsis


ttnctl user logout logs out the current user

```
ttnctl user logout
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```


## ttnctl version

Get build and version information

### Synopsis


ttnctl version gets the build and version information of ttnctl

```
ttnctl version
```

### Options inherited from parent commands

```
      --app-eui string              The app EUI to use
      --config string               config file (default is $HOME/.ttnctl.yaml)
      --mqtt-broker string          The address of the MQTT broker (default "staging.thethingsnetwork.org:1883")
      --ttn-account-server string   The address of the OAuth 2.0 server (default "https://account.thethingsnetwork.org")
      --ttn-handler string          The net address of the TTN Handler (default "staging.thethingsnetwork.org:1782")
      --ttn-router string           The net address of the TTN Router (default "staging.thethingsnetwork.org:1700")
```

