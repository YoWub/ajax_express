# AJAX and Express App

## Steps

* Create folder and step into it
```
mkdir ajax_express
cd ajax_express
```
* Initialize a node project
```
npm init -y
```
* Install the ExpressJS Backend Framework
```
npm install express
```
* Inside the project folder, create an index.js file and set up a simple Express server with an API endpoint.
```
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
  res.json(users); // Send the users array as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
* Create a `public` folder for the front end create an `index.html`. In the `body`, add the following:
```
<h1>AJAX Example with Express</h1>
<button id="fetchData">Fetch Data from Server</button>
<p id="output"></p>
<script src="script.js"></script>
```
* In the same `public` folder, add a `script.js` file, and add the fetchData button's event handler function to iterate and display the returned data.
```
// script.js
document.getElementById('fetchData').addEventListener('click', () => {
  fetch('/api/data')
    .then(response => response.json())
    .then(users => {
      // Clear previous output
      const output = document.getElementById('output');
      output.innerHTML = '';
      
      // Display each user's info
      users.forEach(user => {
        const userElement = document.createElement('p');
        userElement.textContent = `ID: ${user.id}, Name: ${user.name}`;
        output.appendChild(userElement);
      });
    })
    .catch(error => console.error('Error:', error));
});
```
* Start the server with:
```
node index.js
```

## How it Works

- Backend: The server responds with an array of objects.

- Frontend: The JavaScript code loops through each object in the response and creates a new paragraph element to display each object's attributes on the page.