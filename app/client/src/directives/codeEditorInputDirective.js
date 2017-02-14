


module.exports = function(app) {
 
    app.directive('codeEditorInputDirective', [ function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/codeEditorInput-template.ejs',
            link: function(scope) {

                addText();

                function addText(){
                    scope.input1 = "scope.input1 + 12"
                }

            }
        };
  }]);


};