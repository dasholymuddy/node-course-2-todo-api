var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/123456
app.get('/todos/:id', (req, res) => {
  // get id from url
  var id = req.params.id

  // validate id is legit using isValid. give 404 wsith empty body-parser
  if(!ObjectID.isValid(id)) {
    res.status(404).send();
    return console.log('ID not valid, yo.');
  }
  Todo.findById(id).then((todo) => {
    // if no todo send 404 with emtpy body
    if(!todo) {
      res.status(404).send();
      return console.log ('ID not found');
    }
    // if todo send back todo
    res.send({todo});
  }, (e) => {
    res.status(400).send();
  });

});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
