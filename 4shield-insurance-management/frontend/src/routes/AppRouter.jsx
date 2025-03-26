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
import ClaimDetailsStatus from "../pages/Claims/ClaimDetailsStatus";
import AppraisersRequest from "../pages/Appraisers/AppraisersRequest";
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
				<Route
					path="/admin/claims/settlement-tracking"
					element={<ClaimsSettlementTracking />}
				/>
				<Route
					path="/admin/claims/appraisers-request"
					element={<AppraisersRequest />}
				/>

				{/* Routes Customer */}
				<Route path="/user/claims" element={<SubmitAClaim />}>
					<Route index element={<Navigate to="insurance-contract" />} />
					<Route path="insurance-contract" element={<InsuranceContract />} />
					<Route path="claim-information" element={<ClaimInformation />} />
					<Route path="claims-status" element={<ListOfClaimsTab />} />
					{/* Claim Status */}
					<Route
						path="claims-status/list/:id"
						element={<ClaimDetailsStatus />}
					/>

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
