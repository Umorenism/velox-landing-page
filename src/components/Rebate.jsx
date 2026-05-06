import React from 'react';
import { motion } from 'framer-motion';

const Rebate = () => {
  const cards = [
    { n: "01", title: "Participation-Linked Rewards", desc: "Active engagement within the platform and ecosystem directly influences rebate eligibility, encouraging consistent participation." },
    { n: "02", title: "Learning Progress Recognition", desc: "Educational milestones and demonstrated skill development are rewarded — reinforcing that knowledge creation should be incentivized." },
    { n: "03", title: "Ecosystem Contribution Value", desc: "Members who contribute to community growth, referrals, and platform development are recognized through the value-sharing framework." },
  ];

  return (
    <section id="rebate" className="py-24 px-[5%] bg-slate-50 text-slate-950 relative overflow-hidden dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080] block mb-4"
          >
            Rebate System
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight"
          >
            A Value-Sharing Model That <span className="text-[#D4AF37]">Rewards Commitment</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-2xl bg-white text-slate-950 border border-slate-200/70 shadow-xl hover:shadow-2xl group hover:border-[#008080]/50 transition-all duration-500 dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/10"
            >
              <div className="font-syne text-5xl font-black text-[#008080]/20 group-hover:text-[#008080] transition-colors duration-500 mb-4">
                {card.n}
              </div>
              <h3 className="font-syne font-bold text-xl text-slate-950 dark:text-white mb-4">{card.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#008080]/5 blur-3xl group-hover:bg-[#008080]/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rebate;