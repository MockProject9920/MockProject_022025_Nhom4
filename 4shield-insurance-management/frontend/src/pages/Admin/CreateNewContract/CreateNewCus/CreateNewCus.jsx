import React, { useState } from "react";
import "./CreateNewCus.css";

const CreateNewCus = ({ onClose }) => {
    // State to store form data
    const [formData, setFormData] = useState({
        type: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        taxId: "",
        image: null,
    });

    // State to save validation errors
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    // Function to check form validity
    const validateForm = () => {
        let newErrors = {};
        if (!formData.gender) newErrors.gender = "Gender is required."; // Must to choose gender
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format."; //Email must be in correct format
        if (!formData.phone.match(/^0\d{9}$/)) newErrors.phone = "Phone number must start with 0 and be 10 digits."; // Phone number must start with 0 and have 10 digits
        if (!formData.image) newErrors.image = "Please upload an image."; // Must to upload images

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there is no error
    };

    // Handle save data
    const handleSave = () => {
        if (validateForm()) { //Save only if validateForm returns true
            console.log("Saved Data:", formData);
            onClose(); // Close model after save
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Create a new customer</h2>
                <div className="form-group">
                    <label>Type (*)</label>
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="">Choose type</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Individual">Individual</option>
                    </select>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label>First Name (*)</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Last Name (*)</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                    </div>
                    {errors.gender && <p className="error-text">{errors.gender}</p>}
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>SSN/Tax ID</label>
                    <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} placeholder="--optional--" />
                </div>

                <div className="form-group">
                    <label>Upload Image</label>
                    <input type="file" name="image" onChange={handleChange} />
                    {errors.image && <p className="error-text">{errors.image}</p>}
                </div>

                <div className="modal-buttons">
                    <button className="cancel" onClick={onClose}>Cancel</button>
                    <button className="save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewCus;
