
module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService, databaseFactory) {

        

        $scope.something = ["Printing ", 'out', 'something', 'from', 'an', 'angular', 'controlller'];
        $scope.testVariable = 'some string'

        // $scope.currentPage = sharedService.getCurrentPage()
        
        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 


        getSomethingFromDatabase()

        function getSomethingFromDatabase(){
            databaseFactory.getSomething()
                .then(function (response) {
                    $scope.somethingFromDatabase = response.data.data[0].name;
                }, function (error) {
                    $scope.somethingFromDatabase = 'Unable to load data: ' + error.message;
                });
        } 

        sendSomethingToDatabase()

        function sendSomethingToDatabase() {
            var something = {
                name: 'james data',
            };
            databaseFactory.postSomething('postSomething', { name : 'james'})
                .then(function (response) {
                    $scope.status = 'success.';
                }, function(error) {
                    $scope.status = 'Unable to submit: ' + error.message;
                });
        }

    });

};