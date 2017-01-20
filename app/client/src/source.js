
var source = angular.module('source', []);

require('./directives/')(source)
require('./controllers/')(source)
require('./services/')(source)
require('./factories/')(source)

module.exports = source.name;
