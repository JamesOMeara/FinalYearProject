angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./app/client/src/directives/templates/codeEditorInput-template.ejs',
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <p> Hello World </p>\r" +
    "\n" +
    "    <textarea rows=\"4\" cols=\"50\" ng-model=\"input1\">\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </textarea>\r" +
    "\n" +
    "    {{input1}}\r" +
    "\n" +
    "    <textarea rows=\"4\" cols=\"50\" ng-model=\"input2\">\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </textarea>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/codeEditorTemplate.ejs',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div> \r" +
    "\n" +
    "    <p>hello from code editor teplace</p>\r" +
    "\n" +
    "    <code-editor-input-directive>\r" +
    "\n" +
    "</div>"
  );


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
    "            <a class=\"navbar-brand\" href=\"#\">James O'M FYP</a>\r" +
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


  $templateCache.put('./app/client/src/directives/templates/simpleTable.ejs',
    "<div>\r" +
    "\n" +
    "    <table style=\"width:100%\">\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>Firstname</th>\r" +
    "\n" +
    "            <th>Lastname</th> \r" +
    "\n" +
    "            <th>Age</th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        <tr ng-repeat=\"x in data\">\r" +
    "\n" +
    "            <td>{{ x.name }}</td>\r" +
    "\n" +
    "            <td>{{ x.lastname }}</td>\r" +
    "\n" +
    "            <td>{{ x.age }}</td>\r" +
    "\n" +
    "            <td><button ng-click = \"delete(  x.name , x.lastname , x.age )\" >Delete</button></td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <form>\r" +
    "\n" +
    "                    <input type=\"text\" ng-model=\"formData.firstname\">\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <form>\r" +
    "\n" +
    "                    <input type=\"text\" ng-model=\"formData.lastname\">\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <form>\r" +
    "\n" +
    "                    <input type=\"text\" ng-model=\"formData.age\">\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <button ng-click = \"submit(formData.firstname, formData.lastname, formData.age)\" >Submit</button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/tab1.ejs',
    "<div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h1> Home Page </h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <code-editor-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/tab2.ejs',
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <div class=\"starter-template\">\r" +
    "\n" +
    "        <p>Section = {{ currentPage() }}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <simple-table-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('./app/client/src/directives/templates/tab3.ejs',
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "tab3\r" +
    "\n" +
    "    <div class=\"starter-template\">\r" +
    "\n" +
    "        <p>Section = {{ currentPage() }}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <code-editor-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <simple-table-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> "
  );

}]);
