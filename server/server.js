var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

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
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    // if no todo send 404 with emtpy body
    if(!todo) {
      return res.status(404).send();
    }
    // if todo send back todo
    res.send({todo});
  }, (e) => {
    res.status(400).send();
  });

});

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id

  // validate the id -> not valid? return 404
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    // if no todo send 404 with emtpy body
    if(!todo) {
      return res.status(404).send();
    }
    // if todo send back todo
    res.send({todo});
  }, (e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
