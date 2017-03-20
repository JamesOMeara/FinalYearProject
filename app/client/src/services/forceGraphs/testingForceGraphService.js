
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
                 'client': {
                    name: 'Client',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Client side of an app (What end user interacts with)"
                },
                'angular': {
                    name: 'Angular',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Strong clientSide framework for responsive apps"
                },
                 'server': {
                    name: 'Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server side of app, interacts with database and requests from client"
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
                'testing': {
                    name: 'Testing',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Process of testing code and output of app."
                },
                'ci': {
                    name: 'Continous Integration',
                    group: 'red',
                    size: sizes.medium,
                    desc: "Continually pulling from Source Control and performing jobs"
                },
                'jenkins': {
                    name: 'Jenkins',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A platform to manage jobs for continous integration"
                },
                'karma': {
                    name: 'Karma',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A test runner for client side quests"
                },
                'coverage': {
                    name: 'Code Coverage',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Displaying code coverage of tests to source code"
                },
                'testRunner': {
                    name: 'Test Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'grunt': {
                    name: 'Grunt',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task runner for an app"
                },
                "buildTasks": {
                    name: 'Build Tasks',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task or jobs that are run on a build server (Jenkins)"
                },
                "nightlyTask": {
                    name: 'Nightly',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task or Job that will be run nightly, so that the output will be ready for start of each day"
                },
                "testTask": {
                    name: 'Test',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Carry out various tests on the build"
                },
                "jasmine": {
                    name: 'Jasmine',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "jasmine is a Javascript framework for testing"
                },
                "jasmineNode": {
                    name: 'Jasmine Node',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Framework for server side testing of Node"
                },
              
           }

               
            var links = [

                {source: elements.componments       ,target: elements.directive   },
                {source: elements.componments       ,target: elements.service   },
                {source: elements.componments       ,target: elements.filter   },
                {source: elements.componments       ,target: elements.factory   },
                {source: elements.componments       ,target: elements.controller   },

                {source: elements.ci       ,target: elements.jenkins   },
                {source: elements.ci       ,target: elements.karma   },
                {source: elements.ci       ,target: elements.grunt   },
                {source: elements.ci       ,target: elements.testing   },

                {source: elements.jenkins       ,target: elements.buildTasks   },
                
                {source: elements.buildTasks       ,target: elements.testTask   },
                {source: elements.buildTasks       ,target: elements.nightlyTask   },
                
                {source: elements.testing       ,target: elements.server   },
                {source: elements.testing       ,target: elements.client   }, 
                {source: elements.testing       ,target: elements.jasmine   }, 
                {source: elements.testing       ,target: elements.coverage   }, 
                
                {source: elements.client       ,target: elements.karma   },
                {source: elements.client       ,target: elements.angular   },

                {source: elements.server       ,target: elements.jasmineNode   },

                {source: elements.angular       ,target: elements.componments   },
                
                {source: elements.karma       ,target: elements.testRunner   },
                {source: elements.karma       ,target: elements.grunt   },
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      