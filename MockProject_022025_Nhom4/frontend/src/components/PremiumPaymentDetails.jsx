import PropTypes from "prop-types";

function PremiumPaymentDetailsComponent({ contract }) {
  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Premium Payment Details</h2>

      <div className="grid grid-cols-2 gap-4 border-b pb-4 text-gray-700">
        <div>
          <p className="text-gray-500">Policy Number:</p>
          <p className="font-semibold">#{contract.id}</p>
        </div>
        <div>
          <p className="text-gray-500">Contract Name:</p>
          <p className="font-semibold">{contract.contractName || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Policy Start Date:</p>
          <p className="font-semibold">{contract.policyStartDate || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Policy End Date:</p>
          <p className="font-semibold">{contract.policyEndDate || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Payment Schedule:</p>
          <p className="font-semibold">{contract.paymentSchedule || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Premium Charges:</p>
          <p className="font-semibold">${contract.premiumCharge.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500">Total Payment:</p>
          <p className="font-semibold">${contract.paymentAmount.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500">Balance:</p>
          <p className="font-semibold">${contract.balance.toFixed(2)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500">Payment Status:</p>
          <span
            className={`inline-block text-white text-sm px-3 py-1 rounded-lg font-semibold ${
              contract.status === "PARTIALLY_PAID"
                ? "bg-yellow-500"
                : contract.status === "PAID"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {contract.status.replace("_", " ")}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <a href="/admin/payment-tracking" className="text-blue-500 hover:underline text-sm">
          ← Back to Payment Tracking
        </a>
      </div>
    </div>
  );
}

// Xác định kiểu dữ liệu của prop
PremiumPaymentDetailsComponent.propTypes = {
  contract: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contractName: PropTypes.string,
    policyStartDate: PropTypes.string,
    policyEndDate: PropTypes.string,
    paymentSchedule: PropTypes.string,
    premiumCharge: PropTypes.number.isRequired,
    paymentAmount: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PremiumPaymentDetailsComponent;
