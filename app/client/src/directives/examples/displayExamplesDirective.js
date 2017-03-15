
module.exports = function(app) {
 
    app.directive('displayExamplesDirective', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                name: "="
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/displayExamplesTemplate.ejs',
            link: function(scope) {

      


            }
        };
  }]);


};