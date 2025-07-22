import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import benefitsImage from "../assets/benifitsimage.png"

const benefits = [
  {
    title: "Time Efficiency",
    description: "Reduce processing time from weeks to minutes",
  },
  {
    title: "Cost Reduction",
    description:
      "Eliminate expenses related to paper processing and storage",
  },
  {
    title: "Enhanced Security",
    description:
      "Advanced encryption and secure storage of all documents",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={benefitsImage}
            alt="Benefits of Going Digital"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b4d] mb-8">
            Benefits of Going Digital
          </h2>
          <ul className="space-y-6">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="text-[#00a67c] mt-1">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004b34] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
