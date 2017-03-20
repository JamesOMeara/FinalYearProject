
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
                'd3': {
                    name: 'D3',
                    group: 'red',
                    size: sizes.large,
                    desc: "Graphically displaying data in a dynamic way "
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                },
                'dataVisualiation': {
                    name: 'Data Visualation',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Graphically displaying data in a dynamic way "
                },
                'dynamic': {
                    name: 'Dynamic',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Can display dynamically in the browser when given data"
                },
                'interactive': {
                    name: 'Interactive',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "D3 allows you to interact with the given data dynamically"
                },
                'principals': {
                    name: 'Pricipals',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "What can D3 do/provide.. https://en.wikipedia.org/wiki/D3.js"
                },
                'selections': {
                    name: 'Selections',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "This allows the programmer to use css style selectors to select given DOM nodes"
                },
                'transitions': {
                    name: 'Transitions',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time"
                },
                'dataBinding': {
                    name: 'Data Binding',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "For more advanced uses, loaded data drives the creation of elements. D3.js loads a given dataset, then, for each of its elements, creates an SVG object with associated properties"
                }
           }

               
            var links = [
                {source: elements.d3        ,target: elements.javascript   },
                {source: elements.d3        ,target: elements.dataVisualiation   },
                {source: elements.d3        ,target: elements.interactive   },
                {source: elements.d3        ,target: elements.dynamic   },
                {source: elements.d3        ,target: elements.principals   },

                {source: elements.principals        ,target: elements.selections   },
                {source: elements.principals        ,target: elements.transitions   },
                {source: elements.principals        ,target: elements.dataBinding   },
                
                {source: elements.interactive        ,target: elements.dynamic   },
                
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      