/*eslint-env node*/
var $    = require('gulp-load-plugins')();
var gulp = require('gulp');

var options = global.gulpOptions;
var SRC = options.SRC;

gulp.task('lint', function () {
    var lintOptions = {
        useEslintrc: true,
    };

    return gulp.src([SRC + '/assets/js/**/*.js',
        SRC + '/assets/js/*.js'])
        .pipe($.eslint(lintOptions))
        .pipe($.eslint.format());
});
