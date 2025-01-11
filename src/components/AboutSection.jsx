import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">About Bitcoin</h2>
      <p className="text-gray-700">
        Bitcoin’s price today is $16,951.82, with a 24-hour trading volume of $19.14B. BTC is
        +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66,
        and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24M BTC
        and a max supply of 21M BTC.
      </p>
    </section>
  );
}
