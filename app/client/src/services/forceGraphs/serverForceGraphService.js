
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
                    size: sizes.medium,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                'server': {
                    name: 'Server',
                    group: 'red',
                    size: sizes.medium,
                    desc: "Computer or computer program which manages access to a centralized resource or service in a network."
                },
                'buildserver': {
                    name: 'Build Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server dedicated to running the continous integration tasks"
                },
                'deploymentServer': {
                    name: 'Deployment Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A dedicated server to manage deployment of apps/sites"
                },
                'hostingServer': {
                    name: 'Hosting Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A dedicated server to host an app or website"
                },
                'ubuntu': {
                    name: 'Ubuntu',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Operating System"
                },
                'linux': {
                    name: 'linux',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Operating System"
                },
                'windows': {
                    name: 'Windows',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Operating System"
                },
                'operatingSystem': {
                    name: 'Operating System',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "the low-level software that supports a computer's basic functions, such as scheduling tasks and controlling peripherals."
                },
                'jenkins': {
                    name: 'Jenkins',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A platform to manage jobs for continous integration"
                },
                'serverTypes': {
                    name: 'Uses',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Uses of a deployment Server"
                },
                
    
           }

               
            var links = [
                {source: elements.server        ,target: elements.node   },
                {source: elements.server        ,target: elements.serverTypes   },
                {source: elements.server        ,target: elements.operatingSystem   },

                {source: elements.operatingSystem        ,target: elements.windows   },
                {source: elements.operatingSystem        ,target: elements.linux   },

                {source: elements.linux        ,target: elements.ubuntu   },

                {source: elements.singlePage        ,target: elements.node   },
                
                {source: elements.serverTypes        ,target: elements.buildserver   },
                {source: elements.serverTypes        ,target: elements.deploymentServer   },
                {source: elements.serverTypes        ,target: elements.hostingServer   },

                {source: elements.buildserver        ,target: elements.jenkins   },
                {source: elements.deploymentServer        ,target: elements.jenkins   },
                {source: elements.hostingServer        ,target: elements.node   },
                
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      