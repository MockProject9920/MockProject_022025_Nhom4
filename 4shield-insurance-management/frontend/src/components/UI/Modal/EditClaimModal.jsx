/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const EditClaimModal = ({ isOpen, onClose, onSave, selectedClaim }) => {
	// Khởi tạo state chỉnh sửa dựa trên selectedClaim
	const [editedData, setEditedData] = useState({
		type: "",
		amount: "",
		incidentDescription: "",
		uploadedEvidence: "",
	});

	// Khi selectedClaim thay đổi, cập nhật state
	useEffect(() => {
		if (selectedClaim) {
			setEditedData({
				type: selectedClaim.claim_type || "",
				amount: selectedClaim.claim_amount || "",
				incidentDescription: selectedClaim.incident_description || "",
				uploadedEvidence: selectedClaim.attachment || "",
			});
		}
	}, [selectedClaim]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedData((prev) => ({ ...prev, [name]: value }));
	};

	// ✅ Xử lý tải file
	const handleFileChange = (e) => {
		setEditedData({ ...editedData, uploadedEvidence: e.target.files[0] });
	};

	if (!isOpen) return null;

	return (
		<div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
			<h2 className="text-xl font-bold mb-4">Edit Claim Information</h2>

			{/* Chỉnh sửa thông tin */}
			<div className="mt-4">
				<label className="block font-medium">Claim Amount ($):</label>
				<input
					type="number"
					name="amount"
					value={editedData.amount}
					onChange={handleChange}
					className="w-full p-2 border rounded mt-1"
				/>
			</div>

			<div className="mt-4">
				<label className="block font-medium">Claim Description:</label>
				<textarea
					name="description"
					value={editedData.incidentDescription}
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
					{editedData.uploadedEvidence
						? editedData.uploadedEvidence.name
						: "No file uploaded"}
				</p>
			</div>

			{/* Nút Save và Cancel */}
			<div className="flex justify-between mt-6">
				<button
					onClick={() => onSave(editedData)}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Save Changes
				</button>
				<button
					onClick={onClose}
					className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default EditClaimModal;
