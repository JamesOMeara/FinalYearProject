
module.exports = function(app) {
 
    app.directive('displayTutorialDirective', [function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {
                name: "="
            },
            templateUrl: './app/client/src/directives/templates/displayTutorial.ejs',
            link: function(scope) {
                console.log('test', scope.myvar)

                scope.selectedTutorial = "doc/blank.htm";

                scope.tutorials = {
                    blank: "doc/blank.htm",
                    angular: "doc/Angular.htm",
                    node: "doc/node.htm"
                }

                scope.selectTutorial = function(tutorial){
                    scope.selectedTutorial = tutorial;
                }


            }
        };
  }]);


};