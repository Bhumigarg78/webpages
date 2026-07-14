import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import WhyChoose from "../components/WhyChoose";
import Trainer from "../components/Trainer";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Cartificate from "../components/Cartificate";
import Pricing from "../components/Pricing";

const LandingPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("one-time");
  const [appliedDiscount, setAppliedDiscount] = useState(false);

  const sectionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen overflow-x-hidden">
      <Navbar />

      <motion.section id="home" {...sectionProps}>
        <Hero />
      </motion.section>

      <motion.section id="course" {...sectionProps}>
        <Stats />
      </motion.section>

      <motion.section id="projects" className="scroll-mt-24" {...sectionProps}>
        <Projects />
      </motion.section>

      <motion.section id="trainer" {...sectionProps}>
        <Trainer />
      </motion.section>
      
      <motion.section id="cartificate" {...sectionProps}>
        <Cartificate/>
      </motion.section>
      
      <motion.section id="pricing" {...sectionProps}>
        <Pricing 
          selectedPlanId={selectedPlanId} 
          setSelectedPlanId={setSelectedPlanId} 
          appliedDiscount={appliedDiscount} 
          setAppliedDiscount={setAppliedDiscount} 
        />
      </motion.section>
      
      <motion.section id="reviews" {...sectionProps}>
        <Offer 
          selectedPlanId={selectedPlanId} 
          setSelectedPlanId={setSelectedPlanId} 
          appliedDiscount={appliedDiscount} 
          setAppliedDiscount={setAppliedDiscount} 
        />
      </motion.section>

      <motion.section id="faq" {...sectionProps}>
        <FAQ />
      </motion.section>

      <motion.section id="contact" {...sectionProps}>
        <Footer />
      </motion.section>
    </div>
  );
};

export default LandingPage;