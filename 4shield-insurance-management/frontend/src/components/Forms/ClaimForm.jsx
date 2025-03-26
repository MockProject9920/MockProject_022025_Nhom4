/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { submitClaim } from "../../services/claimService";

const ClaimForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		claimType: "",
		details: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await submitClaim(formData);
			alert("Gửi yêu cầu thành công!");
		} catch (error) {
			console.error("Gửi yêu cầu thất bại:", error);
		}
	};

	return (
		<form
			className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
			onSubmit={handleSubmit}
		>
			<h2 className="text-2xl font-bold mb-4">Accepting claims</h2>

			<div className="mb-4">
				<label className="block text-gray-700 mb-1">Full Name</label>
				<input
					type="text"
					name="fullName"
					value={formData.fullName}
					onChange={handleChange}
					className="w-full border border-gray-300 p-2 rounded"
					placeholder="Enter your fullname"
					required
				/>
			</div>

			<div className="mb-4">
				<label className="block text-gray-700 mb-1">Email</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="w-full border border-gray-300 p-2 rounded"
					placeholder="Enter your email"
					required
				/>
			</div>

			<div className="mb-4">
				<label className="block text-gray-700 mb-1">Type of compensation</label>
				<select
					name="claimType"
					value={formData.claimType}
					onChange={handleChange}
					className="w-full border border-gray-300 p-2 rounded"
					required
				>
					<option value="">Select compensation type</option>
					<option value="homeowners">Homeowners</option>
					<option value="property">Property</option>
				</select>
			</div>

			<div className="mb-4">
				<label className="block text-gray-700 mb-1">Request details</label>
				<textarea
					name="details"
					value={formData.details}
					onChange={handleChange}
					className="w-full border border-gray-300 p-2 rounded"
					placeholder="Describe the claim in detail"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
			>
				Submit Request
			</button>
		</form>
	);
};

export default ClaimForm;
