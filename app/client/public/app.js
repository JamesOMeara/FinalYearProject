(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

require('angular');

var app = angular.module("app", [ 
    require('./src/source'),
    require('angular-sanitize')
]);

require('templates')

},{"./src/source":18,"angular":"angular","angular-sanitize":"angular-sanitize","templates":"templates"}],2:[function(require,module,exports){

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
  
};
},{"./displayTutorialDirective.js":5,"./embeddedJsfiddleDirective.js":6,"./embeddedPlunkerDirective.js":7,"./navDirective.js":9,"./simpleTableDirective.js":10,"./tab1Directive.js":11,"./tab2Directive.js":12,"./tab3Directive.js":13,"angular":"angular"}],9:[function(require,module,exports){

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
},{}],10:[function(require,module,exports){

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
},{}],11:[function(require,module,exports){

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
},{}],12:[function(require,module,exports){

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
},{}],13:[function(require,module,exports){

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
},{}],14:[function(require,module,exports){

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
},{}],15:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./databaseFactory.js')(app);
};
},{"./databaseFactory.js":14,"angular":"angular"}],16:[function(require,module,exports){
require('angular');

module.exports = function(app) {
  require('./sharedService.js')(app);
};
},{"./sharedService.js":17,"angular":"angular"}],17:[function(require,module,exports){

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
        // {
        //     getCurrentPage: getCurrentPage,
        //     setCurrentPage: setCurrentPage,
        // }
    });

};
},{}],18:[function(require,module,exports){

var source = angular.module('source', []);

require('./directives/')(source)
require('./controllers/')(source)
require('./services/')(source)
require('./factories/')(source)

module.exports = source.name;

},{"./controllers/":2,"./directives/":8,"./factories/":15,"./services/":16}]},{},[1]);
