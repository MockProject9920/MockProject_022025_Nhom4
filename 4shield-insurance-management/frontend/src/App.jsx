import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewContract from "./pages/Admin/CreateNewContract/CreateNewContract";
import CustomerInformation from "./pages/Admin/CreateNewContract/CustomerInformation/CustomerInformation";
import PropertyInformation from "./pages/Admin/CreateNewContract/PropertyInformation/PropertyInformation";
import ViewContractDetail from "./pages/Admin/ViewContractDetail/ViewContractDetail";
import InvoiceManagement from "./pages/InvoiceManagement/InvoiceManagement";
import ContractManager from "./pages/ContactManagement/ContractManager";
import { ContractStatus } from "./pages/ContractStatus/ContractStatus";
import PersonalContract from "./pages/PersonalContract/PersonalContract";
import InsuranceProduct from "./pages/Admin/InsuranceProduct/InsuranceProduct.jsx";
import PremiumManagement from "./pages/Admin/InsuranceProduct/PremiumManagement.jsx";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/contract-manager/create-customer" element={<CreateNewContract />} />
				<Route path="/inforcus" element={<CustomerInformation />} />
				<Route path="/property-information" element={<PropertyInformation />} />
				<Route path="/view-contractdetail" element={<ViewContractDetail />} />
				<Route path="/invoice-management" element={<InvoiceManagement />} />
				<Route path="/contact-manager" element={<ContractManager />} />
				<Route path="/contact-manager/insurance-details" element={<InsuranceDetails />} />
				<Route path="/contact-manager/contract-status" element={<ContractStatus />} />
				<Route path="/personal-contact" element={<PersonalContract />} />
				<Route path="/insurance-manager/insuarance-product" element={<InsuranceProduct />} />
				<Route path="/insurance-manager/preminum-management" element={<PremiumManagement />} />
			</Routes>
		</Router>
	);
}

export default App;
