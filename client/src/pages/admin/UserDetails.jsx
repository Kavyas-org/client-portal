import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import Layout from "../../components/admin/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await API.get(`/user/id/${id}`);
      setUser(res.data);
    } catch {
      toast.error("User not found");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // const handleTrackingChange = (index, value) => {
  //   const updated = [...user.tracking];
  //   updated[index].status = value;
  //   setUser({ ...user, tracking: updated });
  // };

  const handleSave = async () => {
    try {
      await API.put(`/user/${id}`, {
        name: user.name,
        passport: user.passport,
        refId: user.refId,
        status: user.status,
        tracking: user.tracking,
      });

      toast.success("Updated successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  if (!user) return <div className="p-6">Loading...</div>;

  return (
   <>
  {/* HEADER */}
  <div className="flex justify-between items-center mb-8">

    <div>
      <h1 className="text-2xl font-semibold text-gray-800">
        User Details
      </h1>
      <p className="text-sm text-gray-500">
        View and manage user information
      </p>
    </div>

    <div className="flex gap-3">

      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="bg-[#1f4c7c] text-white px-5 py-2 rounded-lg text-sm"
        >
          Edit User
        </button>
      ) : (
        <button
          onClick={() => setEditMode(false)}
          className="text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      )}

      <button
        onClick={() => navigate(`/admin/user/${id}/tracking`)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
      >
        Manage Tracking
      </button>

    </div>

  </div>

  {/* CARD */}
  <div className="bg-white border rounded-xl shadow-sm p-8 max-w-3xl space-y-8">

    {/* USER PROFILE */}
    <div className="flex items-center gap-4">
      <img
        src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${user.image}`}
        className="w-20 h-20 rounded-full object-cover border"
      />

      <div>
        <h2 className="font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.passport}</p>
      </div>
    </div>

    {/* BASIC INFO */}
    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="text-xs text-gray-500 font-semibold">NAME</label>
        <input
          value={user.name}
          disabled={!editMode}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
          className="w-full mt-2 border p-3 rounded-lg bg-gray-50 disabled:opacity-70 focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>

      <div>
        <label className="text-xs text-gray-500 font-semibold">PASSPORT</label>
        <input
          value={user.passport}
          disabled={!editMode}
          onChange={(e) =>
            setUser({ ...user, passport: e.target.value })
          }
          className="w-full mt-2 border p-3 rounded-lg bg-gray-50 disabled:opacity-70 focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>

      <div>
        <label className="text-xs text-gray-500 font-semibold">REFERENCE ID</label>
        <input
          value={user.refId}
          disabled={!editMode}
          onChange={(e) =>
            setUser({ ...user, refId: e.target.value })
          }
          className="w-full mt-2 border p-3 rounded-lg bg-gray-50 disabled:opacity-70 focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>

      <div>
        <label className="text-xs text-gray-500 font-semibold">STATUS</label>
        <select
          value={user.status}
          disabled={!editMode}
          onChange={(e) =>
            setUser({ ...user, status: e.target.value })
          }
          className="w-full mt-2 border p-3 rounded-lg bg-gray-50 disabled:opacity-70 focus:ring-2 focus:ring-[#1f4c7c]"
        >
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

    </div>

    {/* TRACKING */}
    {/* <div>
  <h3 className="text-sm font-semibold text-gray-700 mb-6">
    Application Tracking
  </h3>

  <div className="space-y-6">

    {user.tracking?.map((step, index) => (
      <div key={index} className="flex items-start gap-4">

        <div className="flex flex-col items-center">
          <div className={`w-4 h-4 rounded-full
            ${step.status === "Done" ? "bg-green-500" : "bg-gray-300"}
          `}></div>

          {index !== user.tracking.length - 1 && (
            <div className="w-[2px] h-10 bg-gray-300"></div>
          )}
        </div>

        <div className="flex-1 bg-white border rounded-lg p-4">

          <div className="flex justify-between items-center">

            <p className="text-sm font-medium text-gray-800">
              {step.title}
            </p>

            <select
              value={step.status}
              disabled={!editMode}
              onChange={(e) =>
                handleTrackingChange(index, e.target.value)
              }
              className="border px-2 py-1 rounded text-sm"
            >
              <option>Pending</option>
              <option>Done</option>
            </select>

          </div>

        </div>

      </div>
    ))}

  </div>
</div> */}

    {/* SAVE BUTTON */}
    {editMode && (
      <button
        onClick={handleSave}
        className="bg-[#1f4c7c] hover:bg-[#163b61] text-white px-6 py-2 rounded-lg text-sm"
      >
        Save Changes
      </button>
    )}

  </div>
</>
  );
};

export default UserDetails;