import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import footerlogo from '../assets/logo.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-slate-950 text-slate-200 pt-20 pb-10 px-[5%] border-t border-slate-800 dark:bg-slate-950 dark:text-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5 mb-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={footerlogo} alt="Velox" className="h-12 w-auto mr-4" />
              <span className="font-extrabold text-2xl tracking-tight font-syne">
                <span className="text-[#008080]">Velox</span>
                <span className="text-[#D4AF37]">Capital</span>
                <span className="text-white">Markets.ai</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm mb-6">
              A Canadian-based financial education platform equipping individuals 
              with the skills to thrive in Forex and Crypto markets.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-gray-500 font-bold border border-white/10 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>Swift Assets Inc., Canada</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h5 className="font-syne font-bold text-xs uppercase tracking-[0.15em] text-white mb-6">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'About Velox', href: '#hero' },
                { label: 'Educational Programs', href: '#features' },
                { label: 'Markets', href: '#markets' },
                { label: 'Rebate System', href: '#rebate' },
                { label: 'How It Works', href: '#how-it-works' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 text-[#008080] opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Section */}
          <motion.div variants={itemVariants}>
            <h5 className="font-syne font-bold text-xs uppercase tracking-[0.15em] text-white mb-6">
              Support
            </h5>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Contact & Support', href: '#cta' },
                { label: 'Terms & Privacy', href: '#' },
                { label: 'Jivo Live Chat', href: '#' },
                { label: 'Member Dashboard', href: '#' },
                { label: 'Risk Disclosure', href: '#risk' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-[#D4AF37] flex items-center transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#008080] rounded-full mr-3 opacity-50"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-400 font-medium border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span>© 2026 VeloxCapitalMarkets.ai</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="flex items-center gap-1">
              A product of Swift Assets Inc., Canada <ExternalLink size={10} />
            </span>
          </div>
          
          <div className="bg-slate-900/70 px-4 py-2 rounded-lg border border-slate-800">
            <span className="text-yellow-400 uppercase tracking-tighter mr-2">Warning:</span>
            Trading involves risk. Education does not guarantee profits.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;