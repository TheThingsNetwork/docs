# Live Example

Try the Quick Start script right from your browser! Simply replace the `appEUI` and `accessKey` values with those you have found for your application in [Quick Start / Connect](#connect) and hit the green **Run** button.

<script src="https://embed.runkit.com" data-element-id="live-code"></script>

<div id="live-code"><pre class="highlight"><code>var ttn = require('ttn');

var appEUI = '70B3D57ED0000AFB';
var accessKey = '2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo=';
var client = new ttn.Client('staging.thethingsnetwork.org', appEUI, accessKey);

client.on('connect', function() {
  console.log('[DEBUG]', 'Connected');
});

client.on('error', function(err) {
  console.error('[ERROR]', err.message);
});

client.on('activation', function(e) {
  console.log('[INFO] ', 'Activated: ', e.devEUI);
});

client.on('uplink', function(msg) {
  console.info('[INFO] ', 'Uplink: ' + JSON.stringify(msg, null, 2));
});

client.on('uplink', function(msg) {

  // respond to every third message
  if (msg.counter % 3 === 0) {
    console.log('[DEBUG]', 'Downlink');

    var payload = new Buffer('4869', 'hex');
    client.downlink(msg.devEUI, payload);
  }
});</code></pre></div>