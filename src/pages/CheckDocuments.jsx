import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiSearch } from "react-icons/fi";

const CheckDocuments = () => {
  const [form, setForm] = useState({
    documentName: "",
    directorate: "",
    nationalId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", form);
    // Handle search here
  };

  return (
    <>
      <Navbar isLoggedIn={true} activeTab="check-documents" setActiveTab={() => {}} />

      <main className="min-h-screen bg-gradient-to-r from-[#008562] to-[#006b4d] flex items-center justify-center px-4 pt-36 pb-20">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-8">
          <h1 className="text-xl md:text-2xl font-bold text-center text-[#006b4d]">
            Search within the branches of the Ministry of Finance
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Search for documents and transactions related to the contracting parties
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700">
                  Document Name
                </label>
                <input
                  type="text"
                  name="documentName"
                  value={form.documentName}
                  onChange={handleChange}
                  placeholder="The document you need"
                  className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#008562]"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700">
                  Directorate
                </label>
                <select
                  name="directorate"
                  value={form.directorate}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#008562]"
                >
                  <option value="">Directorate or Department</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Notary">Notary Office</option>
                  <option value="Tax Office">Tax Office</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700">
                  National Identification Number
                </label>
                <input
                  type="text"
                  name="nationalId"
                  value={form.nationalId}
                  onChange={handleChange}
                  placeholder="National Identity Number"
                  className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#008562]"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#008562] hover:bg-[#006e50] text-white font-semibold py-3 rounded-lg shadow-md flex justify-center items-center gap-2"
              >
                <FiSearch className="text-lg" />
                Search
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckDocuments;
