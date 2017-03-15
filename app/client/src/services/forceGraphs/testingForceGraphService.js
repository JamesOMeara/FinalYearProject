
module.exports = function(app) {
    
    app.factory('testingForceGraphService', [ function() {

        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }
        
        var elements=  {
                'karma': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: ""
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.karma        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      