
module.exports = function(app) {
 
    app.directive('codeEditorDirective', [function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/codeEditorTemplate.ejs',
            link: function(scope) {


            }
        };
  }]);


};