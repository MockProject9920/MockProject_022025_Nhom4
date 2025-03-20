const SocialTraffic = () => {
	const traffic = [
		{ source: "Facebook", visitors: 1480, percent: "60%" },
		{ source: "Facebook Ads", visitors: 5480, percent: "70%" },
		{ source: "Google", visitors: 4807, percent: "80%" },
		{ source: "Instagram", visitors: 3678, percent: "75%" },
		{ source: "Twitter", visitors: 2645, percent: "30%" },
	];

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="text-gray-600 text-lg font-semibold mb-4">
				Social Traffic
			</h3>
			<ul>
				{traffic.map((item, index) => (
					<li key={index} className="border-b p-2 flex justify-between">
						<span>{item.source}</span>
						<span>{item.percent}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialTraffic;
