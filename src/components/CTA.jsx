import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="py-32 px-[5%] text-center bg-slate-100 text-slate-950 relative overflow-hidden dark:bg-slate-950 dark:text-slate-100">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,128,128,0.15) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080] block mb-6">
            Join Thousands of Global Traders
          </span>
          
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold text-slate-950 dark:text-white leading-[1.1] tracking-tighter mb-8 max-w-3xl mx-auto">
            Start Your Journey to<br/>
            <span className="text-[#008080]">Financial Empowerment</span> Today
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            The opportunity is real. The markets are open. The education is structured, 
            world-class, and designed for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="https://velox-user-capitalmarket-dashboard-ai.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#008080] text-black px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,128,128,0.4)] transition-all"
            >
              Get Started Now →
            </motion.a>
            
            <motion.a 
              href="https://velox-user-capitalmarket-dashboard-ai.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="w-full sm:w-auto bg-transparent text-slate-950 dark:text-white border border-slate-300/40 dark:border-white/10 px-10 py-4 rounded-xl font-medium text-lg transition-all"
            >
              Join VeloxCapitalMarkets.ai
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-200/20 dark:border-slate-800 flex flex-col md:flex-row justify-center items-center gap-4 text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase"
          >
            <span>One to Liberate All to Financial Freedom</span>
            <span className="hidden md:block text-gray-800">|</span>
            <span className="flex items-center gap-2">
              <span className="text-lg">🇨🇦</span> Swift Assets Inc., Canada
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008080]/50 to-transparent" />
    </section>
  );
};

export default CTA;