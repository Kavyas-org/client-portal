import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2f4f7] pt-16 pb-10 text-[#1f4c7c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* BACK TO TOP */}
        <div className="text-center mb-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm flex items-center justify-center gap-2 mx-auto hover:opacity-70 transition"
          >
            Back to Top ↑
          </button>
        </div>

        {/* CONTACT SECTION */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>

            <div className="space-y-3 text-gray-600 text-sm">
              <a
                href="tel:+6582215973"
                className="flex items-center gap-3 hover:text-[#1f4c7c] transition"
              >
                <FaPhoneAlt className="text-base" />
                +6582215973
              </a>

              <a
                href="mailto:Recruitment.team@gammongroupcompanies.com"
                className="flex items-center gap-3 hover:text-[#1f4c7c] transition"
              >
                <FaEnvelope className="text-base" />
Recruitment.team@gammongroupcompanies.com
              </a>
            </div>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Head Office</h3>

            <div className="flex items-start gap-3 text-gray-600 text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Co Reg No: 198001094M <br />
                1 International Business Park
                <br />
                #10-01 The Synergy Singapore 609917
              </p>
            </div>
          </div>

          {/* OTHER OFFICES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Offices</h3>

            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <p>
                22/F, Tower 1, The Quayside<br />
                 77 Hoi Bun Road <br />
Kwun Tong, Kowloon
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <p>
                 
22/F, Tower 1, The Quayside<br />
                 77 Hoi Bun Road <br />
Kwun Tong, Kowloon , Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="mt-14 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* SOCIAL */}
          <div className="flex gap-4 text-[#1f4c7c]">
            <span className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <FaLinkedinIn />
            </span>
            <span className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <FaInstagram />
            </span>
            <span className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <FaYoutube />
            </span>
          </div>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500 text-center md:text-right">
            © 2026 Gammon Group Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
