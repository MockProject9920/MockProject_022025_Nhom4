// backend/src/index.js

const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const { connectDb } = require("./config/database");

// Load environment variables
dotenv.config();

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

connectDb();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
