

require('../../node_modules/angular/angular');
var app = angular.module("app", []); 

app.controller("myfirstcontroller", function($scope) {
    $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
});