The *DevEUI* is an unique address hard coded into the LoRa module. We use this address to register a device with The Things Network via the Dashboard or CLI.

The DevEUI can often be found on the device or packaging, but can also be retrieved with The Things Network example sketch [DeviceInfo](https://github.com/TheThingsNetwork/arduino-library/blob/master/examples/DeviceInfo/DeviceInfo.ino).

1. In Arduino IDE open **File > Examples > TheThingsNetwork > [DeviceInfo](https://github.com/TheThingsNetwork/arduino-library/blob/master/examples/DeviceInfo/DeviceInfo.ino)**.
2. Upload the sketch without modification.
3. Open the Serial Monitor.
4. Soon, it should print a list of *Device Information*, including the *EUI*:

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