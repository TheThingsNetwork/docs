---
title: "Root Certificates"
description: ""
---

## Root Certificates

This section contains links to common root SSL certificates used in TTN, issued by trusted certificate authorities (CAs).

<!--more-->

## Which Certificate Is Right For My Device?

The [complete certificate list](https://curl.haxx.se/ca/cacert.pem) contains all CA certificates trusted by modern browsers, so if your device supports this file, you should be covered by this one.

The <a href="ca.pem" download>minimal certificate list</a> contains a tailored list of certificates for devices which do not support the larger list due to memory constraints.

Unfortunately, some gateways do not support concatenated certificate lists at all. If your device will not connect using the complete or minimal certificate lists, you must use the specific certificate TTN uses. This is currently the Let's Encrypt DST Root X3, but is transitioning to the ISRG Root X1. See [below]({{< relref "#lets-encrypt" >}}).

## Complete Certificate List

This `.pem` file contains all common CA certificates trusted by Mozilla, and is extracted and hosted by [curl](https://curl.haxx.se/docs/caextract.html).

Download the complete certificate list from curl [here](https://curl.haxx.se/ca/cacert.pem).

## Minimal Certificate List for Common Installations

This `.pem` file contains certificates used in TTN, and is small enough to fit on memory constrained devices such as Gateways.

Download the minimal certificate list <a href="ca.pem" download>here</a>.

## Let's Encrypt

### ISRG Root X1

TTN is transitioning from DST Root X3 to the Let's Encrypt ISRG Root X1 Trust. Download the ISRG Root X1 Trust file [here](https://letsencrypt.org/certs/isrgrootx1.pem).

### DST Root X3

TTN will continue to use the Let's Encrypt DST Root X3 Trust until it expires in 2021. Download it [here](https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem).

> Unfortunately, if you use a single certificate and that certificate expires, your gateway will stop connecting until you update the certificate. The minimal and complete certificate lists contain the ISRG Root X1 and DST Root X3 certificates, but some gateways do not support concatenated certificate lists, even though they are part of the [ietf spec](https://tools.ietf.org/html/rfc1421) :(

