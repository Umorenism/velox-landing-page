import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, BookOpen, ShieldCheck, Radio } from 'lucide-react';

const RiskDisclosure = () => {
  const risks = [
    { icon: <AlertTriangle className="text-red-400" size={20} />, title: "Know Your Risk", desc: "Never trade capital you cannot afford to lose." },
    { icon: <BookOpen className="text-red-400" size={20} />, title: "Education First", desc: "Complete foundational training before live trading." },
    { icon: <ShieldCheck className="text-red-400" size={20} />, title: "Use Risk Tools", desc: "Stop-losses, position sizing, and portfolio limits." },
    { icon: <Radio className="text-red-400" size={20} />, title: "Stay Informed", desc: "Monitor market conditions and platform updates." },
  ];

  return (
    <section id="risk" className="py-20 px-[5%] bg-slate-50 dark:bg-slate-950 border-t border-slate-200/10 dark:border-slate-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-red-600 animate-pulse" />
          <h3 className="font-syne font-bold text-xl text-red-700 dark:text-red-100 tracking-tight">
            Risk Disclosure — Trading Responsibly
          </h3>
        </div>

        <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-10">
          Trading financial markets involves substantial risk of loss and is not appropriate for every individual. 
          Past performance is not indicative of future results. Participation in the ecosystem, rebate programs, 
          and affiliate structures does not constitute a guarantee of profit or income. 
          <span className="text-slate-950 dark:text-white font-bold"> VeloxCapitalMarkets.ai </span>
        </p>

        <div className="grid gap-4">
          {risks.map((r, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-red-500/30 dark:bg-red-500/10">
              <div className="mt-1">{r.icon}</div>
              <div>
                <h5 className="text-sm font-bold text-red-700 dark:text-red-200 mb-1">{r.title}</h5>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RiskDisclosure;