import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "@/data/premiumPaymentTracking";

function ContractDetail() {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const foundContract = data.find((item) => item.id === contractId);
    setContract(foundContract);
  }, [contractId]);

  if (!contract) {
    return (
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Contract Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contract Details</h2>
      <p><strong>Contract ID:</strong> {contract.id}</p>
      <p><strong>Contract Name:</strong> {contract.contractName}</p>
      <p><strong>Policy Start Date:</strong> {contract.policyStartDate}</p>
      <p><strong>Policy End Date:</strong> {contract.policyEndDate}</p>
      <p><strong>Premium Charge:</strong> ${contract.premiumCharge}</p>
      <p><strong>Payment Amount:</strong> ${contract.paymentAmount}</p>
      <p><strong>Balance:</strong> ${contract.balance}</p>
      <p><strong>Status:</strong> <span className="font-semibold">{contract.status}</span></p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Back to List
      </button>
    </div>
  );
}

export default ContractDetail;
