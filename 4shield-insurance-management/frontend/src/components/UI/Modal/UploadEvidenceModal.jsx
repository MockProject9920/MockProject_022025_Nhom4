/* eslint-disable react/prop-types */
// src/components/UploadEvidenceModal.jsx
import React from "react";

const UploadEvidenceModal = ({ selectedClaim, isOpen, onClose, onSave }) => {
	const [evidenceFile, setEvidenceFile] = React.useState(null);

	if (!isOpen) return null;

	const handleFileChange = (e) => {
		setEvidenceFile(e.target.files[0]);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
				<h2 className="text-xl font-bold mb-4">
					Upload Evidence for Claim ID {selectedClaim.id}
				</h2>
				<h3 className="text-md font-semibold mb-2">
					Provide additional documentation
				</h3>
				<p className="text-gray-500 text-sm mb-2">
					Provide additional documents as requested by the insurance agent.
				</p>
				<p className="mb-2">
					Current Evidence:{" "}
					{selectedClaim.attachment
						? typeof selectedClaim.attachment === "object"
							? selectedClaim.attachment.name
							: selectedClaim.attachment
						: "None"}
				</p>
				<input
					type="file"
					accept="image/*,video/mp4"
					onChange={handleFileChange}
					className="w-full p-2 border rounded mt-1"
				/>
				<div className="mt-4 flex justify-end space-x-2">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
					>
						Cancel
					</button>
					<button
						onClick={() => onSave(evidenceFile)}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadEvidenceModal;
