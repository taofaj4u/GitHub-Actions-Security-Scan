# Vulnerable Node.js App - DevSecOps Lab

This is a beginner-friendly lab designed to demonstrate how to use GitHub's CodeQL for security analysis. The application contains a deliberate Cross-Site Scripting (XSS) vulnerability for educational purposes.

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

## Lab Checkpoint

After running the CodeQL analysis:
1. Go to the "Actions" tab in your repository
2. Click on the latest CodeQL analysis run
3. Review the findings under the "Security" tab → "Code scanning alerts"
4. Take a screenshot of the CodeQL report showing the flagged XSS vulnerability
5. This screenshot will serve as your checkpoint for completing the lab

## How to Fix

The vulnerability can be fixed by properly sanitizing the user input before reflecting it in the response. Check the `solution` branch for the secure implementation.

## Security Note

This application is intentionally vulnerable and should only be used for educational purposes in a controlled environment. Do not deploy this code in production.