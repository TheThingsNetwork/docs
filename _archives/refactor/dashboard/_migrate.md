# Migration Guide

This guide will walk you through migrating applications and devices from [staging.thethingsnetwork.org](https://staging.thethingsnetwork.org/) to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/) which will eventually be `dashboard.thethingsnetwork.org`.

> The migration does not require any immediate change on nodes since the staging router forwards data to both the staging and (preview) production.

## Log in and select region

1.  Log in to [preview](https://preview.dashboard.thethingsnetwork.org/)

    > **INTERNAL NOTE:** At the moment you'll have to create a new account and log in via [staging.account.thethingsnetwork.org](https://staging.account.thethingsnetwork.org) but once the preview is public it will use [account.thethingsnetwork.org](https://account.thethingsnetwork.org).

2.  On the top left, click `ttn-handler-eu` to switch to the region where you will be deploying devices:

    ![Switch Region](dashboard-region.png)

## Applications

For each application you'd like to migrate:

1.  On [staging](https://staging.thethingsnetwork.org/applications/), click the application you'd like to migrate to see the **Application Info** box.
2.  In [preview](https://preview.dashboard.thethingsnetwork.org/applications/), go to [create application](https://preview.dashboard.thethingsnetwork.org/applications/create).
    - For **Application ID**, use anything you like as long as it is unique and only uses alphanumeric charachters and nonconsecutive `-` and `_`.
    - For **Application Description**, copy the **Application name** from staging.

    ![Create Application](dashboard-application-create.png)

3.  From the **Application Overview** page of the newly created application, click **Settings** on the top right.
4.  In the box **EUI**, click **remove** right of the **App EUI** that was generated for you.
5.  Click the **add EUI** or **Add one!** link.
    - Copy-paste the **App EUI** from the **Application Info** box on staging.

    ![Customize EUI](dashboard-application-eui.png)

### Payload Functions

If you have customized the payload functions you'll need to migrate those as well:

1.  On staging, in the **Application Info** box click **edit** after **Payload Functions**.
2.  In preview, click **Payload Functions** on the top right.
3.  For each of the Payload Functions you have customized, copy-paste the function body from staging to preview and click **Save**.

## Devices

For each device you'd like to migrate:

1.  On [staging](https://staging.thethingsnetwork.org/applications/), click the application you'd like to migrate devices from.
2.  In the **Devices** box click the **Dev EUI** of the device you'd like to migrate to see its **Device info** box.
3.  In [preview](https://preview.dashboard.thethingsnetwork.org/applications/), click the [migrated application](#migrate-applications) to go to its **Application Overview** page.
4.  Click **Devices** on the top right.
5.  Click **register device**.
    - For **Device ID**, use anything you like as long as it is unique and only uses alphanumeric charachters and nonconsecutive `-` and `_`.
    - For **Device EUI**, click **customize it** and copy-paste the **Dev EUI** from staging.
    - For **App Key**, click **customize it** and copy-paste the **App Key** from staging.
    - For **App EUI**, click to select the **App EUI** from staging which you added when you [migrated the application](#migrate-applications).

    ![Migrate Device](dashboard-migrate-device.png)

> Made a mistake? You can always come back to the devices and click **Settings** on the top right to change all of the above settings, except the **Device ID**.