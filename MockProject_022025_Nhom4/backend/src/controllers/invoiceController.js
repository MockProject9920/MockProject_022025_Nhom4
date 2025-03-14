const invoiceService = require("../services/invoiceService");

exports.updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInvoice = await invoiceService.updateInvoice(id, req.body);
    return res.json({
      message: "Invoice updated successfully",
      invoice: updatedInvoice,
    });
  } catch (error) {
    console.error("Error updating invoice:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await invoiceService.getInvoices(req.query);
    res.json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ error: "Error fetching invoices" });
  }
};
