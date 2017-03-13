require('angular');

module.exports = function(app) {
  require('./sharedService.js')(app);
  require('./d3.js')(app);
  require('./overviewService.js')(app);
  
};