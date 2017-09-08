//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server, yo.');
  }
  console.log('Connected to MongoDB server, yo.');

// db.collection('Todos').find({
//   _id: new ObjectID('59b2e494befa931b6c2b7dc9')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err => {
//   console.log('unable to fetch todos, yo.', err);
// })
// );

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err => {
//   console.log('unable to fetch todos, yo.', err);
// })
// );

// find all users named Jesse
db.collection('Users').find({
  name: 'Jesse'
}).count().then((count) => {
  console.log (`Found ${count} users named Jesse, yo.`);
}, (err => {
  console.log ('unable to fetch users named Jesse, yo.', err);
})
);
db.collection('Users').find({
  name: 'Jesse'
}).toArray().then((docs) => {
  console.log (JSON.stringify(docs, undefined, 2));
}, (err => {
  console.log ('unable to fetch users named Jesse, yo.', err);
})
);

//  db.close();
});
