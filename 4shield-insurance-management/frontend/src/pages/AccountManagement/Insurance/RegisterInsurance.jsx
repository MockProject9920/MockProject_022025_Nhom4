import React from "react";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import InputField from "../../../components/InputField";

const RegisterInsurance = () => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				<Navbar />

				{/* Form */}
				<div className="p-6">
					<h2 className="text-2xl font-bold mb-4">Register for Insurance</h2>
					<div className="border-b mb-4">
						<ul className="flex space-x-4">
							<li className="font-bold border-b-2 border-black pb-2">
								Asset Information
							</li>
							<li>Personal Information</li>
							<li>Payment Information</li>
							<li>Registered Insurance List</li>
						</ul>
					</div>

					<h3 className="text-lg font-semibold mb-3">
						Enter Property Information
					</h3>

					{/* Form Fields */}
					<InputField
						label="Property Description"
						placeholder="Enter description"
					/>
					<InputField label="Property Address" placeholder="Enter address" />
					<InputField
						label="Area (m²)"
						placeholder="Enter area"
						type="number"
					/>

					<div className="mb-4">
						<label className="block font-medium">Insurance Type:</label>
						<select className="border p-2 w-full rounded">
							<option>Homeowners</option>
							<option>Flood</option>
							<option>Earthquake</option>
							<option>Additional Coverage</option>
						</select>
					</div>

					<div className="mb-4">
						<label className="block font-medium">Construction Materials:</label>
						<select className="border p-2 w-full rounded">
							<option>Concrete</option>
							<option>Brick</option>
							<option>Wood</option>
							<option>Other</option>
						</select>
					</div>

					<InputField
						label="Estimated Property Value (USD)"
						placeholder="Enter value"
						type="number"
					/>

					{/* Date Fields */}
					<div className="flex space-x-4 mb-4">
						<div>
							<label className="block font-medium">Coverage Start Date:</label>
							<div className="flex space-x-2">
								<select className="border p-2 rounded">
									<option>Day</option>
								</select>
								<select className="border p-2 rounded">
									<option>Month</option>
								</select>
								<select className="border p-2 rounded">
									<option>Year</option>
								</select>
							</div>
						</div>

						<div>
							<label className="block font-medium">Coverage End Date:</label>
							<div className="flex space-x-2">
								<select className="border p-2 rounded">
									<option>Day</option>
								</select>
								<select className="border p-2 rounded">
									<option>Month</option>
								</select>
								<select className="border p-2 rounded">
									<option>Year</option>
								</select>
							</div>
						</div>
					</div>

					<InputField
						label="Risk Information & Loss History"
						placeholder="Enter details"
					/>

					{/* Submit Button */}
					<button className="bg-green-500 text-white px-6 py-2 rounded">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterInsurance;
