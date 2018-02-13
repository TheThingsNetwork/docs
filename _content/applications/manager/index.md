---
title: Application Manager API
section: APIs
redirect_from:
 - /draft/application-manager/
 - /manager/
image: /draft/application-manager/handler.png
---

# Application Manager API

The Application Manager API offers methods manage applications and devices registered to The Things Network. The Application Manager API is exposed by the Handler. To use the API you need an Application Access Key or JWT. You can use either the [gRPC API or the HTTP API](usage.md#grpc-or-http) which wraps it.

## Use and Context

The Application Manager API is mostly used to integrate The Things Network stack in applications for device management. You can use the [Data API](../mqtt/index.md) to send and receive messages.

![Handler APIs](handler.png)

## Community endpoints
Use the following endpoints for the community network:

- [gRPC](http://www.grpc.io/): `<region>.thethings.network:1904`
- HTTP: `http://<region>.thethings.network:8084`

Replace `<region>` with the last part of the handler you registered your application to, e.g. `eu`, `us-west`, `asia-se` or `brazil`.

## SDKs

See [SDKs](../sdks.md) for ready-to-use software developer kits for key programming languages.
