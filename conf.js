

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');


var reporter = new HtmlScreenshotReporter({
  dest: 'coverage/e2e/screenshots',
  filename: 'my-report.html',
  showSummary: true,
  showConfiguration: true,
  reportTitle: "Integration Report",

  pathBuilder: function(currentSpec, suites, browserCapabilities) {
      // will return chrome/your-spec-name.png
    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
  },
});


exports.config = {


  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  //  multiCapabilities: [
  //     {
  //     browserName: 'chrome',
  //     'chromeOptions': {
  //         args: ['--test-type', 'incognito=true', 'start-maximized']
  //     }}
  //   ],

  drivers: {
    chrome: {
      version: '2.28',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
  },


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec/e2e/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

};
