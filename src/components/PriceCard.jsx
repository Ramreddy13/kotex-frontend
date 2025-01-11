import React from "react";

export default function PriceCard({ price, coinName, currency }) {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{coinName.toUpperCase()}</h2>
      <p className="text-4xl font-bold my-4 text-secondary">
        {currency === "usd" ? `$${price.usd}` : `₹${price.inr}`}
      </p>
      <p className="text-lg text-green-600">
        {currency === "usd" ? price.usd_24h_change : price.inr_24h_change}% 24H Change
      </p>
    </section>
  );
}
