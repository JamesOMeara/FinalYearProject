
var source = angular.module('source', []);
require('./directives/')(source)

module.exports = source.name;
