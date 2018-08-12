const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
var browserSync = require('browser-sync');

var baseDir     = './';

gulp.task('js', () => {
  gulp.src('./src/js/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["src/*.css", "./*.js", "src/*.js", "./*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch',  ['browser-sync'], function() {


    gulp.watch('./images/*');


    gulp.watch('./*');


    gulp.watch('./src/*');
});