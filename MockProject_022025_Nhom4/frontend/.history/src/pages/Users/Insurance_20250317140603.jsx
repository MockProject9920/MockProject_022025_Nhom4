import { useState } from "react";

function Insurance() {
  //   const [isSelect, setIsSelect] = useState(false);
  //   const handleSelect = () => {
  //     setIsSelect(true);
  //   };
  return (
    <div>
      <div>
        <p>Asset Information</p>
        <p>Personal Information</p>
        <p>Payment Information</p>
        <p>Registered Insurance List</p>
      </div>
      <div>
        <p>Fill in ayment Information</p>
        <p>Estimated Premium (Automatically displayed)</p>
        <div>
          <p>Payment Method</p>
          <div className="space-x-2">
            <label>Bank Transfer:</label>

            <input
              type="radio"
              name="paymentMethod"
              value="bankTransfer"
              className="text-lg"
            />
          </div>
          <div className="space-x-2">
            <label>Credit Card:</label>

            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              className="text-lg"
            />
          </div>
          <div className="space-x-2">
            <label>E-Wallet:</label>

            <input
              type="radio"
              name="paymentMethod"
              value="eWallet"
              className="text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
