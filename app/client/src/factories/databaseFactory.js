
module.exports = function(app) {
 
    app.factory("databaseFactory", function($http) {
        var url = '/';
        var factory = {};

        factory.getSomething = function () {
            return $http.get(url + 'getSomething')
        };
        factory.postSomething = function (url, something) {
            return $http.post(url, something);
        };


        return factory;
       
    });

};