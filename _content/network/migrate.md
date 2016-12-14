---
title: Migrate from Staging to Production
---

# Migrate from Staging to Production

This guide will walk you through migrating applications and devices from [staging.thethingsnetwork.org](https://staging.thethingsnetwork.org/) to production at [console.thethingsnetwork.org](https://preview.console.thethingsnetwork.org/).

> The migration does not require any changes to devices that use OTAA (the default). Devices that use ABP will need their sketch to be updated with a new Device Address.

> Messages will be routed to the new backend automatically once you have migrated a device and will no longer be delivered to staging.

## Applications

For each application you'd like to migrate:

1.  On [staging](https://staging.thethingsnetwork.org/applications/), click the application you'd like to migrate to see the **Application Info** box.
2.  In [production](https://preview.console.thethingsnetwork.org/applications/), go to [add application](https://preview.console.thethingsnetwork.org/applications/add).

    - For **Application ID**, use anything you like as long as it is unique and only uses low case alphanumeric charachters and nonconsecutive `-` and `_`.
    - For **Description**, copy the **Application name** from staging.

    ![Add Application](../applications/add-application.png)

3.  From the **Application Overview** page of the newly created application, click **Settings** on the top right.
4.  Under **App Settings** select **EUIs**.
5.  Click **remove** right of the **App EUI** that was generated for you.
5.  Click the **add EUI** or **Add one!** link.

    - Click <i class="ion-edit"></i> to customize the EUI.
    - Copy-paste the **App EUI** from the **Application Info** box on staging.

    ![Customize EUI](migrate-app-eui.png)

### Payload Functions

If you have customized the payload functions you'll need to migrate those as well:

1.  On staging, in the **Application Info** box click **edit** after **Payload Functions**.
2.  In production, select **Payload Functions** from the top right menu of the migrated application.
3.  For each of the Payload Functions you have customized:

    1.  Copy-paste the function body from staging to production.
    2.  Update the functions, following these signatures:

        - Functions are no longer anonymous.
        - You can leave the name of the first argument as you had it in staging.
        - Functions have an optional second argument for the port.

        ```js
        function Decoder(bytes, port) {
            return { /* fields */ };
        }

        function Converter(decoded, port) {
            return decoded;
        }

        function Validator(converted, port) {
            return true;
        }

        function Encoder(object, port) {
            return [ / * bytes */ ];
        }
        ```

## Devices

For each device you'd like to migrate:

1.  On [staging](https://staging.thethingsnetwork.org/applications/), go to the application you'd like to migrate devices from.
2.  In the **Devices** box click the **Dev EUI** of the device you'd like to migrate to see its **Device info** box.
3.  In [production](https://preview.console.thethingsnetwork.org/applications/), go to the migrated application.
4.  Scroll down to **Devices** or select **Devices** from the top right menu.
5.  Click **register device**.
    - For **Device ID**, use anything you like as long as it is unique and only uses alphanumeric charachters and nonconsecutive `-` and `_`.
    - For **Device EUI**, click **customize it** and copy-paste the **Dev EUI** from staging.
    - For **App Key**, click **customize it** and copy-paste the **App Key** from staging.
    - For **App EUI**, click to select the **App EUI** from staging which you added when you migrated the application.

    ![Register Device](../devices/register-device.png)

> Made a mistake? You can always come back to a device and select **Settings** from the top right menu to change all of the above settings, except the **Device ID**.

### Devices registered for ABP

If you had your device registered for ABP, follow these additional steps:

1.  Navigate to the migrated device if you're not there already.
2.  Select **Settings** from the top right menu.

    - For **Activation method** select **ABP**.
    - For **Network Session Key**, click <i class="ion-edit"></i> and copy-paste the **Network Session Key** from staging.
    - For **App Session Key**, click <i class="ion-edit"></i> and copy-paste the **App Session Key** from staging.

3.  Click **Save**, which will redirect you back to the device screen.
4.  Connect the device.
5.  Update the following line of your sketch with the generated **Device Address**:

    ```c
    const char *devAddr = "00000000";
    ```