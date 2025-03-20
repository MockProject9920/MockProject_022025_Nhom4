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
          <label>
            Bank Transfer:{" "}
            <input type="radio" name="paymentMethod" value="bankTransfer" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
