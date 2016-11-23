---
title: Architecture
---

# Building the Integration
Building a Platform Integration is not much different from building an application. It uses the same Handler Data and Application Manager APIs or SDK.

But now, the user's application lives on your platform and the integration uses our APIs and the private or public APIs of your platform to tie them together.

Here's an example architecture for a typical integration:

![Integration Architecture](integration-architecture.png)

This example uses one of our SDKs for the Data API while talking directly to the Application Manager API. As you can see it also uses the Account Server API to exchange the Access Key it is provisioned with for an Access Token. This improves the performance and stability of the Application Manager API.

See the [API References](#api-references) for more information. Each reference also lists the available SDKs that include the API.
