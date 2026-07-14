import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLock, FaServer, FaRocket } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Roadmap = () => {
  const steps = [
    { num: 1, title: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { num: 2, title: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { num: 3, title: "JavaScript (ES6+)", icon: <FaJs className="text-[#F7DF1E]" /> },
    { num: 4, title: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { num: 5, title: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { num: 6, title: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { num: 7, title: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { num: 8, title: "Authentication (JWT)", icon: <FaLock className="text-purple-600" /> },
    { num: 9, title: "REST API", icon: <FaServer className="text-pink-500" /> },
    { num: 10, title: "Deploy Live Project", icon: <FaRocket className="text-blue-500" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy uppercase tracking-wider">Course Roadmap</h2>
        </div>
        
        <div className="relative">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-4xl mb-4 relative z-10 group hover:scale-110 transition-transform">
                  {step.icon}
                  <div className="absolute -bottom-3 w-6 h-6 bg-primary-orange text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 text-center text-sm md:text-base">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
