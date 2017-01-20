
module.exports = function(app) {
    app.controller("navController", function($scope, sharedService) {
        $scope.selected = function(){
            return sharedService.getCurrentPage()
        }
        $scope.sections = {
                home: 1,
                two: 2,
                three: 3,
        }
        $scope.isNavbuttonActive = function(s){
            if(s == $scope.selected() ){
                return true
            }else
            return false;
        }
        $scope.setSection = function(sec){
            sharedService.setCurrentPage(sec)
        }
    });
};