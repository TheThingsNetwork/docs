var path = require('path');

var gulp = require('gulp');
var download = require('gulp-download-stream');
var exec = require('child_process').exec;

gulp.task('pull:download', function() {
  download([{
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md',
      file: '_content/refactor/node-js/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/nodered-app-lib/refactor/API.md',
      file: '_content/refactor/node-red/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/master/API.md',
      file: '_content/refactor/arduino/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/refactor/mqtt/README.md',
      file: '_content/refactor/mqtt/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/refactor/ttnctl/cmd/docs/README.md',
      file: '_content/refactor/cli/_api.md'
    }])
    .pipe(gulp.dest('.'));
});

gulp.task('pull:multitech', function(cb) {
  exec('rm -rf multitech && svn export https://github.com/FokkeZB/multitech-installer/branches/master/docs multitech  --trust-server-cert-failures=unknown-ca --non-interactive', {
    cwd: path.join(__dirname, '_content', 'draft')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('pull', ['pull:download', 'pull:multitech']);

gulp.task('default', ['pull']);