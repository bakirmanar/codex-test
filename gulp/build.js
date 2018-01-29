/* eslint-env node */
/* global global */
/* eslint no-console:0 */

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var sequence = require('run-sequence');

var options = global.gulpOptions;
var DIST = options.DIST;
var SRC = options.SRC;
var MODULES = options.MODULES;
var LIBS_JS = options.LIBS_JS;
var LIBS_CSS = options.LIBS_CSS;

var pkg = require('../package.json');
var appVersion = pkg.version;

// Builds your entire app once, without starting a server
gulp.task('build', function (cb) {
    if (global.isProduction) {
        sequence('clean', ['copy', 'css', 'sass', 'modules', 'js'], cb);
    } else {
        sequence('clean', ['copy', 'css', 'sass', 'modules', 'js'], cb);
    }
});

// Copies everything in the client folder except templates, Sass and JS
gulp.task('copy', function () {
    return gulp.src([SRC + '/**/*.*',
        '!' + SRC + '/gulpfile.js',
        '!' + SRC + '/js/**/*.html',
        '!' + SRC + '/**/*.scss',
        '!' + SRC + '/**/*.js'], {base: SRC + '/'})
        .pipe(gulp.dest(DIST));
});

gulp.task('modules', function () {
    return gulp.src(MODULES, {base: './'})
        .pipe(gulp.dest(DIST));
});

gulp.task('js:app', function () {
    var uglify = $.if(global.isProduction, $.uglify());
    var sourcemapsInit = $.if(!global.isProduction, $.sourcemaps.init());
    var sourcemapsWrite = $.if(!global.isProduction, $.sourcemaps.write('.'));
    var replace = $.if(global.isProduction, $.replace('Dev version', appVersion));

    return gulp.src([SRC + '/assets/js/**/*.js',
        SRC + '/assets/js/*.js'], {base: SRC})
        .pipe(sourcemapsInit)
        .pipe($.plumber())
        .pipe($.ngAnnotate())
        .pipe($.directiveReplace({root: SRC + '/assets/js'}))
        .pipe($.concat('scripts.min.js'))
        .pipe(replace)
        .pipe(uglify)
        .pipe(sourcemapsWrite)
        .pipe(gulp.dest(DIST + '/assets/js/'));
});

gulp.task('js:libs', function () {
    var uglify = $.if(global.isProduction, $.uglify());
    var sourcemapsInit = $.if(!global.isProduction, $.sourcemaps.init());
    var sourcemapsWrite = $.if(!global.isProduction, $.sourcemaps.write('.'));

    return gulp.src(LIBS_JS, {base: SRC})
        .pipe(sourcemapsInit)
        .pipe($.plumber())
        .pipe($.concat('libs.min.js'))
        .pipe(uglify)
        .pipe(sourcemapsWrite)
        .pipe(gulp.dest(DIST + '/assets/js/'));
});

gulp.task('js', ['js:app', 'js:libs']);

gulp.task('css', function () {
    return gulp.src(LIBS_CSS)
        .pipe($.concat('vendor.min.css'))
        .pipe(gulp.dest(DIST + '/assets/css/'));
});
