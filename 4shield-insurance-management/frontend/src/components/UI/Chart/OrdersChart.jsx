import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ month: "Jan", 2024: 30, 2025: 40 },
	{ month: "Feb", 2024: 50, 2025: 60 },
	{ month: "Mar", 2024: 70, 2025: 90 },
	{ month: "Apr", 2024: 20, 2025: 30 },
	{ month: "May", 2024: 80, 2025: 100 },
	{ month: "Jun", 2024: 60, 2025: 80 },
	{ month: "Jul", 2024: 90, 2025: 110 },
];

const OrdersChart = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="text-gray-600 text-lg font-semibold mb-4">Total Orders</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="2024" fill="#8884d8" />
					<Bar dataKey="2025" fill="#82ca9d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default OrdersChart;
