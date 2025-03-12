// backend/src/index.js

const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});