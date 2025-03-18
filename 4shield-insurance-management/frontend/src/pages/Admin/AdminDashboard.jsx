import OrdersChart from "@/components/UI/Chart/OrdersChart";
import PageVisits from "@/components/UI/Chart/PageVisits";
import SalesChart from "@/components/UI/Chart/SalesChart";
import SocialTraffic from "@/components/UI/Chart/SocialTraffic";
import StatsCard from "@/components/UI/Chart/StatsCard";

const AdminDashboard = () => {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Admin Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<StatsCard
					title="Traffic"
					value="350,897"
					percent="3.48%"
					isIncrease={true}
				/>
				<StatsCard
					title="New Users"
					value="2,356"
					percent="-3.48%"
					isIncrease={false}
				/>
				<StatsCard
					title="Sales"
					value="924"
					percent="-1.10%"
					isIncrease={false}
				/>
				<StatsCard
					title="Performance"
					value="49.65%"
					percent="12%"
					isIncrease={true}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<SalesChart />
				<OrdersChart />
			</div>
			<SocialTraffic />
			<PageVisits />
		</div>
	);
};

export default AdminDashboard;
