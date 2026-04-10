import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2f4f7] pt-16 pb-10 text-[#1f4c7c]">

      <div className="max-w-7xl mx-auto px-6">

        {/* BACK TO TOP */}
        <div className="text-center mb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm flex items-center justify-center gap-2 mx-auto"
          >
            Back to Top ↑
          </button>
        </div>

        {/* LINKS GRID */}
        <div className="grid md:grid-cols-6 gap-8 text-sm">

          {/* COLUMN */}
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Corporate Profile</li>
              <li>Company History</li>
              <li>Core Values</li>
              <li>Management</li>
              <li>Code of Conduct</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Our Businesses</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Regions Coverage</li>
              <li>Business Categories</li>
              <li>Partners</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Projects</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Overview</li>
              <li>Residential Developments</li>
              <li>Commercial Developments</li>
              <li>Retail & Hotel</li>
              <li>Industrial</li>
              <li>Infrastructure</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Sustainability</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Strategy</li>
              <li>Reports</li>
              <li>Highlights</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Innovation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Pioneering Change</li>
              <li>Digital Future</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Careers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Overview</li>
              <li>Development</li>
              <li>Life at Company</li>
              <li>Meet Team</li>
              <li>Work with Us</li>
            </ul>
          </div>

        </div>

        {/* SOCIAL + LINKS */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* SOCIAL */}
          <div className="flex gap-5 text-xl text-[#1f4c7c]">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>

          {/* SMALL LINKS */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span>Careers</span>
            <span>Contact Us</span>
            <span>Sitemap</span>
            <span>Disclaimer</span>
            <span>Privacy Policy</span>
          </div>

        </div>

        {/* COPYRIGHT + LOGOS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-gray-500">
            © 2026 Gammon Group Companies. All rights reserved.
          </p>

          {/* CERTIFICATION LOGOS */}
          <div className="flex flex-wrap items-center gap-6">

            <img src="/extra-images/image-4.png" className="h-20 rounded-full" />
            <img src="/extra-images/image-5.png" className="h-20 rounded-md" />
            <img src="/extra-images/image-6.png" className="h-20 rounded-full" />
            <img src="/extra-images/image-7.png" className="h-20 rounded-full" />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;