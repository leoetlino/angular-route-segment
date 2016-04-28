module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            angular12: {
                options: {
                    keepalive: true,
                    configFile: 'karma-angular-1.2.conf.js',
                    autoWatch: false,
                    singleRun: true
                }
            },
            angular13: {
                options: {
                    keepalive: true,
                    configFile: 'karma-angular-1.3.conf.js',
                    autoWatch: false,
                    singleRun: true
                }
            },
            angular14: {
                options: {
                    keepalive: true,
                    configFile: 'karma-angular-1.4.conf.js',
                    autoWatch: false,
                    singleRun: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-karma');
};
