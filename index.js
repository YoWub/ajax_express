// index.js
const express = require('express');
const app = express();
const port = 3000;

// Array of users to return
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// Middleware to serve static files (for serving HTML, CSS, JS files)
app.use(express.static('public'));

// Route to respond with JSON data
app.get('/api/data', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
