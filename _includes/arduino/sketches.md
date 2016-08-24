We'll not reproduce the [Arduino Software Guide](https://www.arduino.cc/en/Guide/Environment#toc1) here, but here's how you verify and upload new programs (sketches):

1. In Arduino IDE go to **File > New, Open or Examples > TheThingsNetwork** to open a new, existing or example sketch.
2. Go to **Sketch > Include Library > TheThingsNetwork** to add an [`#include`](https://www.arduino.cc/en/Reference/Include) for TheThingsNetwork library.
3. Initialize your program in [`setup()`](https://www.arduino.cc/en/Reference/Setup).
4. Interact with connected sensors, actors and The Things Network in [`loop()`](https://www.arduino.cc/en/Reference/Loop).
5. Select **Sketch > Verify/Compile** `Ctrl/⌘ + R` to check your sketch for errors.
6. Select **Sketch > Upload** `Ctrl/⌘ + U` to upload your sketch.
7. The Arduino IDE will give feedback when you verify or upload the code to a board. It should look similar to this:

        Sketch uses 9,656 bytes (33%) of program storage space. Maximum is 28,672 bytes.
        Global variables use 1,253 bytes (48%) of dynamic memory, leaving 1,307 bytes for local variables. Maximum is 2,560 bytes.