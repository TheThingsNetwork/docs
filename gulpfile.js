var path = require('path');

var exec = require('child_process').exec;

var gulp = require('gulp');
var download = require('gulp-download-stream');
var insert = require('gulp-insert');

gulp.task('pull:download', function() {

  var ops = [{
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

  ops.forEach(function(op) {
    var editUrl = op.url.replace(/^(https:\/\/)raw\.(github)usercontent(\.com\/[^\/]+\/[^\/]+\/)(.+)$/, '$1$2$3blob/$4');

    download(op)
      .pipe(insert.prepend('<!-- EDIT AT ' + editUrl + ' -->\n\n'))
      .pipe(gulp.dest('.'));

  });

});

gulp.task('pull', ['pull:download']);

gulp.task('default', ['pull']);
