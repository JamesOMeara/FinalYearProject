(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

require('angular');

var app = angular.module("app", [ 
    require('./src/source'),
    require('angular-sanitize')
    

]);

require('templates')

},{"./src/source":20,"angular":"angular","angular-sanitize":"angular-sanitize","templates":"templates"}],2:[function(require,module,exports){

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
 
  app.directive('forceGraphDirective', [ "d3Service", function (d3Service) {
    return {
      controller: 'navController' ,
      restrict: 'EA',
      replace: true,
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

            var elements = {
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
                    desc: ""
                },
                 'server': {
                    name: 'Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                 'componments': {
                    name: 'Componments',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'directive': {
                    name: 'Directive',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'service': {
                    name: 'Service',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'filter': {
                    name: 'Filter',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'factory': {
                    name: 'Factory',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'controller': {
                    name: 'Controller',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'busisnessLogic': {
                    name: 'Busisness Logic',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'customElements': {
                    name: 'Custom Elements',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },


                'processes': {
                    name: 'Processes',
                    group: 'red',
                    size: sizes.large,
                    desc: ""
                },
                'design': {
                    name: 'design',
                    group: 'orange',
                    size: sizes.medium,
                    desc: ""
                },
                'development': {
                    name: 'Development',
                    group: 'orange',
                    size: sizes.medium,
                    desc: ""
                },
                'testing': {
                    name: 'Testing',
                    group: 'orange',
                    size: sizes.medium,
                    desc: ""
                },
                'building': {
                    name: 'Building',
                    group: 'orange',
                    size: sizes.medium,
                    desc: ""
                },
                'deployment': {
                    name: 'Deployment',
                    group: 'orange',
                    size: sizes.medium,
                    desc: ""
                },
                'ci': {
                    name: 'Continous Integration',
                    group: 'red',
                    size: sizes.medium,
                    desc: ""
                },
                'buildserver': {
                    name: 'Build Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'jenkins': {
                    name: 'Jenkins',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'clientTesting': {
                    name: 'Client Side',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'serverTesting': {
                    name: 'Server Side',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'karma': {
                    name: 'Karma',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
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
                    desc: ""
                },
                'grunt': {
                    name: 'Grunt',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },

               
               
            }
            var links = [
                {source: elements.singlePage        ,target: elements.angular   },
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   },
                {source: elements.singlePage        ,target: elements.processes   },
                
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
                

                {source: elements.ci       ,target: elements.building   },
                {source: elements.ci       ,target: elements.deployment   },
                {source: elements.ci       ,target: elements.jenkins   },
                {source: elements.ci       ,target: elements.karma   },
                {source: elements.ci       ,target: elements.grunt   },
                {source: elements.ci       ,target: elements.testing   },
                
                {source: elements.jenkins       ,target: elements.buildserver   },
                
                {source: elements.testing       ,target: elements.serverTesting   },
                {source: elements.testing       ,target: elements.clientTesting   }, 
                
                {source: elements.grunt       ,target: elements.taskRunner   },
                {source: elements.grunt       ,target: elements.building   },
                
                {source: elements.clientTesting       ,target: elements.karma   },
                
                {source: elements.karma       ,target: elements.testRunner   },
                
              
          
            ];

            var nodes = elements
            
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
                .call(force.drag);

            node.append("circle")
                .style('fill', function(d) { return d.group; })
                .attr('r', function(d) { return d.size; });

            node.append("text")
                .attr("x", 12)
                .attr("dy", ".35em")
                .text(function(d) { return d.name; });

            node.append("title")
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
                var circle = d3.select(this);
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
                    });
                link
                    .transition(500)
                    .style("stroke-opacity", function(o) {
                        return o.source === d || o.target === d ? 1 : 0.2;
                    })
           
            }
            
            function mouseout(d) {
                var circle = d3.select(this);
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






       // Compute the distinct nodes from the links.
            // links.forEach(function(link) {
            //     link.source = nodes[link.source.name] || (nodes[link.source.name] = {name: link.source.name, size: link.source.size, color: link.source.group});
            // });
            // links.forEach(function(link) {
            //     link.target = nodes[link.target.name] || (nodes[link.target.name] = {name: link.target.name, size: link.target.size, color: link.target.group});
            // });





       // function mouseover() {
            //     d3.select(this).append("rect")
            //         .attr("class", "transbox")

            //     d3.select(this).select("circle").transition()
            //         .duration(750)
            //         .attr("r", 16)
            //         .style('fill', 'green')

            //     d3.select(this).select("text").transition()
            //         .duration(750)
            //         .style("font", '32px sans-serif')
            //         .style("fill", 'green')

            //     descbox = d3.select(this).append("text").transition()
            //         .attr("class", "descText")
            //         .attr("x", 12)
            //         .attr("dy", "2em")
            //         .style("fill", 'black')
            //         .text(function(d) { return d.desc; });

            //     d3.selectAll(".transbox")
            //         .style("fill", 'lightblue')
            //         .attr("x", 0)
            //         .attr("y", 0)
            //         .attr("width", 20 )
            //         .attr("height", 20 )

            // }





                  

                // d3.select(this).select("circle").transition()
                //     .duration(750)
                //     .attr("r", function(d) { return d.size; })
                //     .style('fill', function(d) { return d.group; })
                // d3.select(this).select("text").transition()
                //     .duration(750)
                //     .style("font", '16px sans-serif')
                //     .style("fill", 'black')
                // d3.selectAll(".descText").remove()
                // d3.selectAll(".transbox").remove()
},{}],9:[function(require,module,exports){


require('angular');

module.exports = function(app) {
  require('./navDirective.js')(app);
  require('./simpleTableDirective.js')(app);
  require('./tab1Directive.js')(app);
  require('./tab2Directive.js')(app);
  require('./tab3Directive.js')(app);
  require('./embeddedPlunkerDirective.js')(app);
  require('./embeddedJsfiddleDirective.js')(app);
  require('./displayTutorialDirective.js')(app);
  require('./forceGraphDirective.js')(app);
  

  
  
};
},{"./displayTutorialDirective.js":5,"./embeddedJsfiddleDirective.js":6,"./embeddedPlunkerDirective.js":7,"./forceGraphDirective.js":8,"./navDirective.js":10,"./simpleTableDirective.js":11,"./tab1Directive.js":12,"./tab2Directive.js":13,"./tab3Directive.js":14,"angular":"angular"}],10:[function(require,module,exports){

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
},{}],11:[function(require,module,exports){

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
},{}],12:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab1Directive', [ function (databaseFactory) {
        return {
            // controller: 'mainController' ,
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
},{}],13:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab2Directive', [ function (databaseFactory) {
        return {
            controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: './app/client/src/directives/templates/tab2.ejs',
            link: function(scope) {

        
            }
        };
  }]);


};
},{}],14:[function(require,module,exports){

module.exports = function(app) {
 
    app.directive('tab3Directive', [ function () {
        return {
            controller: 'mainController' ,
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
},{}],15:[function(require,module,exports){

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
},{}],16:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./databaseFactory.js')(app);
  
};
},{"./databaseFactory.js":15,"angular":"angular"}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./sharedService.js')(app);
  require('./d3.js')(app);
  
};
},{"./d3.js":17,"./sharedService.js":19,"angular":"angular"}],19:[function(require,module,exports){

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
},{}],20:[function(require,module,exports){

var source = angular.module('source', []);

require('./directives/')(source)
require('./controllers/')(source)
require('./services/')(source)
require('./factories/')(source)

module.exports = source.name;

},{"./controllers/":2,"./directives/":9,"./factories/":16,"./services/":18}]},{},[1]);
