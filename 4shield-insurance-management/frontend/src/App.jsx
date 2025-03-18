import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ClaimsProcessing from "./pages/Claims/ClaimsProcessing";
import ClaimsSettlementTracking from "./pages/Claims/ClaimsSettlementTracking";
import ClaimListPage from "./pages/Claims/ClaimListPage";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin/claims/processing" element={<ClaimsProcessing />} />
				<Route
					path="/admin/claims/settlement-tracking"
					element={<ClaimsSettlementTracking />}
				/>
				<Route path="/user/claims/claim-list" element={<ClaimListPage />} />
			</Routes>
		</Router>
	);
}

export default App;
