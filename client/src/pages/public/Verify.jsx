import { useState } from "react";
import API from "../../services/api";
import { FiSearch, FiCheckCircle, FiClock, FiX } from "react-icons/fi";

const Verify = () => {
  const [refId, setRefId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
   if (!refId.trim()) {
  setError("Please enter Reference ID");
  return;
}

    try {
      setLoading(true);
      setError("");
      setUser(null);

      const res = await API.get(`/user/${refId}`);
      setUser(res.data);
    } catch {
      setError("No record found");
    } finally {
      setLoading(false);
    }
  };

  return (
 
  <div className="min-h-screen bg-[#f2f4f7] flex items-center justify-center px-6 py-16">

    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT INFO */}
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Employee Verification Portal
          </h1>

          <p className="text-gray-500 max-w-md">
            Welcome to our secure verification system. Verify your official documents
            and ensure authenticity with our trusted platform.
          </p>
        </div>

        {/* GREEN CARD */}
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500">
          <h3 className="font-semibold text-green-600 mb-1">
            Secure & Real-Time
          </h3>
          <p className="text-sm text-gray-500">
            Data is synced with our HR system. Your information remains confidential and secure.
          </p>
        </div>

        {/* RED CARD */}
        <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-500">
          <h3 className="font-semibold text-red-600 mb-1">
            Beware of Fraudulent Offers
          </h3>
          <p className="text-sm text-gray-500">
            We never ask for fees. Always verify your offer to ensure authenticity.
          </p>
        </div>

      </div>

     {/* RIGHT FORM */}
<div className="bg-white rounded-2xl shadow-lg p-8 relative">

  {/* TOP BORDER (SUBTLE DARK) */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 rounded-t-2xl"></div>

  {/* ICON */}
  <div className="flex justify-center mb-6">
    <div className="bg-gray-100 p-3 rounded-full">
      <FiSearch className="text-gray-700 text-xl" />
    </div>
  </div>

  {/* INFO BOX (NEUTRAL) */}
  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded mb-6 text-sm text-gray-600">
    Enter your Reference ID or Passport Number to verify your document status.
  </div>

  {/* INPUT */}
  <label className="text-xs text-gray-500 font-semibold">
    REFERENCE ID / PASSPORT NO
  </label>

  <input
    type="text"
    placeholder="Ex: CG-12345 or AB1234567"
    value={refId}
    onChange={(e) => setRefId(e.target.value)}
    className="w-full border mt-2 p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-700"
  />

  {/* BUTTON (PRIMARY ACTION) */}
  <button
    onClick={handleSearch}
    className="w-full mt-6 bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
  >
    <FiSearch /> VERIFY DOCUMENT
  </button>

  {/* ERROR */}
  {error && (
    <p className="text-center text-red-500 mt-4">{error}</p>
  )}

  {/* LOADING */}
  {loading && (
    <p className="text-center text-gray-400 mt-4">Checking...</p>
  )}

</div>

    </div>

      {/* RESULT MODAL */}
      {user && (
        <div 
        onClick={() => setUser(null)}
        className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div 
onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden">

            {/* TOP BAR */}
            <div className="bg-yellow-500 h-20 rounded-b-3xl"></div>

            {/* CLOSE */}
            <button
              onClick={() => setUser(null)}
              className="absolute top-3 right-3 text-gray-600"
            >
              <FiX size={20} />
            </button>

            {/* PROFILE */}
            <div className="flex flex-col items-center -mt-12 px-6">

              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${user.image}`}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />

              <h2 className="mt-3 font-bold text-lg text-center">
                {user.name}
              </h2>

              <span className="text-xs text-gray-400">
                {user.passport}
              </span>

              {/* VERIFIED BADGE */}
              <div className="mt-3 bg-green-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                <FiCheckCircle /> Officially Verified
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-6 space-y-4">

              <div className="grid grid-cols-2 gap-4 text-sm">

                <div>
                  <p className="text-gray-400">Reference ID</p>
                  <p className="font-medium">{user.refId}</p>
                </div>

                <div>
                  <p className="text-gray-400">Status</p>
                  <p className="font-medium">{user.status}</p>
                </div>

              </div>

              {/* TRACKING */}
             <div className="mt-6">
  <h3 className="font-semibold mb-4 text-center">
    Application Tracking
  </h3>

  <div className="relative pl-6">

    {user.tracking?.map((step, index) => (
      <div key={index} className="mb-6 flex items-start gap-3">

        {/* LINE */}
        {index !== user.tracking.length - 1 && (
          <span className="absolute left-2 top-6 w-[2px] h-full bg-gray-200"></span>
        )}

        {/* ICON */}
        <div className={`w-5 h-5 rounded-full flex items-center justify-center
          ${step.status === "Done" ? "bg-green-500" : "bg-yellow-400"}
        `}>
          {step.status === "Done" ? (
            <span className="text-white text-xs">✓</span>
          ) : (
            <span className="text-white text-xs">⏳</span>
          )}
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <p className="text-sm font-medium">{step.title}</p>

          <p className={`text-xs mt-1
            ${step.status === "Done" ? "text-green-500" : "text-yellow-500"}
          `}>
            {step.status}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>

              {/* CLOSE BTN */}
              <button
                onClick={() => setUser(null)}
                className="w-full bg-gray-800 text-white py-2 rounded-lg mt-4"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Verify;