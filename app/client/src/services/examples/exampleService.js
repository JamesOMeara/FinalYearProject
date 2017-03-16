
module.exports = function(app) {
 
    app.service("exampleService", function() {

        service = {};

        service.something = {
            description: "A string contained within a service, services can be used to share variables between controllers etc.."
        }
        
        return service
    });

};