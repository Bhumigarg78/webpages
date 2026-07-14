import React from 'react';
import { FaVideo, FaBookOpen, FaCode, FaCertificate, FaUserTie, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    { title: "Live Classes", icon: <FaLaptopCode className="text-pink-500 text-2xl" /> },
   
    { title: "Study Notes", icon: <FaBookOpen className="text-green-500 text-2xl" /> },
    { title: "Source Code", icon: <FaCode className="text-orange-500 text-2xl" /> },
    { title: "Live Projects", icon: <FaCheckCircle className="text-blue-500 text-2xl" /> },
    { title: "Certificate of Completion", icon: <FaCertificate className="text-purple-400 text-2xl" /> },
    { title: "Placement Assistance", icon: <FaUserTie className="text-green-500 text-2xl" /> },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto sm:px-6  text-center">
        <h2 className="text-2xl font-bold text-blue-700 uppercase tracking-wider mb-10">What You Will Get</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1 py-2 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-50 p-2 rounded-md border border-gray-100">
                {benefit.icon}
              </div>
              <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
