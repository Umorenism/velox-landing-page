import React from 'react';
import { motion } from 'framer-motion';
import { Play, FileVideo } from 'lucide-react';

const VideoSection = () => {
  const fileName = "velox_platform_explainer.mp4";

  return (
    <section id="video" className="py-24 px-[5%] bg-slate-50 text-slate-950 dark:bg-[#051111] dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008080] block mb-4"
          >
            Platform Overview
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-syne text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white mb-6"
          >
            See <span className="text-[#008080]">Velox</span> in Action
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Watch our 2-minute explainer to understand how VeloxCapitalMarkets.ai transforms financial education.
          </p>
        </div>

        {/* Browser Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          className="relative max-w-4xl mx-auto bg-white text-slate-950 border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,128,128,0.1)] hover:shadow-2xl transition-all duration-500 dark:bg-[#0a1919] dark:text-slate-100 dark:border-white/10"
        >
          {/* Toolbar */}
          <div className="px-6 py-4 border-b border-slate-200/40 bg-slate-100/70 flex items-center gap-4 dark:border-white/10 dark:bg-slate-900/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100/70 rounded-md border border-slate-200/60 dark:bg-slate-900/60 dark:border-white/10">
              <FileVideo size={14} className="text-slate-600 dark:text-slate-300" />
              <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">{fileName}</span>
            </div>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 cursor-default group"
            >
              <div className="w-24 h-24 bg-[#008080]/10 border-2 border-[#008080]/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008080] transition-all duration-500">
                <Play className="text-[#008080] group-hover:text-white fill-current" size={36} />
              </div>
              <p className="text-slate-300 text-sm font-medium text-center max-w-xs">
                Official Velox explainer content only — uploads are not accepted.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;