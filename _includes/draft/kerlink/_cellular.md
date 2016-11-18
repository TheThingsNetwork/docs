# Cellular ConnectionIt is possible to connect the Kerlink to a GPRS/3G connection. This maybe eligible when LAN security is tight.
SIM card detection is only done at boot time. Insert the SIM card in the powered off LoRa station.
Set your APN settings in `/etc/sysconfig/network` (see [Provider Settings](#provider-settings)):

```plaintext# Selector operator APNGPRSAPN=m2minternet# Enter pin code if activatedGPRSPIN=# Update /etc/resolv.conf to get dns facilitiesGPSDNS=yes# PAP authenticationGPRSUSER=kerlinkGPRSPASSWORD=password# Bearers priority orderBEARERS_PRIORITY="ppp0,eth0,eth1"
```Configure the autoconnect in `/knet/knetd.xml`

```xml<!-- ############## local device configuration ############## --><LOCAL_DEV role="KNONE"/><!-- ############## connection parameters ############## --><!-- enable the autoconnect feature (YES/NO) --><CONNECT auto_connection="YES" /><!-- frequency of connection monitoring -ping- (in seconds) --><CONNECT link_timeout="30"/><!-- DNS servers will be pinged if commented or deleted. Some operators can block the ping on there DNS servers --><CONNECT ip_link="192.168.4.90"/><!-- ############## default area for connection policy ############## --><AREA id="default"><ACCESS_POINT bearer="gprs" /></AREA>  
```
  > **Warning:** Tere is a bug in the software. When `GPRSUSER` and `GPRSPASSWORD` needs to stay empty the Kerlink does funny things and no connection is made. To resolve this problem, please apply this patch.## Provider Settings### KPN

```plaintext# Selector operator APNGPRSAPN=portalmmm.nl# Enter pin code if activatedGPRSPIN=# Update /etc/resolv.conf to get dns facilitiesGPSDNS=yes# PAP authenticationGPRSUSER=internetGPRSPASSWORD=internet```
