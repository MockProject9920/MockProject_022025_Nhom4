import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ClaimsProcessing from "./pages/Claims/ClaimsProcessing";
import ClaimsSettlementTracking from "./pages/Claims/ClaimsSettlementTracking";
import ClaimsInsuranceContract from "./pages/Claims/ClaimsInsuranceContract"
import ClaimsInformation from "./pages/Claims/ClaimInformation"


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/claims-processing" element={<ClaimsProcessing />} />
				<Route path="/claims-settlement-tracking" element={<ClaimsSettlementTracking />} />
				<Route path="/claims-insurance-contract" element={<ClaimsInsuranceContract />} />
				<Route path="/claims-infomations" element={<ClaimsInformation />} />
			</Routes>
		</Router>
	);
}

export default App;
