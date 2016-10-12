# API Reference

## ttn app

<p>A node to share The Things Network application configurations between nodes.</p>
<p>Use the following information of the application on The Things Network dashboard:</p>
<ul>
  <li><strong>App ID:</strong> Copy <em>Application ID</em> from the <em>Application Overview</em> box.</li>
  <li><strong>Access Key:</strong> Scroll down to the <em>Access Keys</em>. For the key you'd like to use, click <code>👁</code> to show the key and then <code>📋</code> to copy it.</li>
  <li><strong>Region or Broker:</strong> Scroll back up again to <em>Handler Status</em> in the <em>Application Overview</em> box. Only copy the last bit following <code>ttn-handler-</code>.</li>
</ul>

## ttn device

<p>A node to receive events from devices on The Things Network.</p>
<p>The application and event must be configured in the node. A device ID to filter on can also be configured.</p>
<p>The output message:</p>
<ul>
  <li><code>devId</code>, the ID of the device that sent the message.</li>
  <li><code>payload</code>, the original <a href="https://www.thethingsnetwork.org/docs/mqtt/#api-reference" target="_blank">MQTT events topic</a>.</li>
</ul>

## ttn message

<p>A node to receive messages from devices on The Things Network.</p>
<p>The application must be configured in the node. A device ID and field to filter on can also be configured.</p>
<p>The output message:</p>
<ul>
  <li><code>devId</code>, the ID of the device that sent the message.</li>
  <li><code>payload</code>, an object of fields or the specified field if the application is configured with a decoder payload function, or a <a href="https://nodejs.org/api/buffer.html" target="_blank">Buffer</a> if it is not.</li>
  <li>Unless a field was specified, the message is extended with the original <a href="https://www.thethingsnetwork.org/docs/mqtt/#api-reference" target="_blank">MQTT up topic</a>.</li>
</ul>  
  
## ttn send

<p>A node to send a message to a device on The Things Network.</p>
<p>The application must be configured in the node. The device ID and port can be configured in the node or set in the incoming message.</p>
<p>The input message:</p>
<ul>
  <li><code>devId</code>, if set, is used as the device ID instead of the one configured in the node.</li>
  <li><code>port</code>, if set, is used as the device port instead of the one configured in the node.</li>
  <li><code>payload</code> is sent to the device. Must be a <a href="https://nodejs.org/api/buffer.html" target="_blank">Buffer</a>, <a href="https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_array" target="_blank">Array of bytes</a> or an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Object</a> if the application is configured with an encoder payload function.</li>
</ul>