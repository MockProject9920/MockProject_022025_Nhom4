// Cấu hình tất cả routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/Login";
import Settings from "@/pages/Admin/Settings";
import NotFound from "@/pages/Errors/NotFound";
import PropertyList from "@/pages/Properties/PropertyList";
import PropertyNew from "@/pages/Properties/PropertyNew";
import AssetInfomation from "@/pages/InsuranceServices/AssetInfomation";
import AssessmentReports from "@/components/Appraisers/AssessmentReports";
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
				<Route path="/properties/list" element={<PropertyList />} />
				<Route path="/properties/new" element={<PropertyNew />} />
				<Route path="/insurance/asset_information" element={<AssetInfomation />} />
				<Route path="/appraiser/appraisal-report" element={<AssessmentReports />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
