import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Blockchain Expert",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Elina Williams",
      role: "Crypto Analyst",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      role: "Software Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
