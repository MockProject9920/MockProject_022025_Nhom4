import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import List from "./pages/Appraisers/List";
import RequestList from "./pages/Appraisers/RequestList";
import RequestDetail from "./pages/Appraisers/RequestDetail";
import AppraisalReport from "./pages/Appraisers/AppraisalReportList";
import UserManagement from "./pages/UserManagement";
import PaymentInvoice from "./pages/PaymentInvoice";
import ClaimsProcessing from "./pages/ClaimsProcessing";
import ContactManager from "./pages/ContactManager";
import InsuranceProduct from "./pages/InsuranceProduct";
import NewAppraiser from "./pages/Appraisers/NewAppraiser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appraisers/list" element={<List />} />
          <Route path="/appraisers/request-list" element={<RequestList />} />
          <Route path="/appraisers/request-detail" element={<RequestDetail />} />
          <Route path="/appraisers/appraisal-report" element={<AppraisalReport />} />
          <Route path="/appraisers/new" element={<NewAppraiser />} />
          
          {/* Thêm các route mới */}
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/payment-invoice" element={<PaymentInvoice />} />
          <Route path="/claims-processing" element={<ClaimsProcessing />} />
          <Route path="/contact-manager" element={<ContactManager />} />
          <Route path="/insurance-product" element={<InsuranceProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
