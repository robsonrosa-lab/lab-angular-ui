'use strict'

let gulp = require('gulp');
let clean = require('gulp-clean');
let less = require("gulp-less");
let ts = require("gulp-typescript");

let project = ts.createProject("tsconfig.json");

gulp.task('clean-up', function () {
  return gulp.src('dist')
        .pipe(clean({force: true}));
});

gulp.task('build-ts', ['clean-up'], function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts(project))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-less', ['clean-up'], function () {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('dist-view', ['clean-up'], function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/template'));
});

gulp.task('dist-demo', ['clean-up'], function () {
  return gulp.src('demo/**/*.html')
    .pipe(gulp.dest('dist/demo'));
});

gulp.task('default', ['build-ts', 'build-less', 'dist-view', 'dist-demo']);
