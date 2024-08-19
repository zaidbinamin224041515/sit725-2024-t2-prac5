// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import the controllers
const taskController = require('./controllers/taskController');
const dbController = require('./controllers/dbController');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/tasks', taskController.getTasks);
app.post('/tasks', taskController.addTask);

// Route to handle MongoDB connection
app.post('/connect-db', dbController.connectToDb);

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
