import React from "react";
import {
  FiFileText,
  FiArchive,
  FiSend,
  FiUpload,
  FiCheckCircle,
  FiPenTool,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    icon: <FiFileText size={28} className="text-[#00a67c]" />,
    title: "Digital Contracts",
    description:
      "Eliminate paper contracts with our secure digital signing and verification system.",
  },
  {
    icon: <FiArchive size={28} className="text-[#00a67c]" />,
    title: "Electronic Archiving",
    description:
      "Store and access all your property documents securely in our cloud-based system.",
  },
  {
    icon: <FiSend size={28} className="text-[#00a67c]" />,
    title: "Electronic Sending",
    description:
      "Send documents electronically without having to go to the competent authorities.",
  },
];

const steps = [
  {
    number: "1",
    title: "Easy access to",
    description: "property status",
  },
  {
    number: "2",
    title: "View all documents via",
    description: "the platform",
  },
  {
    number: "3",
    title: "Reduction of legal",
    description: "inaccuracies",
  },
  {
    number: "4",
    title: "Integrating various",
    description: "government bodies into one platform",
  },
];

const PropertyFeatures = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#006b4d] mb-12">
          Why Choose Dz.property?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="bg-[#e6f7f3] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#004b34] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-[#e9f6f2] py-16 px-4 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#006b4d] mb-16">
          How Dz.property Works
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#00a67c] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold mb-6 shadow-md">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-[#004b34] leading-snug mb-1">
                {step.title}
              </h4>
              <p className="text-[#004b34] font-bold leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
