
module.exports = function(app) {
 
    app.controller("exampleController", function($scope) {

     
        $scope.exampleSomething = function(){
            return "String from an example controller"
        } 


    });

};