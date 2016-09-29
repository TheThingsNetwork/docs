---
title: Node-RED
sections:
 - node-red/_setup.md
 - node-red/_usage.md
 - node-red/_quickstart.md
---

[Node-RED](http://nodered.org/) is a free, JavaScript-based server and web GUI for wiring together hardware devices, APIs and online services. You can find a lot of example flows and additional nodes in the [Node-RED Library](http://flows.nodered.org/).

With the [Node-RED node for TTN](https://www.npmjs.com/package/node-red-contrib-ttn) it is very easy to process device messages and activations with pretty much no code.

## Prerequisites

* Access to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/).
* Access to an application with registered device on TTN.
* A Node-RED instance or server/computer to install it on.
* Version 1.x of the [Node-RED node for TTN](https://www.npmjs.com/package/node-red-contrib-ttn).

	> You can get version 1.x via the refactor tag:
	> 
	> ```bash
	> npm install node-red-contrib-ttn@refactor
	> ```

<div class="alert alert-danger"><strong>Warning:</strong> The APIs for these versions of the library and backend might still change and the database (registered application and devices) reset. Do not use in production!</div>
