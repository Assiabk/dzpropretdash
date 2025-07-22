import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cardBackground from "../assets/cardbackgroundimage.jpg";
import logo from "../assets/logo.png";
import propertyStatus from "../assets/propertystatus.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const defaultPhotoURL =
    "https://i.pinimg.com/1200x/f3/d6/35/f3d63548db2633e513e312cb33c41239.jpg";

  const {
    photoURL = defaultPhotoURL,
    name = "—",
    role = "Certified Notary",
    dob = "—",
    expiry = "—",
    phone = "—",
    email = "—",
  } = user || {};

  useEffect(() => {
    if (user && location.state?.scrollTo === "property-status") {
      const scrollToSection = () => {
        const section = document.getElementById("property-status");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      // Give time for full render before scrolling
      const timeout = setTimeout(() => {
        requestAnimationFrame(scrollToSection);
      }, 500); // increase delay a bit to ensure painting is complete
  
      return () => clearTimeout(timeout);
    }
  }, [location, user]);
  

  return (
    <div className="pt-40 px-4 space-y-24 pb-20">
      {/* Notary Control Panel */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-lg rounded-3xl overflow-hidden border-t-[8px] border-[#008562]">
        {/* Left side (Info) */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#00a67c] to-[#008562] text-white flex flex-col justify-center px-8 py-16">
          <h2 className="text-lg font-semibold opacity-90 mb-2">
            Electronic documentation platform
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Notary public<br />Control Panel
          </h1>
          <p className="max-w-md opacity-90 mb-8 leading-relaxed">
            Say goodbye to paper contracts and hello to seamless digital property transactions 
            with our innovative electronic system.
          </p>
          <button className="w-36 bg-white text-[#008562] font-semibold py-2 rounded-full shadow hover:opacity-90 transition">
            Services
          </button>
        </div>

        {/* Right side (Card) */}
        <div className="w-full lg:w-1/2 relative p-6 lg:p-12 bg-white rounded-tr-3xl rounded-br-3xl">
          <div className="relative z-10 pt-6 flex flex-col items-center">
            <img
              src={photoURL}
              alt={name}
              className="w-32 h-40 object-cover rounded-xl border-4 border-white shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">{name}</h3>
            <span className="mt-2 px-3 py-1 bg-[#00a67c]/20 text-[#008562] text-sm font-medium rounded-full">
              {role}
            </span>

            <div className="mt-6 flex gap-4 w-full">
            <button
  onClick={() => navigate("/my-account")}
  className="flex-1 bg-[#008562] text-white py-2 rounded-lg font-medium shadow hover:opacity-90 transition"
>
  My Account
</button>

              <button className="flex-1 bg-[#00a67c]/20 text-[#008562] py-2 rounded-lg font-medium shadow hover:bg-[#00a67c]/10 transition">
                My Appointment
              </button>
            </div>
          </div>

          {/* Notary Card */}
          <div
            className="mt-10 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative"
            style={{
              backgroundImage: `url(${cardBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-between items-center px-6 pt-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <div className="text-xs font-medium text-black leading-tight">
                  <p>DZ.PROPERTY</p>
                  <p>DIGITAL SYSTEM</p>
                </div>
              </div>
              <div className="text-black font-bold text-sm">NOTARY CARD</div>
            </div>

            <div className="flex px-6 pb-6 pt-2 items-center">
              <div className="flex-shrink-0">
                <img
                  src={photoURL}
                  alt="Card ID"
                  className="w-20 h-28 rounded-xl object-cover border border-white shadow-md"
                />
              </div>

              <div className="ml-6 text-sm text-black space-y-2">
                <div>
                  <p className="font-medium">NAME</p>
                  <p className="uppercase">{name}</p>
                </div>
                <div>
                  <p className="font-medium">D.O.B</p>
                  <p>{dob}</p>
                </div>
                <div>
                  <p className="font-medium">ID</p>
                  <div className="flex items-center gap-2">
                    <span className="tracking-widest">•••• ••••</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.875 9.6a4.875 4.875 0 11-7.75 0 4.875 4.875 0 017.75 0zM10 1.5C4.5 1.5 0 8 0 8s4.5 6.5 10 6.5S20 8 20 8s-4.5-6.5-10-6.5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium">EXPIRE DATE</p>
                  <p>{expiry}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-3 text-gray-700 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#008562]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4v16h20V4H2zm18 2l-8 5-8-5h16zM4 18V8l8 5 8-5v10H4z" />
              </svg>
              <span>{email}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#008562]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.18a2 2 0 011.79 1.106l1.36 2.72a2 2 0 01-.492 2.133l-1.27 1.27a16.022 16.022 0 006.586 6.587l1.27-1.27a2 2 0 012.133-.492l2.72 1.36A2 2 0 0119 17.82V21a2 2 0 01-2 2h-1C8.82 23 1 15.18 1 5V5z" />
              </svg>
              <span>{phone}</span>
            </div>
          </div>

          {/* Settings Button */}
          <button className="absolute bottom-6 right-6 bg-white border border-gray-200 p-2 pl-3 pr-4 rounded-lg inline-flex items-center shadow hover:bg-gray-50 transition">
            <svg className="w-5 h-5 text-[#008562] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046a1 1 0 10-2.6 0l-.1.5a6.97 6.97 0 00-1.75.68l-.45-.27a1 1 0 00-1 .45l-.6 1a1 1 0 00.3 1.32l.4.25a6.992 6.992 0 000 1.36l-.4.25a1 1 0 00-.3 1.32l.6 1a1 1 0 001 .45l.45-.27a6.97 6.97 0 001.75.68l.1.5a1 1 0 002.6 0l.1-.5a6.97 6.97 0 001.75-.68l.45.27a1 1 0 001-.45l.6-1a1 1 0 00-.3-1.32l-.4-.25a6.992 6.992 0 000-1.36l.4-.25a1 1 0 00.3-1.32l-.6-1a1 1 0 00-1-.45l-.45.27a6.97 6.97 0 00-1.75-.68l-.1-.5zM10 13a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            <span className="text-[#008562] font-medium text-sm">Settings</span>
          </button>
        </div>
      </div>

      {/* Green Paragraph + Property Section */}
      <div className="max-w-6xl mx-auto space-y-6 text-center md:text-left">
        <p className="text-lg font-medium text-[#006633] px-4">
          A public notary is authorized to: consult the accurate legal status of real estate, access official documents of the contract holders, and draft and transmit contracts electronically.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#006633] mb-4">
              Property Status Overview
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Instantly see the latest updates on this property in stunning digital detail,
              explore the property's correct position, and get instant updates—all with a simple scan.
            </p>
            <button className="bg-[#008562] hover:bg-[#006e50] text-white px-6 py-3 rounded-full font-semibold shadow inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 4v2h14V4H5zm0 4v2h14V8H5zm0 4v2h14v-2H5zm0 4v2h14v-2H5z" />
              </svg>
              Scan Card to View
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={propertyStatus}
              alt="Property Overview"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Government Services Section */}
      <div className="max-w-6xl mx-auto px-4" id="property-status">
        <section className="mb-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Government services for document verification
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Digitalization */}
            <div className="rounded-xl p-6 bg-orange-50 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Ministry of Digitalization and Statistics
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Economic Information Systems
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>

            {/* Justice */}
            <div className="rounded-xl p-6 bg-indigo-100 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Ministry of Justice</h2>
              <p className="text-sm text-gray-600 mb-4">Verification of judicial record</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>

            {/* Finance */}
            <div className="rounded-xl p-6 bg-blue-100 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Ministry of Finance</h2>
              <p className="text-sm text-gray-600 mb-4">Verification of financial and tax status</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>

            {/* Interior */}
            <div className="rounded-xl p-6 bg-teal-100 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Ministry of the Interior and Local Authorities
              </h2>
              <p className="text-sm text-gray-600 mb-4">Verification of identity and residency</p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>

            {/* Housing */}
            <div className="rounded-xl p-6 bg-rose-100 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Ministry of Housing and Urban Planning</h2>
              <p className="text-sm text-gray-600 mb-4">Verification of property ownership</p>
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>

            {/* Agriculture */}
            <div className="rounded-xl p-6 bg-purple-100 shadow hover:shadow-md transition">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Ministry of Agriculture and Rural Development</h2>
              <p className="text-sm text-gray-600 mb-4">To verify agricultural tax obligations</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 10-1.4 1.4l4.3 4.3 1.4-1.4-4.3-4.3zM8 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                Check
              </button>
            </div>
          </div>
        </section>
        {/* Send Contracts Section */}
<div className="max-w-6xl mx-auto border-2 border-[#008562] bg-white rounded-3xl px-6 py-12 mt-12 shadow-lg">
  <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 leading-snug">
    Sending contracts to the Registration and <br />
    <span className="block mt-1">
      Stamp Inspectorate or the Real Estate Registry
    </span>
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 px-4">
    <button
      onClick={() => navigate("/send-documents-registration")}
      className="w-full md:w-auto bg-white text-[#008562] border-2 border-[#008562] hover:bg-[#008562] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm"
    >
      Send Documents to Registration & Stamp Inspectorate
    </button>
    <button
      onClick={() => navigate("/send-documents-real-estate")}
      className="w-full md:w-auto bg-[#008562] hover:bg-[#006e50] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm"
    >
      Sending contracts to the Real Estate Registry
    </button>
  </div>
</div>

      </div>

      <Footer />
    </div>
  );
};

export default Profile;