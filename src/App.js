import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";
import MyAccount from "./pages/MyAccount";
import NotaryDashboard from "./pages/NotaryDashboard";
import NotaryAppointments from "./pages/NotaryAppointments";
import SendDocumentsRegistration from "./pages/SendDocumentsRegistration";
import SendDocumentsRealEstate from "./pages/SendDocumentsRealEstate";
import CheckDocuments from "./pages/CheckDocuments";
const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const propertyStatusRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const path = location.pathname.replace("/", "");
    if (path) setActiveTab(path);
  }, [location]);

  const hideNavbar = location.pathname === "/";

  const scrollToPropertyStatus = () => {
    if (propertyStatusRef.current) {
      propertyStatusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {!hideNavbar && (
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoggedIn={isLoggedIn}
          user={user}
          scrollToPropertyStatus={scrollToPropertyStatus} // Pass to Navbar
        />
      )}

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />
        <Route path="/appointments" element={<Appointments />} />
        <Route
          path="/profile"
          element={<Profile user={user} propertyStatusRef={propertyStatusRef} />}
        />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/dashboard" element={<NotaryDashboard />} />
          <Route path="/notary-appointments" element={<NotaryAppointments />} /> 
          <Route path="/send-documents-registration" element={<SendDocumentsRegistration />} />
          <Route
  path="/send-documents-real-estate"
  element={<SendDocumentsRealEstate />}
/>
<Route path="/check-documents" element={<CheckDocuments />} />


      </Routes>
    </>
  );
};

export default App;
