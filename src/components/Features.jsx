import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: "📚", title: "World-Class Financial Education", desc: "Structured, curriculum-driven programs covering trading fundamentals through advanced strategy — designed for lasting skill mastery." },
    { icon: "📈", title: "Independent Market Trading", desc: "Enable users to trade confidently across global markets with the tools, insights, and discipline needed for consistent performance." },
    { icon: "⚙️", title: "Advanced Trading Tools", desc: "Access proprietary systems, real-time market insights, and algorithmic frameworks that give informed traders a measurable edge." },
    { icon: "💰", title: "Rebate-Based Ecosystem", desc: "A performance-driven value-sharing structure that rewards active participation, learning progress, and community contribution." },
  ];

  return (
    <section id="features" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-[#051111] dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#008080]/30 bg-[#008080]/5"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080]">What We Do</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white"
          >
            A Complete Ecosystem for <span className="text-[#008080]">Financial Growth</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-white text-slate-950 border border-slate-200/80 hover:border-[#008080]/50 transition-all duration-500 overflow-hidden shadow-xl dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/5"
            >
              {/* Animated Background Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#008080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-4xl mb-6 relative z-10">{f.icon}</div>
              <h3 className="font-syne font-bold text-lg text-slate-950 dark:text-white mb-4 relative z-10 group-hover:text-[#008080] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;