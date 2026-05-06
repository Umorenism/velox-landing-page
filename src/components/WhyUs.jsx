import {motion} from 'framer-motion';

const WhyUs = () => {
  const cards = [
    { icon: "🏛️", title: "Institutional Credibility", desc: "Operated under Swift Assets Inc., a Canadian corporate entity with full governance frameworks, compliance standards, and accountability structures." },
    { icon: "⛓️", title: "Blockchain Transparency", desc: "Industry-first blockchain-verified arbitrage visibility for qualified participants — setting a new standard for trust in fintech education." },
    { icon: "🌐", title: "Global Community", desc: "A worldwide network of traders, builders, and educators united by a shared mission — creating a self-reinforcing ecosystem of growth." },
  ];

  return (
    <section id="why-us" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-4"
          >
            Why VeloxCapitalMarkets.ai
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white"
          >
            What Sets Us <span className="text-[#D4AF37]">Apart</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-8 rounded-3xl bg-[#0a1919]/50 border border-white/5 backdrop-blur-xl hover:bg-[#0a1919] hover:border-[#D4AF37]/30 transition-all duration-500 shadow-2xl"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl mb-6 block"
              >
                {card.icon}
              </motion.div>
              <h3 className="font-syne font-bold text-lg text-slate-950 dark:text-white mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                {card.desc}
              </p>
              
              {/* Gold accent line */}
              <div className="w-8 h-1 bg-[#D4AF37] mt-6 rounded-full group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;