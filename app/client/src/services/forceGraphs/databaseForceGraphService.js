
module.exports = function(app) {
    
    app.factory('databaseForceGraphService', [ function() {

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
                'database': {
                    name: 'Database',
                    group: 'red',
                    size: sizes.large,
                    desc: "Somewhere where data is stored"
                },
                 'mongoDB': {
                    name: 'MongoDB',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Document orientated database"
                },
                 'databaseTools': {
                    name: 'Tools',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Tools to Manage Database"
                },
                 'robomongo': {
                    name: 'Robomongo',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "Tool to Manage Database"
                },
                'relational': {
                    name: 'Relational',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "A database structure that uses relations"
                },
                'objectOrientated': {
                    name: 'Object Orientated',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "A database structure that stores objects"
                },
                'sql': {
                    name: 'sql',
                    group: 'grey',
                    size: sizes.medium,
                    desc: "A database structure that stores objects"
                },


           }

               
            var links = [
                {source: elements.database        ,target: elements.objectOrientated   },
                {source: elements.database        ,target: elements.relational   },

                {source: elements.objectOrientated        ,target: elements.mongoDB   },
                
                {source: elements.database        ,target: elements.databaseTools   },
                {source: elements.databaseTools        ,target: elements.robomongo   },

                {source: elements.mongoDB        ,target: elements.robomongo   },

                {source: elements.relational        ,target: elements.sql   },
                
                
                
            ]


            return {
                elements: elements,
                links: links
            }
    }])
}
        
      