const {createInvoice,deleteInvoice,getInvoice,updateInvoice} = require('../services/invoiceManagement.service');

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



exports.getInvoiceController = async (req, res) => {
 try {
   const invoices = await getInvoice();

   res.status(200).json({ success: true, invoices });
 } catch (error) {
   res
     .status(500)
     .json({ message: "Error retrieving invoices", error: error.message });
 }
};

// Controller function to handle the updating of an invoice
// This function is triggered when a request to update an invoice is received
exports.updateInvoiceController = async (req, res) => {
  const invoiceId = req.params.id; 
  const updateData = req.body; 

  try {
    const updatedInvoice = await updateInvoice(invoiceId, updateData);
    return res.status(200).json({
      success: true,
      message: "Invoice updated successfully",
      data: updatedInvoice,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};