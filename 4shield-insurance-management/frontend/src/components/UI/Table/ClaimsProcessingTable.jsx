import { useEffect, useState } from "react";
import { fetchClaims } from "../../../services/claimService";

const ClaimsProcessingTable = () => {
	const [claims, setClaims] = useState([]);

	const statusColors = {
		Requested: "bg-yellow-500",
		"In Review": "bg-blue-500",
		Approved: "bg-green-500",
		Rejected: "bg-red-500",
	};

	useEffect(() => {
		const getClaims = async () => {
			try {
				const data = await fetchClaims();
				setClaims(data);
			} catch (error) {
				console.error("Unable to get request list:", error);
			}
		};

		getClaims();
	}, []);

	return (
		<table className="border-collapse w-full">
			<thead>
				<tr className="bg-gray-100">
					<th className="p-3">#</th>
					<th className="p-3">Customer ID</th>
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
						<td className="p-3">{claim.customer_id}</td>
						<td className="p-3">{claim.claim_date}</td>
						<td className="p-3">{claim.incident_date}</td>
						<td className="p-3">{claim.incident_description}</td>
						<td className="p-3">
							<span
								className={`ml-2 px-3 py-1 text-white rounded-full ${
									statusColors[claim.status || ""]
								}`}
							>
								{claim.status || "(Read-only)"}
							</span>
						</td>
						<td className="p-3">{claim.claim_amount}</td>
						<td className="p-3 text-blue-500 cursor-pointer underline">
							{claim.attachment}
						</td>
						<td className="flex flex-col px-3 py-3 space-y-2">
							<button className="bg-blue-500 rounded text-white px-1 py-1">
								Detail
							</button>
							<button className="bg-yellow-500 rounded text-white px-1 py-1">
								Edit
							</button>
							<button className="bg-red-500 rounded text-white px-1 py-1">
								Cancel
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ClaimsProcessingTable;
