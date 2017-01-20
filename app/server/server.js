var express = require('express');
var path = require('path');
var app = express();
var MongoClient = require('./database/database.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../client/src');

app.use(express.static(path.join(__dirname, '/../client/public')));




app.get('/', function(req, res) {
    res.render('index');
});

app.get('/getSomething', function(req, res) {
    console.log('sending data...')
    results = MongoClient.findDocuments(req, res);
    console.log(results)
});

app.post('/postSomething', function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });
    
    req.on('end', function() {
        // var data = JSON.parse( body ).data; 
        var obj = JSON.parse(body);
        // console.log('saving data...')
        console.log('body');
        console.log(obj);
        // console.log('data');
        // console.log(data);
        MongoClient.insertDocuments(obj);
    });	
});





app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});





		// Handle partial data receipt
		
		    
		// Handle data receipt completion
	    
