# Register with The Things Network

Your applications and devices can be managed by [The Things Network Dashboard][https://staging.thethingsnetwork.org].

## Create an Account

To use the dashboard, you need a The Things Network account. You can [create an account here][https://account.thethingsnetwork.org/register].

After registering and validating your e-mail address, you will be able to log in to [The Things Network Dashboard][https://staging.thethingsnetwork.org].

## Create an Application

Create your first The Things Network application by clicking
[create application](https://staging.thethingsnetwork.org/applications/create).
Fill in the desired application name (e.g. `Hello world`) and click **Create application**.

![create application](/assets/create-application.png)

You will be redirected to the newly created Application page.

![application info](/assets/app-info.png)

*Note: in every component on the dashboard there is a small help icon.
This opens a help message with details about that components.*

## Register a Device

The Things Network supports the two LoRaWAN mechanisms to register devices:
activation by personalization (ABP) and over the air activation (OTAA). In this
workshop, we use ABP.

### Via ABP

To register the device, go back to the dashboard and click
**Register Device** on the application page. This will take you to the device
registration page.

Select **ABP**. We will let both session keys to be randomly generated. To continue,
click **Register**.

![register-device](/assets/register-device-abp.png)

You will be redirected to the device info page. Here you can view all
information about your device, send messages to the device and view messages
that were sent by the device.

**Important**: Enable the **Relax Frame Count** option for this device.

*Note*: Relax Frame Count allows you to restart your device for development purposes
without the routing services keeping track of the frame counter. Disabling this feature enables replay attacks, e.g.
sending messages with a frame counter equal or lower than the latest received, so please do not enable relax frame count in production.

![device-info](/assets/device-info-abp.png)