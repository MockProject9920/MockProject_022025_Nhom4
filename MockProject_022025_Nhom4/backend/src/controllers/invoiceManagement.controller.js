const {createInvoice,deleteInvoice} = require('../services/invoiceManagement.service');

//Create a new invoice for a transaction
exports.createInvoiceController = async (req, res) => {
    try {
        const invoiceData = req.body;
        const newInvoice = await createInvoice(invoiceData);
        res.status(201).json({success:true,newInvoice});
    } catch (error) {
        res.status(500).json({ message: 'Error creating invoice', error: error.message });
    }
}
//Delete a new invoice for a transaction
exports.deleteInvoiceController = async (req, res) => {
    try {
        const invoiceId = req.params.id;
        const result = await deleteInvoice(invoiceId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting invoice', error: error.message });
    }
}