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

// SECURE IMPLEMENTATION: This endpoint properly sanitizes user input
// to prevent Cross-Site Scripting (XSS) attacks
app.post('/', (req, res) => {
  const { username } = req.body;
  
  // SOLUTION: Sanitize the user input by escaping HTML special characters
  const sanitizedUsername = username
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  
  // Now the response is safe from XSS attacks
  res.send(`<h1>Hello, ${sanitizedUsername}</h1>`);
});

app.listen(3000, () => console.log('App running on port 3000'));

/*
Alternative Solutions:
1. Use a security library like 'xss' or 'sanitize-html':
   npm install xss
   const xss = require('xss');
   const sanitizedUsername = xss(username);

2. Use a template engine like EJS or Pug that automatically escapes output:
   npm install ejs
   app.set('view engine', 'ejs');
   res.render('greeting', { username });
*/ 