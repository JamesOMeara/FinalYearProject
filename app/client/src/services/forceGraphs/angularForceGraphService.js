
module.exports = function(app) {
    
    app.factory('angularForceGraphService', [ function() {

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
                'angular': {
                    name: 'Angular',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Strong clientSide framework for responsive apps"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                },
                 'dyanmic': {
                    name: 'Dyanmic',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Dyanmic views for web pages"
                },
                'client': {
                    name: 'Client',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Client side of an app (What end user interacts with)"
                },
                'componments': {
                    name: 'Componments',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Angular componments"
                },
                'directive': {
                    name: 'Directive',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Design and create custom elements to be used in your app"
                },
                'service': {
                    name: 'Service',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Pass fucntionaliy between Angular controllers"
                },
                'filter': {
                    name: 'Filter',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Angular componment to filter data dynamically in the browser"
                },
                'factory': {
                    name: 'Factory',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Componment to send/recieve data from server etc"
                },
                'controller': {
                    name: 'Controller',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Busisness logic stored here"
                },
                'busisnessLogic': {
                    name: 'Busisness Logic',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Fucntions that will be used extensivley and provide functionality throughout the app."
                },
                'customElements': {
                    name: 'Custom Elements',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Elements are defined by Directives, which include all logic inside"
                },
    
           }

               
            var links = [
                {source: elements.singlePage        ,target: elements.angular   },
                {source: elements.singlePage        ,target: elements.javascript   },
                
                {source: elements.angular        ,target: elements.dyanmic   },
                {source: elements.angular        ,target: elements.componments   },
                {source: elements.angular        ,target: elements.client   },
                
                
                {source: elements.componments       ,target: elements.directive   },
                {source: elements.componments       ,target: elements.service   },
                {source: elements.componments       ,target: elements.filter   },
                {source: elements.componments       ,target: elements.factory   },
                {source: elements.componments       ,target: elements.controller   },

                {source: elements.controller       ,target: elements.busisnessLogic   },
                
                {source: elements.directive       ,target: elements.customElements   },
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      