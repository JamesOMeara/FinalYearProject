
require('angular');

module.exports = function(app) {
  require('./simpleController.js')(app);
  require('./navBarController.js')(app);
};