import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import PropertyFeatures from "../components/PropertyFeatures"; 
import BenefitsSection from "../components/Benifits";
import Footer from "../components/Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Hero />

      <PropertyFeatures />
      <BenefitsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
