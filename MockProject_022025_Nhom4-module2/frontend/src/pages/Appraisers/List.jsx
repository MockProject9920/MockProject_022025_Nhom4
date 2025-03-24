import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isNewAppraiserModalOpen, setIsNewAppraiserModalOpen] = useState(false);
  const [newAppraiser, setNewAppraiser] = useState({
    name: "",
    type: "Individual",
    experience: "",
    establishedSince: "",
    address: "",
    phone: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8890/appraiser/list");
        console.log("API Response:", response.data); // Kiểm tra console log
        setData(response.data.data); // Đảm bảo lấy đúng mảng appraisers
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleNewAppraiserClick = () => {
    setIsNewAppraiserModalOpen(true);
  };

  const handleNewAppraiserInputChange = (e, field) => {
    setNewAppraiser({ ...newAppraiser, [field]: e.target.value });
  };

  const handleSaveNewAppraiser = async () => {
    try {
      const response = await axios.post("http://localhost:8890/appraiser/new", newAppraiser);
      setData([...data, response.data.data]);
      setIsNewAppraiserModalOpen(false);
      setNewAppraiser({
        name: "",
        type: "Individual",
        experience: "",
        establishedSince: "",
        address: "",
        phone: "",
        email: "",
        status: "Active",
      });
    } catch (error) {
      console.error("Error saving new appraiser:", error);
    }
  };

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
        <h1 className="text-xl md:text-2xl font-bold">⭐ List of Appraisers</h1>
        <button
          className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded"
          onClick={handleNewAppraiserClick}
        >
          + New Appraiser
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
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
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      item.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-between mt-4 text-gray-600">
        <span className="hidden sm:block">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}{" "}
          entries
        </span>
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

      {/* Modal tạo appraiser mới */}
      {isNewAppraiserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsNewAppraiserModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Create New Appraiser</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={newAppraiser.name}
                  onChange={(e) => handleNewAppraiserInputChange(e, "name")}
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  value={newAppraiser.type}
                  onChange={(e) => handleNewAppraiserInputChange(e, "type")}
                  className="border p-2 rounded w-full"
                >
                  <option value="Individual">Individual</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Experience
                </label>
                <input
                  type="text"
                  value={newAppraiser.experience}
                  onChange={(e) =>
                    handleNewAppraiserInputChange(e, "experience")
                  }
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Established Since
                </label>
                <input
                  type="text"
                  value={newAppraiser.establishedSince}
                  onChange={(e) =>
                    handleNewAppraiserInputChange(e, "establishedSince")
                  }
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={newAppraiser.address}
                  onChange={(e) => handleNewAppraiserInputChange(e, "address")}
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  value={newAppraiser.phone}
                  onChange={(e) => handleNewAppraiserInputChange(e, "phone")}
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  value={newAppraiser.email}
                  onChange={(e) => handleNewAppraiserInputChange(e, "email")}
                  className="border p-2 rounded w-full h-8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={newAppraiser.status}
                  onChange={(e) => handleNewAppraiserInputChange(e, "status")}
                  className="border p-2 rounded w-full"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsNewAppraiserModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleSaveNewAppraiser}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;