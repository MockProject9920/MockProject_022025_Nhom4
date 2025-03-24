import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import premiumPaymentTracking from "../../data/premiumPaymentTracking";

const MakePayment = () => {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const contract = premiumPaymentTracking.find((p) => p.id === contractId);
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!contract) {
    return <p className="text-red-500">Contract not found!</p>;
  }

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
              value="Bank Transfer"
              checked={paymentMethod === "Bank Transfer"}
              onChange={() => setPaymentMethod("Bank Transfer")}
            />
            Bank Transfer
          </label>
        </div>

        {paymentMethod === "Credit Card" && (
          <div className="mt-4">
            <input className="border p-2 w-full" type="text" placeholder="Cardholder Name" />
            <input className="border p-2 w-full mt-2" type="text" placeholder="Expiry Date" />
            <input className="border p-2 w-full mt-2" type="text" placeholder="CVV" />
          </div>
        )}

        {paymentMethod === "PayPal" && (
          <div className="mt-4">
            <input className="border p-2 w-full" type="email" placeholder="PayPal Email" />
          </div>
        )}

        {paymentMethod === "Bank Transfer" && (
          <div className="mt-4">
            <input className="border p-2 w-full" type="text" placeholder="Bank Name" />
            <input className="border p-2 w-full mt-2" type="text" placeholder="Account Number" />
          </div>
        )}

        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => alert("Payment processed successfully!")}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default MakePayment;
