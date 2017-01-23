
module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService, databaseFactory) {

        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 

    });

};