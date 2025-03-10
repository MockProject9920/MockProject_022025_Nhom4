import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const CustomerLayout = ({ children }) => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				<Navbar />
				<div className="p-6">{children}</div>
			</div>
		</div>
	);
};

export default CustomerLayout;
