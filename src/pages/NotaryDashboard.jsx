import React from "react";
import {
  FiCheckCircle,
  FiTruck,
  FiFileText,
  FiEdit3,
  FiPlus,
  FiDownload,
  FiSend,
  FiHelpCircle,
} from "react-icons/fi";

const NotaryDashboard = () => {
  return (
    <div className="pt-40 px-6 md:px-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Notary Management Dashboard</h1>
          <p className="text-sm text-gray-500">
            Manage and track all your notarial contracts
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-800">
            Dr. Ahmed Hassan
          </span>
          <img
            src="https://i.pinimg.com/1200x/f3/d6/35/f3d63548db2633e513e312cb33c41239.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-green-500 object-cover"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          {
            label: "Total Contracts",
            value: "1,247",
            icon: <FiFileText />,
            change: "+12%",
            status: "green",
          },
          {
            label: "Sent to Registration",
            value: "342",
            icon: <FiEdit3 />,
            change: "-8%",
            status: "red",
          },
          {
            label: "Registered Contracts",
            value: "298",
            icon: <FiCheckCircle />,
            change: "+15%",
            status: "green",
          },
          {
            label: "Ready for Delivery",
            value: "156",
            icon: <FiTruck />,
            change: "+22%",
            status: "blue",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-green-400 shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm text-gray-500">{item.label}</h2>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <div className="text-2xl text-gray-400">{item.icon}</div>
            </div>
            <p
              className={`mt-2 text-sm font-semibold ${
                item.status === "green"
                  ? "text-green-500"
                  : item.status === "red"
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              {item.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Signed Contracts + Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Signed Contracts */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">
            Latest Signed Contracts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Luxury Apartment",
                price: "$450,000",
                address: "123 Main Street, Downtown",
                beds: 3,
                baths: 2,
                size: "1,200 sqft",
                status: "Active",
                image: "https://i.ibb.co/z7fwHcd/house1.jpg",
                color: "green",
              },
              {
                title: "Family Home",
                price: "$650,000",
                address: "456 Oak Avenue, Suburbs",
                beds: 4,
                baths: 3,
                size: "2,100 sqft",
                status: "Pending",
                image: "https://i.ibb.co/Km7d3xN/house2.jpg",
                color: "orange",
              },
            ].map((home, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-green-400 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full text-white bg-${home.color}-500 mb-2`}
                  >
                    {home.status}
                  </span>
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold">{home.title}</p>
                    <p className="font-bold text-blue-600">{home.price}</p>
                  </div>
                  <p className="text-sm text-gray-500">{home.address}</p>
                  <div className="flex gap-4 text-xs mt-2 text-gray-600">
                    <span>{home.beds} Beds</span>
                    <span>{home.baths} Baths</span>
                    <span>{home.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-5 rounded-xl border border-green-400 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>Contract #2024-001 registered</span>
              </div>
              <span className="text-xs text-gray-400">2h ago</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiSend className="text-blue-500" />
                <span>Contract #2024-002 sent to registry</span>
              </div>
              <span className="text-xs text-gray-400">4h ago</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiHelpCircle className="text-yellow-500" />
                <span>New contract created</span>
              </div>
              <span className="text-xs text-gray-400">6h ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contracts Table */}
      <div className="bg-white p-6 rounded-xl border border-green-400 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recent Contracts</h3>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm shadow">
            <FiPlus /> New Contract
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="text-gray-600 bg-gray-100">
              <tr>
                <th className="py-2 px-4">Contract ID</th>
                <th className="py-2 px-4">Client</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4">#2024-001</td>
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">Property Sale</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    Registered
                  </span>
                </td>
                <td className="py-3 px-4">Dec 15, 2024</td>
                <td className="py-3 px-4 text-lg text-gray-600">
                  <FiDownload className="cursor-pointer hover:text-gray-800" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotaryDashboard;
