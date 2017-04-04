
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
                                {   url: "doc/angular/1_introduction.htm",
                                    name: "Introduction",
                                },  
                                {   url: "doc/angular/2_gettingStarted.htm",
                                    name: "Getting Started",
                                },  
                                {   url: "doc/angular/3_simpleApp.htm",
                                    name: "Creating a simple app",
                                },  
                                {   url: "doc/angular/4_components.htm",
                                    name: "Angular Componments",
                                },  
                                {   url: "doc/angular/5_directives.htm",
                                    name: "Directive",
                                },  
                                {   url: "doc/angular/6_controllers.htm",
                                    name: "Controller",
                                },  
                                {   url: "doc/angular/7_services.htm",
                                    name: "Service",
                                },  
                                {   url: "doc/angular/8_factories.htm",
                                    name: "Factory",
                                },  
                                {   url: "doc/angular/9_filters.htm",
                                    name: "Filter",
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
                                {   url: "doc/node/1_introduction.htm",
                                    name: "Introduction"}, 
                                {   url: "doc/node/2_setup.htm",
                                    name: "Setup & config"}, 
                                {   url: "doc/node/3_creatingSimple.htm",
                                    name: "Creating a simple server"} 
                            ]
                    },
                    {   
                        name: "Automation",
                        url: "description",
                        graphData: forceGraphCollectionsService.automation,
                        data: [     
                                {   url: "description",
                                    name: 'Overview',
                                    graphData: forceGraphCollectionsService.angular,   
                                },  
                                {   url: "doc/automation/1_introduction.htm",
                                    name: "Introduction",
                                },  
                                {   url: "doc/automation/2_grunt.htm",
                                    name: "Grunt - Intro",
                                },  
                                {   url: "doc/automation/3_gruntBrowserify.htm",
                                    name: "Grunt - Browserify - Bundling app",
                                },  
                                {   url: "doc/automation/4_jenkinsIntro.htm",
                                    name: "Jenkins - Intro",
                                },  
                                {   url: "doc/automation/5_jenkinsConfig.htm",
                                    name: "Jenkins - Config",
                                },  
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
                                {   url: "doc/d3/1_introduction.htm",
                                    name: 'D3 - Intro'}
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
                                {   url: "doc/database/1_introduction.htm",
                                    name: 'MongoDB - Intro'},
                                {   url: "doc/database/2_setup.htm",
                                    name: 'Setup & Config'},
                                {   url: "doc/database/3_tools.htm",
                                    name: 'MongoDB - tools'}
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
                                {   url: "doc/git/1_introduction.htm",
                                    name: 'Introduction'},
                                {   url: "doc/git/2_setup.htm",
                                    name: 'Setup'},
                                {   url: "doc/git/3_commands.htm",
                                    name: 'Git - Commands'}
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