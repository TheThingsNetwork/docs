---
title: Live Example
zindex: 90
---

# Live Example

Try the Quick Start script right from your browser! Simply replace the `appEUI` and `accessKey` values with those you have found for your application in [Quick Start / Connect](#connect) and hit the green **Run** button.

<script src="https://embed.runkit.com" data-element-id="live-code"></script>

<div id="live-code"><pre class="highlight"><code>var ttn = require('ttn@2.0.0-4');

var region = 'eu';
var appId = '';
var accessKey = '';

var client = new ttn.Client(region, appId, accessKey);

client.on('connect', function(connack) {
  console.log('[DEBUG]', 'Connect:', connack);
});

client.on('error', function(err) {
  console.error('[ERROR]', err.message);
});

client.on('activation', function(deviceId, data) {
  console.log('[INFO] ', 'Activation:', deviceId, JSON.stringify(data, null, 2));
});

client.on('message', function(deviceId, data) {
  console.info('[INFO] ', 'Message:', deviceId, JSON.stringify(data, null, 2));
});

client.on('message', null, 'led', function(deviceId, led) {

  // Toggle the LED
  var payload = {
    led: !led
  };

  // If you don't have an encoder payload function:
  // var payload = [led ? 0 : 1];

  console.log('[DEBUG]', 'Sending:', JSON.stringify(payload));
  client.send(deviceId, payload);
});</code></pre></div>
