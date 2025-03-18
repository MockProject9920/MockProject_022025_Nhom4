/* eslint-disable react/prop-types */
import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Footer from "../components/Layout/Footer/Footer";

const AdminLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Main content */}
			<div className="flex-1 flex flex-col">
				<Header />

				{/* Content changes */}
				<main className="flex-1 p-4">{children}</main>

				<Footer />
			</div>
		</div>
	);
};

export default AdminLayout;
