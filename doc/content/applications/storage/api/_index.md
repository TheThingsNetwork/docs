---
title: API Reference
weight: -1000
source: 'https://github.com/TheThingsIndustries/integration-storage/blob/master/api/README.md'
---

The Storage API allows you to query data and list devices for which data is stored by the Storage Integration.

The API is available over HTTPS and serves data in JSON format. The base URL for the Storage API is:

```
https://<app-id>.data.thethingsnetwork.org/
```

Please open this URL in your browser to see the description of endpoints in Swagger.

To access devices and data, you need to provide the app access key that you used when configuring the Storage Integration. The app access key should be provided through the `Authorization` HTTP header with value `key <app-access-key>`. This access key has to have the right `messages:up:r`.
