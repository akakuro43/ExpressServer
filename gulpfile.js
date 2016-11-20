let gulp = require('gulp'),
    exec = require('gulp-exec');


    gulp.task('exec', function() {
        gulp.src('./') .pipe(exec('node server.js'));
    });
