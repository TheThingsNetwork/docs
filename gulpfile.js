require('dotenv').config({
  silent: true
});

var path = require('path');
var exec = require('child_process').exec;
var gulp = require('gulp');
var download = require('gulp-download-stream');
var insert = require('gulp-insert');
var request = require('request');
var fs = require('fs');

gulp.task('pull', ['pull:github']);
gulp.task('default', ['pull']);

gulp.task('pull:github', function() {

  var items = [{
    owner: 'TheThingsNetwork',
    repo: 'node-app-lib',
    branch: 'master',
    path: 'API.md',
    file: '_includes/v2-preview/node-js/_api.md'
  }, {
    owner: 'TheThingsNetwork',
    repo: 'nodered-app-lib',
    branch: 'refactor',
    path: 'API.md',
    file: '_includes/v2-preview/node-red/_api.md'
  }, {
    owner: 'TheThingsNetwork',
    repo: 'arduino-device-lib',
    branch: 'master',
    path: 'docs/TheThingsNetwork.md',
    file: '_includes/v2-preview/arduino/_api.md'
  }, {
    owner: 'TheThingsNetwork',
    repo: 'arduino-device-lib',
    branch: 'node',
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
    path: 'api/handler/HTTP-API.md',
    file: '_includes/draft/application-manager/_http-api.md'
  }];

  // skip private repos if we don't have a token
  if (process.env.GITHUB_OAUTH_TOKEN) {
    items.push({
      owner: 'TheThingsIndustries',
      repo: 'node-ttn-oauth2',
      branch: 'v2-preview',
      path: 'apidocs.md',
      token: process.env.GITHUB_OAUTH_TOKEN,
      file: '_includes/draft/account/_api.md'
    }, {
      owner: 'TheThingsIndustries',
      repo: 'node-ttn-oauth2',
      branch: 'v2-preview',
      path: 'AUTHENTICATION.md',
      token: process.env.GITHUB_OAUTH_TOKEN,
      file: '_includes/draft/account/_authentication.md'
    });
  }

  items.forEach(function(item) {
    var url, options = {};

    if (item.token) {
      url = 'https://api.github.com/repos/' + item.owner + '/' + item.repo + '/contents/' + item.path + '?ref=' + item.branch;
      options = {
        headers: {
          'User-Agent': 'TheThingsNetwork',
          'Authorization': 'token ' + item.token,
          'Accept': 'application/vnd.github.v3.raw'
        }
      };
    } else {
      url = 'https://raw.githubusercontent.com/' + item.owner + '/' + item.repo + '/' + item.branch + '/' + item.path;
    }

    var editUrl = 'https://github.com/' + item.owner + '/' + item.repo + '/blob/' + item.branch + '/' + item.path;

    download({
        url: url,
        file: item.file
      }, options)
      .pipe(insert.prepend((item.frontmatter ? '---\n' + JSON.stringify(item.frontmatter, null, 2) + '\n---\n' : '') + '<!-- EDIT AT ' + editUrl + ' -->\n\n'))
      .pipe(gulp.dest('.'));
  });

});
