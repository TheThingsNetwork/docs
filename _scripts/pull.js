require('dotenv').config({
  silent: true
});

var async = require('async');
var request = require('request');
var fs = require('fs');

var items = [{
  owner: 'TheThingsNetwork',
  repo: 'node-app-lib',
  branch: 'master',
  path: 'API.md',
  file: '_includes/v2-preview/node-js/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'master',
  path: 'docs/TheThingsNetwork.md',
  file: '_includes/current/arduino/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'feature/node',
  path: 'docs/TheThingsNode.md',
  file: '_includes/draft/node/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'mqtt/README.md',
  file: '_includes/v2-preview/mqtt/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'java-app-lib',
  branch: 'master',
  path: 'API.md',
  file: '_includes/v2-preview/java/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'ttnctl/cmd/docs/README.md',
  file: '_includes/v2-preview/cli/_api.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/API_AUTHENTICATION.md',
  file: '_includes/draft/application-manager/_auth.md'
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/handler/ApplicationManager.md',
  file: '_includes/draft/application-manager/_api.md',
  replace: [
    [/^# ApplicationManager API Reference/m, '# API Reference']
  ]
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/discovery/Discovery.md',
  file: '_includes/draft/discovery/_api.md',
  replace: [
    [/^# Discovery API Reference/m, '# API Reference']
  ]
}];

// skip private repos if we don't have a token
if (process.env.GITHUB_OAUTH_TOKEN) {
  items.push({
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'apidocs.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    file: '_includes/draft/account/_api.md',
    replace: [
      [/^The Things Network Account Server API/m, 'API Reference']
    ]
  }, {
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'AUTHENTICATION.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    file: '_includes/draft/account/_authentication.md'
  });
} else {
  console.log('Skipping private repositories...');
}

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

    // prepend warning
    body = (item.frontmatter ? '---\n' + JSON.stringify(item.frontmatter, null, 2) + '\n---\n' : '') + '<!-- EDIT AT ' + editUrl + ' -->\n\n' + body;

    // replacements
    if (item.replace) {
      item.replace.forEach(function (args) {
        body = body.replace.apply(body, args);
      });
    }

    console.log('Writing: ' + item.file);

    fs.writeFile(item.file, body, doneWithItem);
  });

}, function (err) {

  if (err) {
    console.error(err);
  } else {
    console.log('Done!');
  }
});