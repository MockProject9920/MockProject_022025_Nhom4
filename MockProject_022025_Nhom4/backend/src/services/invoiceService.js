const db = require("../models");

exports.updateInvoice = async (id, data) => {
  const { transactionId, amount, status } = data;

  const invoice = await db.Invoices.findByPk(id);
  if (!invoice) throw new Error("Invoice not found");

  await invoice.update({ transactionId, amount, status });

  return invoice;
};


// exports.getInvoices = async (query) => {
//   const { status, page = 1, limit = 10 } = query;
//   const offset = (page - 1) * limit;

//   const whereClause = {};
//   if (status) whereClause.status = status;

//   const { count, rows } = await Invoices.findAndCountAll({
//     where: whereClause,
//     limit: parseInt(limit, 10), // Chuyển đổi sang số nguyên
//     offset: parseInt(offset, 10), // Chuyển đổi sang số nguyên
//     order: [["createdAt", "DESC"]],
//   });

//   return {
//     page: parseInt(page, 10), // Chuyển đổi sang số nguyên
//     total: count,
//     invoices: rows,
//   };
// };
exports.getInvoices = async () => {
  try {
    console.log("Invoices Model:", db.Invoices);
    const invoices = await db.Invoices.findAndCountAll(); // Đảm bảo sử dụng 'Invoices'
    return invoices;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error; // Ném lại lỗi để xử lý ở controller
  }
};
