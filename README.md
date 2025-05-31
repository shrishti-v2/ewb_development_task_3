 # web_development_task_3
 REST API to Manage a List of Books Using Node.js and Express
## Overview
This is a simple REST API built using Node.js and Express that allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The data is stored in-memory, meaning no external database is required.

## Tools & Technologies 
- Node.js - Runtime for JavaScript on the server
- Express.js - Lightweight web framework for API handling
- Postman - API testing tool

## Features
- Retrieve all books (GET /books)
- Retrieve a single book by index (GET /books/:index)
- Add a new book (POST /books)
- Update an existing book (PUT /books/:index)
- Delete a book (DELETE /books/:index)

## Installation & Setup
- Initialize the project with npm init:
 Run the following command inside the project folder:
 npm init -y
- Install Node.js Dependencies:
 Run the following command inside the project folder:
 npm install express
- Run the Server
Start the API by running:
node index.js
- Test API Using Postman

## Future Improvements
- Implement unique IDs instead of using indexes.
- Add persistent database storage (MongoDB, MySQL).
- Include pagination & filtering.
- Build a frontend UI for book management.
