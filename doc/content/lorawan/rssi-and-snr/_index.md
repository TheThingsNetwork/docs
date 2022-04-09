---
title: "RSSI and SNR"
section: Additional Information
description: ""
weight:
---

In wireless communication, a receiver needs a good signal strength and a signal-to-noise ratio to separate the original signal from the modulated carrier. This section contains information about two most commonly used signal strength indicators - RSSI and SNR.

## RSSI

RSSI (Received Signal Strength Indicator) is a relative measurement that helps you determine if the received signal is strong enough to get a good wireless connection from the transmitter. Since LoRaWAN supports bi-directional communication, RSSI is an important measurement for both gateways and end devices. RSSI is measured in [dBm](../db-dbm-dbi-dbd/#dbm-decibel-per-milliwatt) and its value is a negative form. The closer the RSSI value is to zero, the received signal is stronger.

Apart from the output power of the transmitter, the following factors mainly influence the RSSI:

- Path loss
- Antenna gain
- Cable/connector loss

## SNR

SNR (Signal-to-Noise Ratio), often written as S/N, is the ratio of the received signal power to the noise floor. SNR is commonly used to determine the quality of the received signal.

SNR can be calculated using the following formula and is often expressed in decibels (dB):

**SNR (dB) = P<sub>received_signal</sub> (dBm) - P<sub>noise</sub> (dBm)**

If the RSSI is above the noise floor the receiver can easily demodulate the signal.

Here is a good example of a positive SNR:

{{< figure src="snr-greater-than-zero.png" alt="SNR is greater than zero" >}}

_Image captured from the [YouTube video](https://www.youtube.com/watch?v=QFapH4oADnU) by Richard Wenner. The x-axis represents the power level in dBm and the y-axis represents the time._

By looking at the above graph you can see that the RSSI is about -65 dBm and the noise floor is about -90 dBm. By using these values you can calculate the SNR as follows:

SNR (dB) = P<sub>received_signal</sub> (dBm) - P<sub>noise</sub> (dBm)

SNR (dB) = -65 dBm -(-90 dBm) = 25 dB 

The positive SNR means that the signal power is greater than the noise power, i.e. the receiver will be able to demodulate the signal.

If the RSSI is below the noise floor, it is impossible to demodulate the signal. However, LoRa can demodulate signals that are below the noise floor. The minimum SNR required for demodulation at different spreading factors is shown in the table below:

{{< figure src="snr-demodulation-limits.png" alt="SNR demodulation limits" >}}
_Image captured from [Semtech SX1276-7-8-9 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1278)._

Here is a good example of a negative SNR:

{{< figure src="snr-less-than-zero.png" alt="SNR is less than zero" >}}

_Image captured from the [YouTube video](https://www.youtube.com/watch?v=QFapH4oADnU) by Richard Wenner. The x-axis represents the power level in dBm and the y-axis represents the time._

By looking at the above graph you can see that the RSSI is about -120 dBm and the noise floor is about -90 dBm. Now calculate the SNR as follows:

SNR (dB) = P<sub>received_signal</sub> (dBm) - P<sub>noise</sub> (dBm)

SNR (dB) = -120 dBm -(-90 dBm) = -30 dB

The negative SNR means that the signal power is less than the noise power. The value of -30 dB is below the minimum SNR of -20 dBm @ SF12, so it does not guarantee that the receiver will be able to demodulate the signal.
