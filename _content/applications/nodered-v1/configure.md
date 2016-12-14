---
title: Configure
zindex: 900
---

# Configure
To use the TTN node you need to configure it for your The Things Network Application.

## Get your application keys

1. Open a new browser tab and go to [The Things Network Dashboard](https://staging.thethingsnetwork.org/).
2. Navigate to your application and then **Application Info > Application data > learn how to get data from this app**.

> Use <i class="ion-eye"></i> to show obfuscated keys. Use <i class="ion-clipboard"></i> to copy the hex **App EUI** and base64 **Access Keys**.

## Edit the TTN node

1. In Node-RED, drag a **ttn** node from the input category in the toolbox on the left to your workflow.
2. Double click the node to edit it.
3. Paste the **App EUI** and **Access Key** and click **Done**:

    ![Edit ttn node](node-red-ttn-edit.png)

4. Click **Deploy** on the top right. The node should say it's connected:

    ![Connected](node-red-ttn-connected.png)

    In the terminal you should see something like:

       29 Aug 12:34:27 - [info] [ttn:f2d6214.9aaa5e] Connected to TTN application 70B3D57ED0000AFB
