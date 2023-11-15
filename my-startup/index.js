const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.post('/store-religions', (req, res) => {
  const selectedReligions = req.body.selectedReligions;

  // Perform logic to store selected religions (for example, store in-memory)
  const storedReligions = []; // In-memory storage for simplicity
  storedReligions.push(...selectedReligions);

  // Send a response back to the client
  res.json({ message: 'Selected religions stored successfully', storedReligions });
});

// GetReligions
apiRouter.get('/get-stored-religions', (_req, res) => {
  // Perform logic to retrieve stored religions (for example, from in-memory storage)
  const storedReligions = []; 
  res.json({ storedReligions });
});

//


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});