import React from "react";

interface PricingCardProps {}

const PricingCard: React.FC<PricingCardProps> = () => {
  return (
    <div
      style={{ width: "100%" }}
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
    >
      <div className=" flex-col md:flex-col max-w-4xl w-full gap-4">
        {/* Purple Card */}
        <div className="w-full md:w-1/2 bg-indigo-900 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-2">Premium Package</h2>
          <div className="flex items-baseline mb-8">
            <span className="text-5xl font-bold">$350</span>
            <span className="ml-2 text-gray-300">/ month</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* White Card */}
        <div
          style={{ marginTop: "-40px", width: "40%", marginLeft: "5%" }}
          className="w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span className="text-lg font-medium">Website Design</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span className="text-lg font-medium">Graphic Designing</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span className="text-lg font-medium">Web Development</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span className="text-lg font-medium">Business Consulting</span>
            </div>
            <button className="w-full py-3 px-6 text-purple-600 font-medium border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 mt-6">
              Select Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
