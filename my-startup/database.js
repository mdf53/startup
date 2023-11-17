const config = require('./dbConfig.json');
const { MongoClient } = require('mongodb');

const dbName = 'Daily Devotional';

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db(dbName);

module.exports = { client, db };

// async function addUser(collectionName, object){
//   const collection = db.collection(collectionName);
//   try{
//   await collection.insert(object);
//   } catch{
//     console.log("Error adding object to the collection.");
//   }
// }

// async function editobject(collectionName, user, edit){
//   const user = client.db(dbName).collection(user).find();
//   db.collection.updateOne(edit);
// }

// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });