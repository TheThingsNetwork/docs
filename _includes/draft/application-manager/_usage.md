# Usage

## Get an Access Token

To use these APIs you need a JSON Web Access Token with a proper scope. Alternatively, you can use an Application Access Key. The APIs will then exchange this for a token.

Because this exchange happens on every request it is better to do this yourself and re-use the token. This will improve the performance and you will continue to be able to use the Application Manager API even if for some reason the Account Server is down.

To exchange the key for a token, see the [Account Server API Reference](/account/#exchanging-an-access-key-for-an-access-token).

See [Authentication](#authentication) on how to use the key or token to authenticate.

## gRPC or HTTP

The primary interface for the Handler Management API is [gRPC](http://www.grpc.io/). To learn about gRPC follow the [gRPC Quick Start](http://www.grpc.io/docs/quickstart/) in your favourite language.  The service is defined in [handler.proto](https://github.com/TheThingsNetwork/ttn/blob/v2-preview/api/handler/handler.proto). 

The HTTP API is a wrapper around the gRPC API. We recommend to use gRPC if possible because the performance is better.

See [API Reference](#api-reference) for the available methods for both the gRPC and HTTP API.

## Find a Handler

To find a Handler to connect to you need to use the [Discovery API](/discovery/). This is where all Handlers announce themselves. See the [documentation](/discovery/) on how to get hold of an handler.