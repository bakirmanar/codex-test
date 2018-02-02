// Karma configuration
// Generated on Fri Feb 02 2018 21:26:49 GMT+0300 (Калининградское время (зима))

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-aria/angular-aria.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            './node_modules/angular-sanitize/angular-sanitize.min.js',
            './node_modules/angular-material/angular-material.min.js',
            './node_modules/lodash/lodash.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './frontend/assets/js/app.js',
            './frontend/assets/js/config.js',
            './frontend/assets/js/router.js',
            './frontend/assets/js/services/serialsService.js',
            './frontend/assets/js/serials/serials.controller.js',
            './frontend/assets/js/serial/serial.controller.js',
            './frontend/assets/js/serial/serial.spec.js'
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
