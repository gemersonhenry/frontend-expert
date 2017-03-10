var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('default', ['jade', 'stylus']);

gulp.task('jade', function () {
  return  gulp.src('./dist/jade/pages/*.jade')
              .pipe(jade())
              .pipe(gulp.dest('./public/html/'));
});

gulp.task('stylus', function () {
  return  gulp.src('./dist/stylus/*.styl')
              .pipe(stylus())
              .pipe(gulp.dest('./public/css/'))
});
