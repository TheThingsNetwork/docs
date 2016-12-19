require('dotenv').config({
  silent: true
});

/**
 * Add files to pull from public repositories here:
 */

var items = [{
  owner: 'TheThingsNetwork',
  repo: 'node-app-sdk',
  branch: 'master',
  path: 'API.md',
  target: '_content/applications/nodejs/api.md',
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'master',
  path: 'docs/TheThingsNetwork.md',
  target: '_content/devices/arduino/api/network.md',
  yaml: {
    title: 'TheThingsNetwork',
    zindex: 1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'master',
  path: 'docs/TheThingsMessage.md',
  target: '_content/devices/arduino/api/message.md',
  yaml: {
    title: 'TheThingsMessage',
    zindex: 900
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'feature/node',
  path: 'docs/TheThingsNode.md',
  target: '_content/devices/node/api.md',
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'master',
  path: 'mqtt/README.md',
  target: '_content/applications/mqtt/api.md',
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'java-app-sdk',
  branch: 'master',
  path: 'data/mqtt/API.md',
  target: '_content/applications/java/api.md',
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'master',
  path: 'ttnctl/cmd/docs/README.md',
  target: '_content/network/cli/api.md',
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'master',
  path: 'api/API_AUTHENTICATION.md',
  target: '_content/applications/manager/authentication.md',
  yaml: {
    title: 'Authentication'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'master',
  path: 'api/handler/ApplicationManager.md',
  target: '_content/applications/manager/api.md',
  replace: [
    [/^# ApplicationManager API Reference/m, '# API Reference']
  ],
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'master',
  path: 'api/discovery/Discovery.md',
  target: '_content/network/discovery/api.md',
  replace: [
    [/^# Discovery API Reference/m, '# API Reference']
  ],
  yaml: {
    title: 'API Reference',
    zindex: -1000
  }
}];

/**
 * Add files to pull from private repositories here:
 */

if (process.env.GITHUB_OAUTH_TOKEN) {
  items.push({
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'apidocs.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    target: '_content/network/account/api.md',
    replace: [
      [/^The Things Network Account Server API$/m, 'API Reference']
    ],
    yaml: {
      title: 'API Reference',
      zindex: -1000
    }
  }, {
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'AUTHENTICATION.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    target: '_content/network/account/authentication.md',
    yaml: {
      title: 'Authentication'
    }
  }, {
    owner: 'TheThingsIndustries',
    repo: 'integration-storage',
    branch: 'master',
    path: 'api/README.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    target: '_content/applications/storage/api.md',
    replace: [
      [/^# Storage API Reference/m, '# API Reference']
    ],
    yaml: {
      title: 'API Reference',
      zindex: -1000
    }
  });
} else {
  console.log('Skipping private repositories...');
}

/**
 * Do not edit:
 */

var async = require('async');
var request = require('request');
var fs = require('fs');
var yaml = require('js-yaml');

async.each(items, function (item, doneWithItem) {
  var options = {};

  if (item.token) {
    options.url = 'https://api.github.com/repos/' + item.owner + '/' + item.repo + '/contents/' + item.path + '?ref=' + item.branch;
    options.headers = {
      'User-Agent': 'TheThingsNetwork',
      'Authorization': 'token ' + item.token,
      'Accept': 'application/vnd.github.v3.raw'
    };
  } else {
    options.url = 'https://raw.githubusercontent.com/' + item.owner + '/' + item.repo + '/' + item.branch + '/' + item.path;
  }

  console.log('Downloading: ' + options.url);

  var editUrl = 'https://github.com/' + item.owner + '/' + item.repo + '/blob/' + item.branch + '/' + item.path;

  request(options, function (err, response, body) {

    if (err) {
      return doneWithItem(new Error('Failed to fetch ' + editUrl + ': ' + err));
    }

    if (response.statusCode !== 200) {
      return doneWithItem(new Error('Failed to fetch ' + editUrl + ': ' + response.statusCode + ' ' + response.statusMessage));
    }

    if (!item.yaml) {
      item.yaml = {};
    }

    item.yaml.source = editUrl;

    // replacements
    if (item.replace) {
      item.replace.forEach(function (args) {
        body = body.replace.apply(body, args);
      });
    }

    body = '---\n' + yaml.safeDump(item.yaml, {
      lineWidth: 1000,
      noCompatMode: true
    }) + '---\n\n' + body;

    console.log('Writing: ' + item.target);

    fs.writeFile(item.target, body, doneWithItem);
  });

}, function (err) {

  if (err) {
    console.error(err);
  } else {
    console.log('Done!');
  }
});
