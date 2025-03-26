/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ClaimsContext } from "../../../contexts/ClaimContext";
import StatusBadge from "../Button/StatusBadge";
import CustomButton from "../Button/CustomButton";
import CustomModal from "../Modal/CustomModal";
import ClaimStatus from "../../../shared/Status/ClaimStatus";

const ClaimsProcessingTable = () => {
	// Quản lý danh sách claims trong state
	const { claims, loading, error } = useContext(ClaimsContext);

	// Quản lý trạng thái của modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [modalContent, setModalContent] = useState(null);

	//  Lưu claim hiện tại để xử lý Edit / Delete
	const [editedClaim, setEditedClaim] = useState({ ...claims });
	const [selectedFile, setSelectedFile] = useState(null);
	const [selectedClaim, setSelectedClaim] = useState(null);

	// ✅ Cập nhật state khi người dùng thay đổi dữ liệu
	const handleChange = (e) => {
		setEditedClaim({ ...editedClaim, [e.target.name]: e.target.value });
	};

	// ✅ Cập nhật file khi chọn
	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	// ✅ Xử lý khi nhấn "Save Changes"
	const handleSave = (e) => {
		e.preventDefault(); // Ngăn trang bị reload

		// ✅ Giả lập gửi dữ liệu lên server (Chưa gọi API thật)
		console.log("Updated Claim Data:", editedClaim);
		console.log("Uploaded File:", selectedFile);

		// ✅ Hiển thị thông báo cập nhật thành công
		toast.success("Claim updated successfully!");

		// ✅ Đóng modal sau khi cập nhật
		closeModal();
	};

	// Kiểm tra `claims` trước khi `.map()`
	if (loading)
		return <div className="text-center text-gray-600">Loading claims...</div>;
	if (error)
		return <div className="text-center text-red-600">Error: {error}</div>;
	if (!Array.isArray(claims)) {
		console.error("Claims is not an array!", claims);
		return (
			<div className="text-center text-red-600">
				Error: Claims data is invalid.
			</div>
		);
	}
	if (claims.length === 0) {
		return (
			<div className="text-center text-gray-600">No claims available.</div>
		);
	}

	const openModal = (title, content) => {
		setModalTitle(title);
		setModalContent(content);
		setIsModalOpen(true);
	};

	const closeModal = () => setIsModalOpen(false);

	// ✅ Xử lý khi nhấn "View" → Hiển thị modal với toàn bộ dữ liệu
	const handleView = (claim) => {
		setSelectedClaim(claim);
		openModal(
			"Claim Details",
			<>
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-3">
						<p>
							<strong className="mr-1">Claim ID:</strong> {claim.id}
						</p>
						<p>
							<strong className="mr-1">Policy Number:</strong>{" "}
							{claim.policy_contract_id}
						</p>
						<p>
							<strong className="mr-1">Customer ID:</strong> {claim.customer_id}
						</p>
						<p>
							<strong className="mr-1">Claim Date:</strong> {claim.claim_date}
						</p>
						<p>
							<strong className="mr-1">Claim Type:</strong> {claim.claim_type}
						</p>
						<p>
							<strong className="mr-1">Claim Amount ($):</strong>
							{claim.claim_amount}
						</p>
						<p>
							<strong className="mr-1">Status:</strong>
							<ClaimStatus status={claim.status} />
						</p>
					</div>
					<div className="space-y-3">
						<p>
							<strong className="mr-1">Incident Description:</strong>{" "}
							{claim.incident_description}
						</p>
						<p>
							<strong className="mr-1">Incident Type:</strong>{" "}
							{claim.incident_type}
						</p>
						<p>
							<strong className="mr-1">Incident Date:</strong>{" "}
							{claim.incident_date}
						</p>
						<p>
							<strong className="mr-1">Attachment:</strong>
							{claim.attachment || "No attachments"}
						</p>
						<p>
							<strong className="mr-1">Manager Comments:</strong>
							{claim.manager_comment || "No comments"}
						</p>
						<p>
							<strong className="mr-1">Settlement Date:</strong>{" "}
							{claim.settlement_date || null}
						</p>
						<p>
							<strong className="mr-1">Settlement Amount ($):</strong>
							{claim.settlement_amount || null}
						</p>
					</div>
					<div className="col-span-2">
						<p>
							<strong className="mr-1">Investigation Details:</strong>
							{claim.investigation_details || ""}
						</p>
					</div>
				</div>
				<div className="mt-4 flex justify-end">
					<button
						onClick={closeModal}
						className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
					>
						Close
					</button>
				</div>
			</>
		);
	};

	// ✅ Xử lý khi nhấn "Edit" → Hiển thị form chỉnh sửa claim
	const handleEdit = (claim) => {
		console.log(claim);
		setSelectedClaim(claim);
		openModal(
			"Edit Claim",
			<form onSubmit={handleSave} className="space-y-4">
				<div>
					<label className="block font-medium">Claim Type:</label>
					<input
						type="text"
						defaultValue={claim.claim_type}
						className="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label className="block font-medium">Claim Amount ($):</label>
					<input
						type="number"
						name="claim_amount"
						value={claim.claim_amount}
						onChange={handleChange}
						className="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label className="block font-medium">Upload Support Document:</label>
					<input
						type="file"
						onChange={handleFileChange}
						className="w-full p-2 border rounded"
					/>
				</div>
				<div className="flex justify-end space-x-2">
					<button
						type="button"
						onClick={closeModal}
						className="px-4 py-2 bg-gray-400 text-white rounded"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded"
					>
						Save Changes
					</button>
				</div>
			</form>
		);
	};

	// ✅ Xử lý khi nhấn "Cancel" → Hiển thị modal xác nhận xóa
	const handleCancel = (claim) => {
		setSelectedClaim(claim);
		openModal(
			"Confirm Delete",
			<div>
				<p>
					Are you sure you want to delete the claim <strong>{claim.id}</strong>
					&nbsp; with customer id <strong>{claim.customer_id}</strong>?
				</p>
				<div className="mt-4 flex justify-end space-x-2">
					<button
						onClick={closeModal}
						className="px-4 py-2 bg-gray-400 text-white rounded"
					>
						No
					</button>
					<button
						onClick={() => deleteClaim(claim.id)}
						className="px-4 py-2 bg-red-500 text-white rounded"
					>
						Yes
					</button>
				</div>
			</div>
		);
	};

	// ✅ Xóa claim trên giao diện (Không xóa trên server)
	const deleteClaim = (claimId) => {
		toast.success(`Claim ${claimId} removed!`);
		closeModal();
	};

	return (
		<>
			<table className="border-collapse w-full">
				<thead>
					<tr className="bg-gray-100">
						<th className="p-3">#</th>
						<th className="p-3">Customer ID</th>
						<th className="p-3">Claim Date</th>
						<th className="p-3">Incident Date</th>
						<th className="p-3">Description</th>
						<th className="p-3">Status</th>
						<th className="p-3">Claim Amount</th>
						<th className="p-3">Attachment</th>
						<th className="p-3">Actions</th>
					</tr>
				</thead>

				<tbody>
					{claims.map((claim) => (
						<tr key={claim.id} className="border-t">
							<td className="p-3">{claim.id}</td>
							<td className="p-3">{claim.customer_id}</td>
							<td className="p-3">{claim.claim_date}</td>
							<td className="p-3">{claim.incident_date}</td>
							<td className="p-3">{claim.incident_description}</td>
							<td className="p-3">
								<StatusBadge status={claim.status} />
							</td>
							<td className="p-3">{claim.claim_amount}</td>
							<td className="p-3 text-blue-500 cursor-pointer underline">
								{claim.attachment}
							</td>
							<td className="flex flex-col px-3 py-3 space-y-2">
								{/* ✅ Nút Detail */}
								<CustomButton
									label="Detail"
									type="view"
									onClick={() => handleView(claim)}
								/>
								<CustomButton
									label="Edit"
									type="edit"
									onClick={() => handleEdit(claim)}
								/>
								<CustomButton
									label="Cancel"
									type="cancel"
									onClick={() => handleCancel(claim)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* ✅ Modal chung cho tất cả các hành động */}
			<CustomModal isOpen={isModalOpen} title={modalTitle} onClose={closeModal}>
				{modalContent}
			</CustomModal>
		</>
	);
};

export default ClaimsProcessingTable;
