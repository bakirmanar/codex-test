/* eslint-env node */

// -------------------------------------
// This file processes all of the assets in the "src" folder, combines them with the Libraries for Apps assets, and outputs the finished files in the "dist" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
//

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulp' folder. Any files in that directory get
 *  automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var argv = require('yargs').argv;
var requireDir = require('require-dir');

global.gulpOptions = {
    host: 'http://localhost',
    port: '8764',

    proxy_allow_self_signed_cert: false,

    // Serve View via https.
    // use_https: true,
    // https: {
    //   key: 'path/to/your/server.key',
    //   cert: 'path/to/your/server.crt'
    // },

    GIT_REPO_URL: 'bakirmanar/codex-test',
    GIT_USER: 'bakirmanar',
    NEW_TAG: '0.0.1',
    LAST_TAG: '0.0.0',
    ZIP_NAME: 'dist',
    TARGET: 'master',
    IS_DRAFT: true,
    IS_PRERELEASE: true,

    SRC: './frontend',
    DIST: './dist',
    SERVE_DIST: './dist',
    LIBS_JS: [

    ],
    LIBS_CSS: [

    ],
    MODULES: [
    ],
};

// Check for --production flag
global.isProduction = !!(argv.production);

// 3. TASKS
// - - - - - - - - - - - - - - -

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

// Default task
//
// builds your app, starts a server, and recompiles assets when they change.

gulp.task('default', ['serve']);
