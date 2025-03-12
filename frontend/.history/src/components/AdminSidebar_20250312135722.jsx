import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p>FourShield Insurance</p>
      <Link>Dashboard</Link>
      <div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <i></i> <p>User Management</p>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul>
            <li>Customner</li>
            <li>Employee</li>
            <li>Role</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminSidebar;
