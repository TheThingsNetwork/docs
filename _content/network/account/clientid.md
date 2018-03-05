---
title: Request a Client ID
---

# Client ID

In order to use the Account Server API, you need to register a client on the Account Server.

You can register a client using [ttnctl](../cli/index.md):

```
$ ttnctl clients request my-gateway-editor "Client used to consult and edit gateway information" --uri "https://mygatewayclient.org/oauth/callback" --scope "profile,gateways" --grants "authorization_code,refresh_token"
```

Executing this command will send a request to the Things Network Core Team whether to accept or decline your OAuth client. Before sending a request, make sure that the **URI is a valid [OAuth callback URI](https://docs.microsoft.com/en-us/vsts/integrate/get-started/authentication/oauth)**, and that the description **describes accurately the purpose of your client**.

See `ttnctl clients --help` for additional information.
