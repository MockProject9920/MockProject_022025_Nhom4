/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const ClaimsTabs = () => {
	const location = useLocation();

	return (
		<>
			<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
				{/* Navigation Tabs */}
				<nav className="flex space-x-8 border-b mb-6">
					<Link
						to="/user/claims/insurance-contract"
						className={`pb-2 ${
							location.pathname.includes("insurance-contract")
								? "text-black font-medium border-b-2 border-black"
								: "text-gray-600"
						}`}
					>
						Insurance Contract
					</Link>

					<Link
						to="/user/claims/claim-information"
						className={`pb-2 ${
							location.pathname.includes("claim-information")
								? "text-black font-medium border-b-2 border-black"
								: "text-gray-600"
						}`}
					>
						Claim Information
					</Link>

					<Link
						to="/user/claims/claims-status"
						className={`pb-2 ${
							location.pathname.includes("claims-status")
								? "text-black font-medium border-b-2 border-black"
								: "text-gray-600"
						}`}
					>
						List of claims
					</Link>
				</nav>

				{/* Nội dung của từng tab */}
				<Outlet />
			</div>
		</>
	);
};

export default ClaimsTabs;
