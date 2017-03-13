
module.exports = function(app) {
 
  app.directive('forceGraphDirective', [ "d3Service", "overviewService", function ( d3Service, overviewService) {
    return {
      controller: 'navController' ,
      restrict: 'E',
      replace: false,
      transclude: true,
      scope: {

      },
      templateUrl: './app/client/src/directives/templates/forceGraphTemplate.ejs',
      link: function(scope, element, attrs) {

        

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

        d3Service.d3().then(function(d3) {

            var elements = {};
            var links = [];

            var elements = overviewService.elements;
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
            var links = overviewService.links;
            
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

            var nodes = overviewService.elements
            
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
                height = 800;

            var force = d3.layout.force()
                .nodes(d3.values(nodes))
                .links(links)
                .size([width, height])
                .linkDistance(70)
                .charge(-1000)
                .on("tick", tick)
                .start();

            var svg = d3.select("#graph").append("svg")
                .attr("width", '100%')
                .attr("height", height);

            var link = svg.selectAll(".link")
                .data(force.links())
                .enter().append("line")
                .attr("class", "link");

            var node = svg.selectAll(".node")
                .data(force.nodes())
                .enter()
                .append("g")
                .attr("class", "node")
                .on("mouseover", mouseover)
                .on("mouseout", mouseout)
                .on("mousemove", mousemove)
                .call(force.drag);

            var tooltip = d3.select("#graph")
                .append('div')
                .attr("class", "tooltip") 
                .style("opacity", 0)

            node.append("circle")
                .style('fill', function(d) { return d.group; })
                .attr('r', function(d) { return d.size; });

            node.append("text")
                .attr("x", 12)
                .attr("dy", ".35em")
                .text(function(d) { return d.name; });

            


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

        });
      }
    };
  }]);


  

};


