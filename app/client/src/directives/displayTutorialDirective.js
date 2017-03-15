
module.exports = function(app) {
 
    app.directive('displayTutorialDirective', [ "forceGraphCollectionsService" , function (forceGraphCollectionsService) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                name: "="
            },
            templateUrl: './app/client/src/directives/templates/displayTutorial.ejs',
            link: function(scope, $scope, forceGraphController) {

                scope.selectedTutorial = {  name:"Error",
                                            url: "doc/blank.htm"
                                        };  

                scope.tutorials = [
                    {   
                        name: "Overview",
                        url: "description",
                        graphData: forceGraphCollectionsService.overview,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.overview,
                                }
                            ]
                    },
                    {   
                        name: "Angular",
                        url: "description",
                        graphData: forceGraphCollectionsService.angular,
                        data: [   
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.angular,   
                                },  
                                {   url: "doc/angular/Angular.htm",
                                    name: "Walkthrough",
                                } 
                            ]
                    },
                    {   
                        name: "Node",
                        url: "description",
                        graphData: forceGraphCollectionsService.node,
                        data: [    
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.node,   
                                }, 
                                {   url: "doc/node/node.htm",
                                    name: "Walkthrough"} 
                            ]
                    },
                    {   
                        name: "Automation",
                        url: "description",
                        graphData: forceGraphCollectionsService.automation,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.automation,   }, 
                                {   url: "doc/automation/grunt/grunt.htm",
                                    name: 'Grunt'},
                                {   url: "doc/automation/jenkins/Jenkins.htm",
                                    name: "Jenkins"} 
                            ]
                    },
                    {   
                        name: "Testing",
                        url: "description",
                        graphData: forceGraphCollectionsService.testing,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.testing,   }, 
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
                        graphData: forceGraphCollectionsService.d3,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.d3,   }, 
                                {   url: "doc/d3/d3.htm",
                                    name: 'D3'}
                            ]
                    },
                    {   
                        name: "Database",
                        url: "description",
                        graphData: forceGraphCollectionsService.database,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.database,   }, 
                                {   url: "doc/database/database.htm",
                                    name: 'MongoDB'}
                            ]
                    },
                    {   
                        name: "Git",
                        url: "description",
                        graphData: forceGraphCollectionsService.git,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.git,   }, 
                                {   url: "doc/git/GIT.htm",
                                    name: 'How To'}
                            ]
                    },
                    {   
                        name: "Server",
                        url: "description",
                        graphData: forceGraphCollectionsService.server,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.server,   }, 
                                {   url: "doc/ubuntu/ubuntu.htm",
                                    name: 'Amazon EC2'}
                            ]
                    }
                ];

                scope.selectTutorial = function(tutorial){
                    scope.selectedTutorial = tutorial;
                }

                scope.showDesc = function(tutorial){
                    console.log('called')
                    console.log(tutorial)
                    if(tutorial.url === "description"){
                        return true;
                    }else{
                        return false;
                    }
                }

                scope.showDoc = function(tutorial){
                    if(tutorial.url === "description"){
                        return false;
                    }else{
                        return true;
                    }
                }
                


            }
        };
  }]);


};