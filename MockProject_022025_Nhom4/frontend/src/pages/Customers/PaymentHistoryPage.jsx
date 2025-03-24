import React, { useState } from "react";
import premiumPaymentTracking from "../../data/premiumPaymentTracking";

const PaymentHistoryPage = () => {
  const [filterDate, setFilterDate] = useState("");
  
  const filteredPayments = filterDate
    ? premiumPaymentTracking.filter((payment) => payment.paymentDate.includes(filterDate))
    : premiumPaymentTracking;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment History Page</h2>
      <div className="border-b pb-2 flex items-center gap-2">
        <label className="font-semibold">Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="mt-4 w-full border-collapse border border-gray-300">
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
