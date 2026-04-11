import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
       <div className="flex items-center gap-2">
  <img
    src="\Logo.png"
    alt="Gammon"
    className="h-8 w-auto object-contain"
  />
</div>

        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 text-gray-500"
        >
          <span className="text-sm tracking-widest">MENU</span>

          {/* LINES */}
          <div className="flex flex-col gap-1">
            <span className="w-6 h-[2px] bg-gray-600"></span>
            <span className="w-6 h-[2px] bg-gray-600"></span>
                        <span className="w-4 h-[2px] bg-gray-600"></span>
          </div>
        </button>

      </header>

      {/* FULLSCREEN MENU */}
     <div
  className={`fixed inset-0 bg-[#1f4c7c] z-50 transition-all duration-700 ${
    open ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>

  {/* SLIDE CONTAINER */}
  <div
    className={`absolute inset-0 transform transition-all duration-700 ${
      open ? "translate-y-0" : "-translate-y-full"
    }`}
  >

    {/* TOP BAR */}
    <div className="flex justify-between items-center px-6 md:px-12 py-6">

      <div className="flex items-center gap-2 text-white">
        <div className="w-8 h-8 bg-red-600 rounded-sm"></div>
        <h1 className="text-xl font-semibold">Gammon</h1>
      </div>

      <button
        onClick={() => setOpen(false)}
        className="text-white text-3xl"
      >
        ✕
      </button>

    </div>

    {/* MENU LINKS */}
    <div className="absolute right-12 top-1/2 -translate-y-1/2 text-right space-y-6">

      {[
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/about" },
  { name: "OUR BUSINESSES", link: "/business" },
  { name: "SUSTAINABILITY", link: "/sustainability" },
  { name: "CAREERS", link: "/careers" },
  { name: "VERIFY OFFER LETTER", link: "/verify" },
].map((item, i) => (
  <Link
    key={i}
    to={item.link}
    onClick={() => setOpen(false)}
    className={`block text-3xl md:text-5xl font-semibold text-white hover:text-red-400 transition-all duration-500 ${
      open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`}
    style={{
      transitionDelay: open ? `${i * 100}ms` : "0ms",
    }}
  >
    {item.name}
  </Link>
))}

    </div>

  </div>
</div>
    </>
  );
};

export default Navbar;