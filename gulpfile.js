const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const sassSrc = './scss/**/*.scss';


function buildStyles() {
  return gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    // you can add other ops here like renaming, autoprefixer, minification etc
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
};

function serve() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    gulp.watch(sassSrc, gulp.series('buildStyles'));
  };

exports.buildStyles = buildStyles;
exports.serve = serve;

exports.watch = function () {
  gulp.watch(sassSrc, gulp.series('buildStyles'));
};