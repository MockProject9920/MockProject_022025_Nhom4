import React from "react";

const InputField = ({ label, placeholder, type = "text" }) => {
	return (
		<div className="mb-4">
			<label className="block font-medium">{label}:</label>
			<input
				type={type}
				placeholder={placeholder}
				className="border w-full p-2 rounded mt-1"
			/>
		</div>
	);
};

export default InputField;
