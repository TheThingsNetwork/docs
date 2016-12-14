---
title: Migrate from Staging to Production
---

# Migrate from Staging to Production

This guide will walk you through migrating applications and devices from [staging.thethingsnetwork.org](https://staging.thethingsnetwork.org/) to production at [console.thethingsnetwork.org](https://console.thethingsnetwork.org/).

For the announcement and discussion of the launch of production see the [forum](https://www.thethingsnetwork.org/forum/t/launching-production-environment/4435).

> The migration does not require any changes to devices that use OTAA (the default). Devices that use ABP will need their sketch to be updated with a new Device Address.

> Messages will be routed to the new backend automatically once you have migrated a device and will no longer be delivered to staging.

## Applications

For each application you'd like to migrate:

1.  On [staging](https://staging.thethingsnetwork.org/applications/), click the application you'd like to migrate to see the **Application Info** box.
2.  In [production](https://console.thethingsnetwork.org/applications/), go to [add application](https://console.thethingsnetwork.org/applications/add).

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
3.  In [production](https://console.thethingsnetwork.org/applications/), go to the migrated application.
4.  Scroll down to **Devices** or select **Devices** from the top right menu.
5.  Click **register device**.
    - For **Device ID**, use anything you like as long as it is unique and only uses alphanumeric charachters and nonconsecutive `-` and `_`.
    - For **Device EUI**, click **customize it** and copy-paste the **Dev EUI** from staging.
    - For **App Key**, click **customize it** and copy-paste the **App Key** from staging.
    - For **App EUI**, click to select the **App EUI** from staging which you added when you migrated the application.

    ![Register Device](../devices/register-device.png)

6.  Click *Register* to finish.

    > Made a mistake? You can always come back to a device and select **Settings** from the top right menu to change all of the above settings, except the **Device ID**.

7.  On staging, delete the device or you will risk join accept and routing conflicts.

    1.  On staging, go to the migrated device.
    2.  Scroll down to the bottom and click the red **Delete device** button.

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

## MQTT

If you have been using the MQTT broker at `staging.thethingsnetwork.org`, then this section will help you migrate to one of the new production brokers at `<Region>.thethings.network`.

### Region-specific hostname

In staging you connected to `staging.thethingsnetwork.org`. Replace this with `<Region>.thethings.network`. See [MQTT / Quick Start / Credentials](../applications/mqtt/quick-start.md#credentials) to learn what region to use.

### Application EUI becomes ID

In staging you used the **Application EUI** as username and as first element in all topics. Replace this with the **Application ID**.

**Staging:**

```bash
mosquitto_sub -h staging.thethingsnetwork.org -t '#' -u <AppEUI -P '<AppKey>' -v
```

**Production:**

```bash
mosquitto_sub -h <Region>.thethings.network -t '#' -u '<AppID>' -P '<AppKey>' -v
```

### Activations

The topic has changed to `<AppId>/devices/<DevId>/events/activations`.

The JSON encoded payload has also changed on several points. Update the code where you process it.

**Staging:**

```json
{
  "metadata": [{
    "frequency": 868.1,
    "datarate": "SF7BW125",
    "codingrate": "4/5",
    "gateway_timestamp": 3475324075,
    "channel": 0,
    "server_time": "2016-09-12T14:00:16.614852216Z",
    "rssi": -42,
    "lsnr": 9.2,
    "rfchain": 1,
    "crc": 1,
    "modulation": "LORA",
    "gtw_id": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

**Production:**

```json
{
  "app_eui": "70B3D57EF000001C",
  "dev_eui": "0004A30B001B7AD2",
  "dev_addr": "26012723",
  "metadata": {
    "time": "2016-09-13T09:59:02.90329585Z",
    "frequency": 868.5,
    "modulation": "LORA",
    "data_rate": "SF7BW125",
    "coding_rate": "4/5",
    "gateways": [{
      "eui": "B827EBFFFE87BD22",
      "timestamp": 1484146403,
      "time": "2016-09-13T09:59:02.867283Z",
      "channel": 2,
      "rssi": -49,
      "snr": 7,
      "rf_chain": 1
    }]
  }
}
```

> Note that you now receive the Application EUI and the Device EUI and Address. Also, Gateway metadata can now be found in an array of all gateways that forwarded the activation.

### Up(link) payload

The JSON encoded payload has changed on several points. Update the code where you process it.

**Staging:**

```json
{
  "payload": "AQ==",
  "fields": {
    "led": true
  },
  "port": 1,
  "counter": 15,
  "dev_eui": "0004A30B001B7AD2",
  "metadata": [{
    "frequency": 867.3,
    "datarate": "SF7BW125",
    "codingrate": "4/5",
    "gateway_timestamp": 3662434019,
    "channel": 4,
    "server_time": "2016-09-12T14:03:23.729350993Z",
    "rssi": -43,
    "lsnr": 8.8,
    "rfchain": 0,
    "crc": 1,
    "modulation": "LORA",
    "gtw_id": "B827EBFFFE87BD22",
    "altitude": 10,
    "longitude": 5.90418,
    "latitude": 52.95904
  }]
}
```

**Production:**

```json
{
  "port": 1,
  "counter": 0,
  "payload_raw": "AQ==",
  "payload_fields": {
    "led": true
  },
  "metadata": {
    "time": "2016-09-13T09:59:08.179119279Z",
    "frequency": 868.3,
    "modulation": "LORA",
    "data_rate": "SF7BW125",
    "coding_rate": "4/5",
    "gateways": [{
      "eui": "B827EBFFFE87BD22",
      "timestamp": 1489443003,
      "time": "2016-09-13T09:59:08.167028Z",
      "channel": 1,
      "rssi": -49,
      "snr": 8,
      "rf_chain": 1
    }]
  }
}
```

> Note that `payload` is now `payload_raw` and `fields` has been renamed to `payload_fields`. Also, `dev_eui` is no longer there and Gateway metadata can now be found in an array of all gateways that forwarded the activation.

### Down(link) payload

The JSON encoded payload to send a message has also changed. Update the code where you compose the payload.

**Staging:**

```json
{
  "payload": "AQ==",
  "port": 1,
  "ttl": "1h"
}
```

**Production:**

```
{
  "payload_raw": "AQ==",
  "port": 1
}
```

> Note that `payload` has been renamed to `payload_raw` and `ttl` is no longer included. Also consider to use the new [`payload_fields`](../applications/mqtt/api.html#downlink-fields).

## SDKs & Libraries

We are using a versioning format where the same major version means compatibility. All 2.x components will be compatible with each other, including the routing services, Console, Account Server, SDKs, platform integrations and libraries.

### Arduino Library
Although version 1.x of the Arduino Library worked fine with both staging and production, we've released 2.x to follow the above convention. Get it via the Arduino IDE. This version (for now) continuous to work with staging as well.

### Node.js SDK
For production use versions 2.x:

```bash
npm install --save ttn
```

Carefully study and compare the API References of [1.x](../applications/nodejs-v1/api.md) and [2.x](../applications/nodejs/api.md) to migrate any application code that you use the SDK in.

The last version compatible with staging is 1.3.2:

```bash
npm install --save ttn@1.3.2
```

### Node-RED Node
For production use versions 2.x:

```bash
npm install node-red-contrib-ttn
```

After updating you will need to update an perhaps even re-add some of the `ttn-*` nodes because there are a lot of breaking changes. Carefully study and compare the guides of [1.x](../applications/nodered-v1/index.md) and [2.x](../applications/nodered/index.md).


The last version compatible with staging is 1.0.0:

```bash
npm install node-red-contrib-ttn@1.0.0
```

## CLI

Versions 2.x of The Things Network CLI are compatible with production. See the [Quick Start](../network/cli/quick-start.md#installation) for installation instructions.

For staging, you can continue to use the [`v1-staging`](../network/cli-v1/quick-start.md#installation) version. However, since `account.thethingsnetwork.org` is now production and staging has been renamed to `v1.account.thethingsnetwork.org` you will need to [reconfigure](../network/cli-v1/configuration.md) it to use this new hostname.
