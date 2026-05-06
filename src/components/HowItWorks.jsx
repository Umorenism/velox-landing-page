import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Register", desc: "Create your account and access the member dashboard instantly." },
    { n: "02", title: "Learn", desc: "Begin structured curriculum modules covering market fundamentals." },
    { n: "03", title: "Train", desc: "Develop strategy mastery through guided simulations and analysis." },
    { n: "04", title: "Trade", desc: "Transition to live markets with risk tools and ecosystem support." },
    { n: "05", title: "Participate", desc: "Join the rebate ecosystem and unlock performance-based rewards." },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#008080]/30 bg-[#008080]/5"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080]">How It Works</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight"
          >
            Your Path to <span className="text-[#008080]">Financial Empowerment</span>
          </motion.h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-[#008080] via-[#D4AF37] to-[#008080]"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                variants={stepVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="relative mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#0a1919] border-2 border-[#008080] rounded-full flex items-center justify-center font-syne font-black text-xl text-[#008080] shadow-[0_0_30px_rgba(0,128,128,0.2)] group-hover:bg-[#008080] group-hover:text-white transition-all duration-500 z-10 relative"
                  >
                    {step.n}
                  </motion.div>
                  
                  {/* Subtle Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#008080] opacity-20 animate-ping group-hover:animate-none" />
                </div>

                {/* Text Content */}
                <h4 className="font-syne font-bold text-lg text-slate-950 dark:text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] lg:max-w-none">
                  {step.desc}
                </p>

                {/* Mobile Connector Line */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-[#008080] to-transparent mt-8" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;