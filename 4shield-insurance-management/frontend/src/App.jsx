import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewContract from "./pages/Admin/CreateNewContract/CreateNewContract";
import CustomerInformation from "./pages/Admin/CreateNewContract/CustomerInformation/CustomerInformation";
import PropertyInformation from "./pages/Admin/CreateNewContract/PropertyInformation/PropertyInformation";
import ViewContractDetail from "./pages/Admin/ViewContractDetail/ViewContractDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/contract-manager/create-customer" element={<CreateNewContract />} />
				<Route path="/inforcus" element={<CustomerInformation />} />
				<Route path="/property-information" element={<PropertyInformation />} />
				<Route path="/view-contractdetail" element={<ViewContractDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
