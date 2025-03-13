import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Footer from "../components/Layout/Footer/Footer";

const AdminLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Phần nội dung chính */}
			<div className="flex-1 flex flex-col">
				<Header />

				{/* Nội dung thay đổi */}
				<main className="flex-1 p-4">{children}</main>

				<Footer />
			</div>
		</div>
	);
};

export default AdminLayout;
