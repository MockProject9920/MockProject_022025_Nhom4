import React from "react";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center bg-white p-4 border-b">
			<input
				type="text"
				placeholder="Search"
				className="border px-3 py-2 rounded w-1/3"
			/>
			<div className="flex items-center space-x-4">
				<span>🏠 Home</span>
				<span>👥 Customer</span>
			</div>
		</div>
	);
};

export default Navbar;
