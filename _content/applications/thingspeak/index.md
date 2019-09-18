---
title: ThingSpeak
section: Integrations
---

# ThingSpeak

ThingSpeak™ is an IoT analytics platform service that allows you to aggregate, visualize, and analyze live data streams. Once you send data to ThingSpeak from your devices, you can create instant visualizations of live data without having to write any code. With MATLAB® analytics inside ThingSpeak, you can write and execute MATLAB code to perform more advanced preprocessing, visualizations, and analyses. Get started with building your IoT systems without setting up servers or developing web software. Visit [ThingSpeak.com](https://www.thingspeak.com) for more information.

The integration with The Things Network allows seamless forwarding of data from The Things Network ThingSpeak for analysis and visualization.

## Setup ThingSpeak

1. Create a free MathWorks account or [sign into ThingSpeak](https://thingspeak.com/users/sign_up) using an existing one. 
2. Select the ThingSpeak channel you want your data to stream into. See [Collect Data in a New Channel](https://www.mathworks.com/help/thingspeak/collect-data-in-a-new-channel.html) for help creating a new channel. 
3. Record the following for the selected channel:
    a. **Channel ID**, which is listed at the top of the channel view.
    b. **Write API key**, which can be found on the API Keys tab of your channel view.

## Create Integration on The Things Network

1. In [The Things Network Console](https://console.thethingsnetwork.org), navigate to your application, click on **Integrations** -> **add an integration** -> **ThingSpeak**
2. Enter your **Write API key** in the Authorization field and your **channel ID**

## Payload Format

Use the Payload format tab in the application for The Things Network to control the payload sent to ThingSpeak. ThingSpeak can accept up to 8 fields of data per channel, a status field, and three position fields including latitude, longitude, and elevation. Your payload must be a JSON formatted object with at least one of the allowed fields.  

A sample decoder code is provided below. This examples decodes a 20-character packet and converts it to the format compatible with data stored in a ThingSpeak channel. 

## Visualize, Analyze, and Act

Use your channel view to display a summary of the channel fields.  Add specialized Visualizations using MATLAB Visualizations App or use the pre-built widgets. Use MATLAB analysis, React, Talkback, and TimeControl to act on your data.

![thingspeak1.png]

## Sample Decoder Function

```javascript
function Decoder(b, port) { 
  var var1 = b[0];
  var var2 = b[1];
  var var3 = b[2];
  var var4 = b[3];
  var var5 = (b[4] << 8) | b[5];
  var var6 = (b[6] << 8) | b[7];
  var var7 = (b[8] << 8) | b[9];
  var var8 = (b[10] << 8) | b[11];
  var lat = (b[12] | b[13]<<8 | b[14]<<16 | (b[14] & 0x80 ? 0xFF<<24 : 0)) / 10000;
  var lon = (b[15] | b[16]<<8 | b[17]<<16 | (b[17] & 0x80 ? 0xFF<<24 : 0)) / 10000;
  var height = b[18];
  var myStatus = b[19];

  return {
    field1: var1,
    field2: var2,
    field3: var3,
    field4: var4,
    field5: var5,
    field6: var6,
    field7: var7,
    field8: var8,

    latitude: lat,
    longitude: lon,
    elevation: height
  }
}
```