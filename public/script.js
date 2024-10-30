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
