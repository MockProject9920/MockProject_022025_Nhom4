import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import ClaimsProcessing from "./pages/Claims/ClaimsProcessing";
import ClaimsSettlementTracking from "./pages/Claims/ClaimsSettlementTracking";
import AppraisersRequest from "./pages/Appraisers/AppraisersRequest";
import ClaimInformation from "./components/UI/Tab/ClaimInformationTab";
import InsuranceContract from "./components/UI/Tab/InsuranceContractTab";
import ListOfClaims from "./components/UI/Tab/ListOfClaimsTab";
import SubmitAClaim from "./pages/Claims/SubmitAClaim";
import ClaimDetails from "./pages/Claims/ClaimsDetails";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				{/* Routes Admin */}
				<Route path="/admin/claims/processing" element={<ClaimsProcessing />} />
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
					<Route path="list-of-claims" element={<ListOfClaims />} />
					<Route path="claim-details/:id" element={<ClaimDetails />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
