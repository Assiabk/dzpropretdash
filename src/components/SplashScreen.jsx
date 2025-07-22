import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import background from "../assets/background.png";

const SplashScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Initial load animation
    const loadTimer = setTimeout(() => setLoaded(true), 100);
    
    // Auto-redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      setRedirecting(true);
      navigate("/home");
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  const handleSkip = () => {
    setRedirecting(true);
    navigate("/home");
  };

  return (
    <div
      className={`relative w-full h-screen bg-cover bg-top flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      } ${
        redirecting ? "opacity-0 scale-95" : ""
      }`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glass card */}
      <div
        className={`relative z-10 px-6 py-8 sm:px-8 sm:py-10 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/30 shadow-2xl text-center max-w-3xl w-full mx-4 transition-all duration-1000 transform ${
          loaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Logo */}
        <div
          className={`mb-4 flex justify-center transition-all duration-700 delay-150 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={logo}
            alt="DZ.PROPERTY"
            className="h-16 sm:h-20 md:h-24 drop-shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg space-y-2">
          <span
            className={`inline-block transition-all duration-500 delay-300 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <span className="text-green-400">Property</span>{" "}
            <span className="text-white">Unlock the Future of</span>
          </span>
          <br />
          <span
            className={`inline-block transition-all duration-500 delay-500 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <span className="text-red-400">Digitization</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-5 text-sm sm:text-base md:text-lg font-light text-white/90 drop-shadow-md transition-opacity duration-700 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Seamlessly manage, digitize, and access your real estate assets with
          cutting-edge technology.
        </p>

        {/* Loading animation */}
        <div
          className={`mt-8 flex justify-center transition-opacity duration-500 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-white/80"
                style={{
                  animation: `bounce 1.4s infinite ease-in-out`,
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        </div>

       
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(10px);
          }
          100% {
            transform: translateY(-200px) translateX(0);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;