
module.exports = function(app) {
 
    app.directive('tab2Directive', [ function (databaseFactory) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab2.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};