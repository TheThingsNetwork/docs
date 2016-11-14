require('dotenv').config({
  silent: true
});

var path = require('path');

var exec = require('child_process').exec;

var gulp = require('gulp');
var download = require('gulp-download-stream');
var insert = require('gulp-insert');

gulp.task('pull:download', function() {

  var items = [{
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md',
    file: '_includes/v2-preview/node-js/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/nodered-app-lib/refactor/API.md',
    file: '_includes/v2-preview/node-red/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/master/docs/TheThingsNetwork.md',
    file: '_includes/v2-preview/arduino/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/node/docs/TheThingsNode.md',
    file: '_includes/draft/node/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/mqtt/README.md',
    file: '_includes/v2-preview/mqtt/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/java-app-lib/master/API.md',
    file: '_includes/v2-preview/java/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/ttnctl/cmd/docs/README.md',
    file: '_includes/v2-preview/cli/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/api/handler/HTTP-API.md',
    file: '_includes/draft/platforms/_http-api.md'
  }];

  // skip private repos if we don't have a token
  if (process.env.GITHUB_OAUTH_TOKEN) {
    items.push({
      url: 'https://api.github.com/repos/TheThingsIndustries/node-ttn-oauth2/contents/apidocs.md?ref=v2-preview',
      options: {
        headers: {
          'User-Agent': 'TheThingsNetwork',
          'Authorization': 'token ' + process.env.GITHUB_OAUTH_TOKEN,
          'Accept': 'application/vnd.github.v3.raw'
        }
      },
      file: '_includes/draft/platforms/_account_api.md'
    });
  }

  items.forEach(function(item) {
    var editUrl = item.url.replace(/^(https:\/\/)raw\.(github)usercontent(\.com\/[^\/]+\/[^\/]+\/)(.+)$/, '$1$2$3blob/$4');

    download(item, item.options)
      .pipe(insert.prepend('<!-- EDIT AT ' + editUrl + ' -->\n\n'))
      .pipe(gulp.dest('.'));
  });

});

gulp.task('pull', ['pull:download']);

gulp.task('default', ['pull']);
