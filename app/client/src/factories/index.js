require('angular');

module.exports = function(app) {
  require('./databaseFactory.js')(app);

  require('./examples/exampleFactory.js')(app);
  
};