import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />; // ✅ THIS FIXES EVERYTHING
};

export default ProtectedRoute;