---
title: Programming hex files
section: Running a gateway
weight: 200
---

# Programming hex files using MPLABX IPE
In this section, we briefly walk through the process of Programming [The Things Gateway](../gateway/index.md) using the [MPLAB IPE](http://microchipdeveloper.com/ipe:start) integrated programming environment

#### 1. Connecting the Programmer
Connect the programmer to the `MCU_PROG` port of the gateway as shown below

   **Programmer<-->Gateway**
    ![Programmer](programmer.jpg)

#### 2. Selection
Once connected, open the MPLAB IPE on your computer and select the device `PIC32MZ2048EFM144`.

   **Selection**
    ![Selection](ipe_1_selected.png)

#### 3. Connection
Click the `connect` button next to the Tool to allow the IPE to connect to the Programmer. This allows the IPE to read existing firmware information.

   **Connection**
    ![Connection](ipe_2_connected.png)

#### 4. Load Hex File
Now load the hex file from your PC. The IPE checks it for validity.

   **Load Hex File**
    ![loadhex](ipe_3_selected_hex.png)

> In case you encounter a warning `hexfile contains code that is located at addresses that do not exist on the device`, you should still be able to continue with programming.

#### 5. Start Programming
Now click `Program` to start the reprogramming of the gateway.

   **Start Programming**
    ![startprog](ipe_4_start_progging.png)

#### 6. Verification
Once the program is complete, the checksums are verified. 

   **Verification**
    ![verification](ipe_5_progging_complete.png)

> Issues with the reprogramming? Please check [The Things Gateway FAQ](faq.md) or reach out to us via [The Things Network community forum](https://www.thethingsnetwork.org/forum) 
