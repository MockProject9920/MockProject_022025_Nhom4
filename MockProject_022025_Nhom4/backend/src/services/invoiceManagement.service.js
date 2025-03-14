const {Invoices,Transactions} = require("../models")

const createInvoice = async (invoiceData) => {
    const { transactionId, amount, status } = invoiceData;
    // Kiểm tra dữ liệu đầu vào (validate)
    if (!transactionId || !amount || !status) {
        throw new Error('Transaction ID, amount, and status are required');
    }
    // Kiểm tra xem transactionId có tồn tại trong cơ sở dữ liệu không
    const transaction = await Transactions.findByPk(transactionId);
    if (!transaction) {
        throw new Error(`Transaction with ID ${transactionId} not found`);
    }
    try {
        const newInvoice = await Invoices.create(invoiceData);
        return newInvoice;
    } catch (error) {
        throw new Error(`Error creating invoice: ${error.message}`);
    }
}

const deleteInvoice = async (invoiceId) => {
    // Kiểm tra đầu vào
    if (!invoiceId) {
        throw new Error('Invoice ID is required');
    }
    // Kiểm tra hóa đơn có tồn tại không
    const invoice = await Invoices.findByPk(invoiceId);
    if (!invoice) {
        throw new Error(`Invoice with ID ${invoiceId} not found`);
    }
    try {
        // Xóa hóa đơn
        await Invoices.destroy({
            where: { id: invoiceId }
        });
        return { success: true, message: `Invoice ID ${invoiceId} deleted successfully` };
    } catch (error) {
        throw new Error(`Error deleting invoice: ${error.message}`);
    }
};

module.exports = {
    deleteInvoice,
    createInvoice
};

