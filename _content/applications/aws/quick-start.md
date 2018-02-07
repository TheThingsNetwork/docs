---
title: Quick Start
zindex: 1000
---

# Quick Start

This guide will walk you through setting up the AWS IoT integration using CloudFormation: an easy process to configure one of the most advanced integrations for The Things Network.

1. Log in to the [AWS Management Console](http://console.aws.amazon.com)
2. Click on [this link](https://eu-west-1.console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/create/review?filter=active&templateURL=https:%2F%2Fs3-eu-west-1.amazonaws.com%2Fsvdgraaf-bitlog%2Fcloudformation.template&stackName=TTN-AWS-Integration&param_AccountServer=https:%2F%2Faccount.thethingsnetwork.org&param_DiscoveryServer=discovery.thethings.network:1900&param_InstanceType=t2.micro&param_ThingShadowDeltaFPort=1&param_ThingSyncEnabled=true&param_ThingSyncInterval=10m&param_ThingTypeName=lorawan) to create a new stack

   * Enter a **Stack name**, for example `ttn-app`
   * Enter the **AppID** and an **AppAccessKey** of your application in The Things Network
   * Enter an **EnvironmentName** for Elastic Beanstalk, for example `ttn-app`
   * If you are using a private network, change the **AccountServer** and **DiscoveryServer** to the endpoints of your private network
   * Select an existing EC2 KeyPair in **KeyName** to access the EC2 instance. [Read more](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)

   > The **AppAccessKey** that you enter should at least have the `messages` and `devices` rights.

   Example parameters:
   ![Parameters](parameters.png)

3. Review your settings and check the **I acknowledge** box to acknowledge that resources for the integration may be created in your AWS account
4. Click **Create** to initiate the creation of the stack
5. After a coffee break of about six minutes, you will see two new stacks:

    ![Stacks](stacks.png)

    > The `awseb-...` stack is an AWS Elastic Beanstalk stack that is created as part of the stack of the integration process.

🎉 You have now successfully configured the AWS IoT integration! See the guides on the left to learn working with the [thing registry](./thing-registry.md), [test messages](./test-messages.md), [thing shadows](./thing-shadows.md), [act on data](./act-on-data.md), [view metrics](./view-metrics.md) and [update](./update.md) the integration.
