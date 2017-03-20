
module.exports = function(app) {
    
    app.factory('nodeForceGraphService', [ function() {

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
                },
                'server': {
                    name: 'Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server side of app, interacts with database and requests from client"
                },
                'eventDriven': {
                    name: 'Event Driven',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A programming paradigm in which the flow of the program is determined by events such as user actions "
                },
                'lightweight': {
                    name: 'Lightweight',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'efficent': {
                    name: 'Efficent',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'scaleable': {
                    name: 'Scaleable',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'asynchronous': {
                    name: 'Asynchronous',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   },
                
                {source: elements.node        ,target: elements.server   },
                {source: elements.node        ,target: elements.eventDriven   },
                {source: elements.node        ,target: elements.lightweight   },
                {source: elements.node        ,target: elements.efficent   },
                {source: elements.node        ,target: elements.scaleable   },
                {source: elements.node        ,target: elements.asynchronous   },
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      