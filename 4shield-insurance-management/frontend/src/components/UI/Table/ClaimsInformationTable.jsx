import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClaimsInformation = () => {
	const [formData, setFormData] = useState({
		description: "",
		date: "",
		damage: "",
		claimType: "",
		fullName: "",
		phoneNumber: "",
		email: "",
		evidence: null,
		agree: false,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value, type, checked, files } = e.target;
		const newValue =
			type === "checkbox" ? checked : type === "file" ? files[0] : value;

		setFormData((prev) => ({ ...prev, [name]: newValue }));

		// Xác thực dữ liệu trong khi nhập và cập nhật errors
		const error = validateField(name, newValue);
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: error || undefined, // Xóa lỗi nếu hợp lệ
		}));
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		const error = validateField(name, value);
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: error || undefined,
		}));
	};

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case "description":
				return !value ? "Description is required" : "";
			case "date":
				return !value ? "Date is required" : "";
			case "damage":
				return !value ? "Damage estimate is required" : "";
			case "claimType":
				return !value ? "Claim type is required" : "";
			case "fullName":
				return !value ? "Full name is required" : "";
			case "phoneNumber":
				return !value ? "Phone number is required" : "";
			case "email":
				return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
					? "Invalid email format"
					: "";
			case "evidence":
				return value && value.size > 5 * 1024 * 1024
					? "File size must be under 5MB"
					: "";
			default:
				return "";
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		// Validate từng trường và lưu lỗi trực tiếp
		Object.keys(formData).forEach((field) => {
			const value = formData[field];
			const error = validateField(field, value);
			if (error) {
				newErrors[field] = error;
			}
		});

		// Kiểm tra riêng checkbox "agree"
		if (!formData.agree) {
			newErrors.agree = "You must agree to the terms";
		}

		// Cập nhật state lỗi
		setErrors(newErrors);

		// Nếu không có lỗi thì submit form
		if (Object.keys(newErrors).length === 0) {
			console.log(formData);
			alert("Submit Correct");
			setFormData({
				description: "",
				date: "",
				damage: "",
				claimType: "",
				fullName: "",
				phoneNumber: "",
				email: "",
				evidence: null,
				agree: false,
			});
			setErrors({});
		}
	};

	return (
		<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
			<nav className="flex space-x-8 border-b mb-6">
				<Link to="/user/claims/insurance-contract" className="text-gray-600">
					Insurance Contract
				</Link>
				<a className="text-black font-medium border-b-2 border-black pb-2">
					Claim Information
				</a>
				<a href="#" className="text-gray-600">
					List of claims
				</a>
			</nav>

			<h1 className="text-3xl font-bold text-gray-800 mb-4">
				Submit Insurance Claim
			</h1>
			<p className="mb-4 text-gray-600">
				Enter damage information to submit a claim quickly
			</p>

			<form onSubmit={handleSubmit} className="space-y-6">
				<input
					className="w-full p-2 border rounded-md"
					name="description"
					placeholder="Description of the incident"
					value={formData.description}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.description && (
					<p className="text-red-500">{errors.description}</p>
				)}

				<input
					type="date"
					className="w-full p-2 border rounded-md"
					name="date"
					value={formData.date}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.date && <p className="text-red-500">{errors.date}</p>}

				<input
					className="w-full p-2 border rounded-md"
					name="damage"
					placeholder="Estimated damage"
					value={formData.damage}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.damage && <p className="text-red-500">{errors.damage}</p>}

				<select
					className="w-full p-2 border rounded-md"
					name="claimType"
					value={formData.claimType}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					<option value="">Select Claim Type</option>
					<option value="Accident">Accident</option>
					<option value="Theft">Theft</option>
					<option value="Fire">Fire</option>
				</select>
				{errors.claimType && <p className="text-red-500">{errors.claimType}</p>}

				<div className="mb-4">
					<label className="block text-gray-600 mb-2">
						Image/Video evidence:
					</label>
					<input
						type="file"
						className="w-full p-2 border rounded-md"
						name="evidence"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.evidence && <p className="text-red-500">{errors.evidence}</p>}
					{formData.evidence && (
						<p className="text-gray-600">Uploaded: {formData.evidence.name}</p>
					)}
				</div>

				<h2 className="text-xl font-semibold mb-4">Contact Information</h2>
				<input
					className="w-full p-2 border rounded-md"
					name="fullName"
					placeholder="Full name"
					value={formData.fullName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.fullName && <p className="text-red-500">{errors.fullName}</p>}

				<input
					className="w-full p-2 border rounded-md"
					name="phoneNumber"
					placeholder="Phone number"
					value={formData.phoneNumber}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.phoneNumber && (
					<p className="text-red-500">{errors.phoneNumber}</p>
				)}

				<input
					className="w-full p-2 border rounded-md"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.email && <p className="text-red-500">{errors.email}</p>}

				<div className="flex items-center">
					<input
						type="checkbox"
						name="agree"
						checked={formData.agree}
						onChange={handleChange}
						onBlur={handleBlur}
						className="mr-2"
					/>
					<span className="text-gray-600">
						I certify that the above information is correct
					</span>
				</div>
				{errors.agree && <p className="text-red-500">{errors.agree}</p>}

				<button
					type="submit"
					className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
				>
					Submit claim
				</button>
			</form>
		</div>
	);
};

export default ClaimsInformation;
