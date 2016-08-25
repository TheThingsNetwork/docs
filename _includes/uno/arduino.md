# Work with Arduino IDE

To read debug logs and upload new programs (sketches) to The Things Uno we'll use the Arduino IDE.

## Setup and install our Library

{% include arduino/setup.md %}

## Connect The Things Uno

1. Use the included Micro-USB cable to connect The Things Uno to an USB power of your computer.
2. In Arduino IDE select **Tools > Board > Arduino Leonardo**.
3. Navigate to **Tools > Port** and select the port that identifies as *Arduino Leonardo*.

If you don't see a port that identifies as *Arduino Leonardo* make sure The Things Uno's power LED is on and check the cable and USB port you have used. See [Arduino Troubleshooting](https://www.arduino.cc/en/Guide/Troubleshooting#toc16) for more suggestions.

## Monitor logging

{% include arduino/monitor.md %}

## Write and Upload Sketches

{% include arduino/sketches.md %}

## Get The Things Uno DevEUI

{% include lora/deveui.md %}