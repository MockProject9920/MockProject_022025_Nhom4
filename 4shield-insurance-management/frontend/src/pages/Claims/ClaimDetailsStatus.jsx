// src/components/ClaimEdit.jsx
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClaimsContext } from "../../contexts/ClaimContext";
import ClaimActions from "../../shared/Claims/ClaimActions";
import ClaimStatus from "../../shared/Status/ClaimStatus";

const ClaimDetailsStatus = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { selectedClaim } = useContext(ClaimsContext);

	if (!selectedClaim || selectedClaim.id.toString() !== id) {
		return <div className="text-center text-gray-600">Claim not found.</div>;
	}
	// ✅ Xử lý tải file xuống
	const handleDownload = () => {
		if (selectedClaim.supportDocument) {
			const link = document.createElement("a");
			link.href = selectedClaim.supportDocument;
			link.download = selectedClaim.supportDocument;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	// ✅ Khi người dùng nhấn vào input file, tự động gọi `handleDownload`
	const handleFileInputClick = () => {
		handleDownload();
	};

	return (
		<div className="p-6 shadow-md">
			<button
				className="mb-2 px-4 py-2 bg-gray-300 text-black rounded"
				onClick={() => navigate(-1)}
			>
				← Go Back List
			</button>
			<h2 className="text-xl font-bold mb-4">Claim Details</h2>
			<p className="text-gray-600">
				Information about the Complaint Details of Claim ID:
				<strong className="ml-2">{selectedClaim.id || "(Read-only)"}</strong>
			</p>

			<div className="mt-4 space-y-2">
				<p>
					<strong>Claim Status:</strong>
					<ClaimStatus status={selectedClaim.status} />
				</p>
				<p>
					<b>Policy Number:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.policy_contract_id || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Claim Date:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.claim_date || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Claim Type:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.claim_type || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Claim Amount:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.claim_amount || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Incident Date:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.incident_date || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Uploaded Evidence:</b>
					<span className="ml-2 text-gray-500">
						{selectedClaim.attachment || "File Upload (Read-only)"}
					</span>
				</p>
				<p>
					<b>Incident Description:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.incident_description || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Incident Type:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.incident_type || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Investigation Details:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.investigation_details || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Manager Comment:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.manager_comment || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Settlement Amount:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.settlement_amount || "(Read-only)"}
					</span>
				</p>
				<p>
					<b>Settlement Date:</b>{" "}
					<span className="ml-2 text-gray-500">
						{selectedClaim.settlement_date || "(Read-only)"}
					</span>
				</p>

				{/* Download Button */}
				{selectedClaim.supportDocument ? (
					<>
						<strong>Download Support Document:</strong>
						<span className="mx-2 text-gray-500">
							{selectedClaim.supportDocument ||
								"No supporting documentation available"}
						</span>
						<input
							type="button"
							value="Download"
							onClick={handleFileInputClick}
							className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
						/>
					</>
				) : (
					<p className="ml-2 text-gray-500 italic">No document supports</p>
				)}
			</div>

			{/* Sử dụng ClaimActions để hiển thị các nút và modal với toast thông báo */}
			<ClaimActions />
		</div>
	);
};

export default ClaimDetailsStatus;
