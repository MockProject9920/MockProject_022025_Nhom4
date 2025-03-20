import PropTypes from "prop-types";

function PremiumPaymentDetails({ contract }) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Premium Payment Details</h2>

      <div className="grid grid-cols-2 gap-4 border-b pb-4">
        <div>
          <p className="text-gray-500">Policy Number:</p>
          <p className="font-medium">#{contract.id}</p>
        </div>
        <div>
          <p className="text-gray-500">Policy Start Date:</p>
          <p className="font-medium">{contract.policyStartDate}</p>
        </div>
        <div>
          <p className="text-gray-500">Policy End Date:</p>
          <p className="font-medium">{contract.policyEndDate}</p>
        </div>
        <div>
          <p className="text-gray-500">Payment Status:</p>
          <p
            className={`font-medium text-white px-3 py-1 rounded-lg ${
              contract.status === "PARTIALLY_PAID"
                ? "bg-yellow-500"
                : contract.status === "PAID"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {contract.status.replace("_", " ")}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Payment Schedule:</p>
          <p className="font-medium">{contract.paymentSchedule}</p>
        </div>
        <div>
          <p className="text-gray-500">Premium Charges:</p>
          <p className="font-medium">${contract.premiumCharge}</p>
        </div>
        <div>
          <p className="text-gray-500">Total Payment:</p>
          <p className="font-medium">${contract.paymentAmount}</p>
        </div>
        <div>
          <p className="text-gray-500">Balance:</p>
          <p className="font-medium">${contract.balance}</p>
        </div>
      </div>
    </div>
  );
}

PremiumPaymentDetails.propTypes = {
  contract: PropTypes.object.isRequired,
};

export default PremiumPaymentDetails;
