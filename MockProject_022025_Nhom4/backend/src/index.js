// backend/src/app.js

const express = require("express");
const dotenv = require("dotenv");
const logger = require("./config/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectDb } = require("./config/database");

dotenv.config();

const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
