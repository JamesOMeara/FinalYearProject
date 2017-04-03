

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlScreenshotReporter({
//   dest: 'output/screenshots',
//   filename: 'Helloworld-E2E-Report.html',
  
//   //clean folder before running tests
//   cleanDestination: true,
 
//   showSummary: true,
//   showConfiguration: true,
//   reportTitle: "Helloworld E2E Report",

//   ignoreSkippedSpecs: true,

//   captureOnlyFailedSpecs: false,
//   reportOnlyFailedSpecs: false,

//   //renames the png
//   pathBuilder: function(currentSpec, suites, browserCapabilities) {
//       // will return chrome/your-spec-name.png
//     return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
//   },
//   //creates a json object
//   // metadataBuilder: function(currentSpec, suites, browserCapabilities) {
//   //   return { id: currentSpec.id, os: browserCapabilities.get('browserName') };
//   // }
// });

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


exports.config = {


  // Setup the report before any tests start
  // beforeLaunch: function() {
  //   return new Promise(function(resolve){
  //     reporter.beforeLaunch(resolve);
  //   });
  // },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  // afterLaunch: function(exitCode) {
  //   return new Promise(function(resolve){
  //     reporter.afterLaunch(resolve.bind(this, exitCode));
  //   });
  // },
  //  multiCapabilities: [
  //     {
  //     browserName: 'chrome',
  //     'chromeOptions': {
  //         args: ['--test-type', 'incognito=true', 'start-maximized']
  //     }}
  //   ],

    // chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver',
  drivers: {
    chrome: {
      version: '2.28',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    // ie: {
    //   version: '2.53.1',
    //   arch: process.arch,
    //   baseURL: 'https://selenium-release.storage.googleapis.com'
    // },
    // firefox: {
    //   version: '0.11.1',
    //   arch: process.arch,
    //   baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    // }
  },


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec/e2e/test.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // beforeLaunch: function() {
  //     return new Promise(function(resolve){
  //       reporter.beforeLaunch(resolve);
  //     });
  // },

  // onPrepare: function() {
  //   jasmine.getEnv().addReporter(reporter);
  // },

  // afterLaunch: function(exitCode) {
  //     return new Promise(function(resolve){
  //       reporter.afterLaunch(resolve.bind(this, exitCode));
  //     });
  // },
};
