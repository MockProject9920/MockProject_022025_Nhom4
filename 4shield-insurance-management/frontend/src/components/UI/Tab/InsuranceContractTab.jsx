/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ClaimsInsuranceTable = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch("http://localhost:8001/insuranceContracts");
        const data = await response.json();

        if (data && Array.isArray(data)) {
          setContracts(data);
          setSelectedContract(data[0] || null);
        } else {
          setContracts([]);
          setSelectedContract(null);
          console.error("Dữ liệu không hợp lệ:", data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchContracts();
  }, []);

  const handleChange = (e) => {
    const contract = contracts.find((c) => c.name === e.target.value);
    setSelectedContract(contract);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Submit Insurance Claim</h1>
      <p className="mb-4 text-gray-700">
        Enter damage information to submit a claim quickly
      </p>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Select Insurance Contract</label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedContract?.name || ""}
          onChange={handleChange}
        >
          {contracts.length > 0 ? (
            contracts.map((contract) => (
              <option key={contract.id} value={contract.name}>
                {contract.name}
              </option>
            ))
          ) : (
            <option disabled>Không có hợp đồng bảo hiểm</option>
          )}
        </select>
      </div>

      {selectedContract && (
        <div className="bg-gray-300 px-6 py-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Display contract summary information:</h2>
          <p className="text-lg mb-4">
            Insurance type: <span className="text-gray-700 text-base">{selectedContract.type}</span>
          </p>
          <p className="text-lg mb-4">
            Effective date - Expiry date: <span className="text-gray-700 text-base">{selectedContract.dates}</span>
          </p>
          <p className="text-lg">
            Property address: <span className="text-gray-700 text-base">{selectedContract.address}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ClaimsInsuranceTable;
