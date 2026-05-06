import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  const items = [
    { icon: "🌍", title: "Income Diversification", desc: "Reduce dependence on a single income stream. Build multiple, independent revenue channels regardless of geography." },
    { icon: "⚡", title: "Borderless Earning Potential", desc: "Global markets operate 24/5. A trained trader in Lagos, London, or Los Angeles has equal access to opportunity." },
    { icon: "🏛️", title: "Institutional Oversight", desc: "Operated under Swift Assets Inc. — a Canadian corporation with full governance frameworks and accountability structures." },
  ];

  return (
    <section id="mission" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080] mb-4 block">Our Mission</span>
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-8">
              One to Liberate All to<br/>
              <span className="text-[#008080]">Financial Freedom</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8" />
            <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed max-w-lg">
              We exist to bridge the gap between financial knowledge and real-world market participation — 
              empowering individuals across every continent to take ownership of their financial futures.
            </p>
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-2xl bg-white text-slate-950 border border-slate-200 hover:border-[#008080]/50 transition-all duration-300 group shadow-xl dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/5"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#008080]/10 flex items-center justify-center text-2xl group-hover:bg-[#008080] transition-colors duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-slate-950 dark:text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;