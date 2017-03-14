
module.exports = function(app) {
 
    app.directive('tab1Directive', [ function (databaseFactory) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab1.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};