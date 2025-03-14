import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ClaimsProcessing from "./pages/Claims/ClaimsProcessing";
import ClaimsSettlementTracking from "./pages/Claims/ClaimsSettlementTracking";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/claims-processing" element={<ClaimsProcessing />} />
				<Route path="/claims-settlement-tracking" element={<ClaimsSettlementTracking />} />
			</Routes>
		</Router>
	);
}

export default App;
