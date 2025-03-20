// Cấu hình tất cả routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/Login";
import Settings from "@/pages/Admin/Settings";
import TransactionManagement from "@/pages/Admin/TransactionManagement";
import PremiumPaymentTracking from "@/pages/Admin/PremiumPaymentTracking";
import InvoiceManagement from "@/pages/Admin/InvoiceManagement";
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
          {/* <Route path="users" element={<UsersManagement />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
