---
title: Reverse SSH
zindex: 600
---

# Reverse SSH

SSH is a secure connection between a client and server over which commands can be executed on the server. As long as the two devices can see eachother on the internet the SSH connection can also be made from the server to the client. This is however often blocked by firewalls and NATs.

SSH also has the ability of forwarding ports over this secure connection, creating in essense a simple VPN. This can be used to dial another SSH connection from the server to the client via an existing SSH connection from the client to the server. This is called reverse SSH.

## Setup your SSH server


## Setup the gateway to dial SSH on startup

