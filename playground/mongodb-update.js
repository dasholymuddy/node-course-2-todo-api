//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server, yo.');
  }
  console.log('Connected to MongoDB server, yo.');

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('59b309e31a3024d1a3c42cb0')},
    { $set: {
        name: 'Walter'
      },
      $inc: {
          age: 5
        }
    },
    {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });


//  db.close();
});
