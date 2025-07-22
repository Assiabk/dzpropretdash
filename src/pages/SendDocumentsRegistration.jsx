import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SendDocumentsRegistration = () => {
  const [form, setForm] = useState({
    contractFile: null,
    documents: null,
    contractType: "",
    party1: "",
    party2: "",
    fees: "",
  });

  const handleFileChange = (e, field) => {
    setForm({ ...form, [field]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", form);
    // Send to backend here
  };

  return (
    <>
      <Navbar isLoggedIn={true} activeTab="contracts" setActiveTab={() => {}} />

      <main className="pt-40 px-4 md:px-10 bg-[#f8f9fa] min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-[#e0e0e0]">
          <h1 className="text-2xl font-bold text-center text-[#006b4d] mb-6 border-b pb-2">
            Submit New Contract
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contract File */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Contract File
              </label>
              <div className="flex gap-4 items-start">
                <textarea
                  className="flex-1 min-h-[80px] border rounded-md p-3 text-sm text-gray-700 resize-none"
                  placeholder="No file chosen"
                  readOnly
                  value={form.contractFile?.name || ""}
                />
                <div className="flex flex-col items-center gap-1">
                  <label className="bg-[#006b4d] text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-[#008562] transition">
                    Upload File
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "contractFile")}
                    />
                  </label>
                  <p className="text-xs text-gray-500">(PDF or Word)</p>
                </div>
              </div>
            </div>

            {/* Attached Documents */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Attached Documents
              </label>
              <div className="flex gap-4 items-start">
                <textarea
                  className="flex-1 min-h-[80px] border rounded-md p-3 text-sm text-gray-700 resize-none"
                  placeholder="No file chosen"
                  readOnly
                  value={form.documents?.name || ""}
                />
                <div className="flex flex-col items-center gap-1">
                  <label className="bg-[#006b4d] text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-[#008562] transition">
                    Upload Documents
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "documents")}
                    />
                  </label>
                  <p className="text-xs text-gray-500">(ID card, deed, etc.)</p>
                </div>
              </div>
            </div>

            {/* Contract Type */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Contract Type
              </label>
              <select
                name="contractType"
                value={form.contractType}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md text-sm"
              >
                <option value="">Select contract type</option>
                <option value="Sale">Sale</option>
                <option value="Lease">Lease</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            {/* Parties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-gray-700">
                  Party 1
                </label>
                <input
                  name="party1"
                  value={form.party1}
                  onChange={handleChange}
                  type="text"
                  placeholder="Party 1"
                  className="w-full border px-4 py-2 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-700">
                  Party 2
                </label>
                <input
                  name="party2"
                  value={form.party2}
                  onChange={handleChange}
                  type="text"
                  placeholder="Party 2"
                  className="w-full border px-4 py-2 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Fees */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Registration fees due
              </label>
              <input
                name="fees"
                value={form.fees}
                onChange={handleChange}
                type="number"
                placeholder="0.00"
                className="w-full border px-4 py-2 rounded-md text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#006b4d] hover:bg-[#008562] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-sm"
              >
                Submit Contract
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SendDocumentsRegistration;
