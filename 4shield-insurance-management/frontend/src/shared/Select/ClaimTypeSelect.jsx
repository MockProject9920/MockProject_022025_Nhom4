const statuses = ["SUCCESS", "PENDING", "FAILED"];

export default function ClaimTypeSelect({ currentClaim }) {
	return (
		<select
			defaultValue={currentClaim}
			className="w-full p-2 mb-4 border rounded"
			id="claimType"
		>
			{statuses.map((status) => (
				<option key={status} value={status}>
					{status}
				</option>
			))}
		</select>
	);
}
