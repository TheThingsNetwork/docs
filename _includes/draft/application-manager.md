---
title: Application Manager API
sections:
 - application-manager/_usage.md
 - application-manager/_auth.md
 - application-manager/_api.md
---

The Handler's Application Manager API offers methods manage Applications and Devices registered to The Things Network. To use the API you need an Application Access Key or Access (JSON Web) Token. You can use either the [gRPC API or the HTTP API](#grpc-or-http) which wraps it.

## Use and Context

The Handler Application Manager API is mostly used to [build Platform Integrations](/build-integration/). To actually communicate with devices over The Things Network you need the [Data API](../../current/mqtt) of the Handler.

![Handler APIs](handler.png)