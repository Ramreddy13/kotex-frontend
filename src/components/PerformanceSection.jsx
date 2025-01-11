import React from "react";

export default function PerformanceSection() {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Today’s Low</h3>
          <p className="text-2xl font-bold text-green-600">$46,930.22</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700">Today’s High</h3>
          <p className="text-2xl font-bold text-red-600">$48,637.83</p>
        </div>
      </div>
    </section>
  );
}
