/* eslint-env node*/
var gulp = require('gulp');
var sequence = require('run-sequence');

var options = global.gulpOptions;
var MODULES = options.MODULES;
var SRC = options.SRC;

gulp.task('watch', function () {
    // Watch Sass
    gulp.watch([SRC + '/assets/scss/*.scss',
        SRC + '/assets/scss/**/*.scss',
        SRC + '/assets/js/*.scss',
        SRC + '/assets/js/**/*.scss'], ['sass-watch']);

    // Watch JavaScript
    gulp.watch([SRC + '/assets/js/**/*.js',
        SRC + '/assets/js/*.js'], ['js-watch']);

    // Watch Angular templates
    gulp.watch([SRC + '/assets/js/**/*.html'], ['templates-watch']);

    // Watch static files
    gulp.watch([SRC + '/**/*.*',
        '!' + SRC + '/**/*.js',
        '!' + SRC + '/assets/js/**/*.html',
        '!' + SRC + '/**/*.scss'], ['staticfiles-watch']);

    // Watch MODULES
    gulp.watch(MODULES, ['modules-watch']);
});

gulp.task('staticfiles-watch', function (cb) {
    sequence('copy', 'reloadBrowsers', cb);
});

gulp.task('templates-watch', function (cb) {
    sequence('js:app', 'reloadBrowsers', cb);
});

gulp.task('js-watch', function (cb) {
    sequence('lint', 'js', 'reloadBrowsers', cb);
});

gulp.task('sass-watch', function (cb) {
    sequence('sass', 'reloadBrowsers', cb);
});

gulp.task('modules-watch', function (cb) {
    sequence('modules', cb);
});
