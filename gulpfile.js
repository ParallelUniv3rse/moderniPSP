'use strict';

var gulp = require('gulp');
var gulpsass = require('gulp-sass');

gulpsass.compiler = require('node-sass');

function sass() {
  return gulp.src('./sass/**/*.scss')
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(gulp.dest('./css'));
}

function watch() {
  gulp.watch('./sass/**/*.scss', sass);
}

module.exports.sass = sass;
module.exports.watch = watch;
