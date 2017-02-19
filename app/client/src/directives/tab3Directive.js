
module.exports = function(app) {
 
    app.directive('tab3Directive', [ function () {
        return {
            controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab3.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};