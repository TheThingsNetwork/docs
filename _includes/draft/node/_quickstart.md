# Quick Start

## Setup Arduino IDE

1. Follow [Arduino / Arduino Software (IDE) / Setup](../../current/arduino/#setup) to setup the IDE and install The Things Network library.
2. Follow SparkFun's [Installation Instructions](https://github.com/sparkfun/Arduino_Boards#installation-instructions) to add the additional board manager and install the **SparkFun AVR Boards**.

## Prepare your Node

1.  Open the case.
2.  Connect the Micro-USB cable to the connector between the batteries and the top side of the case.

    > Some Micro-USB cables might not fit because of the limited space between the connector and the batteries or casing. The one we ship with the Node does fit.
    
3.  Connect the USB cable to your computer.
4.  In the Arduino IDE, select **Tools > Boards > SparkFun Pro Micro**.
5.  Select **Tools > Processor > ATmega32U4 (3.3V, 8Mhz)**.
6.  Select the Node's Serial Port under **Tools > Port**.

    Unlike The Things Uno, which the Arduino IDE recognizes as *Arduino Leonardo*, it does not recognize the No as *SparkFun Pro Micro*. You will have to see what `/dev/*usb*` (Mac/Linux) or `COM` (Windows) option appears in the menu after connecting the Node.
    
> You do not need to insert batteries since the Node will be powered over USB.

## Upload the The Things Node example

In the Arduino IDE, select **File > Examples > TheThingsNetwork > Node**. This examples demonstrates a lot of the [APIs](#api-reference).
