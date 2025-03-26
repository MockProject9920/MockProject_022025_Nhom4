import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ClaimInformationTab = () => {
	const [formData, setFormData] = useState({
		id: "",
		policy_contract_id: "",
		claim_date: "",
		incident_date: "",
		status: "",
		incident_description: "",
		claim_amount: "",
		incident_type: "",
		claim_type: "",
		attachment: null,
		fullName: "",
		phoneNumber: "",
		email: "",
		agree: false,
	});

	const [errors, setErrors] = useState({});
	const [submitStatus, setSubmitStatus] = useState(null);

	// get dữ liệu profile
	useEffect(() => {
		fetch("http://localhost:8001/profile")
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched profile data:", data);
				if (data && Array.isArray(data) && data.length > 0) {
					const userProfile = data[0];
					setFormData((prev) => ({
						...prev,
						fullName: userProfile.name || "",
						phoneNumber: userProfile.phone || "",
						email: userProfile.email || "",
					}));
				} else {
					console.warn("No profile data found.");
				}
			})
			.catch((error) => console.error("Error fetching profile:", error));
	}, []);

	// Xử lý thay đổi dữ liệu nhập
	const handleChange = (e) => {
		const { name, value, type, checked, files } = e.target;
		const newValue =
			type === "checkbox" ? checked : type === "file" ? files[0] : value;

		setFormData((prev) => ({ ...prev, [name]: newValue }));

		// Xác thực ngay khi nhập
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: validateField(name, newValue),
		}));
	};

	// Xác thực từng trường
	const validateField = (name, value) => {
		if (!value) return "This field is required";

		if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			return "Invalid email format";
		}

		if (name === "attachment" && value && value.size > 5 * 1024 * 1024) {
			return "File size must be under 5MB";
		}

		return "";
	};

	// Xử lý submit form
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitStatus(null);

		const newErrors = {};
		Object.keys(formData).forEach((key) => {
			const error = validateField(key, formData[key]);
			if (error) newErrors[key] = error;
		});

		if (!formData.agree) {
			newErrors.agree = "You must agree to the terms";
		}

		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) return;

		const formDataToSend = new FormData();
		Object.keys(formData).forEach((key) => {
			if (!["fullName", "phoneNumber", "email"].includes(key)) {
				if (key === "attachment" && formData.attachment) {
					formDataToSend.append(key, formData.attachment);
				} else {
					formDataToSend.append(key, formData[key]);
				}
			}
		});

		try {
			const response = await fetch("http://localhost:8000/api/claim", {
				method: "POST",
				body: formDataToSend,
			});

			if (!response.ok) {
				const result = await response.json();
				throw new Error(result.message || "Unknown error");
			}

			setSubmitStatus("success");
			toast.success("Submit Successful ", { position: "top-right" });
			setFormData({
				id: "",
				policy_contract_id: "",
				claim_date: "",
				incident_date: "",
				status: "",
				incident_description: "",
				claim_amount: "",
				incident_type: "",
				claim_type: "",
				attachment: null,
				fullName: "",
				phoneNumber: "",
				email: "",
				agree: false,
			});
			setErrors({});
		} catch (error) {
			setSubmitStatus("error");
			toast.error("Submit Failed: " + error.message, { position: "top-right" });
		}
	};

	return (
		<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
			<ToastContainer />
			<h1 className="text-3xl font-bold text-gray-800">
				Submit Insurance Claim
			</h1>
			<p className="mb-4 text-gray-600">
				Enter damage information to submit a claim quickly
			</p>

			{submitStatus === "success" && (
				<p className="text-green-600">Claim submitted successfully!</p>
			)}
			{submitStatus === "error" && (
				<p className="text-red-600">
					Failed to submit claim. Please try again.
				</p>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				{[
					"id",
					"policy_contract_id",
					"claim_date",
					"incident_date",
					"status",
					"incident_description",
					"claim_amount",
					"incident_type",
					"claim_type",
				].map((field) => (
					<div key={field}>
						<input
							type={field.includes("date") ? "date" : "text"}
							className="w-full p-2 border rounded-md"
							name={field}
							placeholder={field.replace("_", " ")}
							value={formData[field]}
							onChange={handleChange}
						/>
						{errors[field] && <p className="text-red-500">{errors[field]}</p>}
					</div>
				))}

				<h2 className="text-xl font-semibold">Contact Information</h2>
				{["fullName", "phoneNumber", "email"].map((field) => (
					<div key={field}>
						<input
							type="text"
							className="w-full p-2 border rounded-md"
							name={field}
							disabled={true}
							placeholder={field.replace("_", " ")}
							value={formData[field] || ""}
							onChange={handleChange}
						/>
						{errors[field] && <p className="text-red-500">{errors[field]}</p>}
					</div>
				))}

				<div>
					<label className="block font-semibold">Attachment:</label>
					<input type="file" name="attachment" onChange={handleChange} />
					{errors.attachment && (
						<p className="text-red-500">{errors.attachment}</p>
					)}
				</div>

				<div className="flex items-center">
					<input
						type="checkbox"
						name="agree"
						checked={formData.agree}
						onChange={handleChange}
					/>
					<label className="ml-2">I agree to the terms and conditions</label>
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

export default ClaimInformationTab;
