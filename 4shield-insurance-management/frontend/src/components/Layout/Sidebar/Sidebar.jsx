import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	FaTachometerAlt,
	FaUsers,
	FaFileContract,
	FaBox,
	FaFileInvoice,
	FaMoneyCheckAlt,
	FaStar,
	FaBars,
	FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	const linkClass =
		"flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1";
	const activeClass = "bg-gray-200 text-red-600";

	const sidebarContent = (
		<ul className="space-y-4">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaTachometerAlt className="text-blue-600" />
				<span>Dashboard</span>
			</NavLink>
			<NavLink
				to="/user-management"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaUsers className="text-green-600" />
				<span>User Management</span>
			</NavLink>
			<NavLink
				to="/contract-manager"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaFileContract className="text-indigo-600" />
				<span>Contract Manager</span>
			</NavLink>
			<NavLink
				to="/insurance-product"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaBox className="text-orange-600" />
				<span>Insurance Product</span>
			</NavLink>
			<NavLink
				to="/payment-invoice"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaFileInvoice className="text-purple-600" />
				<span>Payment & Invoice</span>
			</NavLink>
			<li className="group">
				<div className="flex items-center space-x-3 text-gray-800 p-2 rounded-lg cursor-pointer">
					<FaMoneyCheckAlt className="text-red-500" />
					<span>Claims</span>
				</div>
				<ul className="ml-6 space-y-2 hidden group-hover:block">
					<NavLink
						to="/admin/claims/processing"
						className={({ isActive }) =>
							isActive ? `${linkClass} ${activeClass}` : linkClass
						}
					>
						<span>Processing</span>
					</NavLink>
					<NavLink
						to="/admin/claims/settlement-tracking"
						className={({ isActive }) =>
							isActive ? `${linkClass} ${activeClass}` : linkClass
						}
					>
						<span>Settlement Tracking</span>
					</NavLink>
				</ul>
			</li>
			<NavLink
				to="/appraisers"
				className={({ isActive }) =>
					isActive ? `${linkClass} ${activeClass}` : linkClass
				}
			>
				<FaStar className="text-yellow-500" />
				<span>Appraisers</span>
			</NavLink>
		</ul>
	);

	return (
		<div>
			<button className="md:hidden text-2xl p-3" onClick={toggleSidebar}>
				<FaBars />
			</button>

			<div className="hidden md:block w-64 bg-white h-screen p-5 shadow-lg border-r border-gray-200">
				{sidebarContent}
			</div>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
					<div className="w-64 bg-white h-full p-5 shadow-lg">
						<button className="text-2xl mb-5" onClick={toggleSidebar}>
							<FaTimes />
						</button>
						{sidebarContent}
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
