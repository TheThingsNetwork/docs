---
title: API Reference
zindex: -1000
source: 'https://github.com/TheThingsNetwork/go-app-sdk/blob/master/API.md'
---

# API Reference

    import ttnsdk "github.com/TheThingsNetwork/go-app-sdk"

Package ttnsdk implements the Go SDK for The Things Network.

This package wraps The Things Network's application and device management APIs
(github.com/TheThingsNetwork/api) and the publish/subscribe API
(github.com/TheThingsNetwork/ttn/mqtt). It works with the Discovery Server to
retrieve the addresses of the Handler and MQTT server.

## Variables

```go
var ClientVersion = "2.x.x"
```
ClientVersion to use

```go
var DialOptions = []grpc.DialOption{
	grpc.WithUnaryInterceptor(grpc_middleware.ChainUnaryClient(
		rpclog.UnaryClientInterceptor(nil),
	)),
	grpc.WithStreamInterceptor(grpc_middleware.ChainStreamClient(
		restartstream.Interceptor(restartstream.DefaultSettings),
		rpclog.StreamClientInterceptor(nil),
	)),
	grpc.WithBlock(),
}
```
DialOptions to use when connecting to components

## func  MoveDevice

```go
func MoveDevice(devID string, from, to DeviceManager) (err error)
```
MoveDevice moves a device to another application

## type ApplicationManager

```go
type ApplicationManager interface {
	// Get the payload format used in this application. If the payload format is "custom", you can get the custom JS
	// payload functions with the GetCustomPayloadFunctions() function.
	GetPayloadFormat() (string, error)

	// Set the payload format to use in this application. If you want to use custom JS payload functions, use the
	// SetCustomPayloadFunctions() function instead. If you want to disable payload conversion, pass an empty string.
	SetPayloadFormat(format string) error

	// Get the custom JS payload functions.
	GetCustomPayloadFunctions() (jsDecoder, jsConverter, jsValidator, jsEncoder string, err error)

	// Set the custom JS payload functions.
	//
	// Example Decoder:
	//
	// // Decoder (Array<byte>, uint8) returns (Object)
	// function Decoder(bytes, port) {
	//   var decoded = {};
	//   return decoded;
	// }
	//
	// Example Converter:
	//
	// // Converter (Object, uint8) returns (Object)
	// function Converter(decoded, port) {
	//   var converted = decoded;
	//   return converted;
	// }
	//
	// Example Validator:
	// // Validator (Object, uint8) returns (Boolean)
	// function Validator(converted, port) {
	//   return true;
	// }
	//
	// Example Encoder:
	//
	// // Validator (Object, uint8) returns (Array<byte>)
	// function Encoder(object, port) {
	//   var bytes = [];
	//   return bytes;
	// }
	SetCustomPayloadFunctions(jsDecoder, jsConverter, jsValidator, jsEncoder string) error
}
```

ApplicationManager manages an application.

## type ApplicationPubSub

```go
type ApplicationPubSub interface {
	Publish(devID string, downlink *types.DownlinkMessage) error
	Device(devID string) DevicePubSub
	AllDevices() DeviceSub
	Close()
}
```

ApplicationPubSub interface for publishing and subscribing to devices in an
application

## type Client

```go
type Client interface {
	// Close the client and clean up all connections
	Close() error

	// Subscribe to uplink and events, publish downlink
	PubSub() (ApplicationPubSub, error)

	// Manage the application
	ManageApplication() (ApplicationManager, error)

	// Manage devices in the application
	ManageDevices() (DeviceManager, error)

	// Simulate uplink messages for a device (for testing)
	Simulate(devID string) (Simulator, error)
}
```

Client interface for The Things Network's API.

## type ClientConfig

```go
type ClientConfig struct {
	Logger log.Interface

	// The name of this client
	ClientName string

	// The version of this client (in the default config, this is the value of ttnsdk.ClientVersion)
	ClientVersion string

	// TLS Configuration only has to be set if connecting with servers that do not have trusted certificates.
	TLSConfig *tls.Config

	// Address of the Account Server (in the default config, this is https://account.thethingsnetwork.org)
	AccountServerAddress string

	// Client ID for the account server (if you registered your client)
	AccountServerClientID string

	// Client Secret for the account server (if you registered your client)
	AccountServerClientSecret string

	// Address of the Discovery Server (in the default config, this is discovery.thethings.network:1900)
	DiscoveryServerAddress string

	// Set this to true if the Discovery Server is insecure (not recommended)
	DiscoveryServerInsecure bool

	// Address of the Handler (optional)
	HandlerAddress string

	// Timeout for requests (in the default config, this is 10 seconds)
	RequestTimeout time.Duration
}
```

ClientConfig contains the configuration for the API client. Use the NewConfig()
or NewCommunityConfig() functions to initialize your configuration, otherwise
NewClient will panic.

## func  NewCommunityConfig

```go
func NewCommunityConfig(clientName string) ClientConfig
```
NewCommunityConfig creates a new configuration for the API client that is
pre-configured for the Public Community Network.

## func  NewConfig

```go
func NewConfig(clientName, accountServerAddress, discoveryServerAddress string) ClientConfig
```
NewConfig creates a new configuration for the API client.

## func (ClientConfig) NewClient

```go
func (c ClientConfig) NewClient(appID, appAccessKey string) Client
```
NewClient creates a new API client from the configuration, using the given
Application ID and Application access key.

## type Device

```go
type Device struct {
	SparseDevice
	FCntUp                uint32    `json:"f_cnt_up"`
	FCntDown              uint32    `json:"f_cnt_down"`
	DisableFCntCheck      bool      `json:"disable_f_cnt_check"`
	Uses32BitFCnt         bool      `json:"uses32_bit_f_cnt"`
	ActivationConstraints string    `json:"activation_constraints"`
	LastSeen              time.Time `json:"last_seen"`
}
```

Device in an application

## func (*Device) Delete

```go
func (d *Device) Delete() error
```
Delete the device. This function panics if this is a new device.

## func (*Device) IsNew

```go
func (d *Device) IsNew() bool
```
IsNew indicates whether the device is new.

## func (*Device) Personalize

```go
func (d *Device) Personalize(nwkSKey types.NwkSKey, appSKey types.AppSKey) error
```
Personalize a device by requesting a DevAddr from the network, and setting the
NwkSKey and AppSKey to the given values. This function panics if this is a new
device, so make sure you Get() the device first.

## func (*Device) PersonalizeFunc

```go
func (d *Device) PersonalizeFunc(personalizeFunc func(types.DevAddr) (types.NwkSKey, types.AppSKey)) error
```
PersonalizeFunc personalizes a device by requesting a DevAddr from the network,
and setting the NwkSKey and AppSKey to the result of the personalizeFunc. This
function panics if this is a new device, so make sure you Get() the device
first.

## func (*Device) PersonalizeRandom

```go
func (d *Device) PersonalizeRandom() error
```
PersonalizeRandom personalizes a device by requesting a DevAddr from the
network, and setting the NwkSKey and AppSKey to randomly generated values. This
function panics if this is a new device, so make sure you Get() the device
first.

## func (*Device) SetManager

```go
func (d *Device) SetManager(manager DeviceManager)
```
SetManager sets the manager of the device. This function panics if this is not a
new device.

## func (*Device) Update

```go
func (d *Device) Update() error
```
Update the device. This function panics if this is a new device.

## type DeviceList

```go
type DeviceList []*SparseDevice
```

DeviceList is a slice of *SparseDevice.

## func (DeviceList) AsDevices

```go
func (d DeviceList) AsDevices() []*Device
```
AsDevices returns the DeviceList as a slice of *Device instead of *SparseDevice

## type DeviceManager

```go
type DeviceManager interface {
	// List devices in an application. Use the limit and offset for pagination. Requests that fetch many devices will be
	// very slow, which is often not necessary. If you use this function too often, the response will be cached by the
	// server, and you might receive outdated data.
	List(limit, offset uint64) (DeviceList, error)

	// Get details for a device
	Get(devID string) (*Device, error)

	// Create or Update a device.
	Set(*Device) error

	// Delete a device
	Delete(devID string) error
}
```

DeviceManager manages devices within an application

## type DevicePub

```go
type DevicePub interface {
	Publish(*types.DownlinkMessage) error
}
```

DevicePub interface for publishing downlink messages to the device

## type DevicePubSub

```go
type DevicePubSub interface {
	DevicePub
	DeviceSub
}
```

DevicePubSub combines the DevicePub and DeviceSub interfaces

## type DeviceSub

```go
type DeviceSub interface {
	SubscribeUplink() (<-chan *types.UplinkMessage, error)
	UnsubscribeUplink() error
	SubscribeEvents() (<-chan *types.DeviceEvent, error)
	UnsubscribeEvents() error
	SubscribeActivations() (<-chan *types.Activation, error)
	UnsubscribeActivations() error
	Close()
}
```

DeviceSub interface for subscribing to uplink messages and events from the
device

## type Simulator

```go
type Simulator interface {
	Uplink(port uint8, payload []byte) error
}
```

Simulator simulates messages for devices

## type SparseDevice

```go
type SparseDevice struct {
	AppID       string            `json:"app_id"`
	DevID       string            `json:"dev_id"`
	AppEUI      types.AppEUI      `json:"app_eui"`
	DevEUI      types.DevEUI      `json:"dev_eui"`
	Description string            `json:"description,omitempty"`
	DevAddr     *types.DevAddr    `json:"dev_addr,omitempty"`
	NwkSKey     *types.NwkSKey    `json:"nwk_s_key,omitempty"`
	AppSKey     *types.AppSKey    `json:"app_s_key,omitempty"`
	AppKey      *types.AppKey     `json:"app_key,omitempty"`
	Latitude    float32           `json:"latitude,omitempty"`
	Longitude   float32           `json:"longitude,omitempty"`
	Altitude    int32             `json:"altitude,omitempty"`
	Attributes  map[string]string `json:"attributes,omitempty"`
}
```

SparseDevice contains most, but not all fields of the device. It's returned by
List operations to save server resources

## func (*SparseDevice) AsDevice

```go
func (d *SparseDevice) AsDevice() *Device
```
AsDevice wraps the *SparseDevice and returns a *Device containing that sparse
device
