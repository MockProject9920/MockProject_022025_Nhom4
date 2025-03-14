const Joi = require("joi");

const transactionSchema = Joi.object({

  policyId: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .messages({
      "number.base": "Policy ID must be a number.",
      "number.integer": "Policy ID must be an integer.",
      "number.positive": "Policy ID must be greater than 0.",
    }),

  claimId: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .messages({
      "number.base": "Claim ID must be a number.",
      "number.integer": "Claim ID must be an integer.",
      "number.positive": "Claim ID must be greater than 0.",
    }),

  type: Joi.string()
    .valid("PREMIUM_PAYMENT", "CLAIM_PAYOUT")
    .required()
    .messages({
      "string.base": "Transaction type must be a string.",
      "any.only": 'Transaction type must be either "PREMIUM_PAYMENT" or "CLAIM_PAYOUT".',
      "any.required": "Transaction type is required.",
    }),

  date: Joi.date()
    .max("now")
    .required()
    .messages({
      "date.base": "Date must be a valid date format.",
      "date.max": "Date cannot be in the future.",
      "any.required": "Transaction date is required.",
    }),

  amount: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Amount must be a number.",
      "number.integer": "Amount must be an integer.",
      "number.positive": "Amount must be greater than 0.",
      "any.required": "Transaction amount is required.",
    }),

  method: Joi.string()
    .valid("Credit Card", "PayPal", "Wire Transfer", "Debit Card", "Check", "Bank Transfer")
    .required()
    .messages({
      "string.base": "Payment method must be a string.",
      "any.only": 'Payment method must be one of: "Credit Card", "PayPal", "Wire Transfer", "Debit Card", "Check", "Bank Transfer".',
      "any.required": "Payment method is required.",
    }),

  status: Joi.string()
    .valid("SUCCESS", "PENDING", "FAILED")
    .required()
    .messages({
      "string.base": "Transaction status must be a string.",
      "any.only": 'Status must be one of: "SUCCESS", "PENDING", "FAILED".',
      "any.required": "Transaction status is required.",
    }),
}).unknown(true);

module.exports = transactionSchema;
