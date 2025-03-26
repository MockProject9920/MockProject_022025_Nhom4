import React from "react";

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
	if (!isOpen) return null; // Nếu không mở popup, không render gì cả

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-gray-600 mt-2">{message}</p>

				<div className="mt-4 flex justify-end space-x-2">
					<button
						onClick={onCancel}
						className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmDialog;
