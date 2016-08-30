# Serial Monitor

Many sketches write debug logs to the device Serial Port. You can read these logs via the Arduino IDE. Simply go to **Tools > Serial Monitor** `Ctrl/⌘ + Shift + M`.

> Uploads will fail if you have the Serial Monitor open. Close it before each upload and learn the shortcut. :wink:

You will only see logs from the point when you opened the Serial Monitor. Use [`delay()`](https://www.arduino.cc/en/Reference/Delay) to give yourself some time or even wait for the Serial Monitor completely:

```c
#define debugSerial Serial

void setup()
{
  debugSerial.begin(115200);
  
  // Wait for Serial Monitor
  while (!debugSerial);

  // The remainder of your setup
}
```

> Be aware that this will mean that your sketch only runs when you monitor it!