import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StatsCard = ({ title, value, percent, isIncrease }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
			<div>
				<h3 className="text-gray-600 text-sm font-medium">{title}</h3>
				<p className="text-2xl font-bold">{value}</p>
			</div>
			<div
				className={`flex items-center space-x-1 text-sm ${
					isIncrease ? "text-green-500" : "text-red-500"
				}`}
			>
				{isIncrease ? <FaArrowUp /> : <FaArrowDown />}
				<span>{percent}</span>
			</div>
		</div>
	);
};

export default StatsCard;
