var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.get('/', function (req, res) {
//   res.render('../client/index');
// });

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});