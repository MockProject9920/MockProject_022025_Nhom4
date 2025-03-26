import React from "react";

const CustomButton = ({ label, onClick, type = "default" }) => {
	const buttonStyles = {
		default: "bg-gray-500 hover:bg-gray-600",
		view: "bg-blue-500 hover:bg-blue-600",
		edit: "bg-yellow-500 hover:bg-yellow-600",
		cancel: "bg-red-500 hover:bg-red-600",
	};

	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 text-white rounded ${buttonStyles[type]} transition`}
		>
			{label}
		</button>
	);
};

export default CustomButton;
