
module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService, databaseFactory) {

        $scope.showTab = function(num){
            if($scope.currentPage() == num){
                return true;
            }else{
                return false
            }
        }   

        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 

        $scope.myText = 


        '<html>'+
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>'+
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script>'+
        '<body>'+
        '<div ng-app="Appp" ng-controller="myCtrl">'+
        '<p ng-bind-html="myText"></p>'+
        '</div>'+
        '<script>'+
        'var app = angular.module("Appp", ["ngSanitize"]);'+
        'app.controller("myCtrl", function($scope) {'+
        '   $scope.myText = "My name is: <h1>John Doe</h1>";'+
        '});'+
        '</script>'+
        '<p><b>Note:</b> This example includes the "angular-sanitize.js",'+
        'which has functions for removing potentially dangerous tokens from the HTML.</p>'+
        '</body>'+
        '</html>';

    });

};