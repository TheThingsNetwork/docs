---
title: What is LoRa
section: Getting Started
---

# What is LoRa

LoRa&reg; is a trademark of the [Semtech](http://www.semtech.com/wireless-rf/lora.html) company. Originally intended to be an abbreviation of **Lo**ng **Ra**nge, but also Low Power. LoRa is a wireless physical layer protocol designed with the Internet-of-Things (IoT) in mind. In normal situations LoRa can reach multiple kilometres, using a quarter of the power of a WiFi connection. Because LoRa is so low power, devices incorporating it can last for years on the same battery. Compared to other radio standards that can reach the same distance, LoRa hardware is very low-cost.

## Long range

What makes LoRa special is the long distance that the signal can travel and still be successfully received. For long range one normally needs high power, but in the case of LoRa long range is surprisingly achieved using a weak low power signal. This directly affects the lifetime of your device and allows remote devices to operate from batteries and small solar panels.

In information theory we have the [Shannon-Hartley theorem](https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem) that indicates what the maximum speed is at which you can communicate across a channel. When using a radio channel it boils down to: the further you need to communicate, the slower you need to communicate. It is important to keep this in mind when using LoRa. By design LoRa uses a low data rate to make it possible for the signal to be received at a greater distance. The speed of LoRa can not at all be compared to WiFi or 3G. When using LoRa you are limited to sending a couple of bytes per minute. Think about a temperature sensor sending its value every 10 minutes. LoRa will never work for the transmission of video or photos. For more bandwidth it is recommended to switch to WiFi or 3G.

A LoRa signal is normally transmitted in a channel of 125kHz, 250kHz or 500kHz wide. For example a 125kHz channel at 868.1MHz is actually situated between 868.0375MHz and 868.1625MHz. To encode data the signal is shifted in frequency within this channel, creating so-called "chirps". From there the name Chirp Spread Spectrum modulation for the technique that is used by LoRa.

Chirp spread spectrum is more robust against noise than other common modulation techniques. This also enables it to reach a larger distance (the further a signal travels, the more noise is added to it).

## How to obtain long range
As already mentioned to obtain long range you need to communicate slower. There are however some more factors playing a role.

The further a signal travels, the weaker it becomes. This is called [free-space path loss](https://en.wikipedia.org/wiki/Free-space_path_loss) (FSPL). FSPL is not the same for all signals. The higher the radio frequency at which you communicate, the higher the FSPL. To obtain a longer range you therefore want to communicate at a lower frequency.

When you send out a signal, it will travel through the air, lose some of its energy due to FSPL, and arrive at the receiver as a very weak signal. If this is the case you are lucky. Along the path the signal travels along it can be obstructed by trees, mountains, buildings, cars, or any other object in the way. Some objects let a part of the signal pass, but this causes a big loss in the strength of the signal, and therefore the distance it can travel. The rule of thumb is to keep an open path between the transmitter and receiver - also known as Line of Sight.

A radio signal can also be reflected by solid objects. If the receiver receives the signal directly from the transmitter, there is a good chance that it will also receive another copy of it that was reflected by some object, or even by the surface of the earth. When these two copies of the signal arrive at the same time, or almost at the same time, they can corrupt each other. In this case you are not able to decode the data inside the radio signal. To prevent reflections from happening it is a good principle to keep not only the Line of Sight path free, but also some area around it. This is called the [Fresnel zone](https://en.wikipedia.org/wiki/Fresnel_zone). It is good to note that a free Fresnel zone is important for a good radio link, but can be difficult to guarantee. Especially when one of the radios is mobile.

## Spreading factors
As previously mentioned, LoRa uses chirp spread spectrum modulation. A chirp is a change in frequency over time. The speed at which the frequency changes in a LoRa signal is described by the Spreading Factor (SF). A greater spreading factor means the chirp signal is spread across the channel during a greater amount of time, causing the entire message to take more time to be transmitted. A high SF takes longer, so has a lower data rate, which means from the Shannon-Hartley theorem that it is more robust against noise and can therefore travel a larger distance. Because a high SF takes more time, the energy consumption is also higher. We therefore recommend users to use the lowest possible SF at which their signal is still received.

Another unique feature of LoRa is that different spreading factors are orthogonal. This means that two signals can be transmitted at the same time on the same channel, and as long as they are on different SFs, they can still be successfully received. This is really useful to increase the capacity of a LoRa channel.

## Forward Error Correction
The LoRa physical layer includes [Forward Error Correction](https://en.wikipedia.org/wiki/Forward_error_correction) (FEC). FEC is a technique where extra data is transmitted in every message so that when some of the data is lost, the original message can still be recovered. In other words if a few bits are corrupted during the transmission of a packet, these bits can be corrected because some extra information was transmitted to enable the receiver to "fill in the blanks". The further a signal travels, the higher the chance of bits getting corrupted. FEC helps to prevent this, so with FEC you can communicate slightly further than without it.

## Frequency drifts
Except that LoRa modulation is robust against noise, it is also robust against changes in frequency. It means that if a transmitter and a receiver are not exactly aligned on the same frequency, communication will still be successful between them. This feature of LoRa enables the use of cheaper hardware that is less stable in frequency over a wide temperature range. Another benefit of this is that LoRa does not suffer from [doppler shift](https://en.wikipedia.org/wiki/Doppler_effect).

## Other radio fundamentals to keep in mind
### Link budget
Before setting up a radio link, there is a calculation you can do to see if the link will work. This is called a [Link Budget](https://en.wikipedia.org/wiki/Link_budget). In general LoRa has a very forgiving link budget which allows it to reach a long distance.

Things to take account of in your link budget are:

* Transmission power
* Cable loss
* Transmitter antenna gain
* Free space path loss
* Receiver antenna gain
* Cable loss
* Receiver sensitivity (which is quite good for LoRa)

### Height above ground
As mentioned earlier you need to keep a free line of sight path, but preferably a free Fresnel zone. An easy way to do this is to increase the height of both your transmitter and receiver. This normally works well, but at some point you can be too high and start receiving more noise because you have a free line of sight to a greater area.

### Antennas
To focus your transmitted energy and your receiver's sensitivity into a specific direction, you can use directional antennas. The directionality of an antenna is expressed as a gain in [Decibels](https://en.wikipedia.org/wiki/Decibel) (dBi). Note that this "gain" is just an indication of how much the antenna focusses the energy and sensitivity. It is not an amplification. An antenna is a passive device and can not increase the power of your signal. It merely focuses the available energy in a specific direction.

### Frequencies used
LoRa was designed to operate in sub gigahertz frequencies. Normally LoRa is used in conjunction with the LoRaWAN protocol, which declares frequency plans to use falling inside the license-free and ISM bands. This however differ by country. Common sub-gigahertz bands that are used are 433MHz, 868MHz and 915MHz.

## Compared to other radio standards
With the standard ISM bands and limits LoRa can reach a couple of kilometres. Of course it depends on your line of sight and Fresnel zone, but some people have already managed to make it work above 10km, or even sporadically above 100km. A common range in a city is 5km at a maximum speed of 22kbps. A LoRa device can last years on a battery.

WiFi can normally only reach a few hundred metres, but the speed can be hundreds of megabits per second. A WiFi device normally lasts a couple of days on a battery.

Bluetooth Low Energy (BLE) can reach tens of metres and has a speed of around 10mbps. A good BLE device can last weeks or months on a battery.

Zigbee works at ranges of around 100 metre at a speed of 250kbps. A device lasts years on a battery.

GSM, 3G, LTE are mobile standards that allows communication at distances of a couple of kilometres. The speed can be around a hundred megabits per second. Devices like smartphones only last a day on a battery.


## References
* Semtech - http://www.semtech.com/
* LoRa crash course by Thomas Telkamp - https://www.youtube.com/watch?v=T3dGLqZrjIQ
* RN2483 command reference module
* SX1276 datasheet