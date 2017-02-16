
require('angular');

var app = angular.module("app", [ 
    require('./src/source'),
    "ngSanitize"
]);

require('templates')
