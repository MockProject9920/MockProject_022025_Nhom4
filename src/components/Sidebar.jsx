import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isAppraisersOpen, setIsAppraisersOpen] = useState(
    location.pathname.startsWith("/appraiser")
  );

  // Hàm kiểm tra đường dẫn để đổi màu đỏ
  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-red-500 font-bold"
      : "text-gray-700";

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      {/* Logo */}
      <h2 className="text-xl font-bold mb-4">FourShield Insurance</h2>

      {/* Danh sách menu */}
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/dashboard"
            )}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/user-management"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/user-management"
            )}`}
          >
            User Management
          </Link>
        </li>
        <li>
          <Link
            to="/contact-manager"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/contact-manager"
            )}`}
          >
            Contact Manager
          </Link>
        </li>
        <li>
          <Link
            to="/insurance-product"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/insurance-product"
            )}`}
          >
            Insurance Product
          </Link>
        </li>
        <li>
          <Link
            to="/payment-invoice"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/payment-invoice"
            )}`}
          >
            Payment & Invoice
          </Link>
        </li>
        <li>
          <Link
            to="/claims-processing"
            className={`block p-2 hover:bg-gray-300 rounded ${isActive(
              "/claims-processing"
            )}`}
          >
            Claims Processing
          </Link>
        </li>

        {/* Appraisers Menu */}
        <li>
          <button
            onClick={() => setIsAppraisersOpen(!isAppraisersOpen)}
            className="flex justify-between items-center w-full p-2 hover:bg-gray-300 rounded"
          >
            <span className={isActive("/appraiser")}>Appraisers</span>
            <span>{isAppraisersOpen ? "▲" : "▼"}</span>
          </button>

          {isAppraisersOpen && (
            <ul className="ml-4 space-y-1 mt-1">
              <li>
                <Link
                  to="/appraisers/list"
                  className="block p-2 hover:bg-gray-300 rounded"
                >
                  List of Appraisers
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/request-list"
                  className="block p-2 hover:bg-gray-300 rounded"
                >
                  Request List
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/request-detail"
                  className="block p-2 hover:bg-gray-300 rounded"
                >
                  Request Detail
                </Link>
              </li>
              <li>
                <Link
                  to="/appraisers/appraisal-report"
                  className="block p-2 hover:bg-gray-300 rounded"
                >
                  Appraisal Report
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
