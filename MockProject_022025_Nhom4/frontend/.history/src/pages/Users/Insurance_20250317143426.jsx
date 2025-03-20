import { useState } from "react";

function Insurance() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div>
      <div className="flex space-x-8 justify-center text-xl !border-solid !border-b-[1px] !border-black ">
        <div>
          <p>Asset Information</p>
        </div>
        <div>
          <p>Personal Information</p>
        </div>
        <div className="!border-solid !border-b-[3px] !border-amber-700">
          <p>Payment Information</p>
        </div>
        <div>
          <p>Registered Insurance List</p>
        </div>
      </div>

      <div>
        <p>Fill in Payment Information</p>
        <p>Estimated Premium (Automatically displayed)</p>
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

        {/* Hiển thị input khi chọn Bank Transfer */}
        {paymentMethod === "bankTransfer" && (
          <div className="mt-4">
            <label className="block">Bank Account Number:</label>
            <input
              type="text"
              placeholder="Enter your bank account number"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Insurance;
