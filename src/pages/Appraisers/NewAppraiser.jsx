import { useContext, useState } from "react";
import { AppraiserContext } from "../../context/AppraiserContext";
import { useNavigate } from "react-router-dom";

const NewAppraiser = () => {
  const { addAppraiser } = useContext(AppraiserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    type: "Individual",
    experience: "",
    address: "",
    phone: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppraiser(formData);
    navigate("/appraisers/list");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Add New Appraiser</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" className="border p-2 w-full" onChange={handleChange} required />
        <input name="experience" placeholder="Experience" className="border p-2 w-full" onChange={handleChange} required />
        <input name="address" placeholder="Address" className="border p-2 w-full" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" className="border p-2 w-full" onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default NewAppraiser;
