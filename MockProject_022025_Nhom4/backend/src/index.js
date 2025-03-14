// backend/src/app.js

const express = require("express");
const dotenv = require("dotenv");
const logger = require("./config/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectDb } = require("./config/database");

const paymentTrackingRoutes = require("./routes/paymentTracking.routes");
const invoiceManagement = require("./routes/invoiceManagement.routes");

dotenv.config();

const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/payment-tracking", paymentTrackingRoutes);
// routes for invoice management
app.use("/api/invoice", invoiceManagement);

app.use("/api/hello", (req, res) => {
  res.status(200).json("Hello");
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
