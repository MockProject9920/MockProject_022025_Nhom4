import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClaimsContext } from "../../contexts/ClaimContext"; 

const ClaimCancel = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { claims, updateClaimStatus, statusColors } = useContext(ClaimsContext); 

	const claim = claims.find((c) => c.id === id);

	const handleCancelClaim = () => {
		updateClaimStatus(id, "Rejected");
		alert("Claim has been cancelled.");
		navigate(-1);
	};

	if (!claim) {
		return (
			<div className="text-center text-gray-600 text-lg">Claim not found.</div>
		);
	}

	const handleDownload = () => {
		if (claim.supportDocument) {
			const link = document.createElement("a");
			link.href = `/${claim.supportDocument}`;
			link.download = claim.supportDocument;
			link.click();
		}
	};

	const handleFileInputClick = () => {
		handleDownload();
	};

	return (
		<div className="shadow-md flex flex-col lg:flex-row gap-8">
			<div className="flex-1 bg-white p-6 rounded-lg shadow">
				{/* Nút quay lại */}
				<button
					className="mb-2 px-4 py-2 bg-gray-300 text-black rounded"
					onClick={() => navigate(-1)}
				>
					← Go Back List
				</button>

				<h2 className="text-xl font-bold mb-4">Claim Details</h2>
				<p className="text-gray-600">
					Information about the Complaint Details of Claim ID:
					<strong className="ml-2">{claim.id || "(Read-only)"}</strong>
				</p>
				{/* Claim Details */}
				<div className="mt-4 space-y-2">
					<p>
						<strong>Claim Status:</strong>
						<span
							className={`ml-2 px-3 py-1 text-white rounded-full ${
								statusColors[claim.status || ""]
							}`}
						>
							{claim.status || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Policy Number:</b>
						<span className="ml-2 text-gray-500">
							{claim.policyNumber || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Claim Date:</b>
						<span className="ml-2 text-gray-500">
							{claim.date || "(Read-only)"}
						</span>
					</p>

					<p>
						<b>Claim Type:</b>
						<span className="ml-2 text-gray-500">
							{claim.type || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Claim Amount ($):</b>
						<span className="ml-2 text-gray-500">
							{claim.amount || "(Read-only)"}
						</span>
					</p>

					<p>
						<b>Damage Description:</b>
						<span className="ml-2 text-gray-500">
							{claim.damageDescription || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Uploaded Evidence:</b>
						<span className="ml-2 text-gray-500">
							{claim.uploadedEvidence || "File Upload (Read-only)"}
						</span>
					</p>
					<p>
						<b>Adjuster Comments:</b>
						<span className="ml-2 text-gray-500">
							{claim.adjusterComments || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Final Compensation ($):</b>
						<span className="ml-2 text-gray-500">
							{claim.finalCompensation || "(Read-only)"}
						</span>
					</p>

					{/* Download Button */}
					{claim.supportDocument ? (
						<>
							<strong>Download Support Document:</strong>
							<span className="mx-2 text-gray-500">
								{claim.supportDocument}
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

				{claim.status === "Rejected" && (
					<button
						onClick={handleCancelClaim}
						className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
					>
						Cancel Claim
					</button>
				)}
			</div>
		</div>
	);
};

export default ClaimCancel;
