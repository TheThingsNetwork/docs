# HTTP API

The HTTP API is a wrapper around the Handler's gRPC interface. We recommend everyone to use the gRPC interface if possible.

## Authorization

Authorization to the Handler HTTP API is done with the `Authorization` header in your requests.
This header should either contain a `Bearer` token with the JSON Web Token issued by the account server or a `Key` that is issued by the account server and can be exchanged to a JSON Web Token.

Example (`Bearer`):

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhcHBzIjp7InRlc3QiOlsic2V0dGluZ3MiXX19.VGhpcyBpcyB0aGUgc2lnbmF0dXJl
```

Example (`Key`):

```
Authorization: Key ttn-account-preview.n4BAoKOGuK2hj7MXg_OVtpLO0BTJI8lLzt66UsvTlUvZPsi6FADOptnmSH3e3PuQzbLLEUhXxYhkxr34xyUqBQ
```