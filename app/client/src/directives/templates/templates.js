angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./app/client/src/directives/templates/navDirective.ejs',
    "<div>\r" +
    "\n" +
    "    <nav class=\"navbar navbar-inverse navbar-default.navbar-static-top\">\r" +
    "\n" +
    "        <div class=\"container\" >\r" +
    "\n" +
    "        <div class=\"navbar-header\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Project name</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.home) }\" ><a ng-click=\"setSection(sections.home)\"> Home </a></li>\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.two) }\" ><a ng-click=\"setSection(sections.two)\"> About </a></li>\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.three) }\" ><a ng-click=\"setSection(sections.three)\"> Contact </a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </div><!--/.nav-collapse -->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </nav>\r" +
    "\n" +
    "    <p>Section = {{selected()}}</p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/testDirective.ejs',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "  {{testVariable}}\r" +
    "\n" +
    "  {{val.data}}\r" +
    "\n" +
    "</div>"
  );

}]);
