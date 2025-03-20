const {Invoices, Transactions} = require("../models");

const createInvoice = async (invoiceData) => {
    const { transactionId, amount, status } = invoiceData;
    // Validate input data
    if (!transactionId || !amount || !status) {
        throw new Error('Transaction ID, amount, and status are required');
    }
    // Check if transactionId exists in the database
    const transaction = await Transactions.findByPk(transactionId);
    if (!transaction) {
        throw new Error(`Transaction with ID ${transactionId} not found`);
    }
    try {
        // Create a new invoice
        const newInvoice = await Invoices.create(invoiceData);
        return newInvoice;
    } catch (error) {
        throw new Error(`Error creating invoice: ${error.message}`);
    }
};

const deleteInvoice = async (invoiceId) => {
    // Validate input
    if (!invoiceId) {
        throw new Error('Invoice ID is required');
    }
    // Check if the invoice exists
    const invoice = await Invoices.findByPk(invoiceId);
    if (!invoice) {
        throw new Error(`Invoice with ID ${invoiceId} not found`);
    }
    try {
        // Delete the invoice
        await Invoices.destroy({
            where: { id: invoiceId }
        });
        return { success: true, message: `Invoice ID ${invoiceId} deleted successfully` };
    } catch (error) {
        throw new Error(`Error deleting invoice: ${error.message}`);
    }
};


const getInvoice = async () => {
    try {
        const invoices = await Invoices.findAll();
        return invoices;
    } catch (error) {
        throw new Error("Error fetching invoices: " + error.message);
    }
};


const updateInvoice = async (invoiceId, updateData) => {
  if (!invoiceId || !updateData) {
    throw new Error("Invoice ID and update data are required");
  }
  const invoice = await Invoices.findByPk(invoiceId);
  if (!invoice) {
    throw new Error(`Invoice with ID ${invoiceId} not found`);
  }
  try {
    await Invoices.update(updateData, {
      where: { id: invoiceId },
    });
    const updatedInvoice = await Invoices.findByPk(invoiceId);
    return updatedInvoice;
  } catch (error) {
    throw new Error(`Error updating invoice: ${error.message}`);
  }
};


module.exports = {
    deleteInvoice,
    createInvoice,
    updateInvoice,
    getInvoice
};
