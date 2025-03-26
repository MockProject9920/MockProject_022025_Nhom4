import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [clientId, setClientId] = useState("");
  const [filteredPayments, setFilteredPayments] = useState([]);

  const payments = [
    { id: "1001", contractName: "Health Insurance", policyStartDate: "2024-01-01", policyEndDate: "2025-01-01", status: "PARTIALLY_PAID", premiumCharge: 500, clientId: "C001" },
    { id: "1002", contractName: "Car Insurance", policyStartDate: "2024-02-01", policyEndDate: "2025-02-01", status: "PAID", premiumCharge: 800, clientId: "C002" },
    { id: "1003", contractName: "Home Insurance", policyStartDate: "2024-03-01", policyEndDate: "2025-03-01", status: "UNPAID", premiumCharge: 1200, clientId: "C001" },
    { id: "1004", contractName: "Life Insurance", policyStartDate: "2024-04-01", policyEndDate: "2034-04-01", status: "PAID", premiumCharge: 1500, clientId: "C003" },
    { id: "1005", contractName: "Travel Insurance", policyStartDate: "2024-05-01", policyEndDate: "2025-05-01", status: "UNPAID", premiumCharge: 700, clientId: "C002" }
  ];

  const fetchPaymentsByClient = () => {
    if (!clientId) {
      alert("Please enter a client ID!");
      return;
    }
    const filtered = payments.filter(payment => payment.clientId === clientId);
    setFilteredPayments(filtered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Management</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchPaymentsByClient} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search Client Payments
        </button>
      </div>

      <div className="border rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Contract Number</th>
              <th className="border p-2">Insurance Type</th>
              <th className="border p-2">Start Date</th>
              <th className="border p-2">End Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Pay</th>
            </tr>
          </thead>
          <tbody>
            {(filteredPayments.length > 0 ? filteredPayments : payments).map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-2">{payment.id}</td>
                <td className="border p-2">{payment.contractName}</td>
                <td className="border p-2">{payment.policyStartDate}</td>
                <td className="border p-2">{payment.policyEndDate}</td>
                <td className="border p-2">
                  <span className={`px-3 py-1 rounded-lg text-white ${payment.status === "PARTIALLY_PAID" ? "bg-yellow-500" : payment.status === "PAID" ? "bg-green-500" : "bg-red-500"}`}>
                    {payment.status.replace("_", " ")}
                  </span>
                </td>
                <td className="border p-2">${payment.premiumCharge}</td>
                <td className="border p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => navigate(`/make-payment/${payment.id}`)}>
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;
