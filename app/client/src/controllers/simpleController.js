
module.exports = function(app) {
 
    app.controller("myfirstcontroller", function($scope) {
        $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
        $scope.testVariable = 'some string'
    });

};