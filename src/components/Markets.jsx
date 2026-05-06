import React from 'react';
import { motion } from 'framer-motion';

const Markets = () => {
  const markets = [
    { tag: "24/5", icon: "💱", name: "Forex", desc: "Major, Minor & Exotic Currency Pairs — the world's largest and most liquid market." },
    { tag: "Digital", icon: "₿", name: "Crypto", desc: "Bitcoin, Ethereum & leading Altcoins — the fastest-growing digital asset ecosystem." },
    { tag: "Hedge", icon: "🥇", name: "Metals", desc: "Gold & Silver — timeless stores of value and essential hedges against uncertainty." },
    { tag: "Global", icon: "📊", name: "Indices", desc: "S&P 500, NASDAQ, FTSE & global benchmarks — broad economic exposure." },
    { tag: "Real Assets", icon: "🛢️", name: "Commodities", desc: "Crude Oil, Natural Gas & Agriculture — driven by global supply and demand." },
    { tag: "Advanced", icon: "🔮", name: "Derivatives", desc: "Sophisticated instruments including Synthetics — precision and leverage efficiency." },
  ];

  return (
    <section id="markets" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-4"
          >
            Markets We Cover
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white"
          >
            Six Asset Classes. <span className="text-[#D4AF37]">Unlimited Opportunity.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-white text-slate-950 border border-slate-200/80 hover:border-[#D4AF37]/40 transition-all duration-300 group cursor-default shadow-xl dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">
                  {m.tag}
                </span>
                <span className="text-2xl">{m.icon}</span>
              </div>
              <h3 className="font-syne font-bold text-slate-950 dark:text-white text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">
                {m.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;