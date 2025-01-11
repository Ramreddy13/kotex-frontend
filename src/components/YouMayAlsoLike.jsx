import React from "react";

export default function YouMayAlsoLike({ trendingCoins }) {
  return (
    <section className="my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">You May Also Like</h2>
      <div className="flex gap-6 overflow-x-auto">
        {trendingCoins.map((coin) => (
          <div
            key={coin.item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-40"
          >
            <img
              src={coin.item.thumb}
              alt={coin.item.name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-center font-medium">{coin.item.name}</p>
            <p className="text-center text-gray-600 text-sm">{coin.item.symbol.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
