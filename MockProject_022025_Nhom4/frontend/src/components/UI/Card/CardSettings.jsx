import { useState } from "react";

const CardSettings = () => {
	const [formData, setFormData] = useState({
		username: "john_doe",
		email: "johndoe@example.com",
		firstName: "John",
		lastName: "Doe",
		address: "123 Main St, New York, USA",
		city: "New York",
		country: "USA",
		zipCode: "10001",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Settings updated successfully!");
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-md w-full">
			<h3 className="text-xl font-semibold text-gray-700 mb-4">Edit Profile</h3>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="text-gray-600">Username</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="text-gray-600">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="text-gray-600">First Name</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="text-gray-600">Last Name</label>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>
				<div>
					<label className="text-gray-600">Address</label>
					<input
						type="text"
						name="address"
						value={formData.address}
						onChange={handleChange}
						className="w-full p-2 border rounded"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="text-gray-600">City</label>
						<input
							type="text"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="text-gray-600">Country</label>
						<input
							type="text"
							name="country"
							value={formData.country}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="text-gray-600">Zip Code</label>
						<input
							type="text"
							name="zipCode"
							value={formData.zipCode}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
				>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default CardSettings;
