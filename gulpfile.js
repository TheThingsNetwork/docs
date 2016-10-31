var path = require('path');

var exec = require('child_process').exec;

var gulp = require('gulp');
var download = require('gulp-download-stream');
var insert = require('gulp-insert');

gulp.task('pull:download', function() {

  var ops = [{
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md',
    file: '_content/v2-preview/node-js/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/nodered-app-lib/refactor/API.md',
    file: '_content/v2-preview/node-red/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/master/API.md',
    file: '_content/v2-preview/arduino/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/node/docs/TheThingsNode.md',
    file: '_content/draft/node/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/mqtt/README.md',
    file: '_content/v2-preview/mqtt/_api.md'
  }, {
    url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/ttnctl/cmd/docs/README.md',
    file: '_content/v2-preview/cli/_api.md'
  }];

  ops.forEach(function(op) {

    download(op)
      .pipe(insert.prepend('<!-- EDIT AT ' + op.url + ' -->\n\n'))
      .pipe(gulp.dest('.'));

  });

});

gulp.task('pull', ['pull:download', 'pull:multitech']);

gulp.task('default', ['pull']);
