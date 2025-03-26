import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/Login";
import Settings from "@/pages/Admin/Settings";
import TransactionManagement from "@/pages/Admin/TransactionManagement";
import PremiumPaymentTracking from "@/pages/Admin/PremiumPaymentTracking";
import InvoiceManagement from "@/pages/Admin/InvoiceManagement";
import Insurance from "@/pages/Users/Insurance";
import MakePayment from "@/pages/Customers/MakePayment";
import PaymentPage from "@/pages/Customers/PaymentPage";
import PaymentHistoryPage from "@/pages/Customers/PaymentHistoryPage";
import UserLayout from "@/layouts/UserLayout";
import PremiumPaymentDetails from "@/components/PremiumPaymentDetails";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route
            path="/admin/premiumPaymentTracking"
            element={<PremiumPaymentTracking />}
          />
          <Route
            path="/admin/transactionManagement"
            element={<TransactionManagement />}
          />
          <Route
            path="/admin/invoiceManagement"
            element={<InvoiceManagement />}
          />
          <Route
            path="/admin/PremiumPaymentDetails"
            element={<PremiumPaymentDetails />}
          />
          {/* <Route path="users" element={<UsersManagement />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/users" element={<UserLayout />}>
          <Route path="insurance/paymentInformation" element={<Insurance />} />
          <Route path="paymentPage" element={<PaymentPage />} />
          <Route path="PaymentHistoryPage" element={<PaymentHistoryPage />} />
          <Route path="MakePayment" element={<MakePayment />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
