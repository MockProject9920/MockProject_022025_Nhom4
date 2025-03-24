import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/payment-tracking");
        setPayments(response.data);
      } catch (err) {
        console.error("Error fetching payments:", err);
        setError("Failed to fetch payment data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const exportCSV = () => {
    window.open("http://localhost:5000/api/transactions/export-csv", "_blank");
  };

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Management</h2>

      <div className="flex justify-between mb-4">
        <button onClick={exportCSV} className="bg-green-500 text-white px-4 py-2 rounded">
          Export CSV
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
            {payments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-2">{payment.id}</td>
                <td className="border p-2">{payment.contractName}</td>
                <td className="border p-2">{payment.policyStartDate}</td>
                <td className="border p-2">{payment.policyEndDate}</td>
                <td className="border p-2">
                  <span
                    className={`px-3 py-1 rounded-lg text-white ${
                      payment.status === "PARTIALLY_PAID"
                        ? "bg-yellow-500"
                        : payment.status === "PAID"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {payment.status.replace("_", " ")}
                  </span>
                </td>
                <td className="border p-2">${payment.premiumCharge}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => navigate(`/make-payment/${payment.id}`)}
                  >
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
