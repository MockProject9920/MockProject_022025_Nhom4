import React from "react";

const Sidebar = () => {
	return (
		<div className="w-60 h-screen bg-gray-100 border-r p-5">
			<h2 className="text-xl font-bold mb-5">Fourshield Insurance</h2>
			<ul className="space-y-4">
				<li className="text-red-500 font-bold">📂 Insurance</li>
				<li>📜 Personal Contract</li>
				<li>📄 Submit a Claim</li>
				<li>👥 Personal Profile</li>
				<li>💳 Payment Page</li>
			</ul>
		</div>
	);
};

export default Sidebar;
