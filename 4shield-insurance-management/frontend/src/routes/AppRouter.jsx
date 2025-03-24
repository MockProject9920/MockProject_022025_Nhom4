import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Login from "../pages/Auth/Login";
import ClaimsProcessing from "../pages/Claims/ClaimsProcessing";
import ClaimsSettlementTracking from "../pages/Claims/ClaimsSettlementTracking";
import ClaimInformation from "../components/UI/Tab/ClaimInformationTab";
import InsuranceContract from "../components/UI/Tab/InsuranceContractTab";
import SubmitAClaim from "../pages/Claims/SubmitAClaim";
import ListOfClaimsTab from "../components/UI/Tab/ListOfClaimsTab";
import ClaimCancel from "../shared/Claims/ClaimCancel";
import ClaimEdit from "../shared/Claims/ClaimEdit";
import ClaimInReview from "../shared/Claims/ClaimInReview";
// import PrivateRoutes from "./PrivateRoute";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Login />} />

				{/* Routes Admin */}
				<Route path="/admin/claims/processing" element={<ClaimsProcessing />} />
				<Route
					path="/admin/claims/settlement-tracking"
					element={<ClaimsSettlementTracking />}
				/>

				{/* Routes Customer */}
				<Route path="/user/claims" element={<SubmitAClaim />}>
					<Route index element={<Navigate to="insurance-contract" />} />
					<Route path="insurance-contract" element={<InsuranceContract />} />
					<Route path="claim-information" element={<ClaimInformation />} />
					<Route path="claims-status" element={<ListOfClaimsTab />} />
					{/* Claim Status */}
					<Route path="claims-status/review/:id" element={<ClaimInReview />} />
					<Route path="claims-status/cancel/:id" element={<ClaimCancel />} />
					<Route path="claims-status/edit/:id" element={<ClaimEdit />} />

					{/* Private Routes */}
					{/* <Route element={<PrivateRoutes />}>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route> */}

					{/* 404 Page */}
					{/* <Route path="*" element={<NotFound />} /> */}
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
