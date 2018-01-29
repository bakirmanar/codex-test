/* eslint-env node */
var gulp    = require('gulp');
var rimraf  = require('rimraf');

var options = global.gulpOptions;
var DIST = options.DIST;

// Cleans the build directory
gulp.task('clean', function(cb) {
    rimraf(DIST, cb);
});

/*
gulp.task('clean:templates', function(cb){
  rimraf('./build/assets/js/templates.js', cb);
});

gulp.task('clean:package', function(cb){
  rimraf('', cb);
});
*/
