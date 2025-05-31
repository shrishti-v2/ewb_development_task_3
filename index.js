const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = []; // Store books in memory

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get a book by Index
app.get('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= books.length) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(books[index]);
});

// Add a new book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
});

// Update a book by index
app.put('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < books.length) {
        books[index] = req.body;
        res.json(books[index]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Delete a book by index
app.delete('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < books.length) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});