require('angular');

module.exports = function(app) {
  require('./sharedService.js')(app);
  require('./d3.js')(app);
  require('./forceGraphCollectionsService.js')(app);
  
  require('./forceGraphs/overviewService.js')(app);
  require('./forceGraphs/angularForceGraphService.js')(app);
  require('./forceGraphs/nodeForceGraphService.js')(app);
  require('./forceGraphs/automationForceGraphService.js')(app);
  require('./forceGraphs/testingForceGraphService.js')(app);
  require('./forceGraphs/d3ForceGraphService.js')(app);
  require('./forceGraphs/databaseForceGraphService.js')(app);
  require('./forceGraphs/gitForceGraphService.js')(app);
  require('./forceGraphs/serverForceGraphService.js')(app);

  
};