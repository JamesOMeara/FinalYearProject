
module.exports = function(app) {
    
    app.factory('forceGraphCollectionsService', ['overviewService', "angularForceGraphService", function( overviewService, angularForceGraphService ) {



            return {
                overview: overviewService,
                angular: angularForceGraphService
            }
    }])
}
        
      