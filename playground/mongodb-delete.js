//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server, yo.');
  }
  console.log('Connected to MongoDB server, yo.');

// deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch yo'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })

// delete duplicates of Andrew
// db.collection('Users').deleteMany({name: 'Jesse'}).then((result) => {
//   console.log(result);
// });

// delete by specific id
db.collection('Users').findOneAndDelete({_id: new ObjectID('59b2f304e4607f22c8c11ed3')}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

//  db.close();
});
