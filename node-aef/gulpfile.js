var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./aef/config/gulp/tasks'),
    config = require('./aef/config/gulp/config')(),
    envConfig = require('./aef/config/gulp/env');

/* Default task */
gulp.task('default', ['serve-dev']);