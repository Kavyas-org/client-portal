import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import Layout from "../../components/admin/Layout";
import toast from "react-hot-toast";

const UserTracking = () => {
  const { id } = useParams();
  const [tracking, setTracking] = useState([]);

  const getUser = async () => {
    try {
      const res = await API.get(`/user/id/${id}`);
      setTracking(res.data.tracking || []);
    } catch {
      toast.error("Failed to load");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (index, value) => {
    const updated = [...tracking];
    updated[index].status = value;
    setTracking(updated);
  };

  const handleSave = async () => {
    try {
      await API.put(`/user/${id}`, {
        tracking: tracking
      });

      toast.success("Tracking updated");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
   <>
  {/* HEADER */}
  <div className="mb-8">
    <h1 className="text-2xl font-semibold text-gray-800">
      Application Tracking
    </h1>
    <p className="text-sm text-gray-500">
      Update and monitor application progress
    </p>
  </div>

  {/* CARD */}
  <div className="bg-white border rounded-xl shadow-sm p-8 max-w-2xl">

    {/* PROGRESS BAR */}
    <div className="mb-8">
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Progress</span>
        <span>
          {
            tracking.filter(s => s.status === "Done").length
          } / {tracking.length}
        </span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-[#1f4c7c] h-2 rounded-full transition-all"
          style={{
            width: `${
              (tracking.filter(s => s.status === "Done").length /
              tracking.length) * 100
            }%`
          }}
        ></div>
      </div>
    </div>

    {/* TIMELINE */}
   <div className="space-y-6">

  {tracking.map((step, index) => {
    const isDone = step.status === "Done";

    return (
      <div key={index} className="relative flex gap-6">

        {/* LEFT LINE */}
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold
            ${isDone ? "bg-green-500" : "bg-gray-300"}
          `}>
            {isDone ? "✓" : index + 1}
          </div>

          {index !== tracking.length - 1 && (
            <div className={`w-[2px] flex-1 mt-1
              ${isDone ? "bg-green-400" : "bg-gray-300"}
            `}></div>
          )}
        </div>

        {/* CARD */}
        <div className="flex-1 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">

          <div className="flex justify-between items-start">

            {/* TEXT */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className={`text-xs mt-1 ${
                isDone ? "text-green-600" : "text-gray-400"
              }`}>
                {isDone ? "Completed" : "Pending"}
              </p>
            </div>

            {/* SELECT */}
            <select
              value={step.status}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              className="border px-3 py-1 rounded-md text-sm bg-gray-50 focus:ring-2 focus:ring-[#1f4c7c]"
            >
              <option>Pending</option>
              <option>Done</option>
            </select>

          </div>

        </div>

      </div>
    );
  })}

</div>

    {/* SAVE BUTTON */}
    <button
      onClick={handleSave}
      className="w-full mt-8 bg-[#1f4c7c] hover:bg-[#163b61] text-white py-3 rounded-lg text-sm font-medium"
    >
      Save Changes
    </button>

  </div>
</>
  );
};

export default UserTracking;