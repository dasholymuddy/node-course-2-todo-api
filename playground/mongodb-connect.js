//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server, yo.');
  }
  console.log('Connected to MongoDB server, yo.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do, yo.',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo, yo.');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // insert new doc into Users (name, age, location)
  //  db.collection('Users').insertOne({
  //    name: 'Jesse',
  //    age: 22,
  //    location: 'ABQ'
  //  }, (err, result) => {
  //    if (err) {
  //      return console.log('Unable to insert User, yo.');
  //    }
  //    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //  });

  db.close();
});
