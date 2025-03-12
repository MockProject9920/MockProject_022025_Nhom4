import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const [dropdowns, setDropdowns] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  });
  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  return (
    <div className="space-y-10 h-screen w-60 m-8">
      <p className="text-3xl font-medium">FourShield Insurance</p>
      <div className="space-y-6">
        <div className="flex space-x-2">
          <i class="ri-dashboard-3-fill"></i>
          <p>Dashboard</p>
        </div>
        <div>
          <div onClick={() => toggleDropdown("menu1")}>
            <i></i> <p>User Management</p>
          </div>
        </div>
        {dropdowns.menu1 && (
          <div>
            <ul>
              <li>Customner</li>
              <li>Employee</li>
              <li>Role</li>
            </ul>
          </div>
        )}
        <div>
          <p>Contract Manager</p>
        </div>
        <div>
          <p>Insurance Product</p>
        </div>

        <div>
          <div onClick={() => toggleDropdown("menu2")}>
            <p>Transaction & Invoice</p>
          </div>
          {dropdowns.menu2 && (
            <div>
              <ul>
                <li>Transaction Management</li>
                <li>Invoice Management</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <p>Claims Processing</p>
        </div>
        <div>
          <div onClick={() => toggleDropdown("menu3")}>
            <p>Appraisers</p>
          </div>
          {dropdowns.menu3 && (
            <div>
              <ul>
                <li>List of Appraisers</li>
                <li>Assessment Report</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
