---
title: Cayenne
section: Integrations
source: 'https://github.com/TheThingsNetwork/docs/blob/master/_content/applications/cayenne/index.md'
---

# myDevices Cayenne

[myDevices Cayenne](https://mydevices.com/) allows you to quickly design, prototype, and visualize IoT solutions. You can use Cayenne as a tool to visualize real-time and historical data, sent over The Things Network.

## Change the payload to Cayenne LPP

In order to display your content in the Cayenne dashboard, the payload has to be encoded with the Cayenne Low Power Payload (Cayenne LPP).

> CayenneLPP contains metadata for Cayenne to understand what data comes into their dashboard. As part of each data value, we need to define the identifier and what type of data it is. The first byte is the identifier, the `Channel ID`. The second byte is the data type `Data Type`.
> Please have a look [**here**](https://mydevices.com/cayenne/docs/#lora-cayenne-low-power-payload) to find more information on the Cayenne LPP.

### Sending uplink

Documentation about altering your Arduino Sketch to encode data with `CayenneLPP` can be found [here](https://www.thethingsnetwork.org/docs/devices/arduino/api/cayennelpp.html).

_Example code:_

```cpp
TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);
CayenneLPP lpp(51);                    // create a buffer of 51 bytes to store the payload

lpp.reset();                           // clear the buffer
lpp.addTemperature(1, 22.5);           // on channel 1, add temperature, value 22.5°C
lpp.addBarometricPressure(2, 1073.21); // channel 2, pressure
lpp.addGPS(3, 52.37365, 4.88650, 2);   // channel 3, coordinates

ttn.sendBytes(lpp.getBuffer(), lpp.getSize());
```

### Receiving downlink

In order to send data to your device as downlink message, you need to make an output channel available as part of an uplink message. You only need to do that once. Both digital and analog are available.

```cpp
lpp.addDigitalOutput(4, 1);    // channel 4, set digital output high
lpp.addAnalogOutput(5, 120.0); // channel 5, set analog output to 120
```

For digital outputs, a switch will appear to set the output high or low. For analog outputs, you get a slider to set the analog value. Changes in these controls trigger a downlink message.

### Set the Payload Format in the Console

After encoding data with CayenneLPP, have a look at the console to change the **Payload Formats**

* Go to your Application in [**The Things Network Console**](https://console.thethingsnetwork.org/) and click **Payload Formats**
* In the dropdown menu select **Cayenne LPP** instead of **Custom**

## Set up your myDevices account

1. Create an account on [myDevices](https://mydevices.com/)
2. Log-in and click on **LoRa**

   <img src="myDevices-lora.png" width="130">

3. Select **The Things Network** at the bottom of the left menu bar, click on **Cayenne LPP** and fill in your **DevEUI** of your device (which you can find in the [**Console**](https://console.thethingsnetwork.org/applications))
   ![add-device](cayenne-add-device.png)

## Add the myDevices Cayenne integration in the Console

1. Go to your application in the [**Console**](https://console.thethingsnetwork.org/applications) and add the Cayenne integration via **Add Integration**
   ![myDevices-dashboard](integrations.png)

2. You can find your **Process ID** in the URL of the myDevices Cayenne dashboard, starting after `/lora/`
3. Add the integration

## Build your Cayenne dashboard

Click the device on the left side of your dashboard in Cayenne and your data as well as the actions buttons are shown right away. After a bit of editing you can make quite some fancy stuff.

![myDevices-dashboard](mydevices-data.png)

🎉 Now impress some folks with this amazing dashboard you built on Twitter, using _@thethingsntwrk @CayenneIoT_
