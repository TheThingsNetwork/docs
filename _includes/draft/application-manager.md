---
title: Application Manager API
sections:
 - application-manager/_token.md
 - application-manager/_grpc.md
 - application-manager/_http.md
 - application-manager/_api.md
---

The Handler's Application Manager API lets you manage Applications and Devices registered to The Things Network. To use the API you need an Application Access Key or Access (JSON Web) Token. You can use either the gRPC service directly or the HTTP API which wraps it.

The Handler Application Manager API is mostly used to [build Platform Integrations](/build-integration/). To actually communicate with devices over The Things Network you need the [Data API](../../current/mqtt).

![Handler APIs](handler.png)