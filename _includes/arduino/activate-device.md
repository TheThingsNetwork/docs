# Activate a Device

Once you have registered your device via The Things Network Dashboard, you can Activate the communication between the device and The Things Network in your sketch.

## Basic Sketch Template

A sketch to communicate with The Things Network looks like this:

```c
#include <TheThingsNetwork.h>

// TODO: Keys

#define loraSerial Serial1
#define debugSerial Serial

TheThingsNetwork ttn;

void setup() {
  debugSerial.begin(9600);
  loraSerial.begin(57600);

  ttn.init(loraSerial, debugSerial);
  ttn.reset();

  // TODO: Activate

  ttn.showStatus();
}

void loop() {

  // TODO: Communicate
}
```

* Start by including The Things Network Library. This will be inserted automatically if you select **Sketch > Include Library > TheThingsNetwork**.
* We define aliases for the Serial Ports that correspondent to the device's USB connector and LoRaWAN module, just for clarity.
* Then create an instance of The Things Network Library.
* In the [`setup()`](https://www.arduino.cc/en/Reference/Setup) function which is called once when your sketch starts, we begin to set the baud rates for the Serial Ports.
* Then we let TheThingsNetwork library initialize and pass the Serial Ports to work with.
* Currently you'd want to call the `reset()` method to clear any existing configuration of the LoRaWAN module.
* Optionally, call `showStatus()` which will print the device's information, including its EUI to `debugSerial`.

## Over The Air Activation (OTAA)

If you have selected OTAA when you [registered your device](#register-for-over-the-air-activation-otaa), you will use the `join()` method to set the application's **App EUI** and the device's **App Key**.

In the template, replace `// TODO: Keys` with constants to hold your keys:

```c
const byte appEui[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xE0, 0xE0, 0x01, 0x4A1};
const byte appKey[16] = {0x73, 0x6D, 0x24, 0xD2, 0x69, 0xBE, 0xE3, 0xAE, 0x0E, 0xCE, 0xF0, 0xBB, 0x6C, 0xA4, 0xBA, 0xFE};
```

> Use <code><i class="fa fa-eye"></i></code> to show obfuscated keys and <code><i class="fa fa-code"></i></code> to toggle to **msb**. Then use <code><i class="fa fa-clipboard"></i></code> to copy the C-style MSB App Key and paste it in your sketch.
>
> ![App Key]({{ site.baseurl }}/assets/app-key.png)

Replace `// TODO: Activate` with:

```c
while (!ttn.join(appEui, appKey)) {
  delay(1000);
}
```

Your device will now try to activate via OTAA every second until it succeeds.



## Activation By Personalization (ABP)

If you have selected ABP when you [registered your device](#register-for-activation-by-personalization-abp), you will use the `personalize()` method to set the device's **Dev EUI**, **Network Session Key** and **App Session Key**.

In the template, replace `// TODO: Keys` with constants to hold your keys:

```c
const byte devAddr[4] = {0x02, 0xDE, 0xAE, 0x00};
const byte nwkSKey[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C};
const byte appSKey[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C};
```

Replace `// TODO: Activate` with:

```c
ttn.personalize(devAddr, nwkSKey, appSKey);
```