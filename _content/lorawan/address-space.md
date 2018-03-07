---
title: Address Space
---

# LoRaWAN Address Space

LoRaWAN knows a number of identifiers for devices, applications and gateways.

* `DevEUI` - 64 bit end-device identifier, EUI-64 (unique)
* `DevAddr` - 32 bit device address (non-unique)
* `AppEUI` - 64 bit application identifier, EUI-64 (unique)
* `GatewayEUI` - 64 bit gateway identifier, EUI-64 (unique)

## Devices

LoRaWAN devices have a 64 bit unique identifier (`DevEUI`) that is assigned to the device by the chip manufacturer. However, all communication is done with a dynamic 32 bit device address (`DevAddr`) of which 7 bits are fixed for The Things Network, leaving 25 bits that can be assigned to individual devices, a procedure called **Activation**.

### Over-the-Air Activation (OTAA)

Over-the-Air Activation (OTAA) is the preferred and most secure way to connect with The Things Network. Devices perform a join-procedure with the network, during which a dynamic `DevAddr` is assigned and security keys are negotiated with the device.

### Activation by Personalization (ABP)

In some cases you might need to hardcode the `DevAddr` as well as the security keys in the device. This means activating a device by personalization (ABP). This strategy might seem simpler, because you skip the join procedure, but it has some downsides related to security. 

### Device Address Assignment

The Things Network Foundation has received a 7-bit device address prefix from the LoRa Alliance. This means that all TTN device addresses will start with `0x26` or `0x27` (although addresses that start with these might also belong to other networks with the same prefix). Within TTN, we assign device address prefixes to "regions" (for example, device addresses in the `eu` region start with `0x2601`). Within a region, the NetworkServer is responsible for assigning device addresses. We are using prefixes here too for different device classes (for example, ABP devices in the `eu` region start with `0x26011`) or to shard devices over different servers. 

The NetworkServer assigns device addresses to devices (based on configuration). For ABP devices you have to request an address from the NetworkServer (the console or `ttnctl` will do this for you). For OTAA devices, the NetworkServer will assign an address when the device joins.

It's good to keep in mind that device addresses are not unique. We can (and probably will) give hundreds of devices the same address. Finding the actual device that belongs to that address is done by matching the cryptographic signature (MIC) of the message to a device in the database.

### Prefix assignments

`Prefixes` Region: Name (NetID)

`0x00/0x01` Local: Experimental nodes (0x00)  
`0x02/0x03` Local: Experimental nodes (0x01)  
`0x04/0x05` World: Actility (0x02)  
`0x06/0x07` Europe: Proximus (0x03)  
`0x08/0x09` Europe: Swisscom (0x04)  
`0x0a/0x0b` Singapore, indonesia , Australia, Africa , India: SingTel (0x05)  
`0x0c/0x0d` Europe: La Poste (0x06)  
`0x0e/0x0f` Europe: Bouygues Telecom (0x07)  
`0x10/0x11` World: Orbiwise (0x08)  
`0x12/0x13` U.S: SENET (0x09)  
`0x14/0x15` Europe: KPN (0x0a)  
`0x16/0x17` Russia: EveryNet (0x0b)  
`0x18/0x19` Africa: FastNet (0x0c)  
`0x1a/0x1b` World: SK Telecom (0x0d)  
`0x1c/0x1d` World: SagemCom (0x0e)  
`0x1e/0x1f` Europe: Orange France (0x0f)  
`0x20/0x21` Italy: A2A Smart City (0x10)  
`0x22/0x23` India, Sri Lanka, Nepal, Bangladesh and the Maldives Islands: TATA Communication (0x11)  
`0x24/0x25` World: Kerlink (0x12)  
`0x26/0x27` **World: The Things Network** (0x13)  
`0x28/0x29` Germany, Switzerland, China: DIGIMONDO GmbH (0x14)  
`0x2a/0x2b` World: Cisco Systems (0x15)  
`0x2c/0x2d` China: Computer Network Information Center & Chinese of Sciences Guangzhou Sub-center (CNIC) (0x16)  
`0x2e/0x2f` World: MultiTech Systems (0x17)  
`0x30/0x31` World: Loriot (0x18)  
`0x32/0x33` World: NNNCo (0x19)  
`0x34/0x35` World: Flashnet (0x1a)  
`0x36/0x37` World: TrackNet (0x1b)  
`0x38/0x39` World: Lar.Tech (0x1c)  
`0x3a/0x3b` World: Swiss Led (0x1d)  
`0x3c/0x3d` CIS, Europe: Net868 (0x1e)  
`0x3e/0x3f` Italy: Axatel (0x1f)  
`0x40/0x41` Germany: Telent (Netzikon) (0x20)  
`0x42/0x43` World: Patavina Technologies (0x21)  
`0x44/0x45` North America: Comcast (0x22)  
`0x46/0x47` Australia, New Zealand: Ventia (0x23)  
`0x48/0x49` World: Gimasi (0x24)  
`0x4a/0x4b` World: Talkpool (0x25)  
`0x4c/0x4d` Italy: Telemar (0x26)  
`0x4e/0x4f` World: MCF88 SRL (0x27)  
`0x50/0x51` Malaysia: VADSLYFE (0x28)  
`0x52/0x53` World: GIoT (0x29)  
`0x54/0x55` World: M2B Communications (0x2a)  
`0x56/0x57` China: ZTE (0x2b)  
`0x58/0x59` Australia: Airlora (0x2c)  
`0x5a/0x5b` World: Rai Way (0x2d)  
`0x5c/0x5d` World: Levikom (0x2e)  
`0x5e/0x5f` South Africa: Comsol Networks (0x2f)  
`0x60/0x61` World: SoftBank (0x30)  
`0x62/0x63` World: Inmarsat (0x31)  
`0x64/0x65` World: Gemalto (0x32)  
`0x66/0x67` China: Alibaba Iot BU (0x33)  
`0x68/0x69` Russian Federation: ER-Telecom Holding (0x34)  

## Applications

Applications in LoRaWAN and The Things Network have a 64 bit unique identifier (`AppEUI`). When you run the `ttnctl applications create` command, The Things Network's account server allocates an `AppEUI` from our MAC address block. This means that every `AppEUI` starts with `70B3D57ED`.

## Gateways

Although the `packet forwarder` configuration file suggests that one can just choose an EUI for the gateway, these also have a unique MAC address, which should also be used for identifying with The Things Network.
