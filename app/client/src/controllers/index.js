
require('angular');

module.exports = function(app) {
  require('./mainController.js')(app);
  require('./navBarController.js')(app);

  require('./examples/exampleController.js')(app);
  
};