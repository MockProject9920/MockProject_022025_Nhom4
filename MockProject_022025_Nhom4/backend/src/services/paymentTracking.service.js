const {
  PaymentTrackings,
  PolicyContacts,
  Claims,
  InsuranceProducts,
} = require("../models");

const getPaymentTrackings = async (page = 1, pageSize = 10) => {
  try {
    const offset = (page - 1) * pageSize; // Tính vị trí bắt đầu

    // Lấy tổng số bản ghi trong bảng PaymentTrackings
    const totalRecords = await PaymentTrackings.count();

    // Tính tổng số trang (làm tròn lên)
    const totalPages = Math.ceil(totalRecords / pageSize);

    // Lấy danh sách payment trackings
    const paymentTrackings = await PaymentTrackings.findAll({
      include: [
        {
          model: PolicyContacts,
          as: "PolicyContacts",
          attributes: [
            ["id", "policy_id"],
            ["policy_start_date", "payment_start_date"],
            ["policy_end_date", "payment_end_date"],
            ["coverage_amount", "premium_charge"],
          ],
          include: [
            {
              model: InsuranceProducts,
              as: "InsuranceProducts",
              attributes: [["product_name", "insurance_product_name"]],
            },
          ],
        },
        {
          model: Claims,
          as: "Claims",
        },
      ],
      attributes: [["amount", "payment_amount"]],
      limit: pageSize, // Giới hạn số bản ghi trên mỗi trang
      offset: offset, // Vị trí bắt đầu
    });

    return { page, pageSize, totalRecords, totalPages, paymentTrackings };
  } catch (error) {
    console.error("Error fetching payment trackings:", error);
    throw error;
  }
};

module.exports = { getPaymentTrackings };
