(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

require('angular');

var app = angular.module("app", [ 
    require('./src/source'),
    require('angular-sanitize')
    

]);

require('templates')

},{"./src/source":31,"angular":"angular","angular-sanitize":"angular-sanitize","templates":"templates"}],2:[function(require,module,exports){

require('angular');

module.exports = function(app) {
  require('./mainController.js')(app);
  require('./navBarController.js')(app);
};
},{"./mainController.js":3,"./navBarController.js":4,"angular":"angular"}],3:[function(require,module,exports){

module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService, databaseFactory) {

        $scope.showTab = function(num){
            if($scope.currentPage() == num){
                return true;
            }else{
                return false
            }
        }   

        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 

        $scope.salesData = [
            {hour: 1,sales: 54},
            {hour: 2,sales: 66},
            {hour: 3,sales: 77},
            {hour: 4,sales: 70},
            {hour: 5,sales: 60},
            {hour: 6,sales: 63},
            {hour: 7,sales: 55},
            {hour: 8,sales: 47},
            {hour: 9,sales: 55},
            {hour: 10,sales: 30}
        ];

        $scope.load = function() {
            console.log("Hello")
        };

    });

};
},{}],4:[function(require,module,exports){

module.exports = function(app) {
    app.controller("navController", function($scope, sharedService) {
        $scope.selected = function(){
            return sharedService.getCurrentPage()
        }
        $scope.sections = {
                home: 1,
                two: 2,
                three: 3,
        }
        $scope.isNavbuttonActive = function(s){
            if(s == $scope.selected() ){
                return true
            }else
            return false;
        }
        $scope.setSection = function(sec){
            sharedService.setCurrentPage(sec)
        }
    });
};
},{}],5:[function(require,module,exports){

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
},{}],6:[function(require,module,exports){

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
},{}],7:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('embeddedPlunkerDirective', [function () {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/embeddedPluker.ejs',
            link: function(scope) {

            }
        };
  }]);

};
},{}],8:[function(require,module,exports){

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
},{}],9:[function(require,module,exports){

module.exports = function(app) {
 
  app.directive('forceGraphDirective', [ "d3Service", function ( d3Service ) {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      scope: {
          data: '=',
      },
      templateUrl: './app/client/src/directives/templates/forceGraphTemplate.ejs',
      link: function(scope, element, attrs) {

        d3Service.d3().then(function(d3) {

            //nodes and links (data)
            var nodes = {};
            var links = [];

            //width and height of force graph
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
            var height = 800;

            //componments for d3
            var force = {}
            var svg = {}
            var link = {}
            var node = {}
            var tooltip = {}

            //setup data, if no data passed in create an empty array/object
            nodes = (scope.data != undefined ? scope.data.elements : {} );
            links = (scope.data !== undefined ? scope.data.links : []);

            //setup a watch for new data
            scope.$watch('data', function(newValue, oldValue) {
                if (newValue){
                    restart(newValue)
                }else{
                    console.log("no new value")
                }
            }, true);
            

            //only draw if new data is passed in 

                initSVG();
                initForce();
                drawLinks();
                drawNodes();
                drawTooltip();

                // svg = d3.select("#graph").append("svg")
                //     .attr("width", '100%')
                //     .attr("height", height);

                // force = d3.layout.force()
                //     .nodes(d3.values(nodes))
                //     .links(links)
                //     .size([width, height])
                //     .linkDistance(70)
                //     .charge(-1000)
                //     .on("tick", tick)
                //     .start();

                // link = svg.selectAll(".link")
                //     .data(force.links())
                //     .enter().append("line")
                //     .attr("class", "link");
                
                // node = svg.selectAll(".node")
                //     .data(force.nodes())
                //     .enter()
                //     .append("g")
                //     .attr("class", "node")
                //     .on("mouseover", mouseover)
                //     .on("mouseout", mouseout)
                //     .on("mousemove", mousemove)
                //     .call(force.drag);

                // tooltip = d3.select("#graph")
                //     .append('div')
                //     .attr("class", "tooltip") 
                //     .style("opacity", 0)

                // node.append("circle")
                //     .style('fill', function(d) { return d.group; })
                //     .attr('r', function(d) { return d.size; });

                // node.append("text")
                //     .attr("x", 12)
                //     .attr("dy", ".35em")
                //     .text(function(d) { return d.name; });

                function initSVG(){
                    svg = d3.select("#graph").append("svg")
                        .attr("width", '100%')
                        .attr("height", height);
                }

                function initForce(){
                    force = d3.layout.force()
                        .nodes(d3.values(nodes))
                        .links(links)
                        .size([width, height])
                        .linkDistance(70)
                        .charge(-1000)
                        .on("tick", tick)
                        .start();
                }

                function drawLinks(){
                    link = svg.selectAll(".link")
                        .data(force.links())
                        .enter().append("line")
                        .attr("class", "link");
                }

                function drawNodes(){
                    node = svg.selectAll(".node")
                        .data(force.nodes())
                        .enter()
                        .append("g")
                        .attr("class", "node")
                        .on("mouseover", mouseover)
                        .on("mouseout", mouseout)
                        .on("mousemove", mousemove)
                        .call(force.drag);

                    node.append("circle")
                        .style('fill', function(d) { return d.group; })
                        .attr('r', function(d) { return d.size; });

                    node.append("text")
                        .attr("x", 12)
                        .attr("dy", ".35em")
                        .text(function(d) { return d.name; });
                }

                function drawTooltip(){
                    tooltip = d3.select("#graph")
                        .append('div')
                        .attr("class", "tooltip") 
                        .style("opacity", 0)
                }

                function tick() {
                    link
                        .attr("x1", function(d) { return d.source.x; })
                        .attr("y1", function(d) { return d.source.y; })
                        .attr("x2", function(d) { return d.target.x; })
                        .attr("y2", function(d) { return d.target.y; });
                    node
                        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
                }

                function mouseover(d) {
                    tooltip	
                        .html('<p>'+d.name+'</p>' + '<p>'+d.desc+'</p>' )	 
                    tooltip
                        .transition(500)
                        .style("opacity", .9)
                        .style("visibility", "visible")

                    node
                        .transition(500)
                        .style("opacity", function(o) {
                            return isConnected(o, d) ? 1.0 : 0.2 ;
                        })
                        .selectAll('circle')
                        .style("fill", function(o) {
                            if (isConnectedAsTarget(o, d) && isConnectedAsSource(o, d) ) {
                            fillcolor = 'green';
                            } else if (isConnectedAsSource(o, d)) {
                            fillcolor = 'red';
                            } else if (isConnectedAsTarget(o, d)) {
                            fillcolor = 'blue';
                            } else if (isEqual(o, d)) {
                            fillcolor = "hotpink";
                            } else {
                            fillcolor = '#000';
                            }
                            return fillcolor;
                        })

                    link
                        .transition(500)
                        .style("stroke-opacity", function(o) {
                            return o.source === d || o.target === d ? 1 : 0.2;
                        })
                }

                
                function mousemove(d) {
                    tooltip
                        .style("left", (d3.event.pageX + 50) + "px")
                        .style("top", (d3.event.pageY + 50) + "px");
                }
                
                function mouseout(d) {

                    tooltip
                        .transition(500)
                        .style("opacity", 0)
                        .style("visibility", "hidden");

                    node
                        .transition(500)
                        .style("opacity", 1)
                        .selectAll('circle')
                        .style("fill", function(o) {
                            return o.group;
                        });
                    link
                        .transition(500)
                        .style("stroke-opacity", 1)
                }

                function node_radius(d) { return Math.pow(40.0 * d.size, 1/3); }

                function isConnected(a, b) {
                    return isConnectedAsTarget(a, b) || isConnectedAsSource(a, b) || a.name == b.name;
                }

                function isConnectedAsSource(a, b) {
                    return linkedByIndex[a.name + "," + b.name];
                }

                function isConnectedAsTarget(a, b) {
                    return linkedByIndex[b.name + "," + a.name];
                }

                function isEqual(a, b) {
                    return a.name == b.name;
                }

                var linkedByIndex = {};
                    links.forEach(function(d) {
                    linkedByIndex[d.source.name + "," + d.target.name] = true;
                });

                

                function restart(newValue){
                    //reset the nodes and links
                    nodes = {};
                    links = [];
                    d3.timer(force.resume);
                    
                    //get the new data passsed in 
                    nodes = newValue.elements 
                    links = newValue.links 

                    //remove all componments 
                    svg.selectAll('g').remove();
                    svg.selectAll('.node').remove();
                    svg.selectAll('.link').remove();

                    //and begin drawing again
                    initForce();
                    drawLinks();
                    drawNodes();
                    drawTooltip();
                }

        });
      }
    };
  }]);


  

};






     

        // var groups= {
        //     Highlevel: "blue",
        //     t1: "red",
        //     t2: 'red'
        // };

        // var sizes = {
        //     large: 15,
        //     medium: 10,
        //     small: 5
        // }



 // var elements = overviewService.elements;
            // {
            //     'singlePage': {
            //         name: 'Single Page Web App',
            //         group: 'red',
            //         size: sizes.large,
            //         desc: "A simple single Webpage with no redirects etc.."
            //     },
            //     'angular': {
            //         name: 'Angular',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Strong clientSide framework for responsive apps"
            //     },
            //     'node': {
            //         name: 'Node',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Server side javascript framework"
            //     },
            //      'javascript': {
            //         name: 'Javascript',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Programming language"
            //     },
            //      'client': {
            //         name: 'Client',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Client side of an app (What end user interacts with)"
            //     },
            //      'server': {
            //         name: 'Server',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Server side of app, interacts with database and requests from client"
            //     },
            //      'componments': {
            //         name: 'Componments',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Angular componments"
            //     },
            //     'directive': {
            //         name: 'Directive',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Design and create custom elements to be used in your app"
            //     },
            //     'service': {
            //         name: 'Service',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Pass fucntionaliy between Angular controllers"
            //     },
            //     'filter': {
            //         name: 'Filter',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Angular componment to filter data dynamically in the browser"
            //     },
            //     'factory': {
            //         name: 'Factory',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Componment to send/recieve data from server etc"
            //     },
            //     'controller': {
            //         name: 'Controller',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Busisness logic stored here"
            //     },
            //     'busisnessLogic': {
            //         name: 'Busisness Logic',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Fucntions that will be used extensivley and provide functionality throughout the app."
            //     },
            //     'customElements': {
            //         name: 'Custom Elements',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Elements are defined by Directives, which include all logic inside"
            //     },
            //     'processes': {
            //         name: 'Processes',
            //         group: 'red',
            //         size: sizes.large,
            //         desc: "Software processes from start to finish"
            //     },
            //     'design': {
            //         name: 'design',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Plan out the look & feel of the app."
            //     },
            //     'development': {
            //         name: 'Development',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "The process of making the app."
            //     },
            //     'testing': {
            //         name: 'Testing',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Process of testing code and output of app."
            //     },
            //     'building': {
            //         name: 'Building',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "building it locally, or on a server, "
            //     },
            //     'deployment': {
            //         name: 'Deployment',
            //         group: 'orange',
            //         size: sizes.medium,
            //         desc: "Shipping hte final working code to a server and running it continually"
            //     },
            //     'ci': {
            //         name: 'Continous Integration',
            //         group: 'red',
            //         size: sizes.medium,
            //         desc: "Continually pulling from Source Control and performing jobs"
            //     },
            //     'buildserver': {
            //         name: 'Build Server',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Server dedicated to running the continous integration tasks"
            //     },
            //     'jenkins': {
            //         name: 'Jenkins',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "A platform to manage jobs for continous integration"
            //     },
            //     // 'clientTesting': {
            //     //     name: 'Client Side',
            //     //     group: 'grey',
            //     //     size: sizes.medium,
            //     //     desc: ""
            //     // },
            //     // 'serverTesting': {
            //     //     name: 'Server Side',
            //     //     group: 'grey',
            //     //     size: sizes.medium,
            //     //     desc: ""
            //     // },
            //     'karma': {
            //         name: 'Karma',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "A test runner for client side quests"
            //     },
            //     'coverage': {
            //         name: 'Code Coverage',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Displaying code coverage of tests to source code"
            //     },
            //     'testRunner': {
            //         name: 'Test Runner',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: ""
            //     },
            //     'taskRunner': {
            //         name: 'Task Runner',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "A task runner to manage client side tests"
            //     },
            //     'grunt': {
            //         name: 'Grunt',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Task runner for an app"
            //     },
            //     "buildTasks": {
            //         name: 'Build Tasks',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Task or jobs that are run on a build server (Jenkins)"
            //     },
            //     "nightlyTask": {
            //         name: 'Nightly',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Task or Job that will be run nightly, so that the output will be ready for start of each day"
            //     },
            //     "buildTask": {
            //         name: 'Build',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Task to pull from source control and carry out a build"
            //     },
            //     "testTask": {
            //         name: 'Test',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Carry out various tests on the build"
            //     },
            //     "deployTask": {
            //         name: 'Deploy',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Task that will execute deployment to the deployment server"
            //     },
            //     "jasmine": {
            //         name: 'Jasmine',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "jasmine is a Javascript framework for testing"
            //     },
            //     "sourceControl": {
            //         name: 'Source Control',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "Where all code will be stored and controlled"
            //     },
            //     "git": {
            //         name: 'GIT',
            //         group: 'grey',
            //         size: sizes.medium,
            //         desc: "A platform for source code management"
            //     },

               
               
            // }
            // var links = overviewService.links;
            
            // [
            //     {source: elements.singlePage        ,target: elements.angular   },
            //     {source: elements.singlePage        ,target: elements.node   },
            //     {source: elements.singlePage        ,target: elements.javascript   },
            //     // {source: elements.singlePage        ,target: elements.processes   },
                
            //     {source: elements.angular           ,target: elements.client   },
            //     {source: elements.angular           ,target: elements.componments   },
            //     {source: elements.angular           ,target: elements.componments   },
                
            //     {source: elements.node              ,target: elements.server   },

            //     {source: elements.javascript           ,target: elements.angular   },
            //     {source: elements.javascript           ,target: elements.node   },
                
            //     {source: elements.componments       ,target: elements.directive   },
            //     {source: elements.componments       ,target: elements.service   },
            //     {source: elements.componments       ,target: elements.filter   },
            //     {source: elements.componments       ,target: elements.factory   },
            //     {source: elements.componments       ,target: elements.controller   },

            //     {source: elements.controller       ,target: elements.busisnessLogic   },
                
            //     {source: elements.directive       ,target: elements.customElements   },

            //     {source: elements.processes       ,target: elements.development   },
            //     {source: elements.processes       ,target: elements.testing   },
            //     {source: elements.processes       ,target: elements.building   },
            //     {source: elements.processes       ,target: elements.deployment   },
            //     {source: elements.processes       ,target: elements.design   },
                
            //     {source: elements.development       ,target: elements.sourceControl   },

            //     {source: elements.sourceControl       ,target: elements.git   },
                
            //     {source: elements.ci       ,target: elements.building   },
            //     {source: elements.ci       ,target: elements.deployment   },
            //     {source: elements.ci       ,target: elements.jenkins   },
            //     {source: elements.ci       ,target: elements.karma   },
            //     {source: elements.ci       ,target: elements.grunt   },
            //     {source: elements.ci       ,target: elements.testing   },
                
            //     {source: elements.jenkins       ,target: elements.buildserver   },
            //     {source: elements.jenkins       ,target: elements.buildTasks   },
            //     {source: elements.buildTasks       ,target: elements.buildTask   },
            //     {source: elements.buildTasks       ,target: elements.testTask   },
            //     {source: elements.buildTasks       ,target: elements.nightlyTask   },
            //     {source: elements.buildTasks       ,target: elements.deployTask   },
                
            //     {source: elements.testing       ,target: elements.server   },
            //     {source: elements.testing       ,target: elements.client   }, 
            //     {source: elements.testing       ,target: elements.jasmine   }, 
            //     {source: elements.testing       ,target: elements.coverage   }, 
                
                
                
            //     {source: elements.grunt       ,target: elements.taskRunner   },
            //     {source: elements.grunt       ,target: elements.building   },
                
            //     {source: elements.client       ,target: elements.karma   },
                
            //     {source: elements.karma       ,target: elements.testRunner   },
                
            // ];

            // var nodes = overviewService.elements
            
},{}],10:[function(require,module,exports){


require('angular');

module.exports = function(app) {
  require('./navDirective.js')(app);
  require('./simpleTableDirective.js')(app);

  require('./tabs/tab1Directive.js')(app);
  require('./tabs/tab2Directive.js')(app);
  require('./tabs/tab3Directive.js')(app);
  
  require('./displayTutorialDirective.js')(app);
  require('./forceGraphDirective.js')(app);

  require('./embedded/embeddedPlunkerDirective.js')(app);
  require('./embedded/embeddedJsfiddleDirective.js')(app);

  require('./examples/displayExamplesDirective.js')(app);
  
  
};
},{"./displayTutorialDirective.js":5,"./embedded/embeddedJsfiddleDirective.js":6,"./embedded/embeddedPlunkerDirective.js":7,"./examples/displayExamplesDirective.js":8,"./forceGraphDirective.js":9,"./navDirective.js":11,"./simpleTableDirective.js":12,"./tabs/tab1Directive.js":13,"./tabs/tab2Directive.js":14,"./tabs/tab3Directive.js":15,"angular":"angular"}],11:[function(require,module,exports){

module.exports = function(app) {

  app.directive('navDirective', [function () {
    return {
      controller: 'navController' ,
      restrict: 'E',
      replace: true,
      scope: {

      },
      templateUrl: './app/client/src/directives/templates/navDirective.ejs',
      link: function(scope) {

      }
    };
  }]);


};
},{}],12:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('simpleTableDirective', ['databaseFactory', function (databaseFactory) {
        return {
            // controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/simpleTable.ejs',
            link: function(scope) {

                callmethod();

                function callmethod(){
                    databaseFactory.getSomething()
                        .then(function (response) {
                            console.log('find all Method called')
                            scope.data = response.data.data;
                            console.log(response.data)
                        }, function (error) {
                            scope.data = 'Unable to load data: ' + error.message;
                        });
                }
            

                scope.submit = function(firstname, lastname, age){
                    console.log('Submitted ' + firstname + ' ' + lastname)
                    obj = {
                        name : firstname,
                        lastname : lastname,
                        age : age
                    }

                    databaseFactory.postSomething('postSomething', obj)
                        .then(function (response) {
                            console.log("submitted")
                            scope.status = 'success.';
                        }, function(error) {
                            scope.status = 'Unable to submit: ' + error.message;
                        });
                    callmethod()
                    scope.formData = {}
                }

                scope.delete = function(firstname, lastname, age){
                    console.log('Submitted ' + firstname + ' ' + lastname)
                    obj = {
                        name : firstname,
                        lastname : lastname,
                        age : age
                    }

                    databaseFactory.deleteSomething('deleteSomething', obj)
                        .then(function (response) {
                            scope.status = 'success.';
                        }, function(error) {
                            scope.status = 'Unable to submit: ' + error.message;
                        });
                    callmethod()
                }


            }
        };
  }]);


};
},{}],13:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab1Directive', [ function (databaseFactory) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab1.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};
},{}],14:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab2Directive', [ function (databaseFactory) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab2.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};
},{}],15:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab3Directive', [ function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/tab3.ejs',
            link: function(scope) {
                scope.selectedEditor = 1;
                
                scope.editor = {
                    plunker: 1,
                    jsfiddle: 2
                }

                scope.selectEditor = function(num){
                    scope.selectedEditor = num
                }

                scope.showEditor = function(num){
                    if(num == scope.selectedEditor){
                        return true;
                    }else{
                        return false;
                    }
                }
        
            }
        };
  }]);


};
},{}],16:[function(require,module,exports){

module.exports = function(app) {
 
    app.factory("databaseFactory", function($http) {
        var url = '/';
        var factory = {};

        factory.getSomething = function () {
            return $http.get(url + 'getSomething')
        };
        factory.postSomething = function (url, something) {
            return $http.post(url, something);
        };
        factory.deleteSomething = function (url, something) {
            return $http.post(url, something);
        };


        return factory;
       
    });

};
},{}],17:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./databaseFactory.js')(app);
};
},{"./databaseFactory.js":16,"angular":"angular"}],18:[function(require,module,exports){
module.exports = function(app) {
    
    app.factory('d3Service', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope) {
      var d = $q.defer();

      function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(function() {
          d.resolve(window.d3);
        });
      }
      // Create a script tag with d3 as the source
      // and call our onScriptLoad callback when it
      // has been loaded
      var scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'http://d3js.org/d3.v3.min.js';
      scriptTag.onreadystatechange = function() {
        if (this.readyState == 'complete') onScriptLoad();
      }
      scriptTag.onload = onScriptLoad;

      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

      return {
        d3: function() {
          return d.promise;
        }
      };
    }
  ]);

};
},{}],19:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('forceGraphCollectionsService', [   'overviewService', 
                                                    "angularForceGraphService", 
                                                    "nodeForceGraphService",
                                                    "automationForceGraphService",
                                                    "testingForceGraphService",
                                                    "d3ForceGraphService",
                                                    "databaseForceGraphService",
                                                    "gitForceGraphService",
                                                    "serverForceGraphService",


                                                    function( 
                                                        overviewService, 
                                                        angularForceGraphService,
                                                        nodeForceGraphService,
                                                        automationForceGraphService,
                                                        testingForceGraphService,
                                                        d3ForceGraphService,
                                                        databaseForceGraphService,
                                                        gitForceGraphService,
                                                        serverForceGraphService
                                                     ) {



            return {
                overview: overviewService,
                angular: angularForceGraphService,
                node: nodeForceGraphService,
                automation: automationForceGraphService,
                testing: testingForceGraphService,
                d3: d3ForceGraphService,
                database: databaseForceGraphService,
                git: gitForceGraphService,
                server: serverForceGraphService
            }
    }])
}
        
      
},{}],20:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('angularForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'angular': {
                    name: 'Angular',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Strong clientSide framework for responsive apps"
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.angular   },
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],21:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('automationForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],22:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('d3ForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],23:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('databaseForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],24:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('gitForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],25:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('nodeForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],26:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('overviewService', ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'angular': {
                    name: 'Angular',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Strong clientSide framework for responsive apps"
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                },
                 'client': {
                    name: 'Client',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Client side of an app (What end user interacts with)"
                },
                 'server': {
                    name: 'Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server side of app, interacts with database and requests from client"
                },
                 'componments': {
                    name: 'Componments',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Angular componments"
                },
                'directive': {
                    name: 'Directive',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Design and create custom elements to be used in your app"
                },
                'service': {
                    name: 'Service',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Pass fucntionaliy between Angular controllers"
                },
                'filter': {
                    name: 'Filter',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Angular componment to filter data dynamically in the browser"
                },
                'factory': {
                    name: 'Factory',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Componment to send/recieve data from server etc"
                },
                'controller': {
                    name: 'Controller',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Busisness logic stored here"
                },
                'busisnessLogic': {
                    name: 'Busisness Logic',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Fucntions that will be used extensivley and provide functionality throughout the app."
                },
                'customElements': {
                    name: 'Custom Elements',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Elements are defined by Directives, which include all logic inside"
                },
                'processes': {
                    name: 'Processes',
                    group: 'red',
                    size: sizes.large,
                    desc: "Software processes from start to finish"
                },
                'design': {
                    name: 'design',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Plan out the look & feel of the app."
                },
                'development': {
                    name: 'Development',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "The process of making the app."
                },
                'testing': {
                    name: 'Testing',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Process of testing code and output of app."
                },
                'building': {
                    name: 'Building',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "building it locally, or on a server, "
                },
                'deployment': {
                    name: 'Deployment',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Shipping hte final working code to a server and running it continually"
                },
                'ci': {
                    name: 'Continous Integration',
                    group: 'red',
                    size: sizes.medium,
                    desc: "Continually pulling from Source Control and performing jobs"
                },
                'buildserver': {
                    name: 'Build Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server dedicated to running the continous integration tasks"
                },
                'jenkins': {
                    name: 'Jenkins',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A platform to manage jobs for continous integration"
                },
                // 'clientTesting': {
                //     name: 'Client Side',
                //     group: 'grey',
                //     size: sizes.medium,
                //     desc: ""
                // },
                // 'serverTesting': {
                //     name: 'Server Side',
                //     group: 'grey',
                //     size: sizes.medium,
                //     desc: ""
                // },
                'karma': {
                    name: 'Karma',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A test runner for client side quests"
                },
                'coverage': {
                    name: 'Code Coverage',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Displaying code coverage of tests to source code"
                },
                'testRunner': {
                    name: 'Test Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'taskRunner': {
                    name: 'Task Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A task runner to manage client side tests"
                },
                'grunt': {
                    name: 'Grunt',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task runner for an app"
                },
                "buildTasks": {
                    name: 'Build Tasks',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task or jobs that are run on a build server (Jenkins)"
                },
                "nightlyTask": {
                    name: 'Nightly',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task or Job that will be run nightly, so that the output will be ready for start of each day"
                },
                "buildTask": {
                    name: 'Build',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task to pull from source control and carry out a build"
                },
                "testTask": {
                    name: 'Test',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Carry out various tests on the build"
                },
                "deployTask": {
                    name: 'Deploy',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task that will execute deployment to the deployment server"
                },
                "jasmine": {
                    name: 'Jasmine',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "jasmine is a Javascript framework for testing"
                },
                "sourceControl": {
                    name: 'Source Control',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Where all code will be stored and controlled"
                },
                "git": {
                    name: 'GIT',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A platform for source code management"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.angular   },
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   },
                // {source: elements.singlePage        ,target: elements.processes   },
                
                {source: elements.angular           ,target: elements.client   },
                {source: elements.angular           ,target: elements.componments   },
                {source: elements.angular           ,target: elements.componments   },
                
                {source: elements.node              ,target: elements.server   },

                {source: elements.javascript           ,target: elements.angular   },
                {source: elements.javascript           ,target: elements.node   },
                
                {source: elements.componments       ,target: elements.directive   },
                {source: elements.componments       ,target: elements.service   },
                {source: elements.componments       ,target: elements.filter   },
                {source: elements.componments       ,target: elements.factory   },
                {source: elements.componments       ,target: elements.controller   },

                {source: elements.controller       ,target: elements.busisnessLogic   },
                
                {source: elements.directive       ,target: elements.customElements   },

                {source: elements.processes       ,target: elements.development   },
                {source: elements.processes       ,target: elements.testing   },
                {source: elements.processes       ,target: elements.building   },
                {source: elements.processes       ,target: elements.deployment   },
                {source: elements.processes       ,target: elements.design   },
                
                {source: elements.development       ,target: elements.sourceControl   },

                {source: elements.sourceControl       ,target: elements.git   },
                
                {source: elements.ci       ,target: elements.building   },
                {source: elements.ci       ,target: elements.deployment   },
                {source: elements.ci       ,target: elements.jenkins   },
                {source: elements.ci       ,target: elements.karma   },
                {source: elements.ci       ,target: elements.grunt   },
                {source: elements.ci       ,target: elements.testing   },
                
                {source: elements.jenkins       ,target: elements.buildserver   },
                {source: elements.jenkins       ,target: elements.buildTasks   },
                {source: elements.buildTasks       ,target: elements.buildTask   },
                {source: elements.buildTasks       ,target: elements.testTask   },
                {source: elements.buildTasks       ,target: elements.nightlyTask   },
                {source: elements.buildTasks       ,target: elements.deployTask   },
                
                {source: elements.testing       ,target: elements.server   },
                {source: elements.testing       ,target: elements.client   }, 
                {source: elements.testing       ,target: elements.jasmine   }, 
                {source: elements.testing       ,target: elements.coverage   }, 
                
                
                
                {source: elements.grunt       ,target: elements.taskRunner   },
                {source: elements.grunt       ,target: elements.building   },
                
                {source: elements.client       ,target: elements.karma   },
                
                {source: elements.karma       ,target: elements.testRunner   },
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],27:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('serverForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],28:[function(require,module,exports){

module.exports = function(app) {
    
    app.factory('testingForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'karma': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: ""
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.karma        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      
},{}],29:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./sharedService.js')(app);
  require('./d3.js')(app);
  require('./forceGraphCollectionsService.js')(app);
  
  require('./forceGraphs/overviewService.js')(app);
  require('./forceGraphs/angularForceGraphService.js')(app);
  require('./forceGraphs/nodeForceGraphService.js')(app);
  require('./forceGraphs/automationForceGraphService.js')(app);
  require('./forceGraphs/testingForceGraphService.js')(app);
  require('./forceGraphs/d3ForceGraphService.js')(app);
  require('./forceGraphs/databaseForceGraphService.js')(app);
  require('./forceGraphs/gitForceGraphService.js')(app);
  require('./forceGraphs/serverForceGraphService.js')(app);

  
};
},{"./d3.js":18,"./forceGraphCollectionsService.js":19,"./forceGraphs/angularForceGraphService.js":20,"./forceGraphs/automationForceGraphService.js":21,"./forceGraphs/d3ForceGraphService.js":22,"./forceGraphs/databaseForceGraphService.js":23,"./forceGraphs/gitForceGraphService.js":24,"./forceGraphs/nodeForceGraphService.js":25,"./forceGraphs/overviewService.js":26,"./forceGraphs/serverForceGraphService.js":27,"./forceGraphs/testingForceGraphService.js":28,"./sharedService.js":30,"angular":"angular"}],30:[function(require,module,exports){

module.exports = function(app) {
 
    app.service("sharedService", function() {

        service = {};

        currentPage = 1

        service.getCurrentPage = function(){
            return currentPage
        }

        service.setCurrentPage = function(page){
            currentPage = page
        }
        
        return service
    });

};
},{}],31:[function(require,module,exports){

var source = angular.module('source', []);

require('./directives/')(source)
require('./controllers/')(source)
require('./services/')(source)
require('./factories/')(source)

module.exports = source.name;

},{"./controllers/":2,"./directives/":10,"./factories/":17,"./services/":29}]},{},[1]);
