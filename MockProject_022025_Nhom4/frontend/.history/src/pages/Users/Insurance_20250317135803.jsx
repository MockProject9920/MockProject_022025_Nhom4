function Insurance() {
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
              className="mx-2"
            />
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
