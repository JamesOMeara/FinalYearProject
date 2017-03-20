
module.exports = function(app) {
    
    app.factory('gitForceGraphService', [ function() {

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
                "sourceControl": {
                    name: 'Source Control',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Where all code will be stored and controlled"
                },
                "git": {
                    name: 'GIT',
                    group: 'red',
                    size: sizes.medium,
                    desc: "A platform for source code management  https://juristr.com/blog/2013/04/git-explained/"
                },
                "local": {
                    name: 'Local Repo',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Git stores a local copy of the repo"
                },
                "central": {
                    name: 'Centraliazed Repo',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Git stores a centraliazed copy of the repo"
                },
                "commands": {
                    name: 'Commands',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Git can be used via command line to update ,pull ,fork etc.. from the desired repo"
                },
                "status": {
                    name: 'Status',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "get the current status of your local repo"
                },
                "add": {
                    name: 'Add',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Allows the user to add certain files to a local commit/Staging area"
                },
                "staging": {
                    name: 'Staging',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "An intermedediate level between your local repository and the centralized one"
                },
                "master": {
                    name: 'Master',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "The repository’s main branch. Depending on the work flow it is the one people work on or the one where the integration happens"
                },
                "clone": {
                    name: 'Clone',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "copies an existing git repository, normally from some remote location to your local environment."
                },
                "commit": {
                    name: 'Commit',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "submitting files to the repository (the local one); in other VCS it is often referred to as “checkin”"
                },
                "pull": {
                    name: 'Pull',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "An update or get latest, Pull will fetch latest and merge"
                },
                "fetch": {
                    name: 'Fetch',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "An update or get latest, Fetch will collect latest changes but not merge"
                },
                "push": {
                    name: 'Push',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "used to submit the code to a remote repository"
                },
                "remote": {
                    name: 'Remote',
                    group: 'grey',
                    size: sizes.medium,
                    desc: " “remote” locations of your repository, normally on some central server."
                },
                "head": {
                    name: 'Head',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "is a reference to the node to which our working space of the repository currently points."
                },
                "branch": {
                    name: 'Branch',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "the master node or any node can split and branch to different nodes like a tree"
                }
               
           }

               
            var links = [
                {source: elements.git       ,target: elements.sourceControl   },
                {source: elements.git       ,target: elements.local   },
                {source: elements.git       ,target: elements.central   },
                {source: elements.git       ,target: elements.staging   },
                {source: elements.git       ,target: elements.commands   },

                {source: elements.commands       ,target: elements.status   },
                {source: elements.commands       ,target: elements.add   },
                {source: elements.commands       ,target: elements.master   },
                {source: elements.commands       ,target: elements.clone   },
                {source: elements.commands       ,target: elements.commit   },
                {source: elements.commands       ,target: elements.pull   },
                {source: elements.commands       ,target: elements.fetch   },
                {source: elements.commands       ,target: elements.push   },
                {source: elements.commands       ,target: elements.remote   },
                {source: elements.commands       ,target: elements.head   },
                
                {source: elements.branch       ,target: elements.master   },

                {source: elements.pull       ,target: elements.fetch   },
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      