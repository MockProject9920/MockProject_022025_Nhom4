import React, { useState, useEffect } from "react";
import { fetchClaims } from "../../../services/claimService";

const ApparisersRequestTable = () => {
	const [claims, setClaims] = useState([]);
	const [selectedClaim, setSelectedClaim] = useState(null);
	useEffect(() => {
		const getClaimData = async () => {
			try {
				const data = await fetchClaims();
				setClaims(data);
				if (data.length > 0) {
					setSelectedClaim(data[0]);
				}
			} catch (error) {
				console.error("Failed to fetch claim details:", error);
			}
		};
		getClaimData();
	}, []);

	const handleSelectChange = (event) => {
		const selectedId = event.target.value;
		const claim = claims.find((c) => c.id == selectedId);
		setSelectedClaim(claim || claims[0]);
	};

	const handleChange = (event) => {
		const { value } = event.target;
		setSelectedClaim((prevClaim) => ({
			...prevClaim,
			incident_type: value,
		}));
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setSelectedClaim((prevClaim) => ({
			...prevClaim,
			[name]: value,
		}));
	};

	if (!selectedClaim) {
		return <p>Loading...</p>;
	}

	return (
		<div className="p-6 border rounded-lg shadow-lg w-full mx-auto">
			<h2 className="text-xl font-bold">Claim Request Detail</h2>

			<div className="my-4">
				<label className="font-semibold">Select Claim:</label>
				<select
					onChange={handleSelectChange}
					value={selectedClaim ? selectedClaim.id : ""}
					className="w-full p-2 border rounded"
				>
					{claims.map((claim) => (
						<option key={claim.id} value={claim.id}>
							Claim #{claim.id}
						</option>
					))}
				</select>
			</div>

			<div className="mt-4 border-b pb-2">
				<h3 className="font-semibold">
					Request Information #{selectedClaim.id}
				</h3>
				<div className="grid grid-cols-2 gap-4 mt-2">
					<div>
						<label>Policy Contract ID:</label>
						<input
							type="text"
							value={selectedClaim.policy_contract_id}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Claim Type:</label>
						<input
							type="text"
							value={selectedClaim.claim_type}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Incident Type:</label>
						<select
							className="w-full p-2 border rounded"
							value={selectedClaim.incident_type}
							onChange={handleChange}
						>
							<option value="">Select an option</option>
							<option value="Personal accidents">Personal accidents</option>
							<option value="Property damage">Property damage</option>
							<option value="Environmental damage">Environmental damage</option>
						</select>
					</div>
					<div>
						<label>Claim Date:</label>
						<input
							type="text"
							value={selectedClaim.claim_date}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Customer Name:</label>
						<input
							type="text"
							value={`#${selectedClaim.id} Joney`}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Status:</label>
						<input
							type="text"
							value={selectedClaim.status}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Claim Amount:</label>
						<input
							type="text"
							value={`$${selectedClaim.claim_amount}`}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Attachment:</label>
						<input
							type="text"
							value={selectedClaim.attachment || "No attachment"}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>
			</div>

			<div className="mt-4 border-b pb-2">
				<h3 className="font-semibold">Adjuster Comment</h3>
				<div className="grid grid-cols-2 gap-4 mt-2">
					<div>
						<label>Settlement Date:</label>
						<input
							type="text"
							value={selectedClaim.settlement_date || "To be advised"}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Investigation Details:</label>
						<input
							type="text"
							name="investigation_details"
							value={selectedClaim.investigation_details || ""}
							onChange={handleInputChange}
							disabled={selectedClaim.status === "Approved"}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Settlement Amount:</label>
						<input
							type="text"
							value={
								selectedClaim.settlement_amount
									? `$${selectedClaim.settlement_amount}`
									: "Pending"
							}
							disabled
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label>Manager's Comment:</label>
						<input
							type="text"
							name="manager_comment"
							value={selectedClaim.manager_comment || ""}
							onChange={handleInputChange}
							disabled={selectedClaim.status === "Approved"}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>
			</div>

			<div className="mt-4 flex justify-end space-x-2">
				{selectedClaim.status === "Requested" && (
					<button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-200 transform hover:-translate-y-1">
						Review
					</button>
				)}
				{selectedClaim.status === "In Review" && (
					<>
						<button className="bg-green-500 text-white px-4 py-2 rounded transition-transform duration-200 transform hover:-translate-y-1">
							Approve
						</button>
						<button className="bg-red-500 text-white px-4 py-2 rounded transition-transform duration-200 transform hover:-translate-y-1">
							Reject
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default ApparisersRequestTable;
