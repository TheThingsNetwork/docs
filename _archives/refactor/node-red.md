---
layout: guide
title: Node-RED
sections:
 - node-red/_setup.md
 - node-red/_configure.md
 - node-red/_test.md
 - node-red/_build.md
---

[Node-RED](http://nodered.org/) is a free, JavaScript-based server and web GUI for wiring together hardware devices, APIs and online services.

With the [Node-RED node for TTN](http://flows.nodered.org/node/node-red-contrib-ttn) it is very easy to process device messages and activations with pretty much no code.

## Prerequisites

* Access to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/).
* Access to an application with registered device on TTN.
* A Node-RED instance or server/computer to install it on.
* Version 1.x of the [Node-RED node for TTN](http://flows.nodered.org/node/node-red-contrib-ttn).

	> You can get version 1.x via the refactor tag:
	> 
	> ```bash
	> npm install node-red-contrib-ttn@refactor
	> ```