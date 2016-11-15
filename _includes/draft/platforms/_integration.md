# Platform Integrations
Think of creating a Platform Integration as coding a generic application for all users of your platform. It uses the same public *Handler APIs* as well as your platform's private or public APIs to exchange data and tasks.

A Platform Integration will almost always use the *Handler Data APIs* to communicate with devices. In addition, it may also use the *Handler Management APIs* to manage the application and devices.

![Integration](integration.png)

## Data APIs
To communicate with devices via The Things Network you will use the *Handler Data APIs*. To do so you need the **Access Key** provided to you via the environment variable `TTN_APP_ACCESS_KEY`. You can use either te MQTT or AMQP interface.

### Use the MQTT API
See our [MQTT guide](../../current/mqtt) for more information.

### Use the AMQP API
[AMQP](http://www.amqp.org/) has a few advantages over MQTT which led us to decide to offer this as an alternative. We already use this internally but yet have to provide a public SDK and documentation.

See the [source code](https://github.com/TheThingsNetwork/ttn/tree/v2-preview/amqp) while we work on the documentation.

## Management APIs
If your integration not only wants to forward data over The Things Network, but also manage the application and registered devices, then you will need to use the *Handler Management APIs*. To do so you need to request an **Access Key** using your **Access Key**. You can use either the gRPC or HTTP interface.

### Get an Access Token
To use the *Handler Management APIs* you will need an **Access Token**. This is different from the **Access Key** provided to you via the environment variable `TTN_APP_ACCESS_KEY`.

You can use the **Access Key** to request an **Access Token** via the Account Server. For more information see the *Account Server API*.

### Use the gRPC API
The primary interface for the Handler Management API is [gRPC](http://www.grpc.io/). The service is defined in [handler.proto](https://github.com/TheThingsNetwork/ttn/blob/v2-preview/api/handler/handler.proto). The endpoint is `??:??`.

### Use the HTTP API
You can also use the HTTP API, which wraps the gRPC API. A more familiar interface, but slightly less performant.

See the [API Reference](https://github.com/TheThingsNetwork/ttn/blob/v2-preview/api/handler/HTTP-API.md) for more details. The endpoint is currently `https://preview.account.thethingsnetwork.org` but will change to `https://account.thethingsnetwork.org` once we're in production.

## Hosting
Of course you can choose to host the Platform Integration yourself. You will have full control over the code and won't have to share it with us.

If you choose to host the Platform Integration with us, users will see it listed in The Things Network Console and can deploy it with the click of a button.

### One container per application
For each integration a user selects for his or her application we spin up a new container. The the container will be setup according to your manifest, provisioned with the generic image of your 

 gets provisioned with this generic image for your integration and configured via environment variables.

You can host your platform integration on The Things Network Integration Platform under the following conditions:

1. You must share the source code with The Things Network.
2. The configuration must be done via environment variables.
3. The service must meet our standards for efficiency and stability.

Contact [johan@thethingsnetwork.org](mailto:johan@thethingsnetwork.org) if you are interested.

### Environment Variables

All platform integrations receive the following environment variables:

```
TTN_APP_MQTT_HOSTNAME  # Hostname for the regional MQTT broker
TTN_APP_ID             # Application ID
TTN_APP_KEY            # Application Key
TTN_APP_ACCESS_KEY     # Application Access Key
```

In addition you can provide a configuration file to request additional variables the user may set:

```json
{
  // TODO
}
```
