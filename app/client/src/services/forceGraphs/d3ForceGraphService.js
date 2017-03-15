
module.exports = function(app) {
    
    app.factory('d3ForceGraphService', [ function() {

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
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                }
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.javascript   }
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      