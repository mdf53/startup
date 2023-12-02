const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { client, db } = require('./database');

const WebSocket = require('ws');

const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

const app = express();

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
// app.use(CookieParser());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create an HTTP server using Express
const server = http.createServer(app);

// Create a WebSocket server on the same HTTP server
const wss = new WebSocket.Server({ server });

//Event listener for WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event listener for messages from clients
  ws.on('message', (message) => {
      // Broadcast the message to all connected clients
      console.log('Sending message:', JSON.stringify(message));
      wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(message);
          }
      });
  });

  // Event listener for WebSocket disconnections
  ws.on('close', () => {
      console.log('Client disconnected');
  });
});

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

  // Get user data by username
apiRouter.get('/get-user-by-username', async (req, res) => {
  const { username } = req.query;

  try {
    // Perform logic to retrieve user data from MongoDB
    const userCredentials = await db.collection('userCredentials').findOne({ username });

    if (!userCredentials) {
      // If user not found, respond with a 404 status
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Respond with the user data
    res.json(userCredentials);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

apiRouter.get('/get-userData-by-username', async (req, res) => {  const { username } = req.query;
  try {
    // Perform logic to retrieve user data from MongoDB
    const userData = await db.collection('userData').findOne({ username });

    if (!userData) {
      // If user not found, respond with a 404 status
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Respond with the user data
    res.json(userData);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

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