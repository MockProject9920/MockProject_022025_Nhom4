import {
    FaUserCog,
    FaFileInvoice,
    FaClipboardList,
    FaChartBar,
    FaBuilding
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-6">FourShield Insurance</h2>
            <ul className="space-y-4">
                <li className="flex items-center text-red-500 font-bold cursor-pointer">
                    <MdDashboard className="mr-2" /> Dashboard
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
                    <FaUserCog className="mr-2" /> User Management
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
                    <FaClipboardList className="mr-2" /> Contract Manager
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
                    <Link to="/properties" className="flex items-center">
                        <FaBuilding className="mr-2" /> Property Management
                    </Link>
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
                    <FaFileInvoice className="mr-2" /> Payment & Invoice
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
                    <FaChartBar className="mr-2" /> Claims Processing
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;