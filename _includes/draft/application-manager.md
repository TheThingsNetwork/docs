---
title: Application Manager API
---

If your integration not only wants to forward data over The Things Network, but also manage the application and registered devices, then you will need to use the *Handler Management APIs*. To do so you need to request an **Access Key** using your **Access Key**. You can use either the gRPC or HTTP interface.

### Get an Access Token
To use the *Handler Management APIs* you will need an **Access Token**. This is different from the **Access Key** provided to you via the environment variable `TTN_APP_ACCESS_KEY`.

You can use the **Access Key** to request an **Access Token** via the Account Server. For more information see the *Account Server API*.

### Use the gRPC API
The primary interface for the Handler Management API is [gRPC](http://www.grpc.io/). The service is defined in [handler.proto](https://github.com/TheThingsNetwork/ttn/blob/v2-preview/api/handler/handler.proto). The endpoint is `??:??`.

### Use the HTTP API
You can also use the HTTP API, which wraps the gRPC API. A more familiar interface, but at a small performance cost.

See the [API Reference](https://github.com/TheThingsNetwork/ttn/blob/v2-preview/api/handler/HTTP-API.md) for more details.
