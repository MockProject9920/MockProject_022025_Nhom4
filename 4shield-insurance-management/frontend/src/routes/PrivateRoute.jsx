import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("token"); // Kiểm tra token đăng nhập

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
