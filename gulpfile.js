var gulp = require('gulp');

var download = require('gulp-download-stream');

gulp.task('pull', function() {

  download([{
      url: 'https://raw.githubusercontent.com/TheThingsNetwork/ttn/refactor/mqtt/README.md',
      file: '_archives/refactor/mqtt/_api.md'
    }])
    .pipe(gulp.dest('.'));

});