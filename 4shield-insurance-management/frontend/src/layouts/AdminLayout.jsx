import Header from "@/components/Layout/Headers/Header";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
	return (
		<div className="flex bg-gray-100 min-h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Header />
				<main className="p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
