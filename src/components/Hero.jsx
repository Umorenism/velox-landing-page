import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Ticker from '../utilis/Ticker';

const Hero = () => {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-[5%] py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-[#e6faf6] text-slate-950 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-[#040a0a] dark:text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.12)_0%,transparent_35%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.18)_0%,transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12)_0%,transparent_30%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05)_0%,transparent_30%)]" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.15)_35%,transparent_65%)] dark:opacity-30 dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_35%,transparent_65%)]" />
        
        {/* Animated Glows - Re-positioned for centered layout */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 128, 128, 0.14) 0%, transparent 65%)' }}
        />
      </div>

      {/* Main Content - Added mx-auto and text-center */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 dark:border-[#D4AF37]/20 dark:bg-[#0f2f2e]/70 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            🇨🇦 A Product of Swift Assets Inc., Canada
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-950 dark:text-white mb-8"
        >
          Empowering the<br/>Next Generation of<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-[#D4AF37]">
            Global Traders
          </span>
        </motion.h1>

        {/* Subtext - Added mx-auto */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-slate-700 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto"
        >
          A Canadian-based financial education platform equipping individuals with the skills
          to thrive in Forex & Crypto markets — within a structured, transparent rebate ecosystem.
        </motion.p>

        {/* Buttons - Changed to justify-center */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          <motion.a 
            href="https://velox-user-capitalmarket-dashboard-ai.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#008080] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-teal-900/20 hover:bg-[#006666] dark:bg-[#0f766e] dark:hover:bg-[#0e5f5a] transition-all"
          >
            Start Learning <ArrowRight size={18} />
          </motion.a>

          <motion.a 
            href="https://velox-user-capitalmarket-dashboard-ai.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="flex items-center gap-2 border border-gray-500 bg-white/90 text-slate-950 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-sm shadow-slate-200/20 transition-all hover:bg-slate-100 dark:border-slate-700/50 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Play size={18} fill="currentColor" /> Watch Overview
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Ticker Placement */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
       <Ticker/>
      </div>
    </section>
  );
};

export default Hero;