---
title: "Forward Error Correction and Code Rate"
section: Additional Information
description: ""
weight:
---

**Forward Error Correction** is a process of adding redundant bits to the data to be transmitted. During the transmission, data may get corrupted by interference (changes from 0 to 1 / 1 to 0). These error correction bits are used at the receivers for restoring corrupted bits.

The **Code Rate** of a forward error correction expresses the proportion of bits in a data stream that actually carry useful information.

There are 4 code rates used in LoRaWAN:

- 4/5
- 4/6
- 5/7
- 4/8

For example, if the code rate is 5/7, for every 5 bits of useful information, the coder generates a total of 7 bits of data, of which 2 bits are redundant.

{{< figure src="fec-1.png" alt="" class="plain">}}
