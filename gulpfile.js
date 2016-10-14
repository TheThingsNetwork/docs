var path = require('path');

var gulp = require('gulp');
var download = require('gulp-download-stream');
var exec = require('child_process').exec;

gulp.task('pull:download', function() {
  download([{
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md',
      file: '_content/v2-preview/node-js/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/nodered-app-lib/refactor/API.md',
      file: '_content/v2-preview/node-red/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/master/API.md',
      file: '_content/v2-preview/arduino/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/mqtt/README.md',
      file: '_content/v2-preview/mqtt/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/v2-preview/ttnctl/cmd/docs/README.md',
      file: '_content/v2-preview/cli/_api.md'
    }])
    .pipe(gulp.dest('.'));
});

gulp.task('pull:multitech', function(cb) {
  exec('svn export https://github.com/kersing/multitech-installer/branches/master/docs multitech --force --trust-server-cert-failures=unknown-ca --non-interactive', {
    cwd: path.join(__dirname, '_content', 'current')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('pull', ['pull:download', 'pull:multitech']);

gulp.task('default', ['pull']);