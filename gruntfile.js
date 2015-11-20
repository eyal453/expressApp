module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        cwd: 'bower_components/',
                        expand: true,
                        flatten: true,
                        src: [
                            'hammerjs/hammer.min.js',
                            'angular/angular*.js',
                            'angular-gestures/*.js',
                            'angular-ui-router/release/angular-ui-router*.js',
                            'jquery/dist/jquery*.js',
                            'bootstrap/dist/js/bootstrap*.js'
                        ],
                        dest: 'public/scripts',
                    },
                    {
                        cwd: 'bower_components/',
                        expand: true,
                        flatten: true,
                        src: [
                            'bootstrap/dist/css/*.*'
                        ],
                        dest: 'public/styles',
                    },
                    {
                        cwd: 'bower_components/',
                        expand: true,
                        flatten: true,
                        src: [
                            'bootstrap/dist/fonts/*.*'
                        ],
                        dest: 'public/styles/fonts',
                    }
                ]
            }
        },
        injector: {
            local_dependencies: {
                options: {
                    addRootSlash: false,
                    ignorePath:'public/'
                },
                files: {
                    'public/index.html': [
                        'public/app/utils.js',
                        'public/app/app.js',
                        'public/app/services/*.js',
                        'public/app/filters/*.js',
                        'public/app/views/*.js',
                        'public/app/directives/**/*',
                        'public/styles/**/*.css']
                }
            }
        },
        less: {
            app: {
                options: {
                    paths: ["public/styles/**/*.less"]
                },
                files: {
                    "public/styles/main.css": "public/styles/main.less"
                }
            }

        },
        watch: {
            // scripts: {
            //     files: ["public/scripts/**/*.ts"],
            //     tasks: ['ts'],
            //     options: {
            //         spawn: false,
            //         reference: "typings/**/*.d.ts",
            //         maxListeners: 99
            //     },
            // },
            css: {
                files: ["public/styles/**/*.less"],
                tasks: ['less'],
            }
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('build', ['copy', 'less', 'injector']);
    grunt.registerTask('default', ['build', 'watch']);


};
