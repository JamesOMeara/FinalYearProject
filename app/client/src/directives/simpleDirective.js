
module.exports = function(app) {
 
  app.directive('testDirective', [function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
         testVariable: '='
      },
      templateUrl: './app/client/src/directives/templates/testDirective.ejs',
      link: function(scope) {
          scope.val = {data: 'test'}
          scope.testData = function() {
              console.log("in here somehow")
              return {data: 'Test Data"'}
            };
      }
    };
  }]);
};