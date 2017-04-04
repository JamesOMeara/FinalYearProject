angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./app/client/src/directives/templates/displayTutorial.ejs',
    "<div >\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"content\">\r" +
    "\n" +
    "            <style>@import url(http://fonts.googleapis.com/css?family=Oxygen+Mono);\r" +
    "\n" +
    "                /* Please Keep this font import at the very top of any CSS file */\r" +
    "\n" +
    "                @charset \"UTF-8\";\r" +
    "\n" +
    "                /* Starter CSS for Flyout Menu */\r" +
    "\n" +
    "                #cssmenu {\r" +
    "\n" +
    "                float: left;\r" +
    "\n" +
    "                padding: 0;\r" +
    "\n" +
    "                margin: 0;\r" +
    "\n" +
    "                border: 0;\r" +
    "\n" +
    "                line-height: 1;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul,\r" +
    "\n" +
    "                #cssmenu ul li,\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                list-style: none;\r" +
    "\n" +
    "                margin: 0;\r" +
    "\n" +
    "                padding: 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul {\r" +
    "\n" +
    "                position: relative;\r" +
    "\n" +
    "                z-index: 597;\r" +
    "\n" +
    "                float: left;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul li {\r" +
    "\n" +
    "                float: left;\r" +
    "\n" +
    "                min-height: 1px;\r" +
    "\n" +
    "                line-height: 1em;\r" +
    "\n" +
    "                vertical-align: middle;\r" +
    "\n" +
    "                position: relative;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul li.hover,\r" +
    "\n" +
    "                #cssmenu ul li:hover {\r" +
    "\n" +
    "                position: relative;\r" +
    "\n" +
    "                z-index: 599;\r" +
    "\n" +
    "                cursor: default;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                visibility: hidden;\r" +
    "\n" +
    "                position: absolute;\r" +
    "\n" +
    "                top: 100%;\r" +
    "\n" +
    "                left: 0px;\r" +
    "\n" +
    "                z-index: 598;\r" +
    "\n" +
    "                width: 100%;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li {\r" +
    "\n" +
    "                float: none;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul ul {\r" +
    "\n" +
    "                top: -2px;\r" +
    "\n" +
    "                right: 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul li:hover > ul {\r" +
    "\n" +
    "                visibility: visible;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                top: 1px;\r" +
    "\n" +
    "                left: 99%;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul li {\r" +
    "\n" +
    "                float: none;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                margin-top: 1px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li {\r" +
    "\n" +
    "                font-weight: normal;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                /* Custom CSS Styles */\r" +
    "\n" +
    "                #cssmenu {\r" +
    "\n" +
    "                width: 200px;\r" +
    "\n" +
    "                background: #333333;\r" +
    "\n" +
    "                font-family: 'Oxygen Mono', Tahoma, Arial, sans-serif;\r" +
    "\n" +
    "                zoom: 1;\r" +
    "\n" +
    "                font-size: 12px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu:before {\r" +
    "\n" +
    "                content: '';\r" +
    "\n" +
    "                display: block;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu:after {\r" +
    "\n" +
    "                content: '';\r" +
    "\n" +
    "                display: table;\r" +
    "\n" +
    "                clear: both;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu a {\r" +
    "\n" +
    "                display: block;\r" +
    "\n" +
    "                padding: 15px 20px;\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                text-decoration: none;\r" +
    "\n" +
    "                text-transform: uppercase;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu > ul {\r" +
    "\n" +
    "                width: 200px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                width: 200px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu > ul > li > a {\r" +
    "\n" +
    "                border-right: 4px solid #1b9bff;\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu > ul > li > a:hover {\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu > ul > li.active a {\r" +
    "\n" +
    "                background: #1b9bff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu > ul > li a:hover,\r" +
    "\n" +
    "                #cssmenu > ul > li:hover a {\r" +
    "\n" +
    "                background: #1b9bff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu li {\r" +
    "\n" +
    "                position: relative;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul li.has-sub > a:after {\r" +
    "\n" +
    "                content: '+';\r" +
    "\n" +
    "                position: absolute;\r" +
    "\n" +
    "                top: 50%;\r" +
    "\n" +
    "                right: 15px;\r" +
    "\n" +
    "                margin-top: -6px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li.first {\r" +
    "\n" +
    "                -webkit-border-radius: 0 3px 0 0;\r" +
    "\n" +
    "                -moz-border-radius: 0 3px 0 0;\r" +
    "\n" +
    "                border-radius: 0 3px 0 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li.last {\r" +
    "\n" +
    "                -webkit-border-radius: 0 0 3px 0;\r" +
    "\n" +
    "                -moz-border-radius: 0 0 3px 0;\r" +
    "\n" +
    "                border-radius: 0 0 3px 0;\r" +
    "\n" +
    "                border-bottom: 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                -webkit-border-radius: 0 3px 3px 0;\r" +
    "\n" +
    "                -moz-border-radius: 0 3px 3px 0;\r" +
    "\n" +
    "                border-radius: 0 3px 3px 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul {\r" +
    "\n" +
    "                border: 1px solid #0082e7;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul a {\r" +
    "\n" +
    "                font-size: 12px;\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul a:hover {\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li {\r" +
    "\n" +
    "                border-bottom: 1px solid #0082e7;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu ul ul li:hover > a {\r" +
    "\n" +
    "                background: #4eb1ff;\r" +
    "\n" +
    "                color: #ffffff;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right > ul > li > a {\r" +
    "\n" +
    "                border-left: 4px solid #1b9bff;\r" +
    "\n" +
    "                border-right: none;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right {\r" +
    "\n" +
    "                float: right;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right li {\r" +
    "\n" +
    "                text-align: right;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul li.has-sub > a:before {\r" +
    "\n" +
    "                content: '+';\r" +
    "\n" +
    "                position: absolute;\r" +
    "\n" +
    "                top: 50%;\r" +
    "\n" +
    "                left: 15px;\r" +
    "\n" +
    "                margin-top: -6px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul li.has-sub > a:after {\r" +
    "\n" +
    "                content: none;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul ul {\r" +
    "\n" +
    "                visibility: hidden;\r" +
    "\n" +
    "                position: absolute;\r" +
    "\n" +
    "                top: 0;\r" +
    "\n" +
    "                left: -100%;\r" +
    "\n" +
    "                z-index: 598;\r" +
    "\n" +
    "                width: 100%;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul ul li.first {\r" +
    "\n" +
    "                -webkit-border-radius: 3px 0 0 0;\r" +
    "\n" +
    "                -moz-border-radius: 3px 0 0 0;\r" +
    "\n" +
    "                border-radius: 3px 0 0 0;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul ul li.last {\r" +
    "\n" +
    "                -webkit-border-radius: 0 0 0 3px;\r" +
    "\n" +
    "                -moz-border-radius: 0 0 0 3px;\r" +
    "\n" +
    "                border-radius: 0 0 0 3px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                #cssmenu.align-right ul ul {\r" +
    "\n" +
    "                -webkit-border-radius: 3px 0 0 3px;\r" +
    "\n" +
    "                -moz-border-radius: 3px 0 0 3px;\r" +
    "\n" +
    "                border-radius: 3px 0 0 3px;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "            </style>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            \r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"cssmenu\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                    <li ng-repeat=\"t in tutorials\"><a ng-click=\"selectTutorial( t )\"><span> {{t.name}} </span></a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li ng-repeat=\"data in t.data\" class=\"has-sub\"><a ng-click=\"selectTutorial( data )\"><span> {{data.name}}</span></a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "               \r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <div ng-if=selectedTutorial.graphData >\r" +
    "\n" +
    "                <force-graph-directive data = selectedTutorial.graphData >\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <div ng-if=\"showDoc(selectedTutorial)\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <iframe style=\"width: 100%; height: 800px\" frameborder=\"0\" src={{selectedTutorial.url}}></iframe>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            \r" +
    "\n" +
    "        \r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('./app/client/src/directives/templates/embeddedJsfiddle.ejs',
    "<div> \r" +
    "\n" +
    "    <iframe width=\"100%\" height=\"600\" src=\"//jsfiddle.net/IgorMinar/ADukg/embedded/\" allowfullscreen=\"allowfullscreen\" frameborder=\"1\"></iframe>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/embeddedPluker.ejs',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div> \r" +
    "\n" +
    "    <iframe \r" +
    "\n" +
    "        style=\"width: 100%; height: 800px\" \r" +
    "\n" +
    "        src=\"http://embed.plnkr.co/?sidebar=tree&autoCloseSidebar=false\" \r" +
    "\n" +
    "        frameborder=\"0\"\r" +
    "\n" +
    "        sidebar = \"true\" \r" +
    "\n" +
    "        allowfullscren=\"allowfullscren\">\r" +
    "\n" +
    "    </iframe>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example2.ejs',
    "<div id=\"example2Directive\">\r" +
    "\n" +
    "    <p>Displaying Text from Direcitve Template File</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example2-directive&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT:</b>Some random Text Here.. </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example3.ejs',
    "<div id=\"example3Directive\">\r" +
    "\n" +
    "    <p>Displaying Text from directive scope</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example3-directive&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ something }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example4.ejs',
    "<div id=\"example4Directive\">\r" +
    "\n" +
    "    <p>Displaying Text input into element</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example4-directive something='passing string into 4th directive'&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ something }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example5.ejs',
    "<div id=\"example5Directive\">\r" +
    "\n" +
    "    <p>Displaying Text input into element</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example5-directive&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ somefunction() }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example6.ejs',
    "<div id=\"example6Directive\">\r" +
    "\n" +
    "    <p>Displaying Text input into element</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example6-directive something='{{ exampleSomething() }}'&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ something }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example7.ejs',
    "<div id=\"example7Directive\">\r" +
    "\n" +
    "    <p>Directive template with 2 way data binding with input text box.</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt;example7-directive&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b><i>              : &lt;input ng-model=\"inputString1\"&gt;</i></b></p>\r" +
    "\n" +
    "    <p><b><i>              : &#123 &#123; inputString1 &#125 &#125;</i></b></p>\r" +
    "\n" +
    "    <input ng-model=\"inputString1\" id=\"example7TextBox\">\r" +
    "\n" +
    "    <p id=\"example72wayBinding\" ><b>2 way data binding: inputString1 = </b>{{ inputString1 }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example8.ejs',
    "<div id=\"example8Directive\">\r" +
    "\n" +
    "    <p>Directive: Getting shared value from service</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt; example8-directive &gt;</i></b></p>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ getStringFromService() }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/examplesTemplates/example9.ejs',
    "<div id=\"example9Directive\">\r" +
    "\n" +
    "    <p>Directive: Getting shared value from factory/server</p>\r" +
    "\n" +
    "    <p><b><i>DIRECTIVE HTML: &lt; example9-directive &gt;</i></b></p>\r" +
    "\n" +
    "    <button ng-click=getRequest()>click</button>\r" +
    "\n" +
    "    <p><b>OUTPUT: </b>{{ str }} </p> \r" +
    "\n" +
    "<div>"
  );


  $templateCache.put('./app/client/src/directives/templates/forceGraphTemplate.ejs',
    "<div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        #graph {\r" +
    "\n" +
    "            width: 100%;\r" +
    "\n" +
    "            height: 100%;\r" +
    "\n" +
    "            position: absolute;\r" +
    "\n" +
    "            top: 0;\r" +
    "\n" +
    "            left: 0;\r" +
    "\n" +
    "            z-index: -10;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        .link {\r" +
    "\n" +
    "            fill: none;\r" +
    "\n" +
    "            stroke: #666;\r" +
    "\n" +
    "            stroke-width: 1.5px;\r" +
    "\n" +
    "            stroke-opacity: 1.0;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        .node circle {\r" +
    "\n" +
    "            fill: #ccc;\r" +
    "\n" +
    "            stroke: 0000FF;\r" +
    "\n" +
    "            stroke-width: 1.5px;\r" +
    "\n" +
    "            opacity: 1.0;\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        text {\r" +
    "\n" +
    "            font: 16px sans-serif;\r" +
    "\n" +
    "            pointer-events: none;\r" +
    "\n" +
    "            fill: black\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        div.tooltip {\r" +
    "\n" +
    "            opacity: 0;\r" +
    "\n" +
    "            visibility: hidden;\r" +
    "\n" +
    "            position: absolute;\r" +
    "\n" +
    "            padding: 6px 10px;\r" +
    "\n" +
    "            top: 1.4em;\r" +
    "\n" +
    "            left: 50%;\r" +
    "\n" +
    "            transform: translateX(12%) translateY(0);\r" +
    "\n" +
    "            background: grey;\r" +
    "\n" +
    "            color: white;\r" +
    "\n" +
    "            white-space: nowrap;\r" +
    "\n" +
    "            z-index: 2;\r" +
    "\n" +
    "            border-radius: 2px;\r" +
    "\n" +
    "            transition:  opacity 0.5s linear\r" +
    "\n" +
    "                \r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      \r" +
    "\n" +
    "    </style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div id=\"graph\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
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
    "            <a class=\"navbar-brand\" ng-click=\"setSection(sections.home)\" id=\"homeButton1\">James O'M FYP</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.home) }\" ><a ng-click=\"setSection(sections.home)\" id=\"homeButton2\" > Home </a></li>\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.two) }\" ><a ng-click=\"setSection(sections.two)\" id=\"tutorialsButton\" > Tutorials </a></li>\r" +
    "\n" +
    "            <li ng-class=\"{active: isNavbuttonActive(sections.three) }\" ><a ng-click=\"setSection(sections.three)\" id=\"editorButton\" > Editor </a></li>\r" +
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
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"firstTab\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container\" >\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h1> Home Page </h1>\r" +
    "\n" +
    "        <br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <ol>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example1-directive></example1-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example2-directive></example2-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example3-directive></example3-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example4-directive something='passing string into 4th directive'></example4-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example5-directive></example5-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <div ng-controller=\"exampleController\">\r" +
    "\n" +
    "                <example6-directive something='{{ exampleSomething() }}'></example6-directive>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example7-directive></example7-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example8-directive></example8-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <example9-directive></example9-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <simple-table-directive></simple-table-directive>\r" +
    "\n" +
    "                <br><br>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ol>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!-- /.container -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/tab2.ejs',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"secondTab\">\r" +
    "\n" +
    "   \r" +
    "\n" +
    "    <div >\r" +
    "\n" +
    "        <display-tutorial-directive name=\" 'Angular.htm' \" >\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    " \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./app/client/src/directives/templates/tab3.ejs',
    "\r" +
    "\n" +
    "<div id=\"thirdTab\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container\" >\r" +
    "\n" +
    "        <h2>Practice editing here! <h2>\r" +
    "\n" +
    "        <button ng-click=\"selectEditor(1)\">Plunker</button>\r" +
    "\n" +
    "        <button ng-click=\"selectEditor(2)\">JSFiddle</button>\r" +
    "\n" +
    "    </div><!-- /.container -->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div ng-show=\"showEditor(1)\">\r" +
    "\n" +
    "        <embedded-plunker-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-show=\"showEditor(2)\">\r" +
    "\n" +
    "        <embedded-jsfiddle-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );

}]);
