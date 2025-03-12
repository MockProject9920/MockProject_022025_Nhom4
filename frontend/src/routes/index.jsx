import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import InvoiceManagement from "../pages/Admin/InvoiceManagement";
import TransactionManagement from "../pages/Admin/TransactionManagement";
import Insurance from "../pages/User/Insurance";

const routes = [
  {
    path: "/user/insurance",
    component: Insurance,
    layout: UserLayout,
  },
  {
    path: "/admin/transactionManagement",
    component: TransactionManagement,
    layout: AdminLayout,
  },
  {
    path: "/admin/invoiceManagement",
    component: InvoiceManagement,
    layout: AdminLayout,
  },
];

export default routes;
