---
title: Authentication
source: 'https://github.com/TheThingsIndustries/account-server/blob/master/AUTHENTICATION.md'
---

This document describes the various aspects of authentication using this
authentication server.

## Scopes

Different endpoints require different client scopes.  These scopes
restrict the clients to only be able to do certain types of actions.
Currently these scopes are defined:

- `profile`: view and edit the users profile,
- `apps`: manage the users applications and devices,
- `apps:<app_id>`: manage the `app_id` app,
- `components`: manage the users components,
- `components:<component_id>`: manage the `component_id` component,
- `gateways`: manage the users gateways,
- `gateways:<gateway_id>`: manage the `gateway_id` gateway.


Endpoints will check if the authentication method has the required scope
depending on the method of authentication. As a rule of thumb, any endpoint
that has an id (for instance an app id) in it's URL, requires the specific
scope for that id. For instance `GET /applications/foo` will require the
`apps:foo` scope, `apps` is not enough. On the other hand to perform more
general actions (like listing or creating apps) you will need the more general
scope (eg. `apps`).

## Rights

Most actions a user wants to perform on the account server require he has the
correct rights for the resource she is trying to access.

Currently there are 3 main categories of rights:

- `applications`
- `gateways`
- `components`


### Application rights

To view and manage an application, a user needs rights to the application.
Currently the following rights on applications are defined:

- `settings`: view and edit the settings of the application
- `delete`: the ability to delete the application
- `collaborators`: the ability to add and remove collaborators or edit their
  rights
- `messages:up:r`: the ability to view messages sent by devices on the
  application
- `messages:up:w`: the abilty to send messages to the application
- `messages:down:w`: the abilty to send downlink messages to devices on the
  application
- `devices`: List, view, add, edit and remove the devices for the application on a handler


### Gateway rights

To view and manage a gateway, a user needs rights to the gateway.
Currently the following rights on gateways are defined:

- `gateway:settings`: view and edit the settings of the gateway
- `gateway:delete`: the ability to delete the gateway
- `gateway:collaborators`: the ability to add and remove collaborators or edit their rights
- `gateway:status`: the ability to view the gateway status
- `gateway:location`: the accurate location of the gateway, if this is not
  present, a scrambled location will be available
- `gateway:owner`: view the owener of the gateway

### Component rights

To view and manage a network component, a user needs rights to the component.
Currently the following rights on network components are defined:

- `component:settings`: read and write access to the settings and access key of a network component
- `component:delete`: the right to delete the network component


## Authentication methods

Currently, there are 3 different methods of authenticating:

- session: sessions on account server, held by encrypted cookies,
- bearer token: OAuth 2.0 bearer json web tokens,
- access key: application access keys.

### Session

This authentication method is only used on the account server website itself to
keep the login status of a user. It automatically grants the `profile`
scope, and no other scope.

The method is checked for by looking at each requests `session` cookie.
The cookies are HTTP-only and secure, to prevent hijacking.

### Bearer Token

This authentication method is the main method of authenticating.  It checks
the `Authorization` header to be in the following format:

```plaintext
Authorization: Bearer <token>
```

where `<token>` is the [jwt][jwt] `access token` containing information about the user.
This token is singed by a secret key that is kept by the account server. You can
find the public decryprtion key using  `GET /key` endpoint.

The `access token` is structured like this:

```plaintext
{
  sub: <user id>,         // the immutable user ID
  client: <client id>,    // the ID of the client that requested the token
  scope: [ <scope...> ],  // array of scopes this token grants

  // Apps the user is a collaborator to, by app ID. The value at each key
  // is an array of the rights the user has for the specific app.
  // Only present when the client requesting the token has the apps scope.
  apps: {
    <app id>: [
      <app right...>
    ],
  },

  // Components the user is a collaborator to, by component ID. The value at each key
  // is an array of the rights the user has for the specific component.
  // Only present when the client requesting the token has the components scope.
  components: {
    <component id>: [
      <component right...>
    ],
  },

  // Gateways the user is a collaborator to, by component ID. The value at each key
  // is an array of the rights the user has for the specific gateway.
  // Only present when the client requesting the token has the gateways scope.
  gateways: {
    <gateway eui>: [
      <gateway right...>
    ],
  },

  // these fields are only present when the client requesting the 
  // token has the profile scope.
  username,
  email,
  created,
  name,
  valid,
}
```


### Access Key

You can access certain application endpoints by setting the `Authorization`
header like:

```plaintext
Authorization: Key <access key>
```

where `<access key>` is an application access key.


### Requesting the access token

To request an access token, initiate an OAuth 2.0 flow at `/users/token`.
There's support for both the `password` flow and the `authorization_code` flow,
based on the grants of the client you are using.

To prevent tokens from becoming too big (which might happen if a user has a lot
of apps, gateways or components), a client can restrict the scope of the access
token. By default the scope is not restricted and all entities are encoded in
the token.

To restrict the scope, a client should pass the optional `scope` parameter and
select the entities it wants to be included in the token:

```jsonnet
{
  grant_type: 'password',
  username: 'username',
  password: 'secret',
  scope: [
    'apps:app_id',
    'gateways:gateway_id',
    'components:component_id'
  ]
}
```

The resulting token will only have rights to edit the application `app_id`, the
gateway `gateway_id` and the component `component_id`, other entities will be
elided.

If the client does not have access to a certain scope (for instance it does not
have the `apps` scope), this request would result in a `400 Bad Request`.

### Restricted access keys

While having a lot of advantages, using jwt for access tokens has one problem:
the token can become really big. For instance, a user with 20 apps and 30
gateways will have a bigger token than a user with only 4 apps. This is a
problem because HTTP restricts the length of headers and tokens that are to big
cannot be used any more.

To solve this problem, we restrict the size of each token to have only 10
entities on it (where an entity is an `app`, a `gateway` or a `component`) and 
we introduce a new endpoint `users/restrict-token` to allow access tokens to be
exchanged for access tokens with similar scope but different specific entities.

So if you have a token with the `scope` `[ 'apps' ]`, you can exchange it for
another token that has the restricted scope `[ 'apps:an_app_id' ]` posting the
following request to `/users/restrict-token`,  with your access token in the
`Authorization: Bearer <token>` header:

```json
{
  "scope": [ "apps:another_app_id" ]
}
```

The result of which would be:

```json
{
  "access_token": "<new token for another_app_id>"
}
```

This way, in effect every token has the same power as a token with all `apps` on
it, yet it does not have to as big.

Some tokens should not have this ability though, that is why there is a field on
the token claims: `interchangeable`. Only when this is `true`, the token will be
interchangeable like this.


### Exchanging an Access Key for an Access Token

When you are building an integration, you will need an application access token,
(which can be validated offline), to start the integration process.  However,
users can only provide you with an application access key (which cannot be
validated offline).  Therefore, you need to exchange the access key for an
access token.  This can be done using the `/api/v2/applications/token` endpoint.

It works exactly like a standard OAuth 2.0 password flow. The client initiates a
request:

```plaintext
HTTP/1.1  POST /api/v2/applications/token
Content-Type: application/json
Authorization: Basic <basic_auth>

{
  "username": "<app_id>",
  "password": "<access_key>",
  "grant_type": "password"
}
```

Where `<app_id>` is the application id you are requesting the access token for
and `<access_key>` is the application access key you are exchanging.

`<basic auth>` is constructed following the [standard basic auth](https://en.wikipedia.org/wiki/Basic_access_authentication) way:

```plaintext
# pseudo code
basic_auth = base64("<client_id>:<client_secret>")
```

Where `client_id` is the client ID for your integration and `<client_secret>` is 
the client secret for you integration. For now, these need to be requested
manually with TTN.


If successful, you will receive a response like:

```plaintext
200 Success
Content-Type: application/json

{
  "access_token": "<access_token>",
  "expires_in": 86400
}
```

The `access_token` is an access token that is scoped to the app you used in the
exchange (eg. it has the `[ "app:<app_id>" ]`) scope and has the same rights as
the access key you used to in the exchange.

If the exchange fails for whatever reason, you will get a response like this:

```plaintext
401 Unauthorized

{
  "code": 401,
  "description": "<error message>"
}
```

# OAuth 2.0 Authorization flow

In this section we describe a sample `authorization_code` code flow.
Assuming you have a registered client with these properties:

```
client_id: foo-client 
client_secret: secret
redirect_uri: http://www.example.com/oauth/callback
scope: [ 'apps' ]
```

## 1. Make an authorization request

To be able to use your client, a user will have to authorize it first on the
account server.  You can tell the user to do so by redirecting to:

```
https://account.thethingsnetwork.org/users/authorize?client_id=foo-client&redirect_uri=http://www.example.com/oauth/callback&response_type=code
```

This will ask the user to log in and presents her with a form to authorize your
client.  If the user authorizes your client, she will be redirected to:

```
http://www.example.com/oauth/callback?code=<auth code>
```

You need the `<auth code>` from this redirect to go to step 2.

The preference of the user will be stored so this authorization step will
redirect immediatly (without showing the form) the next time you do this for the
same user.


## 2. Get the access token 
To get the access token perform the following request:
```plaintext
HTTP/1.1 POST /users/token
Content-Type: application/json
Authorization: Basic <basic_auth>

{
  "grant_type": "authorization_code",
  "code": "<auth code>",
  "redirect_uri: "http://www.example.com/oauth/callback"
}
```

Where `<basic_auth>` is the basic auth digest for your client (`client_id` and
`client_secret`) and `<auth_code>` is the authorization code received from step 1.

[jwt]: https://jwt.io
