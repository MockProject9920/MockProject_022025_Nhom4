// Cấu hình tất cả routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/Login";
import Settings from "@/pages/Admin/Settings";

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
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
