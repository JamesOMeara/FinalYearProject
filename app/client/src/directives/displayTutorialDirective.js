
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

                scope.tutorials = [
                    {   
                        name: "Home",
                        data: [     
                                {   url: "doc/blank.htm",
                                    name: 'blank'
                                }
                            ]
                    },
                    {   
                        name: "angular",
                        data: [     
                                {   url: "doc/blank.htm",
                                    name: 'blank'
                                },
                                {   url: "doc/Angular.htm",
                                    name: "Angular"} 
                            ]
                    },
                    {   
                        name: "node",
                        data: [     
                                {   url: "doc/blank.htm",
                                    name: 'blank'
                                },
                                {   url: "doc/node.htm",
                                    name: "Node"} 
                            ]
                    }
                ];

                scope.selectTutorial = function(tutorial){
                    scope.selectedTutorial = tutorial;
                }


            }
        };
  }]);


};