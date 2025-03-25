import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import premiumPaymentTracking from "../../data/premiumPaymentTracking";

const MakePayment = () => {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const contract = premiumPaymentTracking.find((p) => p.id === contractId);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  if (!contract) {
    return <p className="text-red-500">Contract not found!</p>;
  }

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/payment", {
        app_user: "test_user",
        amount: contract.premiumCharge,
        description: `Payment for ${contract.contractName}`,
      });

      if (response.data.order_url) {
        window.location.href = response.data.order_url; // Điều hướng đến trang thanh toán
      } else {
        alert("Failed to create payment. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <div className="border rounded-lg p-4">
        <p><strong>Contract Number:</strong> {contract.id}</p>
        <p><strong>Insurance Type:</strong> {contract.contractName}</p>
        <p><strong>Amount Due:</strong> ${contract.premiumCharge}</p>

        <h3 className="text-lg font-semibold mt-4">Payment Method:</h3>
        <div className="mt-2">
          <label className="mr-4">
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={() => setPaymentMethod("Credit Card")}
            />
            Credit Card
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={() => setPaymentMethod("PayPal")}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="ZaloPay"
              checked={paymentMethod === "ZaloPay"}
              onChange={() => setPaymentMethod("ZaloPay")}
            />
            ZaloPay
          </label>
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : "Confirm Payment"}
        </button>
      </div>
    </div>
  );
};

export default MakePayment;
