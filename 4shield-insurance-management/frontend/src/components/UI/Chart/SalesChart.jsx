import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", 2024: 40, 2025: 70 },
  { month: "Feb", 2024: 65, 2025: 75 },
  { month: "Mar", 2024: 80, 2025: 85 },
  { month: "Apr", 2024: 55, 2025: 50 },
  { month: "May", 2024: 60, 2025: 65 },
  { month: "Jun", 2024: 75, 2025: 85 },
  { month: "Jul", 2024: 90, 2025: 95 },
];

const SalesChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-600 text-lg font-semibold mb-4">Sales Value</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2024" stroke="#8884d8" />
          <Line type="monotone" dataKey="2025" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
