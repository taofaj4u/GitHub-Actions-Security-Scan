# Vulnerable Node.js App - DevSecOps Lab

This is a beginner-friendly lab designed to demonstrate how to use GitHub's CodeQL for security analysis. The application contains a deliberate Cross-Site Scripting (XSS) vulnerability for educational purposes.

## Why are we doing this?
To introduce security automation in DevOps pipelines by running a security scan in CI/CD using a GitHub Actions workflow.

## Tools Needed
- GitHub
- GitHub Actions
- Sample Node.js
- GitHub CodeQL Action

## Lab Steps

1. **Fork this repo:**  
   https://github.com/srunsewe12/GitHub-Actions-Security-Scan.git

2. **Clone your forked version:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/GitHub-Actions-Security-Scan.git
   cd GitHub-Actions-Security-Scan
   ```

3. **Open `index.js` and personalize the vulnerability:**
   - Find this line:
     ```js
     res.send(`<h1>Hello, ${username}</h1>`);
     ```
   - Change it to include your name, e.g.:
     ```js
     res.send(`<h1>Hello from Seun, ${username}</h1>`);
     ```
   - You'll see your name echoed in the same vulnerable output the scanner flags.

4. **Write 3 Quick Notes in your `README.md`:**
   Add your answers to the following questions at the bottom of this README:
   
   ## Reflection Questions
   1. What does the script do when a user submits their name?
   2. Why might this be dangerous in a real-world app?
   3. What could you do to make it safer?

5. **Save your changes and push:**
   ```bash
   git add index.js README.md
   git commit -m "personalized vulnerability and added notes to README"
   git push origin main
   ```

6. **View Code Scanning Results:**
   - Click on Security (at the top of your GitHub repo UI) > Then click on Code scanning alerts
   - Find the vulnerability flagged in `index.js` (it will mention something like "Reflected cross-site scripting" and point to the line you edited)

## Checkpoint
Screenshot of a CodeQL report showing at least one flagged vulnerability.

---

## Learning Objectives

- Understand how to set up and run a basic Node.js application
- Learn about Cross-Site Scripting (XSS) vulnerabilities
- Practice using GitHub's CodeQL for security analysis
- Understand how to interpret security scan results
- Learn how to fix common security vulnerabilities

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Visit `http://localhost:3000` in your browser

## The Vulnerability

The application contains a deliberate XSS vulnerability in the form submission handler. When you submit the form, the user input is directly reflected in the response without any sanitization.

To test the vulnerability:
1. Start the application
2. Visit http://localhost:3000
3. Enter the following in the input field:
   ```html
   <script>alert('XSS')</script>
   ```
4. Submit the form
5. You should see an alert popup, demonstrating the XSS vulnerability

## CodeQL Analysis

This repository includes a GitHub Actions workflow that runs CodeQL analysis on:
- Every push to the main branch
- Every pull request to the main branch
- Weekly (every Sunday)

The analysis will detect the XSS vulnerability and provide detailed information about:
- The vulnerability type
- The vulnerable code path
- Recommendations for fixing the issue

## How to Fix

The vulnerability can be fixed by properly sanitizing the user input before reflecting it in the response. Check the `solution` branch for the secure implementation.

## Security Note

This application is intentionally vulnerable and should only be used for educational purposes in a controlled environment. Do not deploy this code in production.