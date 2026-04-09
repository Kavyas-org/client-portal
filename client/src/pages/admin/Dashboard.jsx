import { useEffect, useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FiEye, FiTrash2 } from "react-icons/fi";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await API.get("/user");
      setUsers(res.data);
    } catch (err) {
      toast.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // stats
  const total = users.length;
  const approved = users.filter(u => u.status === "Approved").length;
  const pending = users.filter(u => u.status === "Pending").length;

  // 🔥 NEW: recent users
  const recentUsers = [...users].reverse().slice(0, 10);

  return (
    <>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500">
            Monitor users and application status
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/add-user")}
          className="bg-[#1f4c7c] hover:bg-[#163b61] text-white px-5 py-2 rounded-lg text-sm shadow-sm"
        >
          + Add User
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-3xl font-semibold text-[#1f4c7c] mt-2">{total}</h2>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Approved</p>
          <h2 className="text-3xl font-semibold text-green-600 mt-2">{approved}</h2>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-3xl font-semibold text-yellow-500 mt-2">{pending}</h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

        {/* 🔥 UPDATED HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">

          <h3 className="text-sm font-semibold text-gray-700">
            Recent Users
          </h3>

          <button
            onClick={() => navigate("/admin/users")}
            className="bg-[#1f4c7c] hover:bg-[#163b61] text-white px-5 py-2 rounded-lg text-sm shadow-sm"
          >
            View All
          </button>

        </div>

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">User</th>
              <th className="text-left">Ref ID</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {/* LOADING */}
            {loading && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-400">
                  Loading users...
                </td>
              </tr>
            )}

            {/* NO DATA */}
            {!loading && users.length === 0 && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-400">
                  No users found
                </td>
              </tr>
            )}

            {/* 🔥 UPDATED DATA (recentUsers) */}
            {!loading && recentUsers.map((u) => (
              <tr key={u._id} className="border-t hover:bg-gray-50 transition">

                {/* USER */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${u.image}`}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{u.name}</p>
                    <p className="text-xs text-gray-400">{u.passport}</p>
                  </div>
                </td>

                {/* REF */}
                <td className="font-mono text-gray-600">{u.refId}</td>

                {/* STATUS */}
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${u.status === "Approved" && "bg-green-100 text-green-600"}
                    ${u.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                    ${u.status === "Rejected" && "bg-red-100 text-red-600"}
                  `}>
                    {u.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="text-center">
                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() => navigate(`/admin/user/${u._id}`)}
                      className="p-2 rounded-md hover:bg-gray-100 text-[#1f4c7c]"
                    >
                      <FiEye size={18} />
                    </button>

                    <button
                      onClick={async () => {
                        if (!window.confirm("Delete this user?")) return;
                        await API.delete(`/user/${u._id}`);
                        toast.success("User deleted");
                        getUsers();
                      }}
                      className="p-2 rounded-md hover:bg-red-50 text-red-500"
                    >
                      <FiTrash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </>
  );
};

export default Dashboard;