---
title: WiFi Localization
zindex: 900
---

# WiFi Localization

To use the **LoRa TDOA + WiFi** lookup, you must pass WiFi access points in a specific format from your decoder payload function:

```json
{
  "access_points": [
    {
      "bssid": "01:02:03:04:05:06",
      "rssi": -45
    },
    {
      "bssid": "aa:bb:cc:dd:ee:ff",
      "rssi": -63
    },
    {
      "bssid": "06:05:04:03:02:01",
      "rssi": -56
    }
  ]
}
```

You can return any other payload fields too; only `access_points` is used for the Collos integration.

## Example

Say your device scans WiFi access points and sends them over LoRaWAN FPort `2`, with six bytes per BSSID and one byte indicating the RSSI:

```
01 02 03 04 05 06 D3 AA BB CC DD EE FF C1 06 05 04 03 02 01 C8
```

You can decode this using the following payload function:

```js
// pad16 converts decimal to hex with leading zero
function pad16(b) {
  var h = b.toString(16);
  return (h + "").length < 2 ? "0" + h : h;
}

// Decoder decodes bytes in payload fields
function Decoder(bytes, port) {
  var result = {};
  switch (port) {
    case 1:
      // parse bytes on FPort 1
      break;
    case 2:
      // parse access points on FPort 2
      result.access_points = [];
      // read by 7 bytes (6 for BSSID + 1 for RSSI)
      for (var i = 0; i < bytes.length; i += 7) {
        // read the BSSID and format as hex with colons
        var bssid = bytes.slice(i, i + 6).map(pad16).join(":");
        // read the RSSI (convert from uint8 to int8)
        var rssi = bytes[i + 6] - 0x100;
        // add the access point
        result.access_points.push({
          bssid: bssid,
          rssi: rssi
        });
      }
      break;
  }
  return result;
}
```
