module.exports = function(grunt) {

    
    grunt.initConfig({

    browserify: {
        

        client: {
            src: ['app/client/app.js'],
            dest: 'app/client/public/app.js',
            options: {
                external: ['angular'],
            }
        },
        deps: {
            src: [],
            dest: 'public/deps.js',
            options: {
                alias: {
                    angular: './node_modules/angular/angular.js'
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

};