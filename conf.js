
// An example configuration file.
exports.config = {
//   directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

//   drivers: {
//     chrome: {
//       version: '2.25',
//       arch: process.arch,
//       baseURL: 'https://chromedriver.storage.googleapis.com'
//     },
//     ie: {
//       version: '2.53.1',
//       arch: process.arch,
//       baseURL: 'https://selenium-release.storage.googleapis.com'
//     },
//     firefox: {
//       version: '0.11.1',
//       arch: process.arch,
//       baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
//     }
//   },


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec/e2e/test.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
