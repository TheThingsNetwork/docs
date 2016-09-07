# Serial Monitor

Most sketches write debug logs to the (emulated) Serial Port for the USB connection. You can monitor these logs via the Arduino IDE's Serial Monitor. Simply go to **Tools > Serial Monitor** `Ctrl/⌘ + Shift + M`.

> Uploads might fail if you have the Serial Monitor open.

You will only see logs from the point when you opened the Serial Monitor. Use [`delay()`](https://www.arduino.cc/en/Reference/Delay) to give yourself some time or even wait for the Serial Monitor completely:

```c
#define debugSerial Serial

void setup()
{
  debugSerial.begin(9600);
  
  // Wait for Serial Monitor
  while (!debugSerial);

  // The remainder of your setup
}
```

> Be aware that this will mean that your sketch only runs when your device is connected with an USB port. An USB power adapter or bank will not work.