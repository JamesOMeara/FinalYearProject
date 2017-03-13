
module.exports = function(app) {
 
    app.directive('displayTutorialDirective', [function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                name: "="
            },
            templateUrl: './app/client/src/directives/templates/displayTutorial.ejs',
            link: function(scope) {

                scope.selectedTutorial = "doc/blank.htm";

                scope.tutorials = [
                    {   
                        name: "Overview",
                        url: "description",
                        data: [     
                                {   url: "description",
                                    name: 'description'}
                            ]
                    },
                    {   
                        name: "Angular",
                        url: "description",
                        data: [     
                                {   url: "doc/angular/Angular.htm",
                                    name: "Walkthrough"} 
                            ]
                    },
                    {   
                        name: "Node",
                        url: "description",
                        data: [     
                                {   url: "doc/node/node.htm",
                                    name: "Walkthrough"} 
                            ]
                    },
                    {   
                        name: "Automation",
                        url: "description",
                        data: [     
                                {   url: "doc/automation/grunt/grunt.htm",
                                    name: 'Grunt'},
                                {   url: "doc/automation/jenkins/Jenkins.htm",
                                    name: "Jenkins"} 
                            ]
                    },
                    {   
                        name: "Testing",
                        url: "description",
                        data: [     
                                {   url: "doc/testing/e2e/e2e.htm",
                                    name: 'End to End Testing'},
                                {   url: "doc/testing/server/testingServer.htm",
                                    name: "Server-Side Testing"},
                                {   url: "doc/testing/client/testingClient.htm",
                                    name: "Client-Side Testing"} 
                            ]
                    },
                    {   
                        name: "D3",
                        url: "description",
                        data: [     
                                {   url: "doc/d3/d3.htm",
                                    name: 'D3'}
                            ]
                    },
                    {   
                        name: "Database",
                        url: "description",
                        data: [     
                                {   url: "doc/database/database.htm",
                                    name: 'MongoDB'}
                            ]
                    },
                    {   
                        name: "Git",
                        url: "description",
                        data: [     
                                {   url: "doc/git/GIT.htm",
                                    name: 'How To'}
                            ]
                    },
                    {   
                        name: "Server",
                        url: "description",
                        data: [     
                                {   url: "doc/ubuntu/ubuntu.htm",
                                    name: 'Amazon EC2'}
                            ]
                    }
                ];

                scope.selectTutorial = function(tutorial){
                    scope.selectedTutorial = tutorial;
                }

                scope.showDesc = function(tutorial){
                    if(tutorial === "description"){
                        return true;
                    }else{
                        return false;
                    }
                }

                scope.showDoc = function(tutorial){
                    if(tutorial === "description"){
                        return false;
                    }else{
                        return true;
                    }
                }
                


            }
        };
  }]);


};