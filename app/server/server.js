var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var MongoClient = require('./database/database.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../client/src');

app.use(express.static(path.join(__dirname, '/../client/public')));




app.get('/', function(req, res) {
    res.render('index');
});

app.get('/home', function(req, res) {
    res.render('index');
});

app.get('/getSomething', function(req, res) {
    results = MongoClient.findDocuments(req, res);
});

app.get('/exampleGetUrl', function(req, res) {
    res.send( { message: "this is a message retrieved from server" } ) ;
});


app.post('/postSomething', function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });
    
    req.on('end', function() {
        var obj = JSON.parse(body);
        MongoClient.insertDocuments(obj);
    });	
});

app.post('/deleteSomething', function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });
    
    req.on('end', function() {
        var obj = JSON.parse(body);
        MongoClient.deleteDocument(obj);
    });	
});





app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});

