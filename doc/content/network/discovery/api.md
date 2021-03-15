---
title: API Reference
weight: -1000
source: 'https://github.com/TheThingsNetwork/api/blob/master/discovery/Discovery.md'
---

# API Reference

## .discovery.Discovery

The Discovery service is used to discover services within The Things Network.

### Methods

#### `AddMetadata`

Add metadata to an announement

- Request: [`MetadataRequest`](#discoverymetadatarequest)
- Response: [`Empty`](#googleprotobufempty)

#### `Announce`

Announce a component to the Discovery server.
A call to `Announce` does not processes the `metadata` field, so you can safely leave this field empty.
Adding or removing Metadata should be done with the `AddMetadata` and `DeleteMetadata` methods.

- Request: [`Announcement`](#discoveryannouncement)
- Response: [`Empty`](#googleprotobufempty)

#### `DeleteMetadata`

Delete metadata from an announcement

- Request: [`MetadataRequest`](#discoverymetadatarequest)
- Response: [`Empty`](#googleprotobufempty)

#### `Get`

Get a specific announcement

- Request: [`GetRequest`](#discoverygetrequest)
- Response: [`Announcement`](#discoveryannouncement)

Available HTTP Endpoints:

- `GET` `/announcements/{service_name}/{id}`

Input:

```json
{
  "id": "ttn-handler-eu",
  "service_name": "handler"
}
```

Output:

```json
{
  "amqp_address": "",
  "api_address": "http://eu.thethings.network:8084",
  "certificate": "-----BEGIN CERTIFICATE-----\n...",
  "description": "",
  "id": "ttn-handler-eu",
  "metadata": {
    "app_eui": "",
    "app_id": "some-app-id",
    "dev_addr_prefix": "AAAAAAA=",
    "gateway_id": ""
  },
  "mqtt_address": "",
  "net_address": "eu.thethings.network:1904",
  "public": true,
  "public_key": "-----BEGIN PUBLIC KEY-----\n...",
  "service_name": "handler",
  "service_version": "2.0.0-abcdef...",
  "url": ""
}
```

#### `GetAll`

Get all announcements for a specific service type

- Request: [`GetServiceRequest`](#discoverygetservicerequest)
- Response: [`AnnouncementsResponse`](#discoveryannouncementsresponse)

Available HTTP Endpoints:

- `GET` `/announcements/{service_name}`

Input:

```json
{
  "service_name": "handler"
}
```

Output:

```json
{
  "services": {
    "amqp_address": "",
    "api_address": "http://eu.thethings.network:8084",
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "description": "",
    "id": "ttn-handler-eu",
    "metadata": {
      "app_eui": "",
      "app_id": "some-app-id",
      "dev_addr_prefix": "AAAAAAA=",
      "gateway_id": ""
    },
    "mqtt_address": "",
    "net_address": "eu.thethings.network:1904",
    "public": true,
    "public_key": "-----BEGIN PUBLIC KEY-----\n...",
    "service_name": "handler",
    "service_version": "2.0.0-abcdef...",
    "url": ""
  }
}
```

#### `GetByAppEUI`

- Request: [`GetByAppEUIRequest`](#discoverygetbyappeuirequest)
- Response: [`Announcement`](#discoveryannouncement)

#### `GetByAppID`

- Request: [`GetByAppIDRequest`](#discoverygetbyappidrequest)
- Response: [`Announcement`](#discoveryannouncement)

#### `GetByGatewayID`

- Request: [`GetByGatewayIDRequest`](#discoverygetbygatewayidrequest)
- Response: [`Announcement`](#discoveryannouncement)

## Messages

### `.discovery.Announcement`

The Announcement of a service (also called component)

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `amqp_address` | `string` | Contains the address where the AMQP API is exposed (if there is one) Format of amqp_address: `(amqp(s)://)host(:port)` default amqp port is 5672, default amqps port is 5671. Examples: if `host:port` then `amqp://host:port` if `host:5671` then `amqps://host:5671` if `host` then `amqp://host:5672` and `amqps://host:5671` if `amqp://host` then `amqp://host:5672` if `amqps://host` then `amqp://host:5672` and `amqps://host:5671` |
| `api_address` | `string` | Contains the address where the HTTP API is exposed (if there is one). Format of api_address: `http(s)://domain(:port)` default http port is 80, default https port is 443. |
| `certificate` | `string` | TLS Certificate for gRPC on net_address (if TLS is enabled) |
| `description` | `string` | Description of the component |
| `id` | `string` | The ID of the component |
| `metadata` | _repeated_ [`Metadata`](#discoverymetadata) | Metadata for this component |
| `mqtt_address` | `string` | Contains the address where the MQTT API is exposed (if there is one) Format of mqtt_address: `(mqtt(s)://)host(:port)` default mqtt port is 1883, default mqtts port is 8883. Examples: if `host:port` then `mqtt://host:port` if `host:8883` then `mqtts://host:8883` if `host` then `mqtt://host:1883` and `mqtts://host:8883` if `mqtt://host` then `mqtt://host:1883` if `mqtts://host` then `mqtt://host:1883` and `mqtts://host:8883` |
| `net_address` | `string` | Comma-separated network addresses in the form "domain1:port,domain2:port,domain3:port" (currently we only use the first) |
| `public` | `bool` | Indicates whether this service is part of The Things Network (the public community network) |
| `public_key` | `string` | ECDSA public key of this component |
| `service_name` | `string` | The name of the component (router/broker/handler) |
| `service_version` | `string` | Service version in the form "[version]-[commit] ([build date])" |
| `url` | `string` | URL with documentation or more information about this component |

### `.discovery.AnnouncementsResponse`

A list of announcements

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `services` | _repeated_ [`Announcement`](#discoveryannouncement) |  |

### `.discovery.GetByAppEUIRequest`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_eui` | `bytes` |  |

### `.discovery.GetByAppIDRequest`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_id` | `string` |  |

### `.discovery.GetByGatewayIDRequest`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `gateway_id` | `string` |  |

### `.discovery.GetRequest`

The identifier of the service that should be returned

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `id` | `string` | The ID of the service |
| `service_name` | `string` | The name of the service (router/broker/handler) |

### `.discovery.GetServiceRequest`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `service_name` | `string` | The name of the service (router/broker/handler) |

### `.discovery.Metadata`

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `app_eui` | `bytes` | AppEUI that is registered to this Join Handler Only authorized Join Handlers can announce APP_EUI metadata (and we don't have any of those yet). |
| `app_id` | `string` | AppID that is registered to this Handler This metadata can only be added if the requesting client is authorized to manage this AppID. |
| `dev_addr_prefix` | `bytes` | DevAddr prefix that is routed by this Broker 5 bytes; the first byte is the prefix length, the following 4 bytes are the address. Only authorized Brokers can announce PREFIX metadata. |
| `gateway_id` | `string` | GatewayID that is registered to this Router This metadata can only be added if the requesting client is authorized to manage this GatewayID. |

### `.discovery.MetadataRequest`

The metadata to add or remove from an announement

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |
| `id` | `string` | The ID of the service that should be modified |
| `metadata` | [`Metadata`](#discoverymetadata) | Metadata to add or remove |
| `service_name` | `string` | The name of the service (router/broker/handler) that should be modified |

### `.google.protobuf.Empty`

A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs.

