// Karma configuration
// Generated on Mon Feb 22 2016 14:51:32 GMT+0000 (GMT Standard Time)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine'  ], 

    /* plugins: [      
      'karma-ejs-preprocessor'
    ], */


    // list of files / patterns to load in the browser
    files: [   //load files in to be tested, covered etc
         'app/client/public/libs.js',
         'app/client/public/app.js',

         'spec/unit/client/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       'app/client/public/app.js' : ['coverage'],
    //    '**/*.ejs': ['ejs']
    },
    
    // ejsOptions: {
    //     parentPath: 'app/client/src/directives/templates/',
    // },    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: [ 'progress', 'coverage', 'story', 'dots','junit' ],    ///  'progress', 'coverage'  'spec'
    reporters: [ 'progress', 'coverage' ],    ///  'progress', 'coverage'  'spec'
    


    coverageReporter : {
        type : 'html', //or json
        dir : 'coverage/client'
    },


    // web server port
    port: 9876,


    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,

    });
};


/*  LEVEL OF LOGGING
    config.LOG_DISABLE
    config.LOG_ERROR
    config.LOG_WARN
    config.LOG_INFO
    config.LOG_DEBUG
*/