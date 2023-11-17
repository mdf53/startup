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

app.post('/store-religions', async (req, res) => {
  const selectedReligions = req.body.selectedReligions;

  try {
    // Perform logic to store selected religions in MongoDB
    const result = await db.collection('selectedReligions').insertOne({ religions: selectedReligions });

    // Send a response back to the client
    res.json({ message: 'Selected religions stored successfully', storedReligions: selectedReligions });
  } catch (error) {
    console.error('Error storing religions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GetReligions
apiRouter.get('/get-stored-religions', async (_req, res) => {
  try {
    // Perform logic to retrieve stored religions from MongoDB
    const storedReligionsEntry = await db.collection('selectedReligions').findOne();
    const storedReligions = storedReligionsEntry ? storedReligionsEntry.religions : [];

    res.json({ storedReligions });
  } catch (error) {
    console.error('Error retrieving religions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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
