# Migrate Applications

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

## Migrate Payload Functions

If you have customized the payload functions you'll need to migrate those as well:

1.  On staging, in the **Application Info** box click **edit** after **Payload Functions**.
2.  In preview, click **Payload Functions** on the top right.
3.  For each of the Payload Functions you have customized, copy-paste the function body from staging to preview and click **Save**.