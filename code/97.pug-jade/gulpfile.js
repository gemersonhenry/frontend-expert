var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');

gulp.task('default', ['jade', 'stylus']);

gulp.task('jade', function () {
  return  gulp.src('./dist/pages/*.jade')
              .pipe(plumber())
              .pipe(jade())
              .pipe(gulp.dest('./public/html/'));
});

gulp.task('stylus', function () {
  return  gulp.src('./dist/pages/*.styl')
              .pipe(plumber())
              .pipe(stylus())
              .pipe(gulp.dest('./public/css/'))
});
