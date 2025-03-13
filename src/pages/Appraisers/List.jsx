import { useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "John Doe", type: "Individual", experience: "10 years", establishedSince: "-", address: "123 Main Street, USA", phone: "+1 (123) 456-7890", email: "johndoe@email.com", status: "Active" },
    { id: 2, name: "Mary Smith", type: "Individual", experience: "8 years", establishedSince: "-", address: "789 Oak Road, USA", phone: "+1 (555) 123-4567", email: "marysmith@email.com", status: "Active" },
    { id: 3, name: "ABC Appraisal Services", type: "Organization", experience: "2000", establishedSince: "2000", address: "456 Lakewood, USA", phone: "+1 (333) 222-1111", email: "abc@email.com", status: "Inactive" },
    { id: 4, name: "XYZ Valuation", type: "Organization", experience: "2010", establishedSince: "2010", address: "567 Elm Street, USA", phone: "+1 (444) 555-6666", email: "xyz@email.com", status: "Active" },
    { id: 5, name: "Valuation Experts", type: "Individual", experience: "5 years", establishedSince: "-", address: "890 Pine Avenue, USA", phone: "+1 (777) 888-9999", email: "experts@email.com", status: "Active" },
  ];

  // Số lượng item trên mỗi trang
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Tính tổng số trang
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Lấy dữ liệu theo trang
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">⭐ List of Appraisers</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/appraisers/new")}
        >
          + New Appraiser
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        {paginatedData.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">ID</th>
                <th className="p-2">Contact Name</th>
                <th className="p-2">Type</th>
                <th className="p-2">Experience</th>
                <th className="p-2">Established Since</th>
                <th className="p-2">Address</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.experience}</td>
                  <td className="p-2">{item.establishedSince || "-"}</td>
                  <td className="p-2">{item.address}</td>
                  <td className="p-2">{item.phone}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">
                    <span className={`px-3 py-1 rounded-full text-white ${item.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>

      {/* Phân trang */}
      <div className="flex justify-between mt-4 text-gray-600">
        <span>Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries</span>
        <div>
          <button
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-[#d8e1fe] hover:bg-[#b6c3fc]"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-[#d8e1fe] hover:bg-[#b6c3fc]"
            } ml-2`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
