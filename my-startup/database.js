// const config = require('./dbConfig.json');
// const { MongoClient } = require('mongodb');

// const dbName = 'DailyDevotional';

// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url);
// const db = client.db(dbName);

// export {db};

// try 2
// import config from './dbConfig.json';
// import { MongoClient } from 'mongodb';

// const dbName = 'DailyDevotional';

// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = client.db(dbName);

// export { client, db };


// Try 3 (from github before it broke.)
const config = require('./dbConfig.json');
const { MongoClient } = require('mongodb');

const dbName = 'DailyDevotional';

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db(dbName);

module.exports = { client, db };