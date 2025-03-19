/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClaimsInsuranceTable = () => {
	const [selectedContract, setSelectedContract] = useState("Home Insurance");

	const contractData = {
		"Home Insurance": {
			type: "Property",
			dates: "01/01/2023 - 01/01/2024",
			address: "123 Main St, City, Country",
		},
		"Car Insurance": {
			type: "Vehicle",
			dates: "05/06/2023 - 05/06/2024",
			address: "456 Elm St, City, Country",
		},
		"Health Insurance": {
			type: "Health",
			dates: "10/10/2023 - 10/10/2024",
			address: "456 Elm St, City, Country",
		},
	};

	const handleChange = (e) => {
		setSelectedContract(e.target.value);
	};

	const { type, dates, address } = contractData[selectedContract];

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold">Submit Insurance Claim</h1>
			<p className="mb-4 text-gray-700">
				Enter damage information to submit a claim quickly
			</p>

			<div className="mb-6">
				<label className="block text-gray-700 mb-2">
					Select Insurance Contract
				</label>
				<select
					className="w-full p-2 border rounded-md"
					value={selectedContract}
					onChange={handleChange}
				>
					{Object.keys(contractData).map((contract) => (
						<option key={contract} value={contract}>
							{contract}
						</option>
					))}
				</select>
			</div>
			<div className="bg-gray-300 px-6 py-6 rounded-2xl">
				<h2 className="text-xl font-semibold mb-4">
					Display contract summary information:
				</h2>
				<p className="text-lg mb-4">
					Insurance type:{" "}
					<span className="text-gray-700 text-base">{type}</span>
				</p>
				<p className="text-lg mb-4">
					Effective date - Expiry date:{" "}
					<span className="text-gray-700 text-base">{dates}</span>
				</p>
				<p className="text-lg ">
					Property address:{" "}
					<span className="text-gray-700 text-base">{address}</span>
				</p>
			</div>
		</div>
	);
};

export default ClaimsInsuranceTable;
