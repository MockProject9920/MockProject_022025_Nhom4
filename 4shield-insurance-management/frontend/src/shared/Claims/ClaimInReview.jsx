import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClaimsContext } from "../../contexts/ClaimContext";

const ClaimInReview = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { claims, updateClaimStatus, statusColors } = useContext(ClaimsContext); // ✅ Lấy dữ liệu từ Context

	// ✅ Tìm claim dựa trên id từ URL
	const claim = claims.find((c) => c.id === id);
	const [showUploadForm, setShowUploadForm] = useState(false);

	// ✅ State lưu thông tin chỉnh sửa
	const [editedClaim, setEditedClaim] = useState({
		uploadedEvidence: claim.uploadedEvidence,
	});

	// ✅ Xử lý khi người dùng tải lên bằng chứng mới
	const handleUpload = (e) => {
		e.preventDefault();
		alert("Document has been sent!");
		setShowUploadForm(false);
	};

	// ✅ Kiểm tra nếu context chưa sẵn sàng
	if (!claim) {
		return (
			<div className="text-center text-gray-600 text-lg">No claim found.</div>
		);
	}

	// ✅ Xử lý tải file xuống
	const handleDownload = () => {
		if (claim.supportDocument) {
			const link = document.createElement("a");
			link.href = `/${claim.supportDocument}`;
			link.download = claim.supportDocument;
			link.click();
		}
	};

	// ✅ Xử lý tải file
	const handleFileChange = (e) => {
		setEditedClaim({ ...editedClaim, uploadedEvidence: e.target.files[0] });
	};

	// ✅ Khi người dùng nhấn vào input file, tự động gọi `handleDownload`
	const handleFileInputClick = () => {
		handleDownload();
	};

	// ✅ Xử lý khi yêu cầu khiếu nại khi nhấn "Cancel Claim"
	const handleCancelClaim = () => {
		updateClaimStatus(id, "Rejected");
		alert("Claim has been cancelled.");
		navigate(-1);
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
							<strong>Download Report:</strong>{" "}
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
						<p className="ml-2 text-gray-500 italic">No document reports</p>
					)}

					{/* Nút gửi tài liệu nếu trạng thái là "In Review" */}
					{claim.status === "In Review" && (
						<div className="mt-4 space-x-2">
							<button
								className="px-4 py-2 bg-blue-500 text-white rounded"
								onClick={() => setShowUploadForm(!showUploadForm)}
							>
								Submit New Evidence
							</button>
							<button
								onClick={handleCancelClaim}
								className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
							>
								Cancel Claim
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Form tải lên tài liệu nếu trạng thái là "In Review" */}
			{showUploadForm && (
				<div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-md font-semibold mb-2">
						Provide additional documentation
					</h3>
					<p className="text-gray-500 text-sm mb-2">
						Provide additional documents as requested by the insurance agent.
					</p>

					<form onSubmit={handleUpload}>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Uploaded Evidence:
						</label>
						<input
							type="file"
							accept="image/*,video/mp4"
							className="mb-4"
							onChange={handleFileChange}
							required
						/>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded"
						>
							Submit Claim
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ClaimInReview;
