import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import premiumPaymentTracking from "../../data/premiumPaymentTracking";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [payments] = useState(premiumPaymentTracking);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment</h2>
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
                <td className="border p-2">{payment.status}</td>
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
