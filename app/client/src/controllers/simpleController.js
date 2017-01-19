
module.exports = function(app) {
 
    app.controller("mainController", function($scope) {
        $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
        $scope.testVariable = 'some string'
    });

    app.controller("navController", function($scope) {
        $scope.selected = 1;
        $scope.sections = {
                home: 1,
                two: 2,
                three: 3,
        }
        $scope.isNavbuttonActive = function(s){
            if(s == $scope.selected){
                return true
            }else
            return false;
        }
        $scope.setSection = function(sec){
            $scope.selected = sec
        }
    });
};