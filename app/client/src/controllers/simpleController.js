
module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService) {


        $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
        $scope.testVariable = 'some string'

        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 

    });

};