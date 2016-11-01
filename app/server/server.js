var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../client/src');



app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3333, function () {
  console.log('Server listening on port 3333!');
});

