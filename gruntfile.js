module.exports = function(grunt) {

    
    grunt.initConfig({

    browserify: {
        

        client: {
            src: ['./app/client/app.js'],
            dest: './app/client/public/app.js',
            options: {
                external: ['angular'],
                bootstrap: ['ui-bootstrap'],
                jquery: ['jquery'],
            }
        },
        deps: {
            src: [],
            dest: './app/client/public/libs.js',
            options: {
                alias: {
                    angular: './app/client/public/lib/angular/angular.js',
                    bootstrap: ['./app/client/public/lib/angular-bootstrap/ui-bootstrap-tpls.js'],
                    // jquery: ['./app/client/public/lib/angular/jquery/dist/jquery.js'],
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);

  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('b', ['build']);
  
  

};