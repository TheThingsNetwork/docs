# Arduino Software (IDE)

We'll not reproduce the [Arduino Software Guide](https://www.arduino.cc/en/Guide/Environment#toc1) here, but here's how you install the Arduino IDE, The Things Network library and perform some common tasks that we will refer to later.

## Setup

Setup the Arduino IDE and The Things Network library.

1. [Download](https://www.arduino.cc/en/Main/Software) and install the latest Arduino Software (IDE).
2. Navigate to **Sketch > Include Library > Manage Libraries...**.
3. Search for **TheThingsNetwork** and click the result to select it.
4. Click the **Install** button which should appear:

  ![](arduino_library.png)

The Arduino IDE will notify you of updates for the IDE and library automagically. :open_mouth:

## Monitor logs

Most sketches write debug logs to the (emulated) Serial Port for the USB connection. You can monitor these logs via the Arduino IDE's Serial Monitor.

1. Make sure **Tools > Port > ... (Arduino ..)** is selected.
2. Select **Tools > Serial Monitor** `Ctrl/⌘ Shift M`.

> Uploads might fail if you have the monitor open. Close it and try again. Visa versa an upload might break the monitor. Make sure the right port is still selected and re-open the monitor. 

You will only see logs from the moment when you opened the Serial Monitor. Use [`delay()`](https://www.arduino.cc/en/Reference/Delay) to give yourself some time or even wait for the Serial Monitor completely:

```c
#define debugSerial Serial

void setup()
{
  debugSerial.begin(9600);
  
  // wait 5 seconds
  delay(5000);
  
  // or wait for monitor
  while (!debugSerial);

  // your setup
}
```

> Be aware that if you wait for the monitor your sketch will only run after opening the monitor. Connecting it to a USB power adapter or bank will not work.

## Verify & Upload sketches

When you upload a sketch to your Arduino it will first compile and fail if your sketch has errors. If there are no errors it will continue to upload.

1. Make sure **Tools > Port > ... (Arduino ..)** is selected.
2. Select **Sketch > Upload** `Ctrl/⌘ U` to compile and upload your sketch.
3. The Arduino IDE will give feedback which should look like:

        Sketch uses 9,656 bytes (33%) of program storage space. Maximum is 28,672 bytes.
        Global variables use 1,253 bytes (48%) of dynamic memory, leaving 1,307 bytes for local variables. Maximum is 2,560 bytes.
        
> Uploads might fail if you have the monitor open. Close it and try again.

### Verify only  
    
You can also compile your code without uploading to verify it has no errors:

- Select **Sketch > Verify/Compile** `Ctrl/⌘ R` to check your sketch for errors.