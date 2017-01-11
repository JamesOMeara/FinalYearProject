module.exports = function(grunt) {

    
grunt.initConfig({

    browserify: {
        client: {
            src: ['./app/client/app.js'],
            dest: './app/client/public/app.js',
            options: {
                external:{
                    angular: ['angular'],
                    bootstrap: ['ui-bootstrap'],
                    jquery: ['jquery'],
                }
            }
        },
        deps: {
            src: [],
            dest: './app/client/public/libs.js',
            options: {
                alias: {
                    angular: './app/client/public/lib/angular/angular.js',
                    bootstrap: ['./app/client/public/lib/angular-bootstrap/ui-bootstrap-tpls.js'],
                    jquery: ['./app/client/public/lib/jquery/dist/jquery.js'],
                }
            }
        },
    },
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            port: 9999,
            singleRun: true,
            browsers: ['Chrome'],
            logLevel: 'ERROR'
        }
    },
    jasmine_nodejs: {
        // task specific (default) options 
        options: {
            specNameSuffix: ".js", // also accepts an array 
            helperNameSuffix: "helper.js",
            useHelpers: false,
            random: false,
            seed: null,
            defaultTimeout: null, // defaults to 5000 
            stopOnFailure: false,
            traceFatal: true,
            // configure one or more built-in reporters 
            reporters: {
                console: {
                    colors: true,        // (0|false)|(1|true)|2 
                    cleanStack: 1,       // (0|false)|(1|true)|2|3 
                    verbosity: 4,        // (0|false)|1|2|3|(4|true) 
                    listStyle: "indent", // "flat"|"indent" 
                    activity: false
                },
            },
            // add custom Jasmine reporter(s) 
            customReporters: []
        },
        your_target: {
            options: {
                useHelpers: true
            },
            specs: [
                "spec/unit/server/**",
            ],
            helpers: [
            ]
        }
    },



  });



  //--LOADING TASKS--
  //testing
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
  //grunt
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //building
  grunt.loadNpmTasks('grunt-browserify');
  



  //--REGISTERING TASKS--
  //default task
  grunt.registerTask('default', ['browserify']);
  //build
  grunt.registerTask('b', ['build']);
  grunt.registerTask('build', ['browserify']);
  //test
  grunt.registerTask('test', ['karma:unit', 'jasmine_nodejs']);
  grunt.registerTask('test_unit', ['karma:unit']);
  grunt.registerTask('test_server', ['jasmine_nodejs']);
  

};