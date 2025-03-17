import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ClaimsProcessing from "./pages/Claims/ClaimsProcessing";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin/claims/processing" element={<ClaimsProcessing />} />
			</Routes>
		</Router>
	);
}

export default App;
