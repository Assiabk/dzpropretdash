import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiHome,
  FiHeart,
  FiCalendar,
  FiCheckCircle,
  FiEye,
  FiCheck,
  FiSettings,
} from "react-icons/fi";
import notaryCardBg from "../assets/cardbackgroundimage.jpg";
import logo from "../assets/logo.png";

const MyAccount = () => {
  const name = "ELHAMZA Mouhamed";
  const dob = "10/12/2024";
  const expiry = "10/12/2025";
  const photoURL =
    "https://i.pinimg.com/1200x/f3/d6/35/f3d63548db2633e513e312cb33c41239.jpg";

  return (
    <>
      <Navbar />
      <section className="bg-[#f8f9fa] min-h-screen mt-6 pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 space-y-6 mt-50">
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold text-[#004080] mb-4">
                Quick Actions
              </h2>
              <ul className="space-y-4 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <FiHome className="text-[#006b4d]" />
                  My contract
                </li>
                <li className="flex items-center gap-2">
                  <FiHeart className="text-[#006b4d]" />
                  Favorites
                </li>
                <li className="flex items-center gap-2">
                  <FiCalendar className="text-[#006b4d]" />
                  Appointments
                </li>
              </ul>
            </div>

            {/* Notary Card */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative"
              style={{
                backgroundImage: `url(${notaryCardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-between items-center px-6 pt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <div className="text-xs font-medium text-black leading-tight">
                    <p>DZ.PROPERTY</p>
                    <p>DIGITAL SYSTEM</p>
                  </div>
                </div>
                <div className="text-black font-bold text-sm">NOTARY CARD</div>
              </div>

              <div className="flex px-6 pb-6 pt-2 items-center">
                <img
                  src={photoURL}
                  alt="Card ID"
                  className="w-20 h-28 rounded-xl object-cover border border-white shadow-md"
                />
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
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
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
          </div>

          {/* RIGHT SIDE: Main Info */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Identity Verification */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">
                  Identity Verification
                </h1>
                <div className="flex gap-3">
                  <button className="bg-[#007bff] hover:bg-[#006fe6] text-white px-4 py-2 rounded-lg font-semibold">
                    Edit Profile
                  </button>
                  <button className="bg-[#198754] hover:bg-[#157347] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                    <FiSettings className="text-lg" />
                    Settings
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Identification number
                  </label>
                  <input
                    type="text"
                    value="AB-12345-XY"
                    readOnly
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div />
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    value="MOHAMMED EL AMINE"
                    readOnly
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    First name
                  </label>
                  <input
                    type="text"
                    value="ELHAMZA"
                    readOnly
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Date of birth
                  </label>
                  <input
                    type="text"
                    value="14/09/1992"
                    readOnly
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Nationality
                  </label>
                  <input
                    type="text"
                    value="Algerian"
                    readOnly
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#198754] hover:bg-[#157347] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <FiCheck className="text-lg" />
                  Check
                </button>
              </div>
            </div>

            {/* My Contract */}
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#004080]">
                  My Contract
                </h2>
                <FiEye className="text-[#4f46e5]" size={20} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border rounded-xl p-4 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Contract"
                    className="rounded-xl mb-3 w-full h-40 object-cover"
                  />
                  <p className="font-semibold">Sale Contract</p>
                  <p className="text-sm text-gray-500">Haytem Boulehbale</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                    <FiCalendar /> Under review
                    <span className="ml-auto text-gray-400">
                      Listed 2 hours ago
                    </span>
                  </div>
                </div>
                <div className="border rounded-xl p-4 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600585153929-751dbf27229f"
                    alt="Contract"
                    className="rounded-xl mb-3 w-full h-40 object-cover"
                  />
                  <p className="font-semibold">Sale Contract</p>
                  <p className="text-sm text-gray-500">Wail Chaib</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                    <FiCheckCircle className="text-blue-600" />
                    Operation complete
                    <span className="ml-auto text-gray-400">
                      Listed 5 hours ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold text-[#004080] mb-4">
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold">Book an appointment</p>
                    <p className="text-sm text-gray-600">
                      User Jaber Khashaba booked an …
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">2h ago</p>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-bold">
                        The contract has been registered.
                      </p>
                      <p className="text-sm text-gray-600">
                        The purchase contract you made 5 hours …
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">5h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyAccount;
