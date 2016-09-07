# Register Device

To communicate with the Application you registered via The Things Dashboard, we
first need to do the same for your Device and activate it via our sketch.

The Things Network supports two mechanisms to register devices: Over The Air 
Activation (OTAA) and Activation By Personalization (ABP).

> In production, you'll want to use OTAA. This is more reliable because the
activation will be confirmed and more secure because the session keys will
be negotiated with every activation.
> 
> ABP is useful for workshops because you
don't have to wait for a downlink window to become available to confirm the
activation.

To register your device, go back to your application's page on the dashboard
and click **Register Device**.

## Register for Over The Air Activation (OTAA)

On the **Register Device** screen select **OTAA**. Paste your **Device EUI**.
If the format is correct, the **Register** button should become enabled.

We'll let the App Key randomly generated. To continue, click **Register**.

To register for OTAA you'll need to <a href="#get-the-things-uno-deveui">get
the **DevEUI** of your device</a>.

![Register Device (OTAA)](/assets/register-device-otaa.png)

You will be redirected to the **Device info** page. Here you can view all
information about your device, including the keys you'll need to active.
You can also send messages to the device (downlink) and monitor messages
sent by the device (uplink):

![Device info (ABP)](/assets/device-info-abp.png)

## Register for Activation By Personalization (ABP)

Select **ABP**. We will let both session keys to be randomly generated.
To continue, click **Register**.

![Register Device (ABP)](/assets/register-device-abp.png)

As with OTAA, you'll be redirected to the **Device info** page.

With ABP the frame count will reset with every reset of your device. This means
you either have to use the **reset** link on the above screen every time this
happens to also reset the tracked frame counter.

While developing, you'll probably want to enable **Relax Frame Count**.

> **WARNING:** Do not leave **Relax Frame Count** enabled in production as it will allow replay attacks, e.g. sending messages with a frame counter equal or lower than the latest received.

![Device info (ABP)](/assets/device-info-abp.png)