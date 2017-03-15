
module.exports = function(app) {
    
    app.factory('serverForceGraphService', [ function() {

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
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      