import React, { useState } from "react";

const PaymentHistoryPage = () => {
  const [filterDate, setFilterDate] = useState("");

  const payments = [
    {
      id: 1,
      transactionId: "TXN123456",
      policyNumber: "POL1001",
      paymentDate: "2025-03-20",
      amount: 150.0,
      paymentMethod: "Credit Card",
      paymentStatus: "Completed",
    },
    {
      id: 2,
      transactionId: "TXN123457",
      policyNumber: "POL1002",
      paymentDate: "2025-03-21",
      amount: 200.0,
      paymentMethod: "PayPal",
      paymentStatus: "Pending",
    },
    {
      id: 3,
      transactionId: "TXN123458",
      policyNumber: "POL1003",
      paymentDate: "2025-03-19",
      amount: 300.0,
      paymentMethod: "Bank Transfer",
      paymentStatus: "Failed",
    },
  ];

  const filteredPayments = filterDate
    ? payments.filter((payment) => payment.paymentDate.includes(filterDate))
    : payments;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>

      <div className="flex items-center gap-2 mb-4">
        <label className="font-semibold">Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Transaction ID</th>
            <th className="border p-2">Policy Number</th>
            <th className="border p-2">Payment Date</th>
            <th className="border p-2">Amount ($)</th>
            <th className="border p-2">Payment Method</th>
            <th className="border p-2">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-2">{payment.transactionId}</td>
                <td className="border p-2">{payment.policyNumber}</td>
                <td className="border p-2">{payment.paymentDate}</td>
                <td className="border p-2">${payment.amount}</td>
                <td className="border p-2">{payment.paymentMethod}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      payment.paymentStatus === "Completed"
                        ? "bg-green-500"
                        : payment.paymentStatus === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {payment.paymentStatus}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border p-2 text-center text-gray-500">
                No payment records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryPage;
