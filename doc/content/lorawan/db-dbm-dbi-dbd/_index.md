---
title: "dB, dBm, dBi and dBd"
section: Additional Information
description: ""
weight:
---

In this chapter briefly discuss some units that are used to measure the performance of transceivers (gateways and end devices) and antennas

## dB (decibel)

The decibel can be used to express the ratio of two physical quantities such as power, sound intensity, sound pressure, voltage, and current on a logarithmic scale. In LoRaWAN we use decibel to express the ratio between two power levels usually given in watt (W) or milliwatt (mW).

The power ratio, _N_ can be expressed in decibel using the formula, 

**N = 10 log<sub>10</sub> (P<sub>out</sub>/P<sub>in</sub>) dB**

where P<sub>out</sub> is the output power and P<sub>in</sub> is the input power.

{{< note "When we are dealing with the power levels we use 10log units." />}}

For example, if an amplifier turns a 1 W signal into a 1000 W signal, its power ratio can be expressed as:

N = 10 log<sub>10</sub> (P<sub>out</sub>/P<sub>in</sub>) = 10 log<sub>10</sub> (1000/1) = 30 dB

Decibel doesn’t provide an absolute value. By looking at the decibel value you can’t say the input and output power of a device or cable etc, but you can say whether it offers a gain or a loss.

A power ratio greater than 0 dB is treated as a gain. For example, if an amplifier turns a 2 W signal into a 10 W signal, the power ratio is:

N = 10 log<sub>10</sub> (P<sub>out</sub>/P<sub>in</sub>)  = 10 log<sub>10</sub> (10/2)   = 10 log<sub>10</sub> (5)  = 6.9 dB (gain)

A power ratio less than 0 dB is treated as a loss (negative gain or attenuation). For example, if 10 W of power is fed into a cable but only 8 W is measured at the output, the power ratio is:

N = 10 log<sub>10</sub> (P<sub>out</sub>/P<sub>in</sub>)  = 10 log<sub>10</sub> (8/10) = 10 log<sub>10</sub>(0.8) = -0.9 dB (loss)

The power ratio of 0 dB means there is no gain or loss.

## dBm (decibel per milliwatt)

If you use the reference input power (P<sub>in</sub>) of 1 mW the power ratio, _N_ can be expressed in dBm:

**N = 10 log<sub>10</sub>(P<sub>out</sub> / 1) dBm**

By using the above formula, P<sub>out</sub> can be expressed in mW which is an absolute value.

**P<sub>out</sub>/P<sub>in</sub> = 10<sup>(N/ 10)</sup>**

**P<sub>out</sub> = 10<sup>(N/ 10)</sup> mW**

For example, if a LoRaWAN gateway has an output power of 22 dBm, how much power does it generate in W?

P<sub>out</sub> = 10<sup>(N / 10)</sup>  = 10<sup>(22 / 10)</sup>  = 10<sup>(2.2)</sup> = 158.48 mW = 0.158 W

## Rule of 10s and 3s

By using only 10s and 3s, one can easily convert a dBm value to its corresponding absolute power value without using the logarithmic scale.

- 10 dB = x10 (makes output power 10 times as the input power, for example, input=10 W and output=100 W)
- -10 dB = ÷10 (makes output power 1/10 times as the input power, for example, input=100 W and output=10 W)
- 3 dB = x2 (doubles the power, for example, input=5 W and output=10 W)
- -3 dB = ÷2 (halves the power, for example, input=10 W and output=5 W)

For example, if you want to convert 1 dBm its corresponding absolute power value, 1 can be written as, 10 -3 -3 -3.

Then apply the rule:

1 dB = 10 dB -3 dB -3 dB -3 dB = x10 ÷2 ÷2 ÷2 = 1.25

Remember P<sub>in</sub> is always 1 mW and 'm' in dBm stands for milliwatt. So we multiply the above answer by 1 mW.

1 dBm = 1 mW x 1.25 = 1.25 mW

When you write any dBm value using 10s and 3s remember,
- If possible avoid using 3s
- Never use more than five 3s

Let's take another example:

For example, if a LoRaWAN gateway has an output power of 17 dBm, how much power does it generate in mW?

17 can be written as, 10 +10 -3

Then apply the rule:

17 dB = 10 dB +10 dB -3 dB = x10 x10 ÷2 = 50

17 dBm = 1 mW x 50 = 50 mW

## Antenna gains

The units dBi and dBd are used to express antenna gains.

### dBi (decibel relative to isotropic)

The gain of an antenna can be measured relative to an isotropic antenna and is expressed in dBi. An isotropic antenna is a hypothetical antenna that radiates power uniformly in all directions. The gain of an isotropic antenna is 0 dB which means it has no gain or loss.

### dBd (decibel relative to dipole)
The gain of an antenna can be measured relative to a reference dipole antenna and is expressed in dBd. A reference dipole antenna offers a fixed 2.15 dB of gain over an isotropic antenna.

The following equation represents the relationship between dBi and dBd:

**dBi = dBd + 2.15 dB**

### Questions:
1. Convert 5 dBi to dBd.

X<sub>dBd</sub> = X<sub>dBi</sub> - 2.15  = 5 - 2.15 = 2.85 dBd

2. Convert 2 dBd to dBi.

X<sub>dBi</sub> = X<sub>dBd</sub> + 2.15 = 2 + 2.15 = 4.15 dBi
