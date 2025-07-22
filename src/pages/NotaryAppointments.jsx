import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFilter,
  FiHome,
} from "react-icons/fi";

const NotaryAppointments = () => {
  const user = {
    photoURL: "/default-profile.png", // Replace with actual user photo
  };

  const stats = [
    {
      label: "Today’s Appointments",
      count: 8,
      icon: <FiCalendar className="text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      label: "This Week",
      count: 24,
      icon: <FiCalendar className="text-green-600" />,
      bg: "bg-green-50",
    },
    {
      label: "Completed",
      count: 156,
      icon: <FiCheckCircle className="text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      label: "Pending",
      count: 12,
      icon: <FiClock className="text-orange-600" />,
      bg: "bg-orange-50",
    },
  ];

  const appointments = [
    {
      title: "Property Viewing - Luxury Villa",
      client: "Sarah Johnson",
      address: "123 Oak Street, Beverly Hills",
      time: "Today, 2:00 PM",
      status: "Confirmed",
      statusColor: "text-green-600 bg-green-100",
      icon: <FiHome className="text-blue-500" />,
    },
    {
      title: "Purchase Completion - Downtown Condo",
      client: "Michael Chen",
      address: "Final paperwork and key handover",
      time: "Today, 4:30 PM",
      status: "In Progress",
      statusColor: "text-blue-600 bg-blue-100",
      icon: <FiHome className="text-purple-600" />,
    },
    {
      title: "Client Consultation - Investment Portfolio",
      client: "Emma Dubois",
      address: "Zoom Meeting",
      time: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      statusColor: "text-gray-600 bg-gray-100",
      icon: <FiHome className="text-indigo-600" />,
    },
  ];

  return (
    <>
      <Navbar isLoggedIn={true} user={user} activeTab="appointments" setActiveTab={() => {}} />
      <main className="pt-40 px-4 md:px-10 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Appointments</h1>
          <p className="text-gray-500 mb-8">Manage your real estate appointments and client meetings</p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl shadow-sm border ${item.bg} flex items-center justify-between`}
              >
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <h3 className="text-2xl font-semibold">{item.count}</h3>
                </div>
                <div className="text-3xl">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full md:w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <div className="flex items-center gap-2">
              <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                <option>All Types</option>
                <option>Confirmed</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select>
              <button className="p-2 border rounded-lg bg-white">
                <FiFilter />
              </button>
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-white rounded-xl shadow p-4 space-y-4">
            <h2 className="font-semibold text-gray-700">Upcoming Appointments</h2>
            {appointments.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b last:border-none py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="text-xl mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">Client: {item.client}</p>
                    <p className="text-sm text-gray-400">{item.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 flex items-center gap-1 justify-end">
                    <FiCalendar />
                    {item.time}
                  </p>
                  <span
                    className={`text-xs font-medium mt-1 inline-block px-3 py-1 rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotaryAppointments;
