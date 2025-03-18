import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAppraiser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "Individual",
    experience: "",
    establishedSince: "-",
    address: "",
    phone: "",
    email: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Appraiser:", formData);
    // Sau khi submit, điều hướng về danh sách
    navigate("/appraisers");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">+ Add New Appraiser</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="Individual">Individual</option>
          <option value="Organization">Organization</option>
        </select>
        <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Create Appraiser</button>
      </form>
    </div>
  );
};

export default NewAppraiser;
