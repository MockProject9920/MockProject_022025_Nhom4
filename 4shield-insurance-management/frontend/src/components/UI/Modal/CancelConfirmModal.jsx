/* eslint-disable react/prop-types */
// src/components/CancelConfirmModal.jsx
import React from "react";

const CancelConfirmModal = ({ selectedClaim, isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
				<h2 className="text-xl font-bold mb-4">
					Confirm Cancel for Claim ID {selectedClaim.id}
				</h2>
				<p className="mb-4">
					Are you sure you want to cancel this claim with ID :{" "}
					{selectedClaim.id}? This action cannot be undone.
				</p>
				<div className="flex justify-end space-x-2">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
					>
						No
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
					>
						Yes, Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default CancelConfirmModal;
