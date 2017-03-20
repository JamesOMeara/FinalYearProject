
module.exports = function(app) {
    
    app.factory('automationForceGraphService', [ function() {

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
                'processes': {
                    name: 'Processes',
                    group: 'red',
                    size: sizes.large,
                    desc: "Software processes from start to finish"
                },
                'development': {
                    name: 'Development',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "The process of making the app."
                },
                'testing': {
                    name: 'Testing',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Process of testing code and output of app."
                },
                'building': {
                    name: 'Building',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "building it locally, or on a server, "
                },
                'deployment': {
                    name: 'Deployment',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Shipping hte final working code to a server and running it continually"
                },
                'ci': {
                    name: 'Continous Integration',
                    group: 'red',
                    size: sizes.medium,
                    desc: "Continually pulling from Source Control and performing jobs"
                },
                'buildserver': {
                    name: 'Build Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Server dedicated to running the continous integration tasks"
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
                'testRunner': {
                    name: 'Test Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'taskRunner': {
                    name: 'Task Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A task runner to manage client side tests"
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
                "buildTask": {
                    name: 'Build',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task to pull from source control and carry out a build"
                },
                "testTask": {
                    name: 'Test',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Carry out various tests on the build"
                },
                "deployTask": {
                    name: 'Deploy',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Task that will execute deployment to the deployment server"
                },
                "sourceControl": {
                    name: 'Source Control',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Where all code will be stored and controlled"
                },
                "git": {
                    name: 'GIT',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A platform for source code management"
                }
           }

               
            var links = [
                
                {source: elements.processes       ,target: elements.development   },
                {source: elements.processes       ,target: elements.testing   },
                {source: elements.processes       ,target: elements.building   },
                {source: elements.processes       ,target: elements.deployment   },
                
                {source: elements.development       ,target: elements.sourceControl   },

                {source: elements.sourceControl       ,target: elements.git   },
                
                {source: elements.ci       ,target: elements.building   },
                {source: elements.ci       ,target: elements.deployment   },
                {source: elements.ci       ,target: elements.jenkins   },
                {source: elements.ci       ,target: elements.karma   },
                {source: elements.ci       ,target: elements.grunt   },
                {source: elements.ci       ,target: elements.testing   },
                
                {source: elements.jenkins       ,target: elements.buildserver   },
                {source: elements.jenkins       ,target: elements.buildTasks   },
                {source: elements.buildTasks       ,target: elements.buildTask   },
                {source: elements.buildTasks       ,target: elements.testTask   },
                {source: elements.buildTasks       ,target: elements.nightlyTask   },
                {source: elements.buildTasks       ,target: elements.deployTask   },
                
                {source: elements.grunt       ,target: elements.taskRunner   },
                {source: elements.grunt       ,target: elements.building   },
                
                {source: elements.karma       ,target: elements.testRunner   },

                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      