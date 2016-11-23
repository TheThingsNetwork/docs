---
title: Register with TTN
---

# Register with TTN

Although at this point the gateway does work and is connected to The Things Network, you still have one step to go.

1.  Still logged into the Conduit, get the EUI and other information about your Gateway:

    ```bash
    cat /var/config/lora/local_conf.json
    ```
    
2.  [Register your gateway](https://www.thethingsnetwork.org/g/new/edit) using the above information.

👏 Your gateway is now connected to The Things Network!
