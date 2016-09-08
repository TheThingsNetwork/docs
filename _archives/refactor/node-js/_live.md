# Live Example

Try the Quick Start script right from your browser! Simply replace the `appEUI` and `accessKey` values with those you have found for your application in [Quick Start / Connect](#connect) and hit the green **Run** button.

<script src="https://embed.tonicdev.com" data-element-id="live-code"></script>

<div id="live-code"><pre class="highlight"><code>var ttn = require('ttn@2.0.0-1');

var region = 'eu';
var appId = 'hello-world';
var accessKey = '2Z+MU0T5xZCaqsD0bPqOhzA6iygGFoi4FAgMFgBfXSo=';

var client = new ttn.Client(region, appId, accessKey);

client.on('connect', function(connack) {
	console.log('[DEBUG]', 'Connect:', connack);
});

client.on('error', function(err) {
	console.error('[ERROR]', err.message);
});

client.on('activation', function(data) {
	console.log('[INFO] ', 'Activation:', data);
});

client.on('message', function(data) {
	console.info('[INFO] ', 'Message:', JSON.stringify(data, null, 2));
});

client.on('message', function(data) {

	// respond to every third message
	if (data.counter % 3 === 0) {
		console.log('[DEBUG]', 'Sending');

		var payload = new Buffer('4869', 'hex');
		client.send(data.dev_id, payload, data.port);
	}
});</code></pre></div>