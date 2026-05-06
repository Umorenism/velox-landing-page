import {motion} from 'framer-motion';


const Blockchain = () => {
  const items = [
    { icon: "👁️", title: "Transparent", desc: "Full activity visibility for qualified participants." },
    { icon: "🔗", title: "Accountable", desc: "Verifiable on-chain data — irrefutable records." },
    { icon: "🚀", title: "Innovative", desc: "Next-gen infrastructure for modern finance." },
    { icon: "📋", title: "Verified", desc: "Myfxbook & FXBlue third-party validation." },
  ];

  return (
    <section id="blockchain" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080] block mb-4">Key Differentiator</span>
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-6">
              Blockchain-Verified <span className="text-[#008080]">Arbitrage</span> Ecosystem
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10 max-w-lg">
              Not a black-box system — a fully visible, verifiable framework designed for participants who demand institutional-grade integrity. 
              Eligible users can verify executed trades through blockchain transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((d, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, borderColor: '#008080' }}
                  className="p-5 rounded-2xl bg-white text-slate-950 border border-slate-200/80 shadow-xl transition-all duration-300 hover:border-[#008080] hover:-translate-y-1 dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/5"
                >
                  <div className="text-2xl mb-3">{d.icon}</div>
                  <h4 className="font-syne font-bold text-slate-950 dark:text-white text-sm mb-1">{d.title}</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Blockchain Core */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Orbiting Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { size: 'w-[320px] h-[320px]', dur: 'animate-[spin_20s_linear_infinite]', border: 'border-[#008080]/20' },
                { size: 'w-[240px] h-[240px]', dur: 'animate-[spin_15s_linear_infinite_reverse]', border: 'border-[#D4AF37]/20' },
                { size: 'w-[160px] h-[160px]', dur: 'animate-[spin_10s_linear_infinite]', border: 'border-[#008080]/40' },
              ].map((ring, i) => (
                <div key={i} className={`absolute rounded-full border-2 border-dashed ${ring.border} ${ring.size} ${ring.dur}`} />
              ))}
            </div>

            {/* Core Icon */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(0,128,128,0.2)",
                  "0 0 40px rgba(0,128,128,0.4)",
                  "0 0 20px rgba(0,128,128,0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative z-10 w-24 h-24 bg-[#0a1919] border-2 border-[#008080] rounded-2xl flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,128,128,0.3)]"
            >
              ⛓️
            </motion.div>
            
            {/* Floating Particles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-10 right-20 w-2 h-2 bg-[#D4AF37] rounded-full animate-ping" />
                <div className="absolute bottom-10 left-20 w-2 h-2 bg-[#008080] rounded-full animate-ping delay-700" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blockchain;