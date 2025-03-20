/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClaimsContext } from "../../contexts/ClaimContext";

const ClaimEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { claims, updateClaimStatus, claimTypes, statusColors } =
		useContext(ClaimsContext);

	// ✅ Kiểm tra nếu context chưa sẵn sàng
	if (!claims) {
		return <div className="text-center text-gray-600">Loading...</div>;
	}

	// ✅ Tìm claim theo ID
	const claim = claims.find((c) => c.id === id);
	if (!claim) {
		return (
			<div className="text-center text-gray-600 text-lg">Claim not found.</div>
		);
	}

	// ✅ State lưu thông tin chỉnh sửa
	const [editedClaim, setEditedClaim] = useState({
		type: claim.type,
		amount: claim.amount,
		damageDescription: claim.damageDescription,
		uploadedEvidence: claim.uploadedEvidence,
		adjusterComments: claim.adjusterComments,
		finalCompensation: claim.finalCompensation,
		supportDocument: claim.supportDocument,
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
		if (claim.supportDocument) {
			const link = document.createElement("a");
			link.href = `/${claim.supportDocument}`;
			link.download = claim.supportDocument;
			link.click();
		}
	};

	// ✅ Khi người dùng nhấn vào input file, tự động gọi `handleDownload`
	const handleFileInputClick = () => {
		handleDownload();
	};

	return (
		<div className="shadow-md flex flex-col lg:flex-row gap-8">
			{/* Left: Claim Information */}
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
						<b>Policy Number:</b>{" "}
						<span className="ml-2 text-gray-500">
							{claim.policyNumber || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Claim Date:</b>{" "}
						<span className="ml-2 text-gray-500">
							{claim.date || "(Read-only)"}
						</span>
					</p>

					<p>
						<b>Claim Type:</b>{" "}
						<span className="ml-2 text-gray-500">
							{claim.type || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Claim Amount ($):</b>
						<span className="ml-2 text-gray-500">
							{" "}
							{claim.amount || "(Read-only)"}
						</span>
					</p>

					<p>
						<b>Damage Description:</b>{" "}
						<span className="ml-2 text-gray-500">
							{claim.damageDescription || "(Read-only)"}
						</span>
					</p>
					<p>
						<b>Uploaded Evidence:</b>{" "}
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
						<b>Final Compensation ($):</b>{" "}
						<span className="ml-2 text-gray-500">
							{" "}
							{claim.finalCompensation || "(Read-only)"}
						</span>
					</p>

					{/* Download Button */}
					{claim.supportDocument ? (
						<>
							<strong>Download Support Document:</strong>{" "}
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

				{/* Nút mở popup */}
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
					<div className="mt-4 space-y-2">
						<label className="block font-medium">Claim Type:</label>
						<select
							name="type"
							value={editedClaim.type}
							onChange={handleChange}
							className="w-full p-2 border rounded mt-1"
						>
							{claimTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>

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
							value={editedClaim.damageDescription}
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
							Current: {editedClaim.uploadedEvidence || "None"}
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
