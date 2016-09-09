# Register Device

To communicate with the Application you registered via The Things Dashboard, we first need to do the same for your Device and activate it via our sketch.

The Things Network supports two mechanisms to register devices: Over The Air Activation (OTAA) and Activation By Personalization (ABP). Every device is initially registered for OTAA after which you can switch to ABP if you prefer that instead.

> In production, you'll want to use OTAA. This is more reliable because the activation will be confirmed and more secure because the session keys will be negotiated with every activation.
> 
> ABP is useful for workshops because you don't have to wait for a downlink window to become available to confirm the activation.

## Register for Over The Air Activation (OTAA)

To register for OTAA you'll need to <a href="/docs/uno/#get-your-dev-eui">get the **Dev EUI** of your device</a> first. If you already know you will switch to ABP, you can do without.

1.  Form the application page, select **Devices** from the top right menu.
2.  In the **Devices** box, click **register device**.
3.  On the **Register Device** screen leave **OTAA** selected.

    * For **Device ID**, choose a unique ID of lower case, alphanumeric characters and nonconsecutive `-` and `_`.
    * For **Device EUI**, click **customize it** and copy-paste the **DevEUI** you retrieved from your device.

    	> If you plan to switch to ABP anyway, just leave it to be generated.
    
    * Leave the **App Key** to be randomly generated.
    * For **App EUI**, select the generated EUI from the list.

    ![Register Device (OTAA)](register-device.png)

4.  Click **Register** to finish.

    You will be redirected to the newly created device page where you can find the generated **App Key**.

## Register for Activation By Personalization (ABP)

You can switch a device to ABP (personalize) after first registering it for OTAA.

1.  In the dashboard, go to the device you'd like to switch to ABP.
2.  From the top right menu, select **Settings**.
3.  Click on **personalize device**, just right of the **Device Settings** header.

    * Let the **Network Session Key** and **App Session Key** be generated for you or click **customize it** if you'd like to set them yourself.

    ![Personalize Device](personalize-device.png)
    
5.  Click **Personalize** to finish.