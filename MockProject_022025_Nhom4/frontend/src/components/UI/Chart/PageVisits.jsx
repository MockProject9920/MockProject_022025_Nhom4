const PageVisits = () => {
	const pages = [
		{ name: "/argon/", visitors: 4569, unique: 340, bounce: "46.53%" },
		{
			name: "/argon/index.html",
			visitors: 3985,
			unique: 319,
			bounce: "46.53%",
		},
		{
			name: "/argon/charts.html",
			visitors: 3513,
			unique: 294,
			bounce: "36.49%",
		},
		{
			name: "/argon/tables.html",
			visitors: 2050,
			unique: 147,
			bounce: "50.87%",
		},
		{
			name: "/argon/profile.html",
			visitors: 1795,
			unique: 190,
			bounce: "46.53%",
		},
	];

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="text-gray-600 text-lg font-semibold mb-4">Page Visits</h3>
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="bg-gray-200">
						<th className="p-2">Page Name</th>
						<th className="p-2">Visitors</th>
						<th className="p-2">Unique Users</th>
						<th className="p-2">Bounce Rate</th>
					</tr>
				</thead>
				<tbody>
					{pages.map((page, index) => (
						<tr key={index} className="border-b">
							<td className="p-2">{page.name}</td>
							<td className="p-2">{page.visitors}</td>
							<td className="p-2">{page.unique}</td>
							<td className="p-2">{page.bounce}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PageVisits;
