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


        d3Service.d3().then(function(d3) {
            // set a width and height for our SVG
            var width = 1000,
                height = 500;

            // setup links
            var links = [
                { source: 'Baratheon', target:'Lannister' },
                { source: 'Baratheon', target:'Stark' },
                { source: 'Lannister', target:'Stark' },
                { source: 'Stark', target:'Bolton' },
            ];

              
            // create empty nodes array
            var nodes = {};
            
            // compute nodes from links data
            links.forEach(function(link) {
                link.source = nodes[link.source] ||
                    (nodes[link.source] = {name: link.source});
                link.target = nodes[link.target] ||
                    (nodes[link.target] = {name: link.target});        
            });


            // add a SVG to the body for our viz
            var svg=d3.select("#graph").append('svg')
                .attr('width', "100%")
                .attr('height', 600);

            // use the force
            var force = d3.layout.force()
                .size([width, height])
                .nodes(d3.values(nodes))
                .links(links)
                .on("tick", tick)
                .linkDistance(300)
                .start();

            // add links
            var link = svg.selectAll('.link')
                .data(links)
                .enter().append('line')
                .attr('class', 'link'); 

            // add nodes
            var node = svg.selectAll('.node')
                .data(force.nodes())
                .enter().append('circle')
                .attr('class', 'node')
                .attr('r', width * 0.03);
            


            // what to do 
            function tick(e) {
                
                node.attr('cx', function(d) { return d.x; })
                    .attr('cy', function(d) { return d.y; })
                    .call(force.drag);
                    
                link.attr('x1', function(d) { return d.source.x; })
                    .attr('y1', function(d) { return d.source.y; })
                    .attr('x2', function(d) { return d.target.x; })
                    .attr('y2', function(d) { return d.target.y; });
                
            }
            console.log("in here at least ")





        });
      }
    };
  }]);


  

};
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
