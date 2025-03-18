// import { useEffect, useState } from "react";
// import { fetchClaims } from "../../../services/claimService";

const ClaimsProcessingTable = () => {
	/* Mock API */
	const claims = [
		{
			id: 1,
			name: "Harry",
			claimDate: "March 3rd, 2024",
			dueDate: "September 3rd, 2024",
			description: "Flood, Collapsed house",
			status: "In Review",
			amount: "200$",
			attachment: "file.pdf",
		},
		{
			id: 2,
			name: "Peter",
			claimDate: "February 13th, 2025",
			dueDate: "March 10th, 2025",
			description: "Earthquake, Landslide",
			status: "Requested",
			amount: "300$",
			attachment: "file.docx",
		},
	];

	/* When BE returns api then execute the command below */

	// const [claims, setClaims] = useState([]);

	// useEffect(() => {
	// 	const getClaims = async () => {
	// 		try {
	// 			const data = await fetchClaims();
	// 			setClaims(data);
	// 		} catch (error) {
	// 			console.error("Unable to get request list:", error);
	// 		}
	// 	};

	// 	getClaims();
	// }, []);

	return (
		<div className="p-4">
			<h2 className="text-2xl font-semibold mb-4">Claims Processing</h2>
			<div className="bg-white shadow-md rounded-lg p-4">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-100">
							<th className="p-3">#</th>
							<th className="p-3">Customer Name</th>
							<th className="p-3">Claim Date</th>
							<th className="p-3">Due Date</th>
							<th className="p-3">Description</th>
							<th className="p-3">Status</th>
							<th className="p-3">Claim Amount</th>
							<th className="p-3">Attachment</th>
							<th className="p-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						{claims.map((claim) => (
							<tr key={claim.id} className="border-t">
								<td className="p-3">{claim.id}</td>
								<td className="p-3">{claim.name}</td>
								<td className="p-3">{claim.claimDate}</td>
								<td className="p-3">{claim.dueDate}</td>
								<td className="p-3">{claim.description}</td>
								<td className="p-3">
									<span
										className={`px-3 py-1 rounded-full text-white ${
											claim.status === "In Review"
												? "bg-green-500"
												: "bg-blue-500"
										}`}
									>
										{claim.status}
									</span>
								</td>
								<td className="p-3">{claim.amount}</td>
								<td className="p-3 underline text-blue-500 cursor-pointer">
									{claim.attachment}
								</td>
								<td className="px-3 py-3 space-y-2 flex flex-col">
									<button className="bg-blue-500 text-white px-1 py-1 rounded">
										Detail
									</button>
									<button className="bg-yellow-500 text-white px-1 py-1 rounded">
										Edit
									</button>
									<button className="bg-red-500 text-white px-1 py-1 rounded">
										Cancel
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ClaimsProcessingTable;
