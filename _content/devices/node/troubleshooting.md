---
title: Troubleshooting
---

# Troubleshooting
The Things Node is based on the [SparkFun Pro Micro - 3.3V/8Mhz](https://www.sparkfun.com/products/12587). A lot of their resources apply to our board as well. In this section we'll discuss some common issues and link to relevant resources by SparkFun.

## Serial Port not showing

Since Mac OS El Capitan, there have been [lots of reports on this issue](https://www.google.com/search?q=arduino+usb+el+capitan+unstable) with all kinds of Arduino devices. Both [SparkFun](https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/all#yosemite) and the Google search we linked give all kinds of suggestions for possible fixes. However, the simplest solution we have always seen to work is to connect via a USB hub.

## Bricked
The most common source of "bricking" is uploading code to it with an incorrectly set board. This happens to the best, in particular if you are switching between working on your The Things Uno and Node.

SparkFun has a [guide](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-revive) explaining how to fix this.
