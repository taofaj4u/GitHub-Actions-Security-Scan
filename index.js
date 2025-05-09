const express = require('express');
const app = express();

// Enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve a simple form that accepts user input
app.get('/', (req, res) => {
  res.send(`
    <form method="POST">
      <input name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// VULNERABLE CODE: This endpoint has a Cross-Site Scripting (XSS) vulnerability
// The user input is directly reflected in the response without any sanitization
// This allows attackers to inject malicious JavaScript code
app.post('/', (req, res) => {
  const { username } = req.body;
  // VULNERABILITY: User input is directly interpolated into the HTML response
  // This allows for XSS attacks if the input contains JavaScript code
  res.send(`<h1>Hello, ${username}</h1>`);
});

app.listen(3000, () => console.log('App running on port 3000'));
