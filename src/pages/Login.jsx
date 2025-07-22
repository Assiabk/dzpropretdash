import React, { useState } from "react";
import loginImage from "../assets/loginimage.png";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate login (replace with Firebase or backend auth)
    if (email === "notary@example.com" && password === "password123") {
      const fakeUser = {
        name: "ELHAMZA Mouhamed",
        email,
        photoURL: "https://i.pinimg.com/1200x/f3/d6/35/f3d63548db2633e513e312cb33c41239.jpg", 
      };

      setIsLoggedIn(true);       // update global or app state
      setUser(fakeUser);         // update user info
      navigate("/profile");      // redirect to profile page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <div className="text-center mb-8">
            <h2 className="text-[#006b4d] text-base font-semibold mb-2">
              1- <span className="font-bold">LOGIN</span>
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              Only state employees registered on this platform are allowed to log in to take legal measures on real estate.
            </p>
            <p className="text-gray-600 text-sm">
              You can log in automatically by scanning your smart card.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#006b4d] mb-2">Scan your card</h3>
            <p className="text-gray-500 text-sm mb-5">
              Log in to access your dashboard and manage your account.
            </p>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006b4d]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006b4d]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#006b4d] text-white py-2.5 rounded-md hover:opacity-90 transition"
              >
                <FiLogIn className="text-lg" /> Log In
              </button>
              <div className="text-sm text-right">
                <a href="#" className="text-[#006b4d] hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full max-w-[320px] md:max-w-sm rounded-2xl border-t-4 border-[#006b4d] shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
