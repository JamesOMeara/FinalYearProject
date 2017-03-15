
module.exports = function(app) {
    
    app.factory('forceGraphCollectionsService', [   'overviewService', 
                                                    "angularForceGraphService", 
                                                    "nodeForceGraphService",
                                                    "automationForceGraphService",
                                                    "testingForceGraphService",
                                                    "d3ForceGraphService",
                                                    "databaseForceGraphService",
                                                    "gitForceGraphService",
                                                    "serverForceGraphService",


                                                    function( 
                                                        overviewService, 
                                                        angularForceGraphService,
                                                        nodeForceGraphService,
                                                        automationForceGraphService,
                                                        testingForceGraphService,
                                                        d3ForceGraphService,
                                                        databaseForceGraphService,
                                                        gitForceGraphService,
                                                        serverForceGraphService
                                                     ) {



            return {
                overview: overviewService,
                angular: angularForceGraphService,
                node: nodeForceGraphService,
                automation: automationForceGraphService,
                testing: testingForceGraphService,
                d3: d3ForceGraphService,
                database: databaseForceGraphService,
                git: gitForceGraphService,
                server: serverForceGraphService
            }
    }])
}
        
      