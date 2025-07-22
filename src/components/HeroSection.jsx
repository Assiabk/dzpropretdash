import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import heroImage from "../assets/hero-ui.png";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 pt-20 bg-[#f8f9fa]">
      <div className="max-w-7xl w-full bg-[#006b4d] rounded-2xl px-8 py-12 mt-40 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
        
        {/* Text Content */}
        <div className="text-white text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Revolutionizing <br /> Real Estate Transactions
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Say goodbye to paper contracts and hello to seamless digital property transactions with<br />
            <span className="font-semibold text-white">DZ.PROPERTY</span>'s innovative electronic system.
          </p>

          {/* ✅ Navigation Button */}
          <button
            onClick={handleLoginClick}
            className="inline-block px-6 py-3 text-white font-semibold bg-[#004b34] hover:bg-white hover:text-[#006b4d] rounded-md transition duration-300"
          >
            LOGIN NOW
          </button>
        </div>

        {/* Image Box */}
        <div className="bg-white border-t-8 border-[#00a67c] rounded-xl shadow-2xl p-4 w-full max-w-lg">
          <img
            src={heroImage}
            alt="Green UI"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
