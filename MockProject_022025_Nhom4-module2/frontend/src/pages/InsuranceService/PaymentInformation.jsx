import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function PaymentInformation() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full p-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-gray-600 text-lg mb-4">
        <FaHome className="text-xl cursor-pointer" onClick={() => navigate("/")} />
        <span className="text-black font-semibold">&gt;</span>
        <span className="font-semibold text-black">Register for insurance</span>
        <span className="text-black font-semibold">&gt;</span>
        <span className="text-gray-400">Payment Information</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-8 justify-center text-xl border-b border-black">
        <div className="cursor-pointer" onClick={() => navigate("/insurance/asset-information")}>Asset Information</div>
        <div className="cursor-pointer" onClick={() => navigate("/insurance/personal-information")}>Personal Information</div>
        <div className="border-b-4 border-amber-700 cursor-pointer">Payment Information</div>
        <div className="cursor-pointer" onClick={() => navigate("/insurance/registered-insurance-list")}>Registered Insurance List</div>
      </div>

      <div className="w-full space-y-6 py-6 ml-80">
        <div>
          <p className="cursor-pointer" onClick={() => navigate("/insurance/fill-payment-information")}>Fill in Payment Information</p>
        </div>
        <div>
          <p>Estimated Premium (Automatically displayed)</p>
        </div>
        <div className="flex space-x-3.5 items-center">
          <div>
            <p>Payment Method:</p>
          </div>

          {/* Bank Transfer */}
          <div className="space-x-2">
            <label>Bank Transfer:</label>
            <input
              type="radio"
              name="paymentMethod"
              value="bankTransfer"
              className="text-lg"
              checked={paymentMethod === "bankTransfer"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          {/* Credit Card */}
          <div className="space-x-2">
            <label>Credit Card:</label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              className="text-lg"
              checked={paymentMethod === "creditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          {/* E-Wallet */}
          <div className="space-x-2">
            <label>E-Wallet:</label>
            <input
              type="radio"
              name="paymentMethod"
              value="eWallet"
              className="text-lg"
              checked={paymentMethod === "eWallet"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </div>

        {/* Input Fields Based on Selection */}
        {paymentMethod && (
          <div className="mt-4 w-80">
            <label className="block">
              {paymentMethod === "bankTransfer"
                ? "Bank Account Number:"
                : paymentMethod === "creditCard"
                ? "Credit Card Number:"
                : "E-Wallet Account Number:"}
            </label>
            <input
              type="text"
              placeholder="Enter your account number"
              className="border border-gray-300 p-2 rounded-lg w-full my-2"
            />
          </div>
        )}

        <div className="flex space-x-0 items-center ml-27">
          <p className="ml-3">
            <input type="checkbox" /> I agree to the terms & conditions
          </p>
        </div>
        <button className="w-30 mt-4 ml-45 justify-center border border-black p-2 rounded-lg bg-[#D6EFC7]">
          Continue
        </button>
      </div>
    </div>
  );
}

export default PaymentInformation;
