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
        singleRun: true,
        browsers: ['Chrome'],
        reporters: ['coverage', 'story', 'dots','junit']  /*'progress',  'spec'*/
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);

  
  //build
  grunt.registerTask('b', ['build']);
  grunt.registerTask('build', ['browserify']);

  //test
  grunt.registerTask('karma', ['karma:unit']);
  
  

};