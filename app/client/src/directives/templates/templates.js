angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./app/client/src/directives/templates/testDirective.ejs',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "  {{testVariable}}\r" +
    "\n" +
    "</div>"
  );

}]);
