
module.exports = function(app) {
 
    app.factory("exampleFactory", function($http) {
        var factory = {};

        factory.get = function (url) {
            return $http.get(url)
        };
        factory.post = function (url, something) {
            return $http.post(url, something);
        };

        return factory;
       
    });

};