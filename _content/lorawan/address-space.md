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
`0xe000/0xe001`  RESERVED (0x600000)  
`0xe002/0xe003`  Finland: Digita (0x600001)  
`0xe004/0xe005`  Swden, Norway: Blink (0x600002)  
`0xe006/0xe007`  World: IOTCAN (0x600003)  
`0xe008/0xe009`  North and South America: eleven-x (0x600004)  
`0xe00a/0xe00b`  World: IoT Network AS (0x600005)  
`0xe00c/0xe00d`  Asia, Middle East: Senra Tech (0x600006)  
`0xe00e/0xe00f`  World: EDF (0x600007)  
`0xe010/0xe011`  Italy: Unidata (0x600008)  
`0xe012/0xe013`  Scandinavia: SEAS-NVE	 (0x600009)  
`0xe014/0xe015`  Scandinavia: Öresundskraft (0x60000a)  
`0xe016/0xe017`  Romania: Ad Net Market Media (0x60000b)  
`0xe018/0xe019`  World: SenSys (0x60000c)  
`0xe01a/0xe01b`  Thailand: CAT Telecom (0x60000d)  
`0xe01c/0xe01d`  World: Spark (0x60000e)  
`0xe01e/0xe01f`  China: ThingPark China (0x60000f)  
`0xe020/0xe021`  World: Senet (0x600010)  
`0xe022/0xe023`  Japan: SenseWay (0x600011)  
`0xe024/0xe025`  Philippines: Packetworx (0x600012)  
`0xe026/0xe027`  World: Actility (0x600013)  
`0xe028/0xe029`  China: Alibaba IoT BU (0x600014)  
`0xe02a/0xe02b`  World: Kerlink (0x600015)  
`0xe02c/0xe02d`  World: Cisco (0x600016)  
`0xe02e/0xe02f`  World: Schneider Electric (0x600017)  
`0xfc0000/0xfc0001/0xfc0002/0xfc0003`  RESERVED (0xc00000)  
`0xfc0004/0xfc0005/0xfc0006/0xfc0007`  World: Nordic Automation Systems (0xc00001)  
`0xfc0008/0xfc0009/0xfc000a/0xfc000b`  World: ResIOT (0xc00002)  
`0xfc000c/0xfc000d/0xfc000e/0xfc000f`  World: SYSDEV (0xc00003)  
`0xfc0010/0xfc0011/0xfc0012/0xfc0013`  China, Canada: Appropolis (0xc00004)  
`0xfc0014/0xfc0015/0xfc0016/0xfc0017`  Japan: Macnica (0xc00005)  
`0xfc0018/0xfc0019/0xfc001a/0xfc001b`  Sweden, Finland, Norway, Denmark: IP-Only	(0xc00006)  
`0xfc001c/0xfc001d/0xfc001e/0xfc001f`  Russian Federation: Thingenix LLC (0xc00007)  
`0xfc0020/0xfc0021/0xfc0022/0xfc0023`  World: Definium Technologies (0xc00008)  
`0xfc0024/0xfc0025/0xfc0026/0xfc0027`  Germany (only Darmstadt Region): ENTEGA AG (0xc00009)  
`0xfc0028/0xfc0029/0xfc002a/0xfc002b`  Japan: SenseWay (0xc0000a)  
`0xfc002c/0xfc002d/0xfc002e/0xfc002f`  Tunisia: 3S (0xc0000b)  
`0xfc0030/0xfc0031/0xfc0032/0xfc0033`  World: nFore Technology (0xc0000c)  
`0xfc0034/0xfc0035/0xfc0036/0xfc0037`  Philippines: Packetworx (0xc0000d)  
`0xfc0038/0xfc0039/0xfc003a/0xfc003b`  Sultanate of Oman: Omani Qatari Telecommunications (Ooredoo) (0xc0000e)  
`0xfc003c/0xfc003d/0xfc003e/0xfc003f`  Hungary: Antenna Hungaria Co (0xc0000f)  
`0xfc0040/0xfc0041/0xfc0042/0xfc0043`  Europe: Trinity College Dublin (0xc00010)  
`0xfc0044/0xfc0045/0xfc0046/0xfc0047`  World: Digital Nordix AB (DNX) (0xc00011)  
`0xfc0048/0xfc0049/0xfc004a/0xfc004b`  Sweden, Norway: Blink Services (0xc00012)  
`0xfc004c/0xfc004d/0xfc004e/0xfc004f`  Norway: Lyse AS (0xc00013)  
`0xfc0050/0xfc0051/0xfc0052/0xfc0053`  Vietnam: VTC Digicom (0xc00014)  
`0xfc0054/0xfc0055/0xfc0056/0xfc0057`  Saudi Arabia: Machines Talk (0xc00015)  
`0xfc0058/0xfc0059/0xfc0060/0xfc0061`  World: Schneider Electric (0xc00016)  
`0xfc0062/0xfc0063/0xfc0064/0xfc0065`  UK: Connexin (0xc00017)  

## Applications

Applications in LoRaWAN and The Things Network have a 64 bit unique identifier (`AppEUI`). When you create an application, The Things Network's account server allocates an `AppEUI` from the address block of The Things Network Foundation. This means that every application has at least an `AppEUI` that starts with `70B3D57ED`. If you have your own `AppEUI`s, you can also add those to your application.

## Gateways

Gateways are manufactured with an embedded EUI, which can then be used to register the gateway on The Things Network. Although the configuration files of some gateways suggest that you can just choose an EUI for the gateway, this is **not true**. If your gateway did not come with an embedded EUI, you can use another EUI that you own, or configure an `AppEUI` that is registered to your account. You may also use an MQTT-based forwarder, which only needs a `GatewayID` (that you can choose yourself) instead of a `GatewayEUI`.
