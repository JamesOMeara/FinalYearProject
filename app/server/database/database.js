

MongoClient = require('mongodb').MongoClient;

dburl= "mongodb://danu7.it.nuigalway.ie:8717/mongodb2868";
usr = "mongodb2868oj";
pass = "no1cuk";

findDocuments = function(db, callback) {
    // Get the documents collection 
    var collection = db.collection('test');
    // Find some documents 
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });
};
    
// Use connect method to connect to the Server 
exports.connect = function(){
    MongoClient.connect(dburl, function(err, db) {
        console.log("Connected correctly to server")
        
        db.authenticate(usr, pass, function(err, result) {
            findDocuments(db, function() {
                 db.close()
            })
        })
    })
};
        


