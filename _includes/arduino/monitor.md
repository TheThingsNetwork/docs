Many sketches write debug logs to the device Serial Port. You can read these logs via the Arduino IDE. Simply go to **Tools > Serial Monitor** `Ctrl/⌘ + Shift + M`.

Some important notes:

* With some Arduinos - including The Things Uno and Node - you cannot upload a Sketch while the Serial Monitor is open. Close the Serial Monitor before you upload and learn that keyboard shortcut. :wink:
* Devices don't buffer what is written to the Serial Port. You will only see logs from the point that you opened the Serial Monitor. Use [`delay()`](https://www.arduino.cc/en/Reference/Delay) to give yourself some time or even wait for the Serial Monitor:

  ```c
  #define debugSerial Serial

  void setup()
  {
    debugSerial.begin(115200);
    
    // Remove this in production
    while (!debugSerial) {
      delay(3000);
    }

    // The remainder of your setup
  }
  ```