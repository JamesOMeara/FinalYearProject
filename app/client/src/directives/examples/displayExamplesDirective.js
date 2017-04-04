
module.exports = function(app) {
 
    //simple directive hard code the html 
    app.directive('example1Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template:   '<div id="example1Directive">'+
                        '<p>Displaying Text from Direcitve Template File</p>'+
                        '<p><b><i>DIRECTIVE HTML: &lt;example1-directive&gt;</i></b></p>'+
                        '<p><b>OUTPUT:</b>Some random Text Here.. </p> ' + 
                        '</div>',
        };
    }]);


    //simple Direcitve sing template
    app.directive('example2Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example2.ejs',
        };
    }]);


    //print out a variable from a directives scope
    app.directive('example3Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example3.ejs',
            link: function(scope) {
                 scope.something = "hello world"
            }
        };
    }]);

    //input a variable into html directive definition and display it 
    app.directive('example4Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                //initalize the variable from the element definition 
                something: '@'
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example4.ejs',
        };
    }]);

    

    //call a directives scope fucntion to return a string and display it
    app.directive('example5Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example5.ejs',
            link: function(scope) {
                scope.somefunction = function(){
                    return "some string returned from a fucntion in a directives scope"
                }
            }
        };
    }]);

    //print out a string from a $scope variable defined by a controller
    app.directive('example6Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                //initalize the variable from the element definition (pass in value from contorller)
                something: '@'
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example6.ejs',
        };
    }]);


    //angular 2 way data binding
    app.directive('example7Directive', [  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example7.ejs',
        };
    }]);


    //using a service
    app.directive('example8Directive', [ 'exampleService',  function(exampleService) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example8.ejs',
            link: function(scope) {
                scope.getStringFromService = function(){
                    return exampleService.something.description;
                }
            }
        };
    }]);


    //using a factory
    app.directive('example9Directive', [ 'exampleFactory',  function(exampleFactory) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/examplesTemplates/example9.ejs',
            link: function(scope) {

                scope.str ="not initaliazed yet..."

                scope.getRequest = function(){
                    exampleFactory.get('exampleGetUrl')
                        .then(function (response) {
                            scope.str = response.data.message;
                        }, function (error) {
                            scope.str = 'Error ' + error.message;
                        });

                }
            }
        };
    }]);


};