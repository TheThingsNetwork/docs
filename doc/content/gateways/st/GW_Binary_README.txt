Reprogramming the gateway with the binary erases the unique IEEE MAC address
preprogrammed on the gateway and will be replaced by a MAC address based
on the STM32 unique ID as default setting.
The user may reprogram the unique MAC address indicated on the board sticker
using AT+MAC=mac_address command.

AT+CH=band                    		// Set to predefined channel plan. “band” = EU868, US915, EU433, CN780, AU915, AS923, KR920, CN470, CN470Prequel or IN866
AT+PKTFWD=address,port_up,[port_down]   // Set packet forwarder server address and port (up and down). Refer to gateway documentation for the list of Loriot server addresses and ports
AT+MAC=mac_address                     	// Set MAC address. Refer to the MAC address sticker on the board.
