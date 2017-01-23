
module.exports = function(app) {
 
    app.directive('simpleTableDirective', ['databaseFactory', function (databaseFactory) {
        return {
            controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/simpleTable.ejs',
            link: function(scope) {

                callmethod();

                function callmethod(){
                    databaseFactory.getSomething()
                        .then(function (response) {
                            // $scope.data = response.data.data[0].name;
                            console.log('Method called')
                            scope.data = response.data.data;
                        }, function (error) {
                            scope.data = 'Unable to load data: ' + error.message;
                        });
                }
            

                scope.submit = function(firstname, lastname, age){
                    console.log('Submitted ' + firstname + ' ' + lastname)
                    obj = {
                        name : firstname,
                        lastname : lastname,
                        age : age
                    }

                    databaseFactory.postSomething('postSomething', obj)
                        .then(function (response) {
                            scope.status = 'success.';
                        }, function(error) {
                            scope.status = 'Unable to submit: ' + error.message;
                        });
                    callmethod()
                    scope.formData = {}
                }


            }
        };
  }]);


};