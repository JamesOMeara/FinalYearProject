
require('angular');

var app = angular.module("app", [ 
    require('./src/source'),
]);

app.controller("myfirstcontroller", function($scope) {
    $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
    $scope.testVariable = 'some string'
});

app.directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});

require('./src/directives/templates/templates.js')
