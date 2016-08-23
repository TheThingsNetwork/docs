# The Hardware

| The Things Uno |
| -------------- |
| <img style='max-width: 250px;' src="images/things-uno.jpg"> |
| [preorder now](https://www.shop.thethingsnetwork.com) |



# The Things Uno Dev-EUI

## The Arduino IDE

The Arduino IDE with the Things Uno library is required.

1. [Download](https://www.arduino.cc/en/Main/Software) and install Arduino IDE 1.6.8 or newer (Windows, Mac OS X or Linux)
2. [Download](https://github.com/TheThingsNetwork/sdk/blob/master/node/TheThingsUno/release/TheThingsUno.zip?raw=true) the latest The Things Uno Arduino library (Zip)
3. Navigate in the Arduino IDE to: sketch > include library > add .ZIP Library and select the zip file from step 2.

## Connect the Things Uno

1. Connect the Things Uno to your computer with a Micro-USB cable
2. Select: **Tools > Board > Arduino Leonardo**
3. Select: **Tools > Port > (The port that identifies as Arduino Leonardo)**

## Get the unique node EUI

The `DevEUI` is the unique node address that is hard coded by Microchip into the LoRa module.
This address is used to register the Node in The Things Network database.
The `DevEUI` can be retrieved from the node with the `Get-Device-Info` sketch.

1. In the Arduino IDE, open: **File > Examples > TheThingsUno > Get-Device-Info.ino**
2. Upload sketch without modification.

## Uploading Sketch

1. Click **Sketch > Verify/Compile**
2. Click **Sketch > Upload (Arduino says Done uploading)**
3. The Arduino IDE will give feedback when you verify or upload the code to a board. It should look similar to this:

    ```
        Sketch uses 9,656 bytes (33%) of program storage space. Maximum is 28,672 bytes.
        Global variables use 1,253 bytes (48%) of dynamic memory, leaving 1,307 bytes for local variables. Maximum is 2,560 bytes.
    ```

<aside class = 'success'>
    Congratulations, you have successfully configured your first Things Uno.
</aside>

## Serial Monitor

The Things Uno talks to the computer over the Serial Port.
The data that is send is displayed with the `Serial monitor` of the Arduino IDE.
Using the `Serial monitor` makes it possible to monitor the proceedings of the Things Uno.

1. Connect the Things Uno to your computer
2. Open the serial monitor in the Arduino IDE

    Press the Serial monitor button or press **Crtl + Shift + M**

4. Receiving data on the Serial Monitor

        ```
        Device Information

        EUI: 0004A30B001B672E
        Battery: 3304
        AppEUI: 0000000000000000
        DevEUI: 0004A30B001B672E
        DevAddr: 00000000
        Data Rate: 5
        RX Delay 1: 1000
        RX Delay 2: 2000

        use the device `EUI` to register the device for OTAA
        ```
5. Save the `EUI: 0004A30B001B672E` (`DevEUI`) for later.    


<aside class='success'>
    Congratulations, you have successfully retrieved the DevEUI from your Things Uno
</aside>

# The Things Network Control Utility

You need to register every application that sends data through The Things Network.
This is done with the `ttnctl` (The Things Network control utility) .

## Download and install

1. Download The Things Network control utility ttnctl (for Windows [64 bit](https://ttnreleases.blob.core.windows.net/release/src/github.com/TheThingsNetwork/ttn/release/branch/develop/ttnctl-windows-amd64.zip)/[32 bit](https://ttnreleases.blob.core.windows.net/release/src/github.com/TheThingsNetwork/ttn/release/branch/develop/ttnctl-windows-386.zip), Linux [64 bit](https://ttnreleases.blob.core.windows.net/release/src/github.com/TheThingsNetwork/ttn/release/branch/develop/ttnctl-linux-amd64.zip)/[32 bit](https://ttnreleases.blob.core.windows.net/release/src/github.com/TheThingsNetwork/ttn/release/branch/develop/ttnctl-linux-386.zip) or [Mac OS X](https://ttnreleases.blob.core.windows.net/release/src/github.com/TheThingsNetwork/ttn/release/branch/develop/ttnctl-darwin-amd64.zip).
2. Extract the downloaded ZIP file to a convenient location, e.g. your user directory (`%USERPROFILE%` on Windows or `$HOME` on Mac OS X and Linux);
3. Rename the `ttnctls-darwin-amd64` to `ttnctl`.
3. Verify that the command utility works by executing the command line utility:

```
./ttnctls
ttnctl controls The Things Network from the command line.

Usage:
    ttnctl [command]
```

## Create Account

To use the `ttnctl` tool, you need a user account. This is a personal account. Your login name is your e-mail address and you are free to choose a password of your choice.

1. Create a new user account by executing: `ttnctl user create demo@thethingsnetwork.org`
    * Now enter twice your password (the ).
2. Login with your new account: `ttnctl user login demo@thethingsnetwork.org`

```
ttnctl user create example@thethingsnetwork.org
password:
    INFO User created
ttnctl user login example@thethingsnetwork.org
password:
    INFO logged in as example@thethingsnetwork.org and persisted token in /user/<username>/.ttnctl/auths.json
```

## Create Application

Users can create applications which have a unique identifier. Its the EUI number issued by The Things Network.

1. Create your first The Things Network application: `ttnctl applications create "Hello world"`
2. View your applications: `ttnctl applications`. When you register a app, it is given an unique `AppEui`.
3. Note that the `Application EUI` and its `Access key` are used to access the data from The Things Network later on this tutorial.
4. Use your newly created application: `ttnctl applications use <AppEui>`

```
ttn applications create "Hello world"
    INFO Application created successfully

ttn applications
    INFO Found 1 application(s)
EUI                 Name            Owner                               access Keys                                    Valid
70B3D57ED0000002    'Hello world'   example@thethingsnetwork.org        vTFYb/DjtdnUAWUHaGKDw3Lt/3T4C9MiWLYRzSX+eBU=   true

ttnctl applications use 70B3D57ED0000002
    INFO You are now using application 70B3D57ED0000002.
```

## Register Device

All devices on the network need to be registered in The Things Network database.
In the application devices are registered and managed.

The Things Network supports the two LoRaWAN mechanisms to register devices: over the air activation (OTAA) and activation by personalization (ABP).
It is strongly advised to use OTAA for production and ABP for development. This is because of the following benefits that OTAA has over ABP:

* APB uses a frame counter as protection against replay attacks. This counter counts both on hardware as on the network how much packages are send/received.
When both counters match, access to the network is granted. While there is a way to [bypass](http://staging.thethingsnetwork.org/wiki/Backend/ttnctl/ttnctl_devices_register_personalized) this issue, it makes the connecting insecure.

### OTAA

1. Look up your `DevEUI` (`8-byte Device-address`) that you retrieved form your Things Uno.
    * The device EUI should be similar to this `02DE002B02DE002B`.
2. Register your device: `ttnctl devices register <DevEUI>`
3. Get your device information: `ttnctl devices info <DevEUI>`

```
ttnctl devices register  02DE000002DE0000
    INFO Generating random AppKey...
    INFO Registered device

ttnctl devices info 02DE000002DE0000
Dynamic device:

  AppEUI:  70B3D57ED000014B
           {0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x00, 0x01, 0x4B}

  DevEUI:  02DE000002DE0000
           {0x02, 0xDE, 0x00, 0x00, 0x02, 0xDE, 0x00, 0x00}

  AppKey:  527E0ABBE8BC0612C18A9D5457D93FD4
           {0x52, 0x7E, 0x0A, 0xBB, 0xE8, 0xBC, 0x06, 0x12, 0xC1, 0x8A, 0x9D, 0x54, 0x57, 0xD9, 0x3F, 0xD4}

  Not yet activated
```

### ABP

1. Choose your `Device-address` (`4-byte  Device-address`) that is not yet [reserved](http://staging.thethingsnetwork.org/wiki/Legacy/AddressSpace). For example `02DE002B`.
2. Register your device: `ttnctl devices register personalized <Device-address>`
3. Get your device information: `ttnctl devices info <Device-address>`

```
ttnctl devices register personalized 02DE0000
    INFO Generating random NwkSey and AppSKey...
    INFO Registered personalized device

ttnctl devices info 02DE0000
personalized device:

    DevAddr: 02DE0000
             {0x02, 0xDE, 0x00, 0x00}

    NwkSKey: 028F7B7A52BA029DE2F2C2087F8E016B
             {0x02, 0x8F, 0x7B, 0x7A, 0x52, 0xBA, 0x02, 0x9D, 0xE2, 0xF2, 0xC2, 0x08, 0x7F, 0x8E, 0x01, 0x6B};

    AppSKey: D6F3521E492C983D0B65A82DED12221C
             {0xD6, 0xF3, 0x52, 0x1E, 0x49, 0x2C, 0x98, 0x3D, 0x0B, 0x65, 0xA8, 0x2D, 0xED, 0x12, 0x22, 0x1C};

    FCntUp:     0
    FCntDn:     0
```

# Connect to the network

## Programming the Hardware

Earlier you registered your device with `OTAA` or `ABP`. Each of these registration methods joins the network in a different way.
Choose the right join method below for your hardware.

### (OTAA)

1. In the Arduino IDE, open **File > Examples > TheThingsUno > hello-world-OTAA.ino**
2. Change your `appEui` and `appKey` to the values of your device.
3.  Copy/paste the pre made codes from `ttnctl devices info 70B3D57ED000014B` in the previous step.

``` c
// Set your app Credentials
const byte appEui[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xE0, 0xE0, 0x01, 0x4A};
const byte appKey[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C};
```

4. Upload the sketch

### (ABP)

1. In the Arduino IDE, open: **File > Examples > TheThingsUno > hello-world-ABP.ino**
2. Change your `devAddr`, `nwkSKey` and `appSKey`to the values of your device.
3. Copy/paste the pre made codes form `ttnctl device info 02DE0000` in the previous step.

``` c
// Set your device address
const byte devAddr[4] = {0x02, 0xDE, 0x00, 0x00};

// Set your NwkSKey and AppSKey
const byte nwkSKey[16] = {0x02, 0x8F, 0x7B, 0x7A, 0x52, 0xBA, 0x02, 0x9D, 0xE2, 0xF2, 0xC2, 0x08, 0x7F, 0x8E, 0x01, 0x6B};
const byte appSKey[16] = {0xD6, 0xF3, 0x52, 0x1E, 0x49, 0x2C, 0x98, 0x3D, 0x0B, 0x65, 0xA8, 0x2D, 0xED, 0x12, 0x22, 0x1C};
```

4. Upload the sketch

1. Click **Sketch > Verify/Compile**
2. Click **Sketch > Upload (Arduino says Done uploading)**
3. The Arduino IDE will give feedback when you verify or upload the code to a board. It should look similar to this:

    ```
        Sketch uses 14,152 bytes (49%) of program storage space. Maximum is 28,672 bytes.
        Global variables use 1,253 bytes (48%) of dynamic memory, leaving 1,307 bytes for local variables. Maximum is 2,560 bytes.
    ```

<aside class = 'success'>
    Congratulations, you have successfully uploaded the OTAA/ABP sketch to the Things Uno.
</aside>

## Serial Monitor

1. Open the serial monitor in the Arduino IDE
2. Receiving data on the Serial Monitor
    1. ABP

      ```
      Initializing...
      Version is RN2483 1.0.1 Dec 15 2015 09:38:09, model is RN2483
      Sending: mac set adr on
      Sending: mac set pwridx 1
      Sending: mac set dr 5

      Sending: mac set devaddr with 4 bytes
      Sending: mac set nwkskey with 16 bytes
      Sending: mac set appskey with 16 bytes
      Sending: mac join abp
      Personalize accepted. Status: 00000021
      EUI: 0004A30B001B672E
      Battery: 3304
      AppEUI: 0000000000000000
      DevEUI: 0004A30B001B672E
      DevAddr: 02DE0000

      Band: 868
      Data Rate: 5
      RX Delay 1: 1000
      RX Delay 2: 2000
      Setup for The Things Network complete
      ```

    2. OTAA

      ```
      Initializing...
      Version is RN2483 1.0.1 Dec 15 2015 09:38:09, model is RN2483
      Sending: mac set adr on
      Sending: mac set pwridx 1
      Sending: mac set dr 5

      Sending: mac set appeui with 8 bytes
      Sending: mac set deveui 0004A30B001B672E
      Sending: mac set appkey with 16 bytes
      Sending: mac join otaa
      Join accepted: accepted. Status: 00000421
      EUI: 0004A30B001B672E
      Battery: 3304
      AppEUI: 70B3D57ED000014A
      DevEUI: 0004A30B001B672E
      DevAddr: 1D86A4A

      Band: 868
      Data Rate: 5
      RX Delay 1: 1000
      RX Delay 2: 2000
      Setup for The Things Network complete
      ```

3. After the initializing it will confirm every message being sent:

    ```
    Sending: mac tx uncnf 1 with 1 bytes
    Successful transmission
    ```

<aside class='success'>
    Congratulations, you have successfully sent your first data over The Things Network
</aside>

# Retrieving the data

Now that the hardware transmits the data to the network, it can be retrieved by the TTN MQTT broker. We'll use Node-RED to retrieve the data from the TTN server.

## Node-RED

Node-RED is a JavaScript-based server with a web GUI. The interface makes it possible to build a complete server by wiring flows together in a web interface.
It is free and comes with lots of pre made plugins like API’s, online services and lots of ready to use tools.

1. Host your own [version of Node-RED](http://nodered.org/docs/).
2. Boot Node-RED by entering `node-red` in your command line.

    ```
    node-red

    Welcome to Node-RED
    ===================

    9 May 15:15:29 - [info] Node-RED version: v0.13.4
    9 May 15:15:29 - [info] Node.js  version: v4.4.3
    9 May 15:15:29 - [info] Windows_NT 6.3.9600 x64 LE
    9 May 15:15:29 - [info] Loading palette nodes
    9 May 15:15:31 - [warn] ------------------------------------------
    9 May 15:15:31 - [warn] Failed to register 2 node types
    9 May 15:15:31 - [warn] Run with -v for details
    9 May 15:15:31 - [warn] ------------------------------------------
    9 May 15:15:31 - [info] Settings file  : C:\Users\ludo\AppData\Roaming\npm\node_modules\node-red\settings.js
    9 May 15:15:31 - [info] User directory : C:\Users\ludo\.node-red
    9 May 15:15:31 - [info] Flows file : C:\Users\ludo\.node-red\flows_Ludo-ROG.json
    9 May 15:15:31 - [info] Creating new flow file
    9 May 15:15:31 - [info] Starting flows
    9 May 15:15:31 - [info] Started flows
    9 May 15:15:31 - [info] Server now running at http://127.0.0.1:1880/
    ```

Navigate to your browser and enter the url (http://127.0.0.1:1880/) that is given by the Node-RED application. You should see the following web page:

<img style='display:inline;' src="images/node-red.png">

## Building the data flow

1. Open up your Node-RED.
2. Now build the flow by placing the following block from the left component window in your sketch:
  1. Get the mqtt component:         **input > 'mqtt'**.

        <img style='display:inline;' src="images/mqtt-comp.png">       

  2. Get your json component:      **function > 'Json'**.

        <img style='display:inline;' src="images/json-comp.png">

  3. Get your function component:   **function > 'function'**

        <img style='display:inline;' src="images/function-comp.png">

  4. Get your Debug component:      **output > 'Debug'**

        <img style='display:inline;' src="images/debug-comp.png">

4. Now connect all the components together as listed above.

     <img style='display:inline;' src="images/flow.png">

5. Configure the `mqtt component`:
    1. Double-click the `mqtt component`
    2. Click on the pencil icon
    3. **under connection:***   Enter for server:   `staging.thethingsnetwork.org`

         <img style='display:inline;' src="images/connection.png">

    4. **under security:**      Enter for Username: `your AppEui`
    5. **under security:**      Enter for password: `the corresponding Access Key`

        The `AppEui` and `Access key` can be looked up in the [ttnctl tool](http://gruifin.github.io/cookbook/the-things-uno/# create-application).

        <img style='display:inline;' src="images/security.png">

    6. Click the **update** button
    7. Enter for Topic: `+/devices/+/up`

        <img style='display:inline;' src="images/mqtt.png">

6. Configure the `function component`
    1. Double-click the `function component`
    2. add the following code to your function
    3. Click the Ok button

        <img style='display:inline;' src="images/function-ex.png">

    ```
    var text = new Buffer(msg.payload.payload, 'base64').toString();
    return {
        payload: text
    }
    ```

7. Click the **Deploy** button at the right top of your window. Your data flow should look

     <img style='display:inline;' src="images/deploy.png">

8. You should get a message that the sketch is successfully deployed.

     <img style='display:inline;' src="images/deploy-ok.png">

<aside class = 'success'>
    Congratulations, you have successfully build your first Node-RED flow.    
</aside>

# # Retrieve the data

Now that the Things Uno is sending data it'll be received in the Node-RED data flow.

1. Make sure that the green checkbox on the `Debug` block is checked.

    <img style='display:inline;' src="images/debug-check.png">

2. Make sure that the mqtt input block reports: `connected`.

    <img style='display:inline;' src="images/mqtt-cnnt.png">

3. Navigate to the right side of the Node-RED page and open the `Debug` tab.

    <img style='display:inline;' src="images/debug-tab.png">

4. Now you should see the messages that the node transmits.

    <img style='display:inline;' src="images/message.png">

<aside class = 'success'>
    Congratulations, you have successfully received your first data over The Things Network
</aside>
