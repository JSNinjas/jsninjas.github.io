/**
 * @author Bilal Cinarli
 */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg        : grunt.file.readJSON('package.json'),
        sass       : {
            dist: {
                options: {
                    style    : 'compressed',
                    sourcemap: 'auto'
                },
                files  : {
                    'assets/styles/styles.css': 'assets/styles-sass/styles.scss'
                }
            }
        },
        watch      : {
            files: '**/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/styles/*.css',
                        './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server   : './'
                }
            }
        }
    });


    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load the plugin that provides the "sync" task.
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['browserSync', 'watch']);
};