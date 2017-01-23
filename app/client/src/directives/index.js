

require('angular');

module.exports = function(app) {
  require('./simpleDirective.js')(app);
  require('./simpleTableDirective.js')(app);
};