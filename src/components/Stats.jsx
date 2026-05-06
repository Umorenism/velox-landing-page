import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// --- Counter Component for Animated Numbers ---
const Counter = ({ value, direction = "up" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "7.5" from "$7.5T")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const spring = useSpring(0, { stiffness: 30, damping: 15 });
  const display = useTransform(spring, (current) => 
    value.replace(/[0-9.]+/, current.toFixed(numericValue % 1 === 0 ? 0 : 1))
  );

  useEffect(() => {
    if (inView) spring.set(numericValue);
  }, [inView, numericValue, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
  const stats = [
    { num: "80M", label: "People to Educate", sub: "1% of the global population", icon: "🌍" },
    { num: "$7.5T", label: "Daily Forex Volume", sub: "World's largest financial market", icon: "📈" },
    { num: "$3T", label: "Crypto Market Cap", sub: "Fastest-growing ecosystem", icon: "💎" },
    { num: "150+", label: "Countries Reached", sub: "Global educational impact", icon: "🏳️" },
    { num: "6+", label: "Market Assets", sub: "Forex, Crypto, Metals, & Indices", icon: "📊" },
    { num: "24/7", label: "Market Access", sub: "Non-stop trading education", icon: "🕙" },
  ];

  return (
    <section id="stats" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-[#051111] dark:text-slate-100 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100/90 dark:bg-white/10 rounded-2xl overflow-hidden border border-slate-200/10 dark:border-white/10 shadow-2xl">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 md:p-14 bg-white text-slate-950 hover:bg-slate-100 dark:bg-[#0a1919] dark:text-slate-100 dark:hover:bg-[#0d2222] transition-colors duration-500"
            >
              {/* Icon & Hover Effect */}
              <div className="absolute top-4 right-6 text-2xl opacity-10 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0">
                {s.icon}
              </div>

              {/* Number with Counter */}
              <div className="font-syne text-5xl font-black text-[#008080] mb-3 flex items-baseline gap-1">
                <Counter value={s.num} />
              </div>

              {/* Label */}
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                {s.label}
              </h4>

              {/* Subtext */}
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                {s.sub}
              </p>

              {/* Bottom Decorative Border */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#008080] w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Context/Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            "Providing a structured, transparent rebate ecosystem for modern traders."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;