const { MongoClient } = require('mongodb');

const dbName = 'bnb';
const colName = 'listings';

const url = "mongodb+srv://<username>:<password>@cluster0.r0w45tj.mongodb.net";

async function main() {
    const client = new MongoClient(url);

    try{
        await client.connect();

        const cursor = client.db(dbName).collection(colName).find();
        const result = await cursor.toArray();
        result.forEach((i) => console.log(i));
    } finally {
        await client.close();
    }
}
main().catch(console.error);