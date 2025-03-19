import { useState } from "react";
import StatusBadge from "../Button/StatusBadge";
import ActionButtons from "../Button/ActionButtons";

const ClaimsTrackingTable = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState(null);
	const [currentClaim, setCurrentClaim] = useState(null);
	const [emailMessage, setEmailMessage] = useState("");

	const claimsSettlement = [
		{
			id: 1,
			claimID: "CLA001",
			claimDate: "2025-01-20",
			settlementDate: "2025-03-01",
			amount: "1,200$",
			status: "In Review",
			method: "Bank Success",
		},
		{
			id: 2,
			claimID: "CLA003",
			claimDate: "2025-01-01",
			settlementDate: "2025-02-01",
			amount: "1,2000$",
			status: "Approved",
			method: "Bank Transfer",
		},
		{
			id: 3,
			claimID: "CLA003",
			claimDate: "2025-01-01",
			settlementDate: "2025-02-01",
			amount: "1,2000$",
			status: "Requested",
			method: "Bank Transfer",
		},
		{
			id: 4,
			claimID: "CLA003",
			claimDate: "2025-01-01",
			settlementDate: "2025-02-01",
			amount: "1,2000$",
			status: "Reject",
			method: "Bank Transfer",
		},
	];

	const openModal = (type, claim) => {
		setModalType(type);
		setCurrentClaim(claim);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalType(null);
		setCurrentClaim(null);
		setEmailMessage("");
	};

	const handleSendEmail = () => {
		console.log(
			`Sending email for claim: ${currentClaim?.claimID}, Message: ${emailMessage}`
		);
		closeModal();
	};

	return (
		<div className="p-6">
			<h2 className="text-3xl font-semibold mb-6">
				Claims Settlement Tracking
			</h2>
			<div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
				<table className="min-w-full table-auto hidden lg:table">
					<thead>
						<tr className="bg-gray-200 text-gray-700">
							<th className="p-4 text-left">#</th>
							<th className="p-4 text-left">Claim ID</th>
							<th className="p-4 text-left">Claim Date</th>
							<th className="p-4 text-left">Settlement Date</th>
							<th className="p-4 text-left">Amount</th>
							<th className="p-4 text-left">Status</th>
							<th className="p-4 text-left">Method</th>
							<th className="p-4 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{claimsSettlement.map((claim) => (
							<tr key={claim.id} className="border-b hover:bg-gray-100">
								<td className="p-4">{claim.id}</td>
								<td className="p-4">{claim.claimID}</td>
								<td className="p-4">{claim.claimDate}</td>
								<td className="p-4">{claim.settlementDate}</td>
								<td className="p-4">{claim.amount}</td>
								<td className="p-4">
									<StatusBadge status={claim.status} />
								</td>
								<td className="p-4">{claim.method}</td>
								<td className="p-4 flex gap-4">
									<ActionButtons
										onEdit={() => openModal("edit", claim)}
										onCancel={() => openModal("cancel", claim)}
										onEmail={() => openModal("email", claim)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Tablet view */}
				<div className="hidden md:block lg:hidden">
					{claimsSettlement.map((claim) => (
						<div
							key={claim.id}
							className="bg-gray-50 mb-4 p-4 rounded-lg shadow-md"
						>
							<p className="sm:py-3 text-gray-500 mb-2"># {claim.id}</p>
							<p className="sm:py-3 font-semibold">Claim ID: {claim.claimID}</p>
							<p className="sm:py-3">Claim Date: {claim.claimDate}</p>
							<p className="sm:py-3">Settlement Date: {claim.settlementDate}</p>
							<p className="sm:py-3">Amount: {claim.amount}</p>
							<p className="sm:py-3">
								<StatusBadge status={claim.status} />
							</p>
							<p className="">Method: {claim.method}</p>
							<div className="flex flex-wrap gap-4 mt-4">
								<ActionButtons
									onEdit={() => openModal("edit", claim)}
									onCancel={() => openModal("cancel", claim)}
									onEmail={() => openModal("email", claim)}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Mobile view */}
				<div className="md:hidden">
					{claimsSettlement.map((claim) => (
						<div
							key={claim.id}
							className="bg-gray-50 mb-4 p-4 rounded-lg shadow-md"
						>
							<p className="sm:py-3 text-gray-500 mb-2"># {claim.id}</p>
							<p className="sm:py-3 font-semibold">Claim ID: {claim.claimID}</p>
							<p className="sm:py-3">Claim Date: {claim.claimDate}</p>
							<p className="sm:py-3">Settlement Date: {claim.settlementDate}</p>
							<p className="sm:py-3">Amount: {claim.amount}</p>
							<p className="sm:py-3 flex flex-col">
								<StatusBadge status={claim.status} />
							</p>
							<p className="">Method: {claim.method}</p>
							<div className="flex flex-wrap gap-4 mt-4">
								<ActionButtons
									onEdit={() => openModal("edit", claim)}
									onCancel={() => openModal("cancel", claim)}
									onEmail={() => openModal("email", claim)}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
					{/* Modal container */}
					<div className="bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
						{modalType === "edit" && (
							<>
								<h2 className="text-2xl font-semibold mb-4">Edit Claim</h2>

								<label htmlFor="claimDate">Claim Date</label>
								<input
									type="text"
									defaultValue={currentClaim?.claimDate}
									className="w-full p-2 mb-4 border rounded"
									id="claimDate"
								/>

								<label htmlFor="settlementDate">Settlement Date</label>
								<input
									type="text"
									defaultValue={currentClaim?.settlementDate}
									className="w-full p-2 mb-4 border rounded"
									id="settlementDate"
								/>

								<label htmlFor="amount">Amount</label>
								<input
									type="text"
									defaultValue={currentClaim?.amount}
									className="w-full p-2 mb-4 border rounded"
									id="amount"
								/>

								<label htmlFor="status">Status</label>
								<input
									type="text"
									defaultValue={currentClaim?.status}
									className="w-full p-2 mb-4 border rounded"
									id="status"
								/>

								<div className="flex justify-end gap-4">
									<button
										onClick={closeModal}
										className="px-4 py-2 bg-red-400 text-white rounded"
									>
										Cancel
									</button>
									<button className="px-4 py-2 bg-blue-500 text-white rounded">
										Save
									</button>
								</div>
							</>
						)}

						{modalType === "cancel" && (
							<>
								<h2 className="text-2xl font-semibold mb-4">Cancel Claim</h2>
								<p className="mb-4">
									Are you sure you want to cancel this claim?
								</p>
								<div className="flex justify-end gap-4">
									<button
										onClick={closeModal}
										className="px-4 py-2 bg-gray-400 text-white rounded"
									>
										No
									</button>
									<button className="px-4 py-2 bg-red-500 text-white rounded">
										Yes, Cancel
									</button>
								</div>
							</>
						)}

						{modalType === "email" && (
							<>
								<h2 className="text-2xl font-semibold mb-4">Send Email</h2>
								<textarea
									className="w-full p-2 mb-4 border rounded"
									rows="4"
									placeholder="Write your message here..."
									value={emailMessage}
									onChange={(e) => setEmailMessage(e.target.value)}
								></textarea>
								<div className="flex gap-2">
									<button
										onClick={handleSendEmail}
										className="px-4 py-2 bg-blue-500 text-white rounded"
									>
										Send
									</button>
									<button
										onClick={closeModal}
										className="px-4 py-2 bg-red-500 text-white rounded"
									>
										Close
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ClaimsTrackingTable;
