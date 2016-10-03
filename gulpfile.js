var gulp = require('gulp');

var download = require('gulp-download-stream');

gulp.task('pull', function() {

  download([{
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/node-app-lib/master/API.md',
      file: '_versions/refactor/node-js/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/nodered-app-lib/refactor/API.md',
      file: '_versions/refactor/node-red/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/arduino-device-lib/master/API.md',
      file: '_versions/refactor/arduino/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/refactor/mqtt/README.md',
      file: '_versions/refactor/mqtt/_api.md'
    }, {
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/refactor/ttnctl/cmd/docs/README.md',
      file: '_versions/refactor/cli/_api.md'
    }])
    .pipe(gulp.dest('.'));

});