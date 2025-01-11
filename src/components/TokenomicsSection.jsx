import React from "react";

export default function TokenomicsSection() {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Tokenomics</h2>
      <div className="flex items-center justify-center">
        <div className="w-40 h-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="15" fill="#F7FAFC" />
            <path
              d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"
              fill="#3182CE"
              stroke="#fff"
              strokeWidth="2"
            />
            <path
              d="M16 2v14h14A14 14 0 0 0 16 2z"
              fill="#2B6CB0"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 text-center mt-4">
        Crowdsale Investors: 80%, Foundation: 20%
      </p>
    </section>
  );
}
