import { Outlet } from "react-router-dom";

// component
import Header from "@/components/Layout/Headers/Header";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Backdrop from "@/components/Layout/Sidebar/Backdrop";
import { SidebarProvider, useSidebar } from "@contexts/SidebarContext";

const LayoutContent = () => {
	const { isExpanded, isHovered, isMobileOpen } = useSidebar();

	return (
		<div className="min-h-screen xl:flex">
			<div>
				<Sidebar />
				<Backdrop />
			</div>
			<div
				className={`flex-1 transition-all duration-300 ease-in-out ${
					isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
				} ${isMobileOpen ? "ml-0" : ""}`}
			>
				<Header />
				<div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const AdminLayout = () => {
	return (
		<SidebarProvider>
			<LayoutContent />
		</SidebarProvider>
	);
};

export default AdminLayout;
