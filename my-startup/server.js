// const express = require('express');
// // const http = require('http');
// const bodyParser = require('body-parser');
// const path = require('path'); // Import the 'path' module
// const { MongoClient } = require('mongodb'); // Import MongoClient from mongodb
// const { client, db } = require('./database.js');


// const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

// const app = express();

// // JSON body parsing using built-in middleware
// app.use(express.json());

// // Serve static files from the 'public' folder
// app.use(express.static(path.join(__dirname, 'public'), { type: 'module' }));
// // app.use(express.static('public'));

// // Router for service endpoints
// const apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// // Create an HTTP server using Express
// const server = http.createServer(app);

// // Start the server
// server.listen(PORT, async () => {
//   console.log(`Server is running on http://localhost:${PORT}`);

//   // Connect to MongoDB
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// });

// app.post('/api/store-user-credentials', async (req, res) => {
//     console.log('Reached the server route');
//     const { username, password } = req.body;
  
//     try {
//       // Perform logic to store user credentials in MongoDB
//       const result = await db.collection('userCredentials').insertOne({ username, password });
  
//       // Send a response back to the client
//       res.header('Content-Type', 'application/json').json({
//         success: true,
//         message: 'User credentials stored successfully',
//         storedUser: { username, password }
//       });
//         } catch (error) {
//       console.error('Error storing user credentials:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   app.post('/update-user-data', async (req, res) => {
//     const { username, userData } = req.body;
  
//     try {
//       // Perform logic to update user data in MongoDB
//       const result = await db.collection('userData').updateOne({ username }, { $set: { ...userData } }, { upsert: true });
  
//       // Send a response back to the client
//       res.json({ message: 'User data updated successfully', updatedUser: { username, ...userData } });
//     } catch (error) {
//       console.error('Error updating user data:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


//From Github before it broke:
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { client, db } = require('./database');

const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

const app = express();

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.post('/api/store-user-credentials', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Perform logic to store user credentials in MongoDB
      const result = await db.collection('userCredentials').insertOne({ username, password });
  
      // Send a response back to the client
      res.header('Content-Type', 'application/json').json({
        success: true,
        message: 'User credentials stored successfully',
        storedUser: { username, password }
      });
        } catch (error) {
      console.error('Error storing user credentials:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/update-user-data', async (req, res) => {
    const { username, userData } = req.body;
  
    try {
      // Check if the user data already exists in the collection
      const existingUserData = await db.collection('userData').findOne({ username });
  
      if (existingUserData) {
        // If user data exists, update the existing document
        await db.collection('userData').updateOne({ username }, { $set: userData });
      } else {
        // If user data doesn't exist, insert a new document
        await db.collection('userData').insertOne({ username, ...userData });
      }
  
      // Respond with a JSON success message
      res.json({ success: true, message: 'User data updated successfully' });
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

// GetReligions
// apiRouter.get('/get-stored-religions', async (_req, res) => {
//   try {
//     // Perform logic to retrieve stored religions from MongoDB
//     const storedReligionsEntry = await db.collection('selectedReligions').findOne();
//     const storedReligions = storedReligionsEntry ? storedReligionsEntry.religions : [];

//     res.json({ storedReligions });
//   } catch (error) {
//     console.error('Error retrieving religions:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Create an HTTP server using Express
const server = http.createServer(app);

// Start the server
server.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Connect to MongoDB
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});