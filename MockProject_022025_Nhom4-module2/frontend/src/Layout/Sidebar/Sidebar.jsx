import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isAppraisersOpen, setIsAppraisersOpen] = useState(
    location.pathname.startsWith("/appraisers")
  );

  // Hàm kiểm tra đường dẫn để đổi màu đỏ và in đậm
  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-red-500 font-bold"
      : "text-gray-700 hover:text-red-500";

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 shadow-md">
      {/* Logo */}
      <h2 className="text-xl font-bold mb-6 text-blue-600">FourShield Insurance</h2>

      {/* Danh sách menu */}
      <ul className="space-y-2">
        {/* Dashboard */}
        <li>
          <Link
            to="/dashboard"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/dashboard")}`}
          >
            Dashboard
          </Link>
        </li>

        {/* User Management */}
        <li>
          <Link
            to="/user-management"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/user-management")}`}
          >
            User Management
          </Link>
        </li>

        {/* Contact Manager */}
        <li>
          <Link
            to="/contact-manager"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/contact-manager")}`}
          >
            Contact Manager
          </Link>
        </li>

        {/* Insurance Product */}
        <li>
          <Link
            to="/insurance-product"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/insurance-product")}`}
          >
            Insurance Product
          </Link>
        </li>

        {/* Property Management */}
        <li>
          <Link
            to="/properties"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/properties")}`}
          >
            Property Management
          </Link>
        </li>

        {/* Payment & Invoice */}
        <li>
          <Link
            to="/payment-invoice"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/payment-invoice")}`}
          >
            Payment & Invoice
          </Link>
        </li>

        {/* Claims Processing */}
        <li>
          <Link
            to="/claims-processing"
            className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/claims-processing")}`}
          >
            Claims Processing
          </Link>
        </li>

        {/* Appraisers Menu */}
        <li>
          <button
            onClick={() => setIsAppraisersOpen(!isAppraisersOpen)}
            className={`flex justify-between items-center w-full p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers")}`}
          >
            <span>Appraisers</span>
            <span>{isAppraisersOpen ? "▲" : "▼"}</span>
          </button>

          {/* Submenu của Appraisers */}
          {isAppraisersOpen && (
            <ul className="ml-4 space-y-1 mt-1">
              <li>
                <Link
                  to="/appraisers/list"
                  className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers/list")}`}
                >
                  List of Appraisers
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/request-list"
                  className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers/request-list")}`}
                >
                  Request List
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/request-detail"
                  className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers/request-detail")}`}
                >
                  Request Detail
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/appraisal-report"
                  className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers/appraisal-report")}`}
                >
                  Appraisal Report
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/assessment-reports"
                  className={`block p-2 hover:bg-gray-200 rounded transition-colors ${isActive("/appraisers/assessment-reports")}`}
                >
                  Assessment Reports
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;