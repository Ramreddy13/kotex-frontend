import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-secondary">KoinX</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-secondary">
          Crypto Taxes
        </a>
        <a href="#" className="text-gray-700 hover:text-secondary">
          Free Tools
        </a>
        <a href="#" className="text-gray-700 hover:text-secondary">
          Resource Center
        </a>
      </nav>
      <button className="bg-secondary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-accent">
        Get Started
      </button>
    </header>
  );
}
