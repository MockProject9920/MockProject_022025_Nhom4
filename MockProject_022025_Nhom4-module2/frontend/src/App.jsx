import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import List from "./pages/Appraisers/List";
import RequestList from "./pages/Appraisers/RequestList";
import RequestDetail from "./pages/Appraisers/RequestDetail";
import AppraisalReport from "./pages/Appraisers/AppraisalReportList";
import UserManagement from "./pages/UserManagement";
import PaymentInvoice from "./pages/PaymentInvoice";
import ClaimsProcessing from "./pages/ClaimsProcessing";
import ContactManager from "./pages/ContactManager";
import InsuranceProduct from "./pages/InsuranceService/PaymentInformation";
import NewAppraiser from "./pages/Appraisers/NewAppraiser";
import Insurance from "./pages/InsuranceService/Insurance.jsx"; 
import AssetInformation from "./pages/InsuranceService/AssetInformation";
import PersonalInformation from "./pages/InsuranceService/PersonalInformation";
import RegisteredInsuranceList from "./pages/InsuranceService/RegisteredList";
import PaymentInformation from "./pages/InsuranceService/PaymentInformation"; // Import PaymentInformation
import PropertyList from "./pages/Properties/PropertyList"; // Import PropertyList
import PropertyNew from "./pages/Properties/PropertyNew"; // Import PropertyNew
import AssessmentReports from "./pages/Appraisers/AssessmentReports"; // Import AssessmentReports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Insurance />} /> {/* Trang chính */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appraisers/list" element={<List />} />
          <Route path="appraisers/request-list" element={<RequestList />} />
          <Route path="appraisers/request-detail" element={<RequestDetail />} />
          <Route
            path="appraisers/appraisal-report"
            element={<AppraisalReport />}
          />
          <Route path="appraisers/new" element={<NewAppraiser />} />
          {/* Thêm các route mới */}
          <Route path="user-management" element={<UserManagement />} />
          <Route path="payment-invoice" element={<PaymentInvoice />} />
          <Route path="claims-processing" element={<ClaimsProcessing />} />
          <Route path="contact-manager" element={<ContactManager />} />
          <Route path="insurance-product" element={<InsuranceProduct />} />
          
          {/* Insurance Routes */}
          <Route path="insurance">
            <Route index element={<Insurance />} />
            <Route path="asset-information" element={<AssetInformation />} />
            <Route
              path="personal-information"
              element={<PersonalInformation />}
            />
            <Route
              path="registered-insurance-list"
              element={<RegisteredInsuranceList />}
            />
            <Route
              path="payment-information"
              element={<PaymentInformation />} // Sử dụng PaymentInformation
            />
          </Route>
          {/* Thêm route cho PropertyList */}
          <Route path="properties" element={<PropertyList />} />
          <Route path="properties/new" element={<PropertyNew />} /> {/* Thêm route cho PropertyNew */}
          <Route path="appraisers/assessment-reports" element={<AssessmentReports />} /> {/* Thêm route cho AssessmentReports */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;