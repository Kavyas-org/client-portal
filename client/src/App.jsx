import { Routes, Route } from "react-router-dom";

// PUBLIC
import PublicLayout from "./components/public/Layout";
import Home from "./pages/public/Home";
import Verify from "./pages/public/Verify";
import About from "./pages/public/About";
import Business from "./pages/public/Business";
import Sustainability from "./pages/public/Sustainability";
import Careers from "./pages/public/Careers";
import ScrollToTop from "./components/common/ScrollToTop";
// ADMIN
import AdminLayout from "./components/admin/Layout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AddUser from "./pages/admin/AddUser";
import UserDetails from "./pages/admin/UserDetails";
import UserTracking from "./pages/admin/UserTracking";
// PROTECTED
import ProtectedRoute from "./components/common/ProtectedRoute";
import Users from "./pages/admin/Users";

function App() {
  return (

     <>
    <ScrollToTop />
    
    <Routes>

      {/* ================= PUBLIC ================= */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about" element={<About />} />
  <Route path="/business" element={<Business />} />
    <Route path="/sustainability" element={<Sustainability />} />
    <Route path="/careers" element={<Careers />} />


      </Route>

      {/* ================= ADMIN LOGIN ================= */}
      <Route path="/admin/login" element={<Login />} />

      {/* ================= ADMIN PANEL ================= */}
     <Route element={<ProtectedRoute />}>
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="add-user" element={<AddUser />} />
    <Route path="users" element={<Users />} />
    <Route path="user/:id" element={<UserDetails />} />
    <Route path="user/:id/tracking" element={<UserTracking />} />
  </Route>
</Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Home />} />

    </Routes>

    </>
  );
}

export default App;