

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



updateDocument = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('test');
  // Update document where a is 2, set b equal to 1 
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

deleteDocument = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('documents');
  // Insert some documents 
  collection.deleteOne({ a : 3 }, function(err, result) {
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

exports.findDocuments = function() {

    MongoClient.connect(dburl, function(err, db) {
        console.log("Connected correctly to server")
        
        db.authenticate(usr, pass, function(err, result) {
        console.log("Authenticated correctly to server")
            var collection = db.collection('test');

            collection.find({}).toArray(function(err, docs) {
                console.log("Found the following records");
                console.dir(docs);
                db.close();
                return docs
            });
        })
    })
};

insertDocuments = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('test');
  // Insert some documents 
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
    



// MongoClient = require('mongodb').MongoClient;

// dburl= "mongodb://danu7.it.nuigalway.ie:8717/mongodb2868";
// usr = "mongodb2868oj";
// pass = "no1cuk";

// findDocuments = function(db, callback) {
//     // Get the documents collection 
//     var collection = db.collection('test');
//     // Find some documents 
//     collection.find({}).toArray(function(err, docs) {
//         console.log("Found the following records");
//         console.dir(docs);
//         callback(docs);
//     });
// };

// insertDocuments = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('documents');
//   // Insert some documents 
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// }

// updateDocument = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1 
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });  
// }

// deleteDocument = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('documents');
//   // Insert some documents 
//   collection.deleteOne({ a : 3 }, function(err, result) {
//     console.log("Removed the document with the field a equal to 3");
//     callback(result);
//   });
// }
    
// // Use connect method to connect to the Server 
// exports.connect = function(){
//     MongoClient.connect(dburl, function(err, db) {
//         console.log("Connected correctly to server")
        
//         db.authenticate(usr, pass, function(err, result) {
//             findDocuments(db, function() {
//                  db.close()
//             })
//         })
//     })
// };
        



