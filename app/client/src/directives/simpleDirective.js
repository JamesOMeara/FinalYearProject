
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