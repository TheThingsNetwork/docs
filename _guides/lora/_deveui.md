#{{ include.bump }} Get your Dev EUI

The *DevEUI* is an unique address hard coded into the LoRa module. We use this address to register a device for OTAA with The Things Network.

1.  In the Arduino IDE open **File > Examples > TheThingsNetwork > [DeviceInfo](https://github.com/TheThingsNetwork/arduino-library/blob/master/examples/DeviceInfo/DeviceInfo.ino)**.
2.  Select **Sketch > Upload** `Ctrl/⌘ + U` to upload the sketch.
3.  Select **Tools > Serial Monitor** `Ctrl/⌘ + Shift + M` to open the [Serial Monitor](/arduino/#serial-monitor).
4.  Soon, it should print a list with **Device Information**, including the **DevEUI**:

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