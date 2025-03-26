import React, { useState } from "react";

const MakePayment = () => {
  // Dữ liệu mẫu hợp đồng
  const mockContract = {
    id: "123456",
    contractName: "Health Insurance",
    premiumCharge: 500.0,
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert(`Payment of $${mockContract.premiumCharge} via ${paymentMethod} successful!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <div className="border rounded-lg p-4">
        <p><strong>Contract Number:</strong> {mockContract.id}</p>
        <p><strong>Insurance Type:</strong> {mockContract.contractName}</p>
        <p><strong>Amount Due:</strong> ${mockContract.premiumCharge}</p>

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
  className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out"
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
