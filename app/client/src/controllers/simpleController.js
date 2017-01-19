
module.exports = function(app) {
 
    app.controller("mainController", function($scope) {

        // $scope.sections = {
        //     home: "home",
        //     firstPage: "firstpage"
        // };
        $scope.section = "not changed yet"
        // $scope.setSection = function(sec){
        //     $scope.section = sec
        // }


        $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
        $scope.testVariable = 'some string'
    });

    app.controller("navController", function($scope) {

        $scope.sections = {
            home: "home",
            firstPage: "firstpage"
        };
        $scope.section = $scope.sections.firstPage
        $scope.setSection = function(sec){
            $scope.section = sec
        }


    });

};