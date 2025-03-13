// backend/src/app.js

const express = require("express");
const dotenv = require("dotenv");
const logger = require("./config/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectDb } = require("./config/database");

const paymentTrackingRoutes = require("./routes/paymentTracking.routes");

dotenv.config();

const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/payment-tracking", paymentTrackingRoutes);
app.use("/api/hello", (req, res) => {
  res.send(200).json("Hello");
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
