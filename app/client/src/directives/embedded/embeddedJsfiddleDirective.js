
module.exports = function(app) {
 
    app.directive('embeddedJsfiddleDirective', [function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/embeddedJsfiddle.ejs',
            link: function(scope) {

            }
        };
  }]);

};