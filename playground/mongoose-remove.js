const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove(_id: '59dd0e34bbc195c48e6da049').then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('59dd0e34bbc195c48e6da049').then((todo) => {
  console.log(todo);
});
