---
title: Implementing Your Own
---

# Implementing you own Account Server for application management

To implement your own account server, you need to implement a couple of things:

1. An access key validation endpoint
2. Endpoints to generate and validate application access tokens

# 1. Access Key validation

To validate access keys, MQTT needs to know what rights the access key provides.
Since the access keys are opaque, it consults an endpoint to fetch those rights:

```plaintext
GET /api/v2/applications/{app_id}/rights
Authorization: Key {app_access_key}
```

If the app id or access key is invalid, it should return `401`.

When successful, the enpoint should return:

```plaintext
200 OK
Content-Type: application/json

[
  "messages:up:r",
  "messages:down:w"
]
```

The meaning of rights returned here are:

- `messages:up:r`:  The right to read the uplink messages from devices an application
- `messages:down:w`: The right to send the downlink messages to devices of an application

The presence of these rights tells the MQTT plugin what type of messages allow
the client to see or send.

> Important Note: due to the limited right management of most MQTT implementations, make
> sure to always return either both rights or none, only returning one will have
> the same result as returning no rights.


# 2. JWT access token generation

All management features of the handler require application access tokens. These
are JWT tokens that the handler can validate without contacting the account
server.  To implement these, you need a couple of things:

1. A public-private key pair to sign the JWTs
2. An endpoint where the handler can fetch the public key.
3. JWTs that are signed using the private key, and have claims that adhere to
   the correct schema.

The handler fetches the public key on startup by performing the HTTP request:

```
GET /key
```

which should return:

```
200 OK
Content-Type: application/json

{
  "algorithm": "RS256",
  "key": "------- BEGIN PUBLIC KEY ------ ...."
}
```

The schema of the token claims should be:

```
{
  "iss"    : string                  issuer ID of your account server
  "iat"    : number                  seconds since unix epoch from when the token should be considered valid
  "exp"    : number                  seconds since unix epoch till when the token will be considered valid
  "type"   : "user"                  denotes that the token is for a user
  "scope"  : [ string ]              the list of entities this token is valid for
  "apps"   : { string: [ string ] }  an object that maps app id to the respective rights this token has for that app
}
```

So for instance, the following token:

```
{
  "iss": "my-account-server",
  "iat": 1489678139,
  "exp": 1489688139,
  "type": "user",
  "scope": [ "apps:foo" ],
  "apps": {
    "foo": [
      "settings",
      "devices"
    ]
  }
}
```

gives the token the right to edit settings and manage devices for application
with id `foo`. The token is valid from `2017-03-16T15:28:59Z` until `2017-03-16T18:15:39Z`.

To validate it, the handler will consult it's configuration and look if it knows
an account server with the ID `my-account-server`, and validate the token with
the public key it got from its `/key` endpoint.

The available rights for an application access token are the following:

- `settings`: Manage application settings on the handler
- `delete`: Unregister/delete the application on the handler
- `devices`: View and edit devices of the application on the handler

