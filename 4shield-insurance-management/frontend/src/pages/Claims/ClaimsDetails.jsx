/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";

/* Mock API */
const claims = [
	{
		id: "C001",
		policyNumber: "P123456",
		date: "2025-03-10",
		type: "Auto Insurance",
		amount: "5,000",
		status: "Requested",
	},
];

const ClaimDetails = () => {
	const { id } = useParams();
	const [isEditing, setIsEditing] = useState(false);
	// const navigate = useNavigate();
	// const [claim, setClaim] = useState(null);
	// const [loading, setLoading] = useState(true);

	// Call API
	// useEffect(() => {
	//   fetch(`https://api.example.com/claims/${id}`) // Thay bằng API thật
	//     .then((res) => res.json())
	//     .then((data) => {
	//       setClaim(data);
	//       setLoading(false);
	//     })
	//     .catch((error) => {
	//       console.error("Lỗi khi gọi API:", error);
	//       setLoading(false);
	//     });
	// }, [id]);

	return (
		<div className="p-6 flex flex-col lg:flex-row gap-8">
			{/* Left: Claim Information */}
			<div className="flex-1 bg-white p-6 rounded-lg shadow">
				<button
					className="px-4 py-2 bg-gray-300 text-black rounded"
					onClick={() => window.history.back()}
				>
					← Go Back
				</button>
				<h2 className="mt-4 text-2xl font-bold">Claim Details</h2>

				<p className="text-gray-600">
					Information about claim ID: <b>{id}</b>
				</p>

				{/* Claim Details */}
				<div className="mt-4 space-y-2">
					<p>
						<b>Policy Number:</b>{" "}
						<span className="text-gray-500">Read-only</span>
					</p>
					<p>
						<b>Claim Date:</b> <span className="text-gray-500">Read-only</span>
					</p>
					<p>
						<b>Damage Description:</b>{" "}
						<span className="text-gray-500">Read-only</span>
					</p>
					<p>
						<b>Uploaded Evidence:</b>{" "}
						<span className="text-gray-500">File Upload (Read-only)</span>
					</p>
					<p>
						<b>Adjuster Comments:</b>{" "}
						<span className="text-gray-500">Read-only</span>
					</p>
					<p>
						<b>Final Compensation ($):</b>{" "}
						<span className="text-gray-500">Read-only</span>
					</p>
				</div>

				{/* Download Button */}
				<button className="mt-4 px-4 py-2 bg-black text-white rounded flex items-center">
					Download <span className="ml-2">⬇</span>
				</button>

				{/* Edit Claim Button */}
				<button
					onClick={() => setIsEditing(!isEditing)}
					className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded flex items-center"
				>
					✏ Edit Claim
				</button>
			</div>

			{/* Right: Edit Form (Hiện khi nhấn Edit) */}
			{isEditing && (
				<div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-lg font-bold">Edit Claim</h3>

					<div className="mt-4 space-y-2">
						<label className="block">Claim Type:</label>
						<input type="text" className="w-full border px-3 py-2 rounded" />

						<label className="block">Claim Amount ($):</label>
						<input type="number" className="w-full border px-3 py-2 rounded" />

						<label className="block">Claim Description:</label>
						<textarea className="w-full border px-3 py-2 rounded"></textarea>

						<label className="block">Uploaded Evidence:</label>
						<input type="file" className="w-full border px-3 py-2 rounded" />
					</div>

					<button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
						Save Changes
					</button>
				</div>
			)}
		</div>
	);
};

export default ClaimDetails;
