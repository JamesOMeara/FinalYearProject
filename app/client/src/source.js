
var source = angular.module('source', []);

require('./directives/')(source)
require('./controllers/')(source)

module.exports = source.name;
