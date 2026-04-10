import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/admin/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/admin/dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen grid md:grid-cols-2">

    {/* LEFT SIDE (FORM) */}
    <div className="flex items-center justify-center bg-white px-6">

      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="flex items-center gap-2">
  <img
    src="\\Logo.png"
    alt="Gammon"
    className="h-12 mb-8 w-auto object-contain"
  />
</div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Login to access the admin dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-xs text-gray-500 font-medium">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 font-medium">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f4c7c]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1f4c7c] text-white py-3 rounded-lg font-semibold hover:bg-[#163b61] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>

    {/* RIGHT SIDE (BRANDING) */}
    <div className="hidden md:flex items-center justify-center bg-[#0f172a] text-white px-10">

      <div className="max-w-md">

        <h2 className="text-3xl font-semibold mb-4">
          Gammon Group Companies
        </h2>

        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Manage applications, track user verification, and control your
          system efficiently through a secure admin dashboard.
        </p>

        {/* FEATURE POINTS */}
        <div className="space-y-4 text-sm">

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 mt-2"></div>
            <p>Secure authentication system</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 mt-2"></div>
            <p>Real-time user tracking updates</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 mt-2"></div>
            <p>Centralized admin control panel</p>
          </div>

        </div>

      </div>

    </div>

  </div>
);
};

export default Login;