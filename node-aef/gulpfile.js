var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./app/config/gulp/tasks'),
    config = require('./app/config/gulp/config')(),
    envConfig = require('./app/config/gulp/env');

console.log('============ Angular 2 Starter ============');
console.log('Current environment: ' + envConfig.ENV);
console.log('- Change environment via --env or NODE_ENV');
console.log('===========================================');

/* Default task */
gulp.task('default', ['serve-dev']);