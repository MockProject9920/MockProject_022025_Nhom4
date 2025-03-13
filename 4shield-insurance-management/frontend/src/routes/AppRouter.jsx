// Cấu hình tất cả routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/Login";
import Settings from "@/pages/Admin/Settings";
import NotFound from "@/pages/Errors/NotFound";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin" element={<AdminLayout />}>
					<Route index element={<AdminDashboard />} />
					{/* <Route path="users" element={<UsersManagement />} /> */}
					<Route path="settings" element={<Settings />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
