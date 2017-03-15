module.exports = function(grunt) {

var pkg = require('./package.json')
    
grunt.initConfig({
    
    
    browserify: {
        client: {
            src: ['./app/client/app.js'],
            dest: './app/client/public/app.js',
            options: {
                // external:{
                //     angular: ['angular'],
                //     bootstrap: ['ui-bootstrap'],
                //     // jquery: ['jquery'],
                //     // "templates": [ pkg.browser.templates ],
                // }
                external:[
                    'angular',
                    'bootstrap',
                    "templates",
                    "angular-sanitize"
                ]
            }
        },
        templates: {
            src: [ ],
            dest: './app/client/public/templates.js',
            options: {
                browserifyOptions: {				 
                    paths: ['./node_modules', './app/client/public/lib/', '.']
                },
                alias: [
                    'templates',
                    // "./src/directives/templates/templates.js": ['./app/client/src/directives/templates/templates.js']
                ]
            }
        },
        deps: {
            src: [],
            dest: './app/client/public/libs.js',
            options: {
                browserifyOptions: {				 
                    paths: ['./node_modules', './app/client/public/lib/', '.']
                },
                alias: [
                    // angular: './app/client/public/lib/angular/angular.js',
                    // bootstrap: ['./app/client/public/lib/angular-bootstrap/ui-bootstrap-tpls.js'],
                    // jquery: ['./app/client/public/lib/jquery/dist/jquery.js'],
                    'angular',
                    "angular-sanitize"           
                    // 'templates',
                    // "./src/directives/templates/templates.js": ['./app/client/src/directives/templates/templates.js']
                ]
            }
        },
    },
    ngtemplates:  {
        app:        {
            src:      './app/client/src/directives/templates/**/*.ejs',
            dest:     pkg.browser.templates, //'./app/client/src/directives/templates/templates.js',
            options:  {
                // prefix: '',
            }
        }
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
      files: ['./app/client/src/**/*.js', './app/server/**/*.js', './app/client/src/**/*.ejs', 'gruntfile.js'],
      tasks: ['build']
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            port: 9999,
            singleRun: true,
            browsers: ['Chrome'],
            logLevel: 'ERROR'
        },
        headless: {
            configFile: 'karma.conf.js',
            port: 9999,
            singleRun: true,
            browsers: ['PhantomJS'],
            logLevel: 'DEBUG'
        },
        dev: {
            configFile: 'karma.conf.js',
            port: 9999,
            singleRun: false,
            browsers: ['Chrome'],
            // logLevel: 'config.LOG_DEBUG'
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
    protractor: {
        // tasks: ['node_modules/grunt-protractor-runner/scripts/webdriver-manager-update'],
        run:{
            options: {
                webdriverManagerUpdate: true,
                configFile: "conf.js", // Default config file 
                // configFile: "node_modules/protractor/example/conf.js", // Default config file 
                webdriverManagerUpdate: true,
                
                keepAlive: true, // If false, the grunt process stops when the test fails. 
                noColor: false, // If true, protractor will not use colors in its output. 
                args: {
                }
            },
        }
    },
    shell: {
        test: {
            command: [
                'chmod 600 deploy/build',
                'chmod +x deploy/build',
                'deploy/build'
            ].join('&&')
        },
    },

  });

  //--LOADING TASKS--
  //testing
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  //grunt
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //building
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-angular-templates');


  //--REGISTERING TASKS--
  //default task
  grunt.registerTask('default', ['browserify']);
  //build
  grunt.registerTask('b', ['build']);
  grunt.registerTask('build', ['ngtemplates', 'browserify']);
  //test
  grunt.registerTask('test', ['test_unit', 'test_server', 'test_e2e']);
  grunt.registerTask('test_unit', ['karma:unit']);
  grunt.registerTask('test_server', ['jasmine_nodejs']);
  grunt.registerTask('test_e2e', ['protractor']);
  
  

};