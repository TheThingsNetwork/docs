---
title: Application Manager
section: APIs
redirect_from:
 - /draft/application-manager/
 - /manager/
image: /draft/application-manager/handler.png
---

# Application Manager

The Handler's Application Manager API offers methods manage Applications and Devices registered to The Things Network. To use the API you need an Application Access Key or Access (JSON Web) Token. You can use either the [gRPC API or the HTTP API](usage.md#grpc-or-http) which wraps it.

## Use and Context

The Handler Application Manager API is mostly used to [build Platform Integrations](../../platforms/index.md). To actually communicate with devices over The Things Network you need the [Data API](../../applications/mqtt/index.md) of the Handler.

![Handler APIs](handler.png)
