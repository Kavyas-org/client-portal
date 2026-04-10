import { useState } from "react";
import API from "../../services/api";
import Layout from "../../components/admin/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    refId: "",
    passport: "",
    status: "Pending",
    image: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("refId", form.refId);
      formData.append("passport", form.passport);
      formData.append("status", form.status);
      formData.append("image", form.image);

      await API.post("/user", formData);

      toast.success("User added");

      navigate("/admin/dashboard");

    } catch (err) {
      toast.error("Failed to add user");
    }
  };

  return (

<>
  {/* HEADER */}
  <div className="mb-8">
    <h1 className="text-2xl font-semibold text-gray-800">
      Add New User
    </h1>
    <p className="text-sm text-gray-500">
      Create and manage user verification records
    </p>
  </div>

  {/* FORM CARD */}
  <div className="bg-white border rounded-xl shadow-sm p-8 max-w-2xl">

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* NAME */}
      <div>
        <label className="text-xs font-semibold text-gray-500">
          FULL NAME
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          onChange={handleChange}
          className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>

      {/* REF ID */}
      <div>
        <label className="text-xs font-semibold text-gray-500">
          REFERENCE ID
        </label>
        <input
          type="text"
          name="refId"
          placeholder="Enter reference ID"
          onChange={handleChange}
          className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>

      {/* PASSPORT */}
      <div>
        <label className="text-xs font-semibold text-gray-500">
          PASSPORT NUMBER
        </label>
        <input
          type="text"
          name="passport"
          placeholder="Enter passport number"
          onChange={handleChange}
          className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
        />
      </div>


 <div>
        <label className="text-xs font-semibold text-gray-500">
         Date of Birth
        </label>
      <input
  type="date"
  name="dob"
  onChange={handleChange}
  className="border p-2 rounded w-full"
/>
      </div>

 <div>
        <label className="text-xs font-semibold text-gray-500">
        User Salary
        </label>
<input
  type="number"
  name="salary"
  placeholder="Salary"
  onChange={handleChange}
  className="border p-2 rounded w-full"
/>

      </div>


      {/* IMAGE */}
      <div>
        <label className="text-xs font-semibold text-gray-500">
          UPLOAD IMAGE
        </label>
        <input
          type="file"
          onChange={handleFile}
          className="w-full mt-2 border p-2 rounded-lg bg-gray-50"
        />
      </div>

      {/* STATUS */}
      <div>
        <label className="text-xs font-semibold text-gray-500">
          STATUS
        </label>
        <select
          name="status"
          onChange={handleChange}
          className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
        >
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4 pt-4">

        <button
          type="submit"
          className="bg-[#1f4c7c] hover:bg-[#163b61] text-white px-6 py-2 rounded-lg text-sm"
        >
          Save User
        </button>

        <button
          type="button"
          onClick={() => navigate("/admin/dashboard")}
          className="text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>

      </div>

    </form>

  </div>
</>

);
};

export default AddUser;