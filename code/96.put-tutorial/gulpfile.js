var gulp = require('gulp');
var jade = require('gulp-jade');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

gulp.task('jade', function () {
  return gulp
            .src('dist/*.pug')
            .pipe(plumber())
            .pipe(pug())
            .pipe(gulp.dest('public'));
})

gulp.task('stylus', function () {
  return gulp
            .src('dist/stylus.styl')
            .pipe(plumber())
            .pipe(stylus())
            .pipe(gulp.dest('public'));
})

gulp.task('default', ['jade', 'stylus']);
