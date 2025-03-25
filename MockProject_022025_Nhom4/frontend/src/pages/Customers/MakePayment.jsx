import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MakePayment = () => {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const [contract, setContract] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContractDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contract-detail/${contractId}`);
        setContract(response.data);
      } catch (err) {
        console.error("Error fetching contract details:", err);
        setError("Failed to fetch contract details.");
      }
    };

    fetchContractDetails();
  }, [contractId]);

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
        window.location.href = response.data.order_url;
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

  if (error) return <p className="text-red-500">{error}</p>;
  if (!contract) return <p className="text-blue-500">Loading contract details...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <div className="border rounded-lg p-4">
        <p><strong>Contract Number:</strong> {contract.id}</p>
        <p><strong>Insurance Type:</strong> {contract.contractName}</p>
        <p><strong>Amount Due:</strong> ${contract.premiumCharge}</p>

        <h3 className="text-lg font-semibold mt-4">Payment Method:</h3>
        <div className="mt-2">
          {["Credit Card", "PayPal", "ZaloPay"].map((method) => (
            <label key={method} className="mr-4">
              <input
                type="radio"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              {method}
            </label>
          ))}
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
