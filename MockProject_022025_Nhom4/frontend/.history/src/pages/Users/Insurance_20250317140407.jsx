import { useState } from "react";

function Insurance() {
  const [isSelect, setIsSelect] = useState(false);
  const handleSelect = () => {
    setIsSelect(true);
    return <div>Hiiii</div>;
  };
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
            {isSelect && (
              <input
                type="radio"
                name="paymentMethod"
                value="bankTransfer"
                checked={() => {
                  handleSelect();
                }}
                className="text-lg"
              />
            )}
          </div>
          <label>
            Credit Card:
            <input type="radio" name="paymentMethod" value="creditCard" />
          </label>
          <label>
            E-Wallet:
            <input type="radio" name="paymentMethod" value="ewallet" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
