const { Parser } = require("json2csv");
const fs = require("fs");
const path = require("path");

const {
  PaymentTrackings,
  PolicyContacts,
  InsuranceProducts,
} = require("../models");

const getPaymentTrackings = async (page = 1, pageSize = 10) => {
  try {
    const offset = (page - 1) * pageSize;

    const totalRecords = await PaymentTrackings.count();
    const totalPages = Math.ceil(totalRecords / pageSize);

    const paymentTrackings = await PaymentTrackings.findAll({
      include: [
        {
          model: PolicyContacts,
          as: "PolicyContacts",
          attributes: [
            ["id", "policy_id"],
            ["policy_start_date", "policy_start_day"],
            ["policy_end_date", "policy_end_day"],
            ["coverage_amount", "premium_charge"],
          ],
          include: [
            {
              model: InsuranceProducts,
              as: "InsuranceProducts",
              attributes: [["product_name", "contract_name"]],
            },
          ],
        },
      ],
      attributes: [
        ["amount", "payment_amount"],
        ["status", "status"],
      ],
      limit: pageSize,
      offset: offset,
    });

    return { page, pageSize, totalRecords, totalPages, paymentTrackings };
  } catch (error) {
    console.error("Error fetching payment trackings:", error);
    throw error;
  }
};

const exportPaymentTrackingToCSV = async () => {
  try {
    const paymentTrackings = await PaymentTrackings.findAll({
      include: [
        {
          model: PolicyContacts,
          as: "PolicyContacts",
          attributes: [
            "id",
            "policy_start_date",
            "policy_end_date",
            "coverage_amount",
          ],
          include: [
            {
              model: InsuranceProducts,
              as: "InsuranceProducts",
              attributes: ["product_name"],
            },
          ],
        },
      ],
      attributes: ["amount", "status"],
    });

    const rawData = JSON.parse(JSON.stringify(paymentTrackings));

    const jsonData = rawData.map((item) => ({
      policy_id: item.PolicyContacts?.id || "",
      contract_name: item.PolicyContacts?.InsuranceProducts?.product_name || "",
      policy_start_day:
        new Date(item.PolicyContacts?.policy_start_date)
          .toISOString()
          .split("T")[0] || "",
      policy_end_day:
        new Date(item.PolicyContacts?.policy_end_date)
          .toISOString()
          .split("T")[0] || "",
      premium_charge: item.PolicyContacts?.coverage_amount || "",
      payment_amount: item.amount || "",
      balance: item.PolicyContacts?.coverage_amount
        ? item.PolicyContacts.coverage_amount - (item.amount || 0)
        : "",
      status: item.status || "",
    }));

    const fields = [
      { label: "Policy ID", value: "policy_id" },
      { label: "Contract Name", value: "contract_name" },
      { label: "Policy Start Day", value: "policy_start_day" },
      { label: "Policy End Day", value: "policy_end_day" },
      { label: "Premium Charge", value: "premium_charge" },
      { label: "Payment Amount", value: "payment_amount" },
      { label: "Balance", value: "balance" },
      { label: "Status", value: "status" },
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(jsonData);

    const filePath = path.join(
      __dirname,
      "../../public/files/payment_tracking.csv"
    );

    fs.writeFileSync(filePath, csv);

    return filePath;
  } catch (error) {
    console.error("Error exporting CSV: ", error);
    throw error;
  }
};

const getPaymentTrackingById = async (id) => {
  try {
    const paymentTracking = await PaymentTrackings.findOne({
      where: { id },
      include: [
        {
          model: PolicyContacts,
          as: "PolicyContacts",
          attributes: [
            ["id", "policy_id"],
            ["policy_start_date", "policy_start_day"],
            ["policy_end_date", "policy_end_day"],
            ["coverage_amount", "premium_charge"],
          ],
          include: [
            {
              model: InsuranceProducts,
              as: "InsuranceProducts",
              attributes: [["product_name", "contract_name"]],
            },
          ],
        },
      ],
      attributes: [
        "id",
        ["amount", "payment_amount"],
        ["due_date", "due_date"],
        ["reminder_sent", "reminder_sent"], 
        ["status", "status"],
      ],
    });

    if (!paymentTracking) {
      return { success: false, message: "Payment tracking not found" };
    }

    return { success: true, data: paymentTracking };
  } catch (error) {
    console.error("Error fetching payment tracking by ID:", error);
    throw error;
  }
};

module.exports = { getPaymentTrackings, exportPaymentTrackingToCSV,getPaymentTrackingById };
