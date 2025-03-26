import React from "react";

const CustomModal = ({ isOpen, title, children, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="mx-auto max-w-md overflow-hidden bg-white p-6 rounded-lg shadow-lg md:max-w-3xl w-full">
				<h2 className="text-2xl font-semibold">{title}</h2>
				{/* Content */}
				<div className="mt-2">{children}</div>
			</div>
		</div>
	);
};

export default CustomModal;
