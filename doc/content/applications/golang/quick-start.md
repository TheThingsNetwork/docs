---
title: Quick Start
weight: 1000
---

# Quick Start

## Setup

Let's install Go, create a new project and install the TTN Client.

1.  [Download](https://golang.org/dl/) and install Go. Run `go version` and make sure your version is newer than 1.8.

2.  Create a new Go project:

    ```bash
    mkdir -p $GOPATH/src/github.com/YOUR_USERNAME/ttn-app
    cd $GOPATH/src/github.com/YOUR_USERNAME/ttn-app
    ```

3.  Install the [TTN Client](https://github.com/TheThingsNetwork/go-app-sdk):

    ```bash
    go get -u github.com/TheThingsNetwork/go-app-sdk/...
    ```

4.  Install [Govendor](https://github.com/kardianos/govendor) and then run `govendor sync` inside `$GOPATH/src/github.com/TheThingsNetwork/go-app-sdk`.

## `main.go`

We declare the package `main` and import a number of dependencies that we'll use later on:

```go
package main

import (
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	ttnsdk "github.com/TheThingsNetwork/go-app-sdk"
	ttnlog "github.com/TheThingsNetwork/go-utils/log"
	"github.com/TheThingsNetwork/go-utils/log/apex"
	"github.com/TheThingsNetwork/go-utils/random"
	"github.com/TheThingsNetwork/ttn/core/types"
)
```

Next, we declare the name of our application as a constant:

```go
const (
	sdkClientName = "my-amazing-app"
)
```

We will write everything inside the `main` function that will be executed when the application starts:

```go
func main() {

}
```

The first part is logging. We will just log to the standard output of the application:

```go
log := apex.Stdout() // We use a cli logger at Stdout
ttnlog.Set(log)      // Set the logger as default for TTN
```

We get the application ID and application access key from the environment variables:

```go
appID := os.Getenv("TTN_APP_ID")
appAccessKey := os.Getenv("TTN_APP_ACCESS_KEY")
```

Next, we create a new **SDK Configuration** to connect to the public community network:

```go
config := ttnsdk.NewCommunityConfig(sdkClientName)
config.ClientVersion = "2.0.5" // The version of the application
```

And we create a new **SDK Client** for the application. 

The second line makes sure the client is cleaned up before the end of the program. You could add more of these `defer something.Close()` below, as it's good practice to clean up after you no longer need something. The `client.Close()` will make sure that everything we start after this point, will also be cleaned up, so I left out those other `defer something.Close()` for simplicity.

```go
client := config.NewClient(appID, appAccessKey)
defer client.Close()
```

We start by adding a new device. For this we need to get a **Device Manager** from the SDK:

```go
devices, err := client.ManageDevices()
if err != nil {
  log.WithError(err).Fatalf("%s: could not read CA certificate file", sdkClientName)
}
```

The new device will look as follows:

```go
dev := new(ttnsdk.Device)
dev.AppID = appID
dev.DevID = "my-new-device"
dev.Description = "A new device in my amazing app"
dev.AppEUI = types.AppEUI{0x70, 0xB3, 0xD5, 0x7E, 0xF0, 0x00, 0x00, 0x24} // Use the real AppEUI here
dev.DevEUI = types.DevEUI{0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08} // Use the real DevEUI here
random.FillBytes(dev.AppKey[:])                                           // Generate a random AppKey
```

Now we can `Set` the device on the network server:

```go
err = devices.Set(dev)
if err != nil {
  log.WithError(err).Fatalf("%s: could not create device", sdkClientName)
}
```

After this, we can also `Get` the device back from the server

```go
dev, err = devices.Get("my-new-device")
if err != nil {
  log.WithError(err).Fatalf("%s: could not get device", sdkClientName)
}
```

Your newly created device is now ready to join the network, so let's subscribe to activations. For this, we first need to start the publish/subscribe (MQTT) client:

```go
pubsub, err := client.PubSub()
if err != nil {
  log.WithError(err).Fatalf("%s: could not get application pub/sub", sdkClientName)
}
```

We want to receive activations for all devices within our application, so we use the `AllDevices()` function to select them:

```go
allDevicesPubSub := pubsub.AllDevices()
```

Now we can subscribe to device activations. This will give us a Go channel (`chan`) we can `range` over. As this `range` loop a blocking, we run this in a separate `goroutine`.

```go
activations, err := allDevicesPubSub.SubscribeActivations()
if err != nil {
  log.WithError(err).Fatalf("%s: could not subscribe to activations", sdkClientName)
}
go func() {
  for activation := range activations {
    log.WithFields(ttnlog.Fields{
      "appEUI":  activation.AppEUI.String(),
      "devEUI":  activation.DevEUI.String(),
      "devAddr": activation.DevAddr.String(),
    }).Info("my-amazing-app: received activation")
  }
}()
```

As soon as the device joins, you'll see a nice line logged to your console.

If we are no longer interested in activations, we can unsubscribe from them. This will break the `range` loop and end the `goroutine` that we created earlier.

```go
err = allDevicesPubSub.UnsubscribeActivations()
if err != nil {
  log.WithError(err).Fatalf("%s: could not unsubscribe from activations", sdkClientName)
}
```

Now let's subscribe to uplink messages from the device we created. This is done similar to how we subscribed to activations. We first select the device we created:

```go
myNewDevicePubSub := pubsub.Device("my-new-device")
```

And then we subscribe to uplink messages, logging them to the console as they arrive:

```go
uplink, err := myNewDevicePubSub.SubscribeUplink()
if err != nil {
  log.WithError(err).Fatalf("%s: could not subscribe to uplink messages", sdkClientName)
}
go func() {
  for message := range uplink {
    hexPayload := hex.EncodeToString(message.PayloadRaw)
    log.WithField("data", hexPayload).Infof("%s: received uplink", sdkClientName)
  }
}()
```

Again, we can unsubscribe when we're no longer interested:

```go
err = myNewDevicePubSub.UnsubscribeUplink()
if err != nil {
  log.WithError(err).Fatalf("%s: could not unsubscribe from uplink", sdkClientName)
}
```

To finish this example, we'll publish a downlink message to the device. This message will have a payload of `AABC` and will be sent on port `10`:

```go
err = myNewDevicePubSub.Publish(&types.DownlinkMessage{
  PayloadRaw: []byte{0xaa, 0xbc},
  FPort:      10,
})
if err != nil {
  log.WithError(err).Fatalf("%s: could not schedule downlink message", sdkClientName)
}
```

🎉 Congratulations! Now you know how to get started with our Go SDK for Application Developers. Go build something!
