// backend/src/app.js

const express = require("express");
const dotenv = require("dotenv");
const logger = require("./config/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectDb } = require("./config/database");
const paymentTrackingRoutes = require("./routes/paymentTracking.routes");
const invoiceManagement = require("./routes/invoiceManagement.routes");
const transactionRoutes = require("./routes/transaction.routes");

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
// transaction routes
app.use("/api/transactions", transactionRoutes);


app.use("/api/hello", (req, res) => {
  res.status(200).json("Hello");
});

// Error handling middleware
app.use(errorHandler);

// app.use("/api/invoice", invoiceRoutes);







// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
