import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBuilding, FaUserTie, FaFileAlt, FaComments, FaLifeRing, FaCode, FaBriefcase } from 'react-icons/fa';

const WhyChoose = () => {
  const reasons = [
    { title: "Step-by-Step Practical Training", icon: <FaLaptopCode className="text-green-500 text-3xl" /> },
    { title: "Real Industry Projects", icon: <FaBuilding className="text-orange-500 text-3xl" /> },
    { title: "Interview Preparation", icon: <FaUserTie className="text-blue-500 text-3xl" /> },
    { title: "Resume Building", icon: <FaFileAlt className="text-pink-500 text-3xl" /> },
    { title: "Mock Interviews", icon: <FaComments className="text-purple-500 text-3xl" /> },
    { title: "Full Support", icon: <FaLifeRing className="text-yellow-500 text-3xl" /> },
    { title: "Source Code Included", icon: <FaCode className="text-green-400 text-3xl" /> },
    { title: "Placement Guidance", icon: <FaBriefcase className="text-orange-500 text-3xl" /> },
  ];

  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider">Why Join This Course?</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-4"
            >
                
              <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-3">
                {reason.icon}
              </div>
              <p className="text-sm font-medium text-gray-300 leading-tight">{reason.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
