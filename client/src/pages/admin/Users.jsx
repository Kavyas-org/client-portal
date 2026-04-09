import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 8;

  const getUsers = async () => {
    const res = await API.get("/user");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 🔍 FILTER
  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.refId.toLowerCase().includes(search.toLowerCase()) ||
      u.passport.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" ? true : u.status === status;

    return matchSearch && matchStatus;
  });

  // 📄 PAGINATION
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filtered.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          All Users
        </h1>

        <button
          onClick={() => navigate("/admin/add-user")}
          className="bg-[#1f4c7c] text-white px-4 py-2 rounded-lg text-sm"
        >
          + Add User
        </button>
      </div>

      {/* FILTERS */}
      <div className="bg-white border rounded-xl p-5 mb-6 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search by name, refId, passport..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded-lg w-40"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">User</th>
              <th>Ref ID</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {paginatedUsers.map((u) => (
              <tr key={u._id} className="border-t hover:bg-gray-50">

                <td className="p-4 flex items-center gap-3">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${u.image}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-xs text-gray-400">{u.passport}</p>
                  </div>
                </td>

                <td className="font-mono">{u.refId}</td>

                <td>
                  <span className={`px-2 py-1 rounded-full text-xs
                    ${u.status === "Approved" && "bg-green-100 text-green-600"}
                    ${u.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                    ${u.status === "Rejected" && "bg-red-100 text-red-600"}
                  `}>
                    {u.status}
                  </span>
                </td>

                <td className="text-center">
                  <button
                    onClick={() => navigate(`/admin/user/${u._id}`)}
                    className="text-[#1f4c7c] text-sm"
                  >
                    View
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 gap-2">

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-[#1f4c7c] text-white"
                : "bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

      </div>
    </>
  );
};

export default Users;