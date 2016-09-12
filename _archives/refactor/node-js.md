---
layout: guide
title: Node.js
sections:
 - node-js/_quick-start.md
 - node-js/_live.md
 - node-js/_api.md
---

[Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

With the [TTN Client](https://www.npmjs.com/package/ttn) you can receive activations and uplink messages from devices via The Things Network as well as respond with downlink messages.

## Prerequisites

* Access to [preview.dashboard.thethingsnetwork.org](https://preview.dashboard.thethingsnetwork.org/).
* Access to an application with registered device on TTN.
* A server/computer to run Node.js on.
* Version 2.x of the [TTN Node.js client](https://github.com/thethingsnetwork/node-ttn).

	> You can get version 2.x via the refactor tag:
	>
	> ```bash
	> npm install --save ttn@refactor
	> ```

<div class="alert alert-danger"><strong>Warning:</strong> The APIs for these versions of the library and backend might still change and the database (registered application and devices) reset. Do not use in production!</div>