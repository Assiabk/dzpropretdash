import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ activeTab, setActiveTab, isLoggedIn, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemsLoggedOut = [
    { name: "Home", path: "/" },
    { name: "Appointments", path: "/appointments" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  const navItemsLoggedIn = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/notary-appointments" },
    { name: "Check documents", path: "/check-documents" },
    { name: "Property Status Overview", path: "/property-status" },
    { name: "Sending contracts", path: "/sending-contracts" },
    { name: "Home", path: "/profile" },
  ];
  
  const handleNavClick = (item) => {
    if (item.scrollToId) {
      navigate(item.path, { state: { scrollToId: item.scrollToId } });
    } else {
      navigate(item.path);
    }
    setActiveTab(item.name.toLowerCase());
    setIsOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
    setShowLogoutModal(false);
  };

  const navItems = isLoggedIn ? navItemsLoggedIn : navItemsLoggedOut;

  return (
    <>
      {/* Algerian flag bar */}
      <div className="h-1 bg-gradient-to-r from-green-600 via-white to-red-600 w-full fixed top-0 z-50" />

      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="DZ.PROPERTY"
              className={`transition-all duration-300 ${
                scrolled ? "h-20" : "h-32"
              } w-auto`}
            />
          </div>

          {/* Center: Brand + Nav */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-red-600">DZ.</span>
              <span className="text-[#006b4d]">PROPERTY</span>
            </div>

            <nav
              className="hidden md:flex space-x-6 mt-2"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-sm font-medium pb-1 transition duration-200 ${
                    activeTab === item.name.toLowerCase()
                      ? "text-[#00a67c] font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#00a67c]"
                      : "text-gray-700 hover:text-[#00a67c] hover:scale-105"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="text-sm text-gray-600 hover:text-red-600"
                >
                  Sign out
                </button>
                <img
                  src={user?.photoURL || "/default-profile.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 shadow-sm object-cover"
                />
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-1.5 font-semibold text-white bg-gradient-to-r from-[#00a67c] to-[#008562] hover:opacity-90 rounded-md shadow-lg transition-all duration-200"
              >
                LOGIN
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#006b4d] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 shadow-md rounded-b-xl">
            <nav
              className="flex flex-col space-y-3"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm text-left font-medium transition duration-200 ${
                    activeTab === item.name.toLowerCase()
                      ? "text-[#00a67c] font-semibold"
                      : "text-gray-700 hover:text-[#00a67c]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setShowLogoutModal(true);
                    setIsOpen(false);
                  }}
                  className="mt-4 text-red-600 font-medium"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="mt-4 w-full py-2 font-semibold text-white bg-gradient-to-r from-[#00a67c] to-[#008562] hover:opacity-90 rounded-md shadow transition-all duration-200"
                >
                  LOGIN
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Log Out</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-md transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition"
              >
                Yes, Log me out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
