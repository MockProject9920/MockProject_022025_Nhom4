/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClaimsContext } from "../../contexts/ClaimContext";
import ClaimStatus from "../Status/ClaimStatus";

const ClaimEdit = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { selectedClaim, updateClaimStatus, claimTypes } =
		useContext(ClaimsContext);

	// Kiểm tra nếu context chưa sẵn sàng
	if (!selectedClaim) {
		return <div className="text-center text-gray-600">Loading...</div>;
	}

	if (!selectedClaim || selectedClaim.id.toString() !== id) {
		return <div className="text-center text-gray-600">Claim not found.</div>;
	}

	// State lưu thông tin chỉnh sửa
	const [editedClaim, setEditedClaim] = useState({
		type: selectedClaim.claim_type,
		amount: selectedClaim.claim_amount,
		incidentDescription: selectedClaim.incident_description,
		uploadedEvidence: selectedClaim.attachment,
		adjusterComments: selectedClaim.manager_comment,
		finalCompensation: selectedClaim.settlement_amount,
	});

	// ✅ State kiểm soát hiển thị popup
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// ✅ Xử lý thay đổi input
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedClaim({ ...editedClaim, [name]: value });
	};

	// ✅ Xử lý tải file
	const handleFileChange = (e) => {
		setEditedClaim({ ...editedClaim, uploadedEvidence: e.target.files[0] });
	};

	// ✅ Xử lý lưu thông tin
	const handleSave = () => {
		updateClaimStatus(id, editedClaim);
		alert("Claim information updated successfully!");
		setIsPopupOpen(false); // Đóng popup sau khi lưu
	};

	// ✅ Xử lý đóng popup khi nhấn "Cancel"
	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};

	// ✅ Xử lý khi yêu cầu khiếu nại khi nhấn "Cancel Claim"
	const handleCancelClaim = () => {
		updateClaimStatus(id, "Rejected");
		alert("Claim has been cancelled.");
		navigate(-1);
	};

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
		<div className="shadow-md flex flex-col lg:flex-row gap-8">
			<div className="flex-1 bg-white p-6 rounded-lg shadow">
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
								onClick={handleDownload}
								className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
							/>
						</>
					) : (
						<p className="ml-2 text-gray-500 italic">No document supports</p>
					)}
				</div>

				<div className="mt-4 space-x-2">
					<button
						onClick={() => setIsPopupOpen(!isPopupOpen)}
						className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
					>
						Edit Claim
					</button>
					<button
						onClick={handleCancelClaim}
						className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
					>
						Cancel Claim
					</button>
				</div>
			</div>

			{/* Right: Edit Form (Hiện khi nhấn Edit) */}
			{/* Popup Modal */}
			{isPopupOpen && (
				<div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
					<h2 className="text-xl font-bold mb-4">Edit Claim Information</h2>

					{/* Chỉnh sửa thông tin */}
					<div className="mt-4">
						<label className="block font-medium">Claim Amount ($):</label>
						<input
							type="number"
							name="amount"
							value={editedClaim.amount}
							onChange={handleChange}
							className="w-full p-2 border rounded mt-1"
						/>
					</div>

					<div className="mt-4">
						<label className="block font-medium">Claim Description:</label>
						<textarea
							name="description"
							value={editedClaim.incidentDescription}
							onChange={handleChange}
							className="w-full p-2 border rounded mt-1 h-20"
						></textarea>
					</div>

					<div className="mt-4">
						<label className="block font-medium">
							Upload Evidence (Image/Video):
						</label>
						<input
							type="file"
							accept="image/*,video/mp4"
							onChange={handleFileChange}
							className="w-full p-2 border rounded mt-1"
						/>
						<p className="text-gray-600 mt-1">
							Current:
							{editedClaim.uploadedEvidence
								? editedClaim.uploadedEvidence.name
								: "No file uploaded"}
						</p>
					</div>

					{/* Nút Save và Cancel */}
					<div className="flex justify-between mt-6">
						<button
							onClick={handleSave}
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Save Changes
						</button>
						<button
							onClick={handleClosePopup}
							className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClaimEdit;
