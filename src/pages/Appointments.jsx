import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMapPin, FiClock, FiCalendar, FiX } from "react-icons/fi";

const Appointments = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBook = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Navbar />

      <section className="bg-[#f8f9fa] min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#006b4d]">
                  <option>Notary Services</option>
                  <option>Court Bailiff</option>
                  <option>Land Registration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#006b4d]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#006b4d]"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-[#00a67c] hover:bg-[#00986f] text-white font-semibold py-2 rounded-md">
                  Search Available Officers
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="John Anderson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-black">John Anderson</h3>
                    <p className="text-sm text-gray-500">Notary Public</p>
                  </div>
                </div>
                <p className="flex items-center text-sm text-gray-600 gap-2 mb-1">
                  <FiMapPin /> 123 Legal Street, Downtown
                </p>
                <p className="flex items-center text-sm text-gray-600 gap-2 mb-4">
                  <FiClock /> Available today, 9:00 AM - 5:00 PM
                </p>
                <button
                  onClick={handleBook}
                  className="bg-[#00a67c] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#00986f] transition"
                >
                  Book Appointment
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Williams"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-black">Sarah Williams</h3>
                    <p className="text-sm text-gray-500">Court Bailiff</p>
                  </div>
                </div>
                <p className="flex items-center text-sm text-gray-600 gap-2 mb-1">
                  <FiMapPin /> 456 Court Avenue, Uptown
                </p>
                <p className="flex items-center text-sm text-gray-600 gap-2 mb-4">
                  <FiClock /> Available tomorrow, 10:00 AM - 6:00 PM
                </p>
                <button
                  onClick={handleBook}
                  className="bg-[#00a67c] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#00986f] transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
              <iframe
                title="Map"
                className="w-full h-full"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13288.763571094862!2d5.3851882!3d36.1883664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cdfffaafe9477%3A0xe65f5db3fefbb8e2!2sSetif%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1622187933109!5m2!1sen!2sdz"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-3xl shadow-2xl relative p-6">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              <FiX size={20} />
            </button>

            <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-[#00a67c] rounded-full"></span>
                <span className="w-2 h-2 bg-[#00a67c] rounded-full"></span>
                <span className="w-2 h-2 bg-[#00a67c] rounded-full"></span>
                <span className="w-2 h-2 bg-[#00a67c] rounded-full"></span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-center mb-2">
              Waiting for confirmation
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Your appointment with the notary public has been successfully scheduled.
            </p>

            <div className="bg-gray-100 rounded-xl p-4">
              <div className="flex justify-between text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <span>May 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock />
                  <span>2:30 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Notary"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">ELHAMZA Mouhamed El amine</h3>
                  <p className="text-sm text-gray-500">Notary Public</p>
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex items-center text-gray-600 text-sm gap-2">
                <FiMapPin />
                <p>123 Business Center, Suite 45, Tipaza, Algeria</p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-[#00a67c] hover:bg-[#00986f] text-white font-semibold py-2 rounded-xl transition"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Appointments;
