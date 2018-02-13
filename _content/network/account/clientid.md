---
title: Request a Client ID
---

# Client ID

In order to use the Account Server API, you need to register a client on the Account Server.

You can register a client using [ttnctl](../cli/index.md):

```
$ ttnctl clients request my-gateway-editor "Client used to consult and edit gateway information" --uri "https://mygatewayclient.org/oauth/callback" --scope "profile,gateways" --grants "authorization_code,refresh_token"
```

See `ttnctl clients --help` for additional information.