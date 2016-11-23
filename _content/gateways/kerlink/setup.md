---
title: Setup
---

# Setup## Main functions### PowerThe gateway get its power by PoE (Power over the Ethernet) through the UTP cable or by the 11-30 volt connector on the gateway. The 11-30 volt power connecter makes it possible to combine the gateway with a DC solar system. There is also a backup battery inside the gateway which can provide up to 1 min of power to ensure a safe shutdown of the gateway.
### DataThe gateway can be connected to the Ethernet by either a UTP connection or by a cellular 3G network.
### AntennaIt is important that the antenna is connected to the gateway before booting the gateway. Booting the gateway without an external antenna my result in permanent damage to the antenna amplifier

## UTP cableAfter unpacking the Kerlink IoT Station, open the case by putting a screwdriver in the top notch (where the antenna is located).

![Opening the case](utp-1.jpg)Connect a UTP network cable on the green connector, cable colors are noted next to the connector. You can use an existing cable by cutting of the connector of one side, or you need to make a new cable including attaching the connector (watch the coloring scheme).

![Attach the UTP cable](utp-2.jpg)Attach the UTP cable attached to the Kerlink IoT Station to the “data & power Out” port of the power adapter. Connect the “data IN” port of the power adapter to your existing network. If you use POE (Power Over Ethernet) switches, the power adapter is not needed.

![Test button](utp-3.jpg)After powering on, check your DHCP server which IP-address the gateway uses. The LEDs inside the gateway do not work by default, they only work for about a minute after shortly pressing the “Test” button. This includes the power LEDs.

![Cables](utp-4.jpg)Check if the gateway is on by directing a web browser to the IP-address of the gateway, for example `http://10.1.0.117` (depending on the given IP-address by the DHCP server). The page will show “Hello World!” if the gateway is responding.

## SIM-card1.	Remove the SIM card holder of the Lora IoT Station by pressing with a little screwdriver, the extraction button.2.	Place the SIM card in the SIM card holder.3.	Insert carefully the SIM card holder with the SIM card in the LoRa IoT Station.Configure the gateway setting for the simcard (se below)

![Sim card holder](sim.png)
