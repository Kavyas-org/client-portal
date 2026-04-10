import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { FiHome, FiUserPlus, FiUsers, FiLogOut } from "react-icons/fi";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r flex flex-col justify-between">

        {/* TOP */}
        <div className="p-6">

          {/* LOGO */}
          <div className="flex items-center gap-2">
  <img
    src="\Logo.png"
    alt="Gammon"
    className="h-8 mb-10 w-auto object-contain"
  />
</div>

          {/* NAV */}
          <nav className="space-y-2">

            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive("/admin/dashboard")
                  ? "bg-[#1f4c7c] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiHome /> Dashboard
            </Link>

            <Link
              to="/admin/add-user"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive("/admin/add-user")
                  ? "bg-[#1f4c7c] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiUserPlus /> Add User
            </Link>

<Link  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive("/admin/users")
                  ? "bg-[#1f4c7c] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
to="/admin/users"> 
 <FiUsers /> all Users</Link>

          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-6 border-t">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">

          <h1 className="text-lg font-semibold text-gray-800">
            Admin Dashboard
          </h1>

          <div className="text-sm text-gray-500">
            Welcome, Admin
          </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>

        {/* FOOTER */}
        <div className="bg-white border-t p-3 text-center text-xs text-gray-400">
          © 2026 Gammon Group Companies. All rights reserved.
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;