var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function () {

    gulp.src(['app/franky.js'])
        .pipe(browserify({
            debug: false,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('compress', function() {
  return gulp.src('./public/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['scripts']);

