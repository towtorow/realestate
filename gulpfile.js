var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotation = require('gulp-ng-annotate');
var nodemon = require('gulp-nodemon');

function js(cb){
  gulp.src(['ng/module.js', 'ng/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(ngAnnotation())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets'));
  cb();
}

function watchJs(cb){
  gulp.watch('ng/*.js', js);
  cb();
}

function devServer(cb){
  nodemon({
    script : 'server.js',
    ext : 'js',
    ignore : ['ng*', 'gulp*', 'dist*']
  });
  cb();
}

exports.watchJs = watchJs;
exports.devServer = devServer;
exports.default = gulp.series(js, watchJs, devServer);
