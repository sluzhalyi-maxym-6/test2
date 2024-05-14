const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const htmlPartial = require('gulp-html-partial');

const sassSrc = './scss/**/*.scss';


function buildStyles() {
  return gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    // you can add other ops here like renaming, autoprefixer, minification etc
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
};

function buildHtml() {
  return gulp.src(['./*.html'])
    .pipe(htmlPartial({
      basePath: 'html-partials/'
    }))
    .pipe(gulp.dest('./dest'));
};

function serve() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    gulp.watch(sassSrc, gulp.series('buildStyles'));
  };

exports.buildHtml = buildHtml;
exports.buildStyles = buildStyles;
exports.serve = serve;

exports.watch = function () {
  gulp.watch(sassSrc, gulp.series('buildStyles'));
};