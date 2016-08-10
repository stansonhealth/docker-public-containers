var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./aef/config/gulp/tasks'),
    config = require('./aef/config/gulp/config')(),
    envConfig = require('./aef/config/gulp/env');

console.log('============ Angular 2 Starter ============');
console.log('Current environment: ' + envConfig.ENV);
console.log('- Change environment via --env or NODE_ENV');
console.log('===========================================');

/* Default task */
gulp.task('default', ['serve-dev']);