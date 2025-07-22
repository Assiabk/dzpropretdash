import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1: Import useNavigate
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate(); // ✅ Step 2: Hook

  const handleGetStarted = () => {
    navigate("/login"); // ✅ Step 3: Navigate to login
  };

  return (
    <footer className="text-white">
      {/* CTA Section */}
      <div className="bg-[#e6f7f3] text-[#006b4d] py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Get your smart card now</h2>
        <p className="text-lg mb-2">
          Own a property register? Take the next step and request your smart card to join us today
        </p>
        <p className="text-lg mb-6">
          Join thousands of satisfied users who have already made the switch to digital
        </p>

        {/* ✅ Button with Navigation */}
        <button
          onClick={handleGetStarted}
          className="bg-[#00a67c] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#00986f] transition"
        >
          Get Started Now
        </button>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1a1f1c] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-start">
            <div className="bg-white w-20 h-20 flex items-center justify-center rounded-full shadow mb-4">
              <img src={logo} alt="DZ.PROPERTY Logo" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-gray-300">
              Book appointments with legal officers easily and securely.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Notary Services</li>
              <li>Legal Consultation</li>
              <li>Court Bailiff</li>
              <li>Land Registration</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@dzproperty.dz</li>
              <li>+213 770 123 456</li>
              <li>Rue Hassiba Ben Bouali</li>
              <li>Algiers, Algeria</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} DZ.PROPERTY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
