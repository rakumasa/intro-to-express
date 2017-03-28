var express = require('express');
var theUsers = require('./users.js');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/users', function(req, res) {
  res.send(theUsers);
})

app.get('/users/:id', function(req, res) {
  var userIndex = req.params.id;
  res.send(theUsers[userIndex]);
})

app.post('/users', function(req, res) {
  theUsers.push(req.body);
  res.send(theUsers)
})

app.put('/users/:id', function(req, res) {
  var userIndex = req.params.id;
  theUsers[userIndex].name = req.query.name;
  res.send(theUsers);
})

app.delete('/users/:id', function(req, res) {
  var userIndex = req.params.id;
  theUsers.splice(userIndex, 1);
  res.send(theUsers);
})

app.listen(8000, function() {
  console.log('heard on 8000');
})
