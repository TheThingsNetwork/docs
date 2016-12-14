---
title: Host an Integration
---

# Host an Integration
Of course you can choose to host the Platform Integration yourself. You will have full control over the architecture and won't have to share the code with us.

However, if you choose to host the Platform Integration with us, then users will see it listed in The Things Network Console and can configure and deploy it with the click of a button.

Contact [johan@thethingsnetwork.org](mailto:johan@thethingsnetwork.org) if you are interested.

## Requirements
You can host your platform integration on The Things Network Integration Platform under the following conditions:

1. You must share the source code with us, either public or private.
2. The configuration must be done via environment variables.
3. The service must meet our standards for efficiency and stability.

## One container per application
For each hosted integration a user selects for his or her application we spin up a new container. The container will be provisioned with the generic image of your integration and the application-specific configuration, via environment variables.

## Environment Variables
Each container is provisioned with 3 groups of environment variables:

- Integration-specific generic variables like your API endpoint.
- Application-specific system variables like the application ID, Key and Access Key the integration was activated for.
- Application-specific user variables like his or her key for your API.

When you decide to host your integration with us we will ask you for these variables. For the user variables we also require descriptions to go with the form we will present to the user.
