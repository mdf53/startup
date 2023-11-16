const MongoClient = require('mongodb');
const data = require('./listingData');

const dbName = 'bnb';
const colName = 'listings';

const url = "mongodb+srv://CS260:<CS260Password>@cluster0.r0w45tj.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function main() {
    const client = new MongoClient(url);
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const result = await client.db(dbName).collection(colName).insertMany(data);


    console.log('Inserted ${result.insertedCount} docs');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
main().catch(console.error);