const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');

gulp.task('js', () => {
  gulp.src('./src/*.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
  gulp.src('./src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
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

    gulp.watch('./*.html');

    gulp.watch('./src/*.js', ['js']);

    gulp.watch('./src/*.css', ['css']);
});